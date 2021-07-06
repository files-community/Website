<script lang="ts">
    import { links } from "$stores";
    import { Button, Navbar } from "$lib";

    const { github, discordInvite } = $links;

    const navbarItems = [
        {
            name: "Home",
            path: "/",
            icon: ""
        },
        {
            name: "Docs",
            path: "/docs",
            icon: ""
        },
        {
            name: "Themes",
            path: "/themes",
            icon: ""
        }
    ];

    const navbarButtons = [
        {
            label: "Discord",
            href: `https://discord.gg/${discordInvite}`,
            icon: ""
        },
        {
            label: "GitHub",
            href: `https://github.com/${github.owner}/${github.repo}`,
            icon: ""
        }
    ]
</script>

<Navbar items={navbarItems} buttons={navbarButtons} />
<slot />

<style lang="scss" global>
    @use "static/global";
    @use "static/markdown";
</style>