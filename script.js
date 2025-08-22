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


// Données de tous les patients
const patients = [
    {
        id: "patient1",
        nom: "DUPONT",
        prenom: "Marie",
        dob: "01/01/1975",
        age: "49 ans",
        sexe: "Féminin",
        allergies: "Pénicilline (urticaire)",
        contactUrgence: {
            nom: "Jean DUPONT",
            lien: "Conjoint",
            tel: "06 12 34 56 78"
        },
        motifConsultation: "Douleur abdominale aiguë et fièvre.",
        anamnese: [
            "Début de la douleur il y a 6 heures, progressive, localisée en fosse iliaque droite.",
            "Douleur évaluée à 7/10 sur l'échelle numérique, type crampe intermittente.",
            "Fièvre 38.5°C au coucher, avec frissons.",
            "Nausées présentes depuis 4 heures, sans vomissements.",
            "Absence de transit intestinal depuis 24h (gaz et selles)."
        ],
        vitalSigns: [
            { datetime: "22/08/2025 - 10h00", TA: "130/80", FC: "95", FR: "18", SpO2: "98", Temp: "38.5" },
            { datetime: "22/08/2025 - 12h00", TA: "125/75", FC: "92", FR: "17", SpO2: "99", Temp: "38.1" },
            { datetime: "22/08/2025 - 14h00", TA: "128/78", FC: "90", FR: "18", SpO2: "98", Temp: "37.9" }
        ],
        antecedents: [
            "Hypertension artérielle (depuis 2010), traitée par un inhibiteur de l'enzyme de conversion.",
            "Appendicectomie (1990) sans complications.",
            "Fracture du poignet gauche (2005)."
        ],
        traitements: [
            "Ramipril 5mg (1x/jour, matin)",
            "Paracétamol 1000mg (si douleur ou fièvre, max 3x/jour)"
        ],
        antecedentsFamiliaux: [
            "Mère: Diabète de type 2 et HTA.",
            "Père: Décédé à 65 ans d'un infarctus du myocarde.",
            "Frère: En bonne santé connue."
        ],
        groupageSanguin: {
            groupeABO: "A",
            rhesus: "Positif",
            kell: "Négatif (K-)"
        },
        rechercheAnticorps: "Résultats négatifs. Aucune présence d'anticorps irréguliers."
    },
    {
        id: "patient2",
        nom: "MARTIN",
        prenom: "Paul",
        dob: "15/03/1998",
        age: "26 ans",
        sexe: "Masculin",
        allergies: "Aucune allergie connue.",
        contactUrgence: {
            nom: "Sophie MARTIN",
            lien: "Sœur",
            tel: "06 98 76 54 32"
        },
        motifConsultation: "Crise d'asthme et essoufflement.",
        anamnese: [
            "Essoufflement apparu brutalement il y a 2 heures, avec sifflements audibles à l'expiration.",
            "Gêne respiratoire aggravée à l'effort minime.",
            "Utilisation de Ventoline (2 bouffées) il y a 30 minutes sans amélioration notable.",
            "Pas de douleur thoracique, ni de fièvre."
        ],
        vitalSigns: [
            { datetime: "22/08/2025 - 10h00", TA: "120/70", FC: "110", FR: "25", SpO2: "90", Temp: "37.2" },
            { datetime: "22/08/2025 - 10h30", TA: "125/75", FC: "105", FR: "22", SpO2: "92", Temp: "37.1" },
            { datetime: "22/08/2025 - 11h00", TA: "120/70", FC: "95", FR: "20", SpO2: "95", Temp: "37.0" }
        ],
        antecedents: [
            "Asthme bronchique (diagnostiqué à l'enfance), suivi régulièrement.",
            "Eczéma atopique (depuis l'enfance)."
        ],
        traitements: [
            "Salbutamol (Ventoline) aérosol-doseur (au besoin)",
            "Corticoïdes inhalés (quotidien, non pris ce matin par oubli)."
        ],
        antecedentsFamiliaux: [
            "Mère: Asthme.",
            "Père: En bonne santé connue."
        ],
        groupageSanguin: {
            groupeABO: "O",
            rhesus: "Négatif",
            kell: "Négatif (K-)"
        },
        rechercheAnticorps: "Résultats négatifs. Aucune présence d'anticorps irréguliers."
    },
    {
        id: "patient3",
        nom: "LEFEVRE",
        prenom: "Sophie",
        dob: "20/07/1960",
        age: "64 ans",
        sexe: "Féminin",
        allergies: "Iode (choc anaphylactique)",
        contactUrgence: {
            nom: "Marc LEFEVRE",
            lien: "Fils",
            tel: "07 01 02 03 04"
        },
        motifConsultation: "Malaise avec chute.",
        anamnese: [
            "Malaise survenu ce matin en se levant, avec perte d'équilibre et chute sans perte de connaissance.",
            "Pas de choc à la tête.",
            "Se plaint d'une faiblesse généralisée et de vertiges persistants.",
            "N'a pas mangé ce matin."
        ],
        vitalSigns: [
            { datetime: "22/08/2025 - 08h00", TA: "90/60", FC: "55", FR: "16", SpO2: "97", Temp: "36.8" },
            { datetime: "22/08/2025 - 10h00", TA: "95/65", FC: "60", FR: "16", SpO2: "98", Temp: "36.9" },
            { datetime: "22/08/2025 - 12h00", TA: "100/70", FC: "62", FR: "17", SpO2: "98", Temp: "37.0" }
        ],
        antecedents: [
            "Diabète de type 2 (depuis 2000), traité par antidiabétiques oraux.",
            "Insuffisance cardiaque (fraction d'éjection réduite, depuis 2015).",
            "Chute antérieure il y a 6 mois (sans fracture)."
        ],
        traitements: [
            "Metformine 500mg (2x/jour)",
            "Furosémide 40mg (1x/jour, matin)",
            "Bisoprolol 2.5mg (1x/jour, matin)"
        ],
        antecedentsFamiliaux: [
            "Mère: Diabète de type 2.",
            "Père: Insuffisance cardiaque."
        ],
        groupageSanguin: {
            groupeABO: "AB",
            rhesus: "Positif",
            kell: "Positif (K+)"
        },
        rechercheAnticorps: "Présence d'anticorps anti-Kell. À investiguer."
    },
    {
        id: "patient4",
        nom: "DUBOIS",
        prenom: "Luc",
        dob: "10/04/1985",
        age: "40 ans",
        sexe: "Masculin",
        allergies: "Aucune allergie connue.",
        contactUrgence: {
            nom: "Catherine DUBOIS",
            lien: "Conjointe",
            tel: "06 23 45 67 89"
        },
        motifConsultation: "Douleur thoracique et malaise." ,
        anamnese: [
            "Douleur thoracique rétro-sternale apparue il y a 1 heure, d'intensité 8/10, oppressive.",
            "Irradie vers le bras gauche et la mâchoire.",
            "Sensation de malaise, sueurs froides et essoufflement.",
            "N'a pas pris de traitement spécifique."
        ],
        vitalSigns: [
            { datetime: "22/08/2025 - 10h30", TA: "160/95", FC: "120", FR: "22", SpO2: "96", Temp: "36.5" },
            { datetime: "22/08/2025 - 10h45", TA: "155/90", FC: "115", FR: "20", SpO2: "97", Temp: "36.6" }
        ],
        antecedents: [
            "Hypertension artérielle (depuis 2018).",
            "Tabagisme (1 paquet par jour depuis 20 ans)."
        ],
        traitements: [
            "Aucun traitement en cours."
        ],
        antecedentsFamiliaux: [
            "Père: Infarctus du myocarde à 55 ans."
        ],
        groupageSanguin: {
            groupeABO: "B",
            rhesus: "Positif",
            kell: "Négatif (K-)"
        },
        rechercheAnticorps: "Résultats négatifs. Aucune présence d'anticorps irréguliers."
    },
    {
        id: "patient5",
        nom: "FOURNIER",
        prenom: "Jeanne",
        dob: "25/11/1952",
        age: "72 ans",
        sexe: "Féminin",
        allergies: "Aucune allergie connue.",
        contactUrgence: {
            nom: "Julien FOURNIER",
            lien: "Fils",
            tel: "06 54 32 10 98"
        },
        motifConsultation: "Chute de sa hauteur et suspicion de fracture.",
        anamnese: [
            "Chute à son domicile en se levant d'une chaise. A glissé et est tombée sur le côté droit.",
            "Douleur vive au niveau de la hanche droite, 9/10 sur l'échelle numérique.",
            "Impossibilité de se relever et de s'appuyer sur sa jambe droite.",
            "Pas de perte de connaissance."
        ],
        vitalSigns: [
            { datetime: "22/08/2025 - 11h00", TA: "140/85", FC: "80", FR: "18", SpO2: "98", Temp: "36.7" },
            { datetime: "22/08/2025 - 11h30", TA: "135/80", FC: "85", FR: "18", SpO2: "98", Temp: "36.8" }
        ],
        antecedents: [
            "Ostéoporose diagnostiquée en 2010, avec traitement par bisphosphonates.",
            "Arthrose du genou gauche.",
            "Porte-prothèse de hanche gauche."
        ],
        traitements: [
            "Alendronate 70mg (1x/semaine)",
            "Paracétamol 1000mg (2x/jour)"
        ],
        antecedentsFamiliaux: [
            "Mère: Fracture du col du fémur."
        ],
        groupageSanguin: {
            groupeABO: "A",
            rhesus: "Positif",
            kell: "Positif (K+)"
        },
        rechercheAnticorps: "Présence d'anticorps anti-Jka."
    }
];

// Fonction pour simuler la mise à jour des informations du patient
function updatePatientInfo(data) {
    // Mise à jour de la carte patient en haut
    document.getElementById('prenomPatient').textContent = data.prenom || "N/A";
    document.getElementById('nomPatient').textContent = data.nom || "N/A";
    document.getElementById('dobPatient').textContent = data.dob || "N/A";
    document.getElementById('agePatient').textContent = data.age || "N/A";
    document.getElementById('sexePatient').textContent = data.sexe || "N/A";
    document.getElementById('allergiesInfo').textContent = data.allergies || "Aucune allergie connue.";

    // Mise à jour des informations de l'onglet "Patient"
    document.getElementById('fullNomPatient').textContent = data.nom || "N/A";
    document.getElementById('fullPrenomPatient').textContent = data.prenom || "N/A";
    document.getElementById('fullDobPatient').textContent = data.dob || "N/A";
    document.getElementById('fullAgePatient').textContent = data.age || "N/A";
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
function loadPatient(patientId) {
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
function generatePatientList() {
    const patientListElement = document.getElementById('patientList');
    patientListElement.innerHTML = ''; // Vider la liste avant de la regénérer
    patients.forEach(patient => {
        const listItem = document.createElement('li');
        listItem.id = `li-${patient.id}`; // Ajout d'un ID pour le ciblage CSS
        listItem.textContent = `${patient.prenom} ${patient.nom}`;
        listItem.onclick = () => loadPatient(patient.id); // Ajout de l'événement de clic
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


// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate(); // Affiche la date
    generatePatientList(); // Génère la liste des patients
    // Charge le premier patient par défaut et active son élément dans la liste
    if (patients.length > 0) {
        loadPatient(patients[0].id);
    }
});
