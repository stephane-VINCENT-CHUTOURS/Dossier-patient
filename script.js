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
    const [day, month, year] = dobString.split('/').map(Number);
    const dob = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

// Données de tous les patients
const patients = [
    {
        id: "patient1",
        nom: "DUPONT",
        prenom: "Marie",
        dob: "01/01/1975",
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
    document.getElementById('fullAgePatient').textContent = `${age} ans
