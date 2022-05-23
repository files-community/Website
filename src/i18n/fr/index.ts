import type { Translation } from '../i18n-types';

const fr: Translation = {
	section: {
		design: {
			title: "design",
			hook: "La Puissance rencontre la Beauté.",
			description: "Conçu pour Windows. Gérez tous vos fichiers avec une productivité accrue. Travaillez sur plusieurs dossiers avec des onglets. Et bien plus."
		},
	  	features: {
			title: "fonctionnalités",
			hook: "Ça le fait déjà.",
			description: "Intégration du cloud ? Onglets et double panneaux ? Aperçu du contenu de vos fichiers ? Files contient toutes les fonctionnalités que vous attendez d'un gestionnaire de fichiers moderne.",
			cards: {
		  		cloud: {
					title: "Intégration native du Cloud",
					description: "L'intégration des services cloud tels que OneDrive, Google Drive et iCloud vous permet de gérer vos documents et photos dans le cloud, directement depuis la barre latérale."
		  		},
		  		preview: {
					title: "Aperçu de fichier",
					description: "Prévisualisez vos documents, photos ou fichiers sans les ouvrir. Prise en charge des aperçus de documents, de la coloration syntaxique, des métadonnées et de la lecture des vidéos."
		  		},
		  		tag: {
					title: "Organisez vos fichiers & dossiers",
					description: "Organisez rapidement vos fichiers et dossiers en leur attribuant des étiquettes colorées et nommées pour une identification facile. Vous pouvez même ajouter vos propres étiquettes personnalisées !"
		  		},
		  		tabs: {
					title: "Multitâche et onglets",
					description: "Évitez les fenêtres multiples et d'encombrer votre bureau. Comme votre navigateur, Files propose des onglets avec des raccourcis clavier."
		  		}
			}
	  	},
	  	themes: {
			title: "thèmes",
			hook: "Indiscutablement personnel.",
			description: "Faites-le à votre façon. Files propose une interface utilisateur entièrement personnalisable, jusque dans les couleurs et composants. Essayez des thèmes personnalisés intégrés à Files ou plongez directement dans la documentation et créez le vôtre."
	  	}
	}
};

export default fr;
