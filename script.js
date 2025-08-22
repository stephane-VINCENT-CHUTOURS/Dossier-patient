// script.js

// Fonction pour gérer le changement d'onglet
function openTab(evt, tabName) {
    let i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Fonction pour calculer l'âge à partir de la date de naissance
function calculateAge(dobString) {
    const parts = dobString.split('/');
    const dob = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

// Fonction pour simuler la mise à jour des informations du patient
function updatePatientInfo(data) {
    // Calcule l'âge dynamiquement
    const age = calculateAge(data.dob);

    // Mise à jour de la carte patient en haut
    document.getElementById('prenomPatient').textContent = data.prenom || "N/A";
    document.getElementById('nomPatient').textContent = data.nom || "N/A";
    document.getElementById('dobPatient').textContent = data.dob || "N/A";
    document.getElementById('agePatient').textContent = `${age} ans` || "N/A";
    document.getElementById('sexePatient').textContent = data.sexe || "N/A";
    document.getElementById('allergiesInfo').textContent = data.allergies || "Aucune allergie connue.";

    // Mise à jour des informations de l'onglet "Patient"
    document.getElementById('fullNomPatient').textContent = data.nom || "N/A";
    document.getElementById('fullPrenomPatient').textContent = data.prenom || "N/A";
    document.getElementById('fullDobPatient').textContent = data.dob || "N/A";
    document.getElementById('fullAgePatient').textContent = `${age} ans` || "N/A";
    document.getElementById('fullSexePatient').textContent = data.sexe || "N/A";
    document.getElementById('contactUrgenceNom').textContent = data.contactUrgence ? data.contactUrgence.nom : "N/A";
    document.getElementById('contactUrgenceLien').textContent = data.contactUrgence ? data.contactUrgence.lien : "N/A";
    document.getElementById('contactUrgenceTel').textContent = data.contactUrgence ? data.contactUrgence.tel : "N/A";


    // Mise à jour des informations de l'onglet "Anamnèse"
    document.getElementById('motifConsultation').textContent = data.motifConsultation || "Non spécifié.";

    const anamneseDetails = document.getElementById('anamneseDetails');
    anamneseDetails.innerHTML = '';
    if (data.anamnese && data.anamnese.length > 0) {
        data.anamnese.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            anamneseDetails.appendChild(p);
        });
    } else {
        anamneseDetails.innerHTML = '<p>Aucune information d\'anamnèse collectée.</p>';
    }
    
    // MISE À JOUR DE L'ONGLET "SURVEILLANCE"
    const vitalSignsTableBody = document.getElementById('vitalSignsTableBody');
    vitalSignsTableBody.innerHTML = ''; // Vide le tableau existant
    if (data.vitalSigns && data.vitalSigns.length > 0) {
        data.vitalSigns.forEach(sign => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${sign.datetime}</td>
                <td>${sign.TA}</td>
                <td>${sign.FC}</td>
                <td>${sign.FR}</td>
                <td>${sign.SpO2}</td>
                <td>${sign.Temp}</td>
            `;
            vitalSignsTableBody.appendChild(tr);
        });
    } else {
        vitalSignsTableBody.innerHTML = '<tr><td colspan="6">Aucune donnée de surveillance disponible.</td></tr>';
    }


    // Mise à jour des informations de l'onglet "Traitements & Antécédents"
    const antecedentsList = document.getElementById('antecedentsList');
    antecedentsList.innerHTML = '';
    if (data.antecedents && data.antecedents.length > 0) {
        data.antecedents.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            antecedentsList.appendChild(li);
        });
    } else {
        antecedentsList.innerHTML = '<li>Aucun antécédent connu.</li>';
    }

    const traitementsList = document.getElementById('traitementsList');
    traitementsList.innerHTML = '';
    if (data.traitements && data.traitements.length > 0) {
        data.traitements.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            traitementsList.appendChild(li);
        });
    } else {
        traitementsList.innerHTML = '<li>Aucun traitement en cours.</li>';
    }

    const antecedentsFamiliauxList = document.getElementById('antecedentsFamiliauxList');
    antecedentsFamiliauxList.innerHTML = '';
    if (data.antecedentsFamiliaux && data.antecedentsFamiliaux.length > 0) {
        data.antecedentsFamiliaux.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            antecedentsFamiliauxList.appendChild(li);
        });
    } else {
        antecedentsFamiliauxList.innerHTML = '<li>Aucun antécédent familial significatif.</li>';
    }

    // Réinitialise les zones de texte pour les transmissions et diagnoses
    document.getElementById('studentTransmissions').value = '';
    document.getElementById('studentDiagnoses').value = '';

    // Mettre à jour le nom du patient dans les titres de chaque onglet
    const tabPatientNameElements = document.querySelectorAll('.tab-patient-name');
    tabPatientNameElements.forEach(element => {
        element.textContent = `${data.prenom} ${data.nom}`;
    });
    
    // MISE À JOUR DU NOUVEL ONGLET "DOSSIER TRANSFUSIONNEL"
    document.getElementById('groupeABO').textContent = data.groupageSanguin ? data.groupageSanguin.groupeABO : "Non spécifié.";
    document.getElementById('rhesusSanguin').textContent = data.groupageSanguin ? data.groupageSanguin.rhesus : "Non spécifié.";
    document.getElementById('kellFactor').textContent = data.groupageSanguin ? data.groupageSanguin.kell : "Non spécifié.";
    document.getElementById('rechercheAnticorps').textContent = data.rechercheAnticorps || "Non spécifié.";
}

// Fonction pour sauvegarder les transmissions et diagnoses
function saveStudentNotes() {
    const transmissionsText = document.getElementById('studentTransmissions').value;
    const diagnosesText = document.getElementById('studentDiagnoses').value;

    if (transmissionsText.trim() === "" && diagnosesText.trim() === "") {
        alert("Veuillez saisir des informations dans les transmissions ou les diagnoses avant d'enregistrer.");
        return;
    }

    console.log("--- Enregistrement des notes ---");
    console.log("Transmissions :", transmissionsText);
    console.log("Diagnoses infirmières :", diagnosesText);
    alert("Vos notes et diagnoses ont été enregistrées (voir la console du navigateur) !");
}

// Fonction pour charger un patient par son ID
function loadPatient(patients, patientId) {
    const selectedPatient = patients.find(p => p.id === patientId);
    if (selectedPatient) {
        updatePatientInfo(selectedPatient);

        // Désactiver la classe 'active' de tous les éléments de la liste
        const listItems = document.querySelectorAll('#patientList li');
        listItems.forEach(item => item.classList.remove('active'));

        // Ajouter la classe 'active' à l'élément de liste du patient sélectionné
        document.getElementById(`li-${patientId}`).classList.add('active');

        // Active le premier onglet ('InfosPatient') après le chargement du patient
        // Simule un clic sur le premier bouton pour activer l'onglet visuellement
        document.querySelector('.tab-button').click();
    } else {
        console.error("Patient non trouvé avec l'ID:", patientId);
    }
}

// Fonction pour générer la liste des patients dans la sidebar
function generatePatientList(patients) {
    const patientListElement = document.getElementById('patientList');
    patientListElement.innerHTML = ''; // Vider la liste avant de la regénérer
    patients.forEach(patient => {
        const listItem = document.createElement('li');
        listItem.id = `li-${patient.id}`; // Ajout d'un ID pour le ciblage CSS
        listItem.textContent = `${patient.prenom} ${patient.nom}`;
        listItem.onclick = () => loadPatient(patients, patient.id); // Ajout de l'événement de clic
        patientListElement.appendChild(listItem);
    });
}

// Fonction pour afficher la date du jour
function displayCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('fr-FR', options);
}


// --- NOUVELLE LOGIQUE D'INITIALISATION ---
// Le script récupère les données du fichier JSON, puis initialise la page
displayCurrentDate();

fetch('patients.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur de chargement du fichier: ${response.status}`);
        }
        return response.json();
    })
    .then(patients => {
        generatePatientList(patients);
        if (patients.length > 0) {
            loadPatient(patients, patients[0].id);
        }
    })
    .catch(error => {
        console.error("Impossible de charger les données des patients:", error);
        document.getElementById('patientList').innerHTML = '<li>Impossible de charger la liste des patients.</li>';
    });
