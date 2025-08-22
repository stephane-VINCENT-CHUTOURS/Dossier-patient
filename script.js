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


// Données de tous les patients, AVEC DES LIENS EXTERNES SPÉCIFIQUES
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
        constantes: [
            "Tension artérielle: 130/80 mmHg (bras gauche, assise)",
            "Fréquence cardiaque: 95 bpm (régulier)",
            "Fréquence respiratoire: 18/min",
            "Saturation O2: 98% (air ambiant)",
            "Température: 38.5°C (tympanique)"
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
        externalLinks: [
            { text: "Dossier patient exemple", url: "https://www.canva.com/design/DAGe5oXSIbQ/KKOL4TiKOEVDQ6GX8Q9aDA/edit" },
            { text: "Interprétation des signes vitaux (HAS)", url: "https://www.has-sante.fr/jcms/c_287413/fr/surveillance-des-signes-vitaux" },
            { text: "Cas clinique appendicite (externe)", url: "https://www.google.com/search?q=cas+clinique+appendicite" } // Exemple de recherche
        ]
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
        constantes: [
            "Tension artérielle: 120/70 mmHg",
            "Fréquence cardiaque: 110 bpm",
            "Fréquence respiratoire: 25/min (polypnée)",
            "Saturation O2: 90% (air ambiant)",
            "Température: 37.2°C"
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
        externalLinks: [
            { text: "Comprendre l'asthme (Ameli.fr)", url: "https://www.ameli.fr/assure/sante/themes/asthme/comprendre-asthme" },
            { text: "Prise en charge de la crise d'asthme (Manuel MSD)", url: "https://www.msdmanuals.com/fr/accueil/troubles-pulmonaires-et-des-voies-respiratoires/asthme/asthme" },
            { text: "Vidéos sur l'utilisation des inhalateurs", url: "https://www.youtube.com/results?search_query=utilisation+inhalateur+asthme" } // Exemple YouTube
        ]
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
        constantes: [
            "Tension artérielle: 90/60 mmHg (debout)",
            "Fréquence cardiaque: 55 bpm",
            "Fréquence respiratoire: 16/min",
            "Saturation O2: 97% (air ambiant)",
            "Température: 36.8°C",
            "Glycémie capillaire: 0.65 g/L"
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
        externalLinks: [
            { text: "Fiche sur l'hypoglycémie (Manuel MSD)", url: "https://www.msdmanuals.com/fr/accueil/troubles-hormonaux-et-m%C3%A9taboliques/diab%C3%A8te-sucr%C3%A9-et-troubles-du-m%C3%A9tabolisme-des-glucides/hypoglyc%C3%A9mie" },
            { text: "Comprendre l'insuffisance cardiaque (Fédération Française de Cardiologie)", url: "https://www.fedecardio.org/sites/default/files/federation_francaise_cardiologie_insuffisance_cardiaque.pdf" },
            { text: "Gestion des chutes chez la personne âgée (HAS)", url: "https://www.has-sante.fr/jcms/c_287413/fr/prevention-des-chutes-chez-la-personne-agee" }
        ]
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

    const constantes = document.getElementById('constantes');
    constantes.innerHTML = '';
    if (data.constantes && data.constantes.length > 0) {
        data.constantes.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            constantes.appendChild(p);
        });
    } else {
        constantes.innerHTML = '<p>Aucune constante vitale enregistrée.</p>';
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

    // Mettre à jour les liens externes avec des BOUTONS
    const externalLinksList = document.getElementById('externalLinksList');
    externalLinksList.innerHTML = ''; // Vider la liste existante

    if (data.externalLinks && data.externalLinks.length > 0) {
        data.externalLinks.forEach(link => {
            const li = document.createElement('li');
            const button = document.createElement('button'); // Créons un élément <button>
            
            button.textContent = `Ouvrir : ${link.text}`; // Le texte du bouton inclura "Ouvrir :" et le texte du lien
            
            // Quand on clique sur le bouton, on ouvre l'URL dans un nouvel onglet
            button.onclick = () => window.open(link.url, '_blank'); 
            
            button.setAttribute('rel', 'noopener noreferrer'); 

            li.appendChild(button); // Ajoutons le bouton à l'élément de liste
            externalLinksList.appendChild(li); // Ajoutons l'élément de liste à la liste principale
        });
    } else {
        externalLinksList.innerHTML = '<li>Aucune ressource complémentaire pour ce patient.</li>';
    }
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