import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
    footer: {
        pages: "Pages",
        home: "Home",
        documentation: "Documentation",
        blog: "Blog",
        contributeToFiles: "Contribute to Files",
        giveFeedback: "Give Feedback",
        styleGuide: "Style Guide",
        translations: "Translations",
        contributeToSite: "Contribute to this site",
        gitHubRepo: "GitHub Repo",
        foundBug: "Found a bug?",
        webTeam: "Web Team",
        copyright: "Copyright © 2021 - {thisYear}, The Files Authors",
        gitHubRepository: "GitHub repository",
        twitterProfile: "Twitter profile",
        discordServer: "Discord server"
    },
    section: {
        design: {
            title: "design",
            hook: "Power meets beauty.",
            description: "Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more."
        },
        features: {
            title: "features",
            hook: "It already does that.",
            description: "Cloud files integration? Tabs and multiple layouts? Rich file previews? Files has it covered with robust features you expect from a modern file manager.",
            cards: {
                cloud: {
                    title: "Seamless cloud integration",
                    description: "Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar."
                },
                preview: {
                    title: "File preview",
                    description: "Preview documents, photos, and more without opening them. Support for rich previews, syntax highlighting, markdown and video playback is all built in."
                },
                tag: {
                    title: "Tagged Files & Folders",
                    description: "Quickly mark and organize your files and folders for later by assigning them colored and named tags for easy identification. You can even add your own custom tags!"
                },
                tabs: {
                    title: "Multitask with tabs",
                    description: "Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts."
                }
            }
        },
        themes: {
            title: "themes",
            hook: "Distinctly personal.",
            description: "Have it your way. Files features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into Files or dive right into the docs and create your own.",
            color: {
				darkGreyLightBlue: "Dark Grey • Light Blue",
				blueGreyNeonGreen: "Blue Grey • Neon Green",
				purple: "Purple",
				yellowWhite: "Yellow • White",
				coolWhiteDarkTeal: "Cool White • Dark Teal",
				skyBlue: "Sky Blue"
			}
        },
        community: {
            title: "community",
            hook: "Designed and developed by you.",
            description: "Files is free and open source software, maintained and designed by a collective of hundreds of contributors.",
            joinDiscussion: "Join the discussion",
            becomeContributor: "Become a contributer",
            contributions: "{0} contribution{{|s}}"
        }
    }
};

export default en;
