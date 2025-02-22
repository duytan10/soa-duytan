import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        heading1: "Book a Class",
        heading2: "Our Chefs",
        heading3: "Our Packages",
        heading4: "Blog",
        heading5: "Contact Us",
        title_bloc1: "Discover Culinary Art with CookMaster",
        subtitle_bloc1: "Explore unique experiences to learn, taste, and share",
        category1: "Online Classes",
        tagline1: "Learn from your own kitchen",
        description1:
          "Join our interactive online classes to master culinary skills with our chefs.",
        cta1: "See our online classes",
        category2: "Ethical Hunting",
        tagline2: "Get hands-on experience",
        description2:
          "Participate in our in-person workshops to perfect your cooking techniques.",
        cta2: "Discover our workshops",
        category3: "Gastronomic Experiences",
        tagline3: "A unique culinary journey",
        description3:
          "Enjoy exceptional moments around gastronomy with our expert chefs.",
        cta3: "Book an experience",
        title_bloc2: "Our Activities",
        nom: "Name",
        "entrez votre nom": "Enter your name",
        email: "Email",
        "entrez votre email": "Enter your email",
        message: "Message",
        fichier: "File",
        "pièce jointe": "Attachment",
        "fichier PDF uniquement": "PDF file only",
        réinitialiser: "Reset",
        envoyer: "Send",
        changeLanguage: "Change language",
      },
    },
    fr: {
      translation: {
        heading1: "Réserver un Cours",
        heading2: "Nos Chefs",
        heading3: "Nos Formules",
        heading4: "Blog",
        heading5: "Contactez-nous",
        title_bloc1: "Découvrez l'Art Culinaire avec CookMaster",
        subtitle_bloc1:
          "Explorez des expériences uniques pour apprendre, déguster et partager",
        category1: "Cours en Ligne",
        tagline1: "Apprenez depuis chez vous",
        description1:
          "Rejoignez nos cours interactifs en ligne pour maîtriser l'art culinaire avec nos chefs.",
        cta1: "Voir nos cours en ligne",
        category2: "Ateliers Pratiques",
        tagline2: "Passez à l'action",
        description2:
          "Participez à nos ateliers en présentiel pour perfectionner vos techniques culinaires.",
        cta2: "Découvrez nos ateliers",
        category3: "Expériences Gastronomiques",
        tagline3: "Un voyage culinaire unique",
        description3:
          "Vivez des moments d'exception autour de la gastronomie avec nos experts.",
        cta3: "Réservez une expérience",
        title_bloc2: "Nos Activités",
        nom: "Nom",
        "entrez votre nom": "Entrez votre nom",
        email: "Email",
        "entrez votre email": "Entrez votre email",
        message: "Message",
        fichier: "Fichier",
        "pièce jointe": "Pièce jointe",
        "fichier PDF uniquement": "Fichier PDF uniquement",
        réinitialiser: "Réinitialiser",
        envoyer: "Envoyer",
        changeLanguage: "Changer la langue",
      },
    },
  },
  fallbackLng: "en",
  debug: true,
  lng: "en",
});

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export default i18n;
