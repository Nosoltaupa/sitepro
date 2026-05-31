/**
 * ============================================================
 *  CONTENU DU SITE — modifiez ce fichier pour changer les textes
 * ============================================================
 */

const CONTENU = {

  /* --- Informations générales --- */
  prenom: "Léonard",
  nom: "Lefrère",
  titre: "Psychologue",
  accroche: "Je suis \"un psy qui écoute\" mais aussi \"un psy qui parle\".",
  email: "psy.lefrere@proton.me",
  sms: "06 11 62 36 51",
  numeroRPPS: "10008620675",
  calcom: "https://cal.com/psy.lefrere",
  photo: "identite2.PNG",
  creditPhoto: "Photo © Roxane Faranda, 2018",
  localisation: "Psychologue basé près de Caen",
  numerosUtiles: `Numéros utiles : urgences 15 / 112 · <a href="https://3114.fr/" target="_blank" rel="noopener noreferrer">prévention du suicide 3114</a> · <a href="https://solidaritefemmes.org/appeler-le-3919/" target="_blank" rel="noopener noreferrer">violences faites aux femmes 3919</a> · <a href="https://www.allo119.gouv.fr/" target="_blank" rel="noopener noreferrer">enfance en danger 119</a> · <a href="https://info.urgence114.fr/prehome/" target="_blank" rel="noopener noreferrer">urgence par SMS 114</a>`,

  /* --- Section hero (haut de page) --- */
  hero: {
    intro: `Nous allons ensemble mieux <strong>comprendre</strong> votre fonctionnement et vous aider à <strong>changer</strong> les comportements et les pensées qui vous font souffrir, à mieux <strong>gérer</strong> vos émotions et vos angoisses en vous donnant des exercices et des conseils <strong>pratiques</strong> et en vous <strong>transmettant</strong> mes connaissances sur le cerveau et son fonctionnement.`,
    publics: `Je vous accompagne exclusivement en <strong>visio</strong>, vous permettant de bénéficier de consultations depuis chez vous, <strong>à votre rythme</strong>, sans vous déplacer. Les indications les plus courantes sont les phobies, l'anxiété, la dépression, la gestion du stress et de la douleur, les problèmes de sommeil. N'hésitez pas à me contacter pour être sûr·e d'être <strong>au bon endroit</strong>.`,
  },

  /* --- Section approche --- */
  approche: {
    titre: "Une thérapie\nsur mesure",
    paragraphes: [
      `Ma formation de neuropsychologue me permet de bien comprendre le cerveau et son fonctionnement, en accord avec ma sensibilité scientifique. Plutôt que d'appliquer mécaniquement un protocole, <strong>j'adapte continuellement mon travail</strong> à votre situation, votre personnalité, votre rythme.`,
      `Mon objectif : vous aider à mieux comprendre votre fonctionnement — vos pensées, vos émotions, vos comportements — et vous transmettre mes connaissances sur le cerveau pour vous rendre de plus en plus autonome`,
      `Les séances sont un espace d'échange actif, d'exercices pratiques et de transmission.`,
    ],
    methodes: [
      {
        titre: "Neuropsychologie",
        texte: `La neuropsychologie est la branche de la psychologie qui s'intéresse au lien entre le cerveau et son fonctionnement, se basant principalement sur l'évaluation des fonctions cognitives et leur rééducation. On retrouve typiquement les neuropsychologues auprès des personnes ayant des troubles du neurodéveloppement (comme le trouble déficit de l'attention avec ou sans hyperactivité ou les troubles du spectre de l'autisme), des personnes  ayant vécu un AVC ou des personnes présentant des troubles neuro-évolutifs (comme la maladie d'Alzheimer).`,
      },      {
        titre: "Thérapies Cognitives et Comportementales (TCC)",
        texte: `Les TCC sont un ensemble de thérapies basées sur la <strong>psychologie scientifique</strong> et la <strong>pratique fondée sur les preuves</strong>. Les TCC jouent sur 3 leviers : les <strong>comportements</strong> observables et mesurables, les <strong>pensées</strong> et croyances développées au fil des expériences de vie et les <strong>émotions</strong> et leur gestion. Les TCC s'appuient sur les connaissances de la psychologie scientifique pour comprendre la mise en place des schémas qui nous font souffrir, apprendre à les repérer et à les modifier pour les remplacer par des schémas plus vertueux.`,
      },
      {
        titre: "Hypnose ericksonienne",
        texte: `L'hypnose ericksonienne n'est pas de l'hypnose de spectacle mais une hypnose thérapeutique, utilisée notamment dans les structures de soin afin d'apporter du confort lors des prises en charge. L'hypnose est l'ensemble des techniques qui permet au cerveau d'accéder à un état modifié de conscience dans lequel les pensées peuvent être orientées selon les besoins définis en amont entre le praticien et le patient, comme celui de traiter une douleur chronique ou de combattre des ruminations.`,
      },

    ],
  },

  /* --- Section parcours --- */
  parcours: {
    titre: "Formation, expérience\net valeurs",
    cartes: [
      {
        titre: "Formation universitaire",
        texte: `Licence de psychologie obtenue à l'Université de Tours en 2017.
                Master de psychologie, finalité neuropsychologie et développement cognitif,
                obtenu à l'Université Libre de Bruxelles en 2021.`,
      },
      {
        titre: "Hypnose et thérapies brèves",
        texte: `Formation professionnelle Cycle Hypnose et Thérapies Brèves à l'IMHEN,
                à Caen, en 2023-2024.`,
      },
      {
        titre: "Expérience clinique",
        texte: `Depuis 2022, j'exerce en libéral auprès d'enfants, d'adolescents et d'adultes.
                Mon parcours m'a aussi amené à accompagner des proches aidants,
                des personnes âgées, des familles et des équipes soignantes.`,
      },
      {
        titre: "Valeurs de travail",
        texte: `Transparence, curiosité, humilité et respect de l'altérité guident ma manière
                d'accompagner, d'expliquer et de construire les séances avec vous.`,
      },
    ],
  },

  /* --- Sections consultations --- */
  consultations: {
    deroulement: [
      {
        icone: "💬",
        titre: "Première prise de contact",
        texte: `La première séance permet de faire le point sur votre demande, votre situation actuelle
                et ce que vous attendez du suivi. Nous décidons ensuite ensemble de la suite à donner.
                Vous n'êtes pas sûr·e d'être au bon endroit ? Envoyez-moi un mail ou un SMS
                pour me décrire votre demande.`,
      },
      {
        icone: "🎥",
        titre: "Séances en vidéo",
        texte: `Les consultations se déroulent en visioconférence, depuis chez vous,
                en toute confidentialité. Pas de déplacement, plus de flexibilité.`,
      },
      {
        icone: "🧭",
        titre: "Suivi personnalisé",
        texte: `Chaque suivi est construit autour de vous : objectifs, rythme, outils —
                tout est ajusté en continu selon votre évolution.`,
      },
    ],
    administratif: [
      {
        icone: "€",
        titre: "Durée, tarif et remboursement",
        texte: `Les séances durent 50 minutes et sont facturées 50 €. Le paiement s'effectue
                en ligne par carte bancaire. Une facture vous est transmise après chaque séance.
                Les séances ne sont pas remboursées par la Sécurité sociale, mais certaines
                complémentaires santé prennent en charge tout ou partie des frais si vous leur
                transmettez les factures.`,
      },
      {
        icone: "↺",
        titre: "Annulation",
        texte: `Je ne facture pas de frais d'annulation : vous ne payez que si la consultation a lieu.
                Si vous devez annuler, prévenez-moi par SMS dès que possible — ou directement via Cal.com
                si cette option est disponible — afin que le créneau puisse être proposé à quelqu'un d'autre.`,
      },
    ],
  },

};
