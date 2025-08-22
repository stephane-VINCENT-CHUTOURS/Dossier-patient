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
// Les données sont directement dans le JS, plus besoin de fetch/patients.json

const patients = [
    {
        "id": "patient1",
        "nom": "DUPONT",
        "prenom": "Marie",
        "dob": "01/01/1975",
        "sexe": "Féminin",
        "allergies": "Pénicilline (urticaire)",
        "contactUrgence": {
            "nom": "Jean DUPONT",
            "lien": "Conjoint",
            "tel": "06 12 34 56 78"
        },
        "motifConsultation": "Douleur abdominale aiguë et fièvre.",
        "anamnese": [
            "Début de la douleur il y a 6 heures, progressive, localisée en fosse iliaque droite.",
            "Douleur évaluée à 7/10 sur l'échelle numérique, type crampe intermittente.",
            "Fièvre 38.5°C au coucher, avec frissons.",
            "Nausées présentes depuis 4 heures, sans vomissements.",
            "Absence de transit intestinal depuis 24h (gaz et selles)."
        ],
        "vitalSigns": [
            { "datetime": "22/08/2025 - 10h00", "TA": "130/80", "FC": "95", "FR": "18", "SpO2": "98", "Temp": "38.5" },
            { "datetime": "22/08/2025 - 12h00", "TA": "125/75", "FC": "92", "FR": "17", "SpO2": "99", "Temp": "38.1" },
            { "datetime": "22/08/2025 - 14h00", "TA": "128/78", "FC": "90", "FR": "18", "SpO2": "98", "Temp": "37.9" }
        ],
        "antecedents": [
            "Hypertension artérielle (depuis 2010), traitée par un inhibiteur de l'enzyme de conversion.",
            "Appendicectomie (1990) sans complications.",
            "Fracture du poignet gauche (2005)."
        ],
        "traitements": [
            "Ramipril 5mg (1x/jour, matin)",
            "Paracétamol 1000mg (si douleur ou fièvre, max 3x/jour)"
        ],
        "antecedentsFamiliaux": [
            "Mère: Diabète de type 2 et HTA.",
            "Père: Décédé à 65 ans d'un infarctus du myocarde.",
            "Frère: En bonne santé connue."
        ],
        "groupageSanguin": {
            "groupeABO": "A",
            "rhesus": "Positif",
            "kell": "Négatif (K-)"
        },
        "rechercheAnticorps": "Résultats négatifs. Aucune présence d'anticorps irréguliers."
    },
    // ... (copie le reste de tes patients ici)
];

// Initialisation de la page
displayCurrentDate();
generatePatientList(patients);
if (patients.length > 0) {
    loadPatient(patients, patients[0].id);
}
