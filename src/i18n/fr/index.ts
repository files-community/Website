import type { Translation } from '../i18n-types';

const fr: Translation = {
	header: {
        home: "Accueil",
        docs: "Docs",
        blog: "Blog",
    },
	footer: {
        home: "Accueil",
        documentation: "Documentation",
        blog: "Blog",
        contributeToFiles: "Contribuer à Files",
        giveFeedback: "Donnez votre avis",
        styleGuide: "Guide de style",
        translations: "Traductions",
        contributeToSite: "Contribuer à ce site",
        gitHubRepo: "Dépot GitHub",
        foundBug: "Signaler un bug",
        webTeam: "Équipe Web",
        copyright: "Copyright ©2021 - {thisYear}, Les auteurs de Files",
		gitHubRepository: "Dépot GitHub",
        twitterProfile: "Profil Twitter",
        discordServer: "Serveur Discord"
    },
	section: {
		hero: {
            hook: "Un explorateur de fichiers moderne qui repousse les limites de la plateforme.",
			downloadFiles: "Télécharger Files",
			downloadSource: "Choisir une source de téléchargement",
			viewGitHub: "Accéder à GitHub",
            openSource: "Files est open source !",
			winget: {
                title: "Installation de Files via winget",
				description: "Pour télécharger et installer Files avec {link}, copier la commande suivante dans un terminal de votre choix :",
				copyCommand: "Commande Copier",
                copy: "Copier",
				copied: "Copié !",
                close: "Fermer"
            }
        },
		design: {
			title: "design",
			hook: "La Puissance rencontre la Beauté.",
			description: "Conçu pour Windows. Gérez tous vos fichiers avec une productivité accrue. Travaillez sur plusieurs dossiers avec des onglets. Et bien plus."
		},
	  	features: {
			title: "fonctionnalités",
			hook: "Ça le fait déjà.",
			description: "Intégration du cloud ? Onglets et double panneaux ? Aperçu du contenu de vos fichiers ? Files contient toutes les fonctionnalités que vous attendez d'un gestionnaire de fichiers moderne.",
			columnName: "Nom",
            columnStatus: "Status",
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
			description: "Faites-le à votre façon. Files propose une interface utilisateur entièrement personnalisable, jusque dans les couleurs et composants. Essayez des thèmes personnalisés intégrés à Files ou plongez directement dans la documentation et créez le vôtre.",
			color: {
				darkGreyLightBlue: "Gris sombre • Bleu clair",
				blueGreyNeonGreen: "Gris bleu • Vert néon",
				purple: "Mauve",
				yellowWhite: "Jaune • Blanc",
				coolWhiteDarkTeal: "Blanc froid • Vert sombre",
				skyBlue: "Bleu ciel"
			}
	  	},
		community: {
            title: "communauté",
            hook: "Conçu et développé par vous.",
            description: "Files est un logiciel libre et open source, maintenu et conçu par un collectif de centaines de contributeurs.",
            joinDiscussion: "Joindre la discussion",
            becomeContributor: "Devenir contributeur",
			contributions: "{0} contribution{{|s}}"
        }
	}
};

export default fr;
