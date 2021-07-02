<script>
    import { Button } from 'components';

    export let items = [];
    export let selectedItem = undefined;
</script>

<template>
    <header class="navbar">
        <nav>
            <a class="navbar-logo-wrap" href="/">
                <img class="navbar-logo" src="https://files-community.github.io/img/logo.png" alt="Files logo"/>
            </a>
            <div class="navbar-divider" role="separator"></div>
            {#each items as item, i}
                <a class="navbar-item"
                   class:selected={selectedItem === i}
                   href={item.href}
                   target={(item.external === true) ? '_blank' : undefined} 
                   rel={(item.external === true) ? 'noreferrer noopener' : undefined}>
                    {item.name}
                </a>
            {/each}
        </nav>
        <Button id="theme-button" custom>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="currentColor"/>
            </svg>
        </Button>
    </header>
</template>

<style lang="scss">
    .navbar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        nav {
            display: flex;
            align-items: center;
        }
        :global(#theme-button) {
            width: 48px;
            height: 48px;
        }
    }

    .navbar-logo-wrap {
        border-radius: 4px;
    }

    .navbar-logo {
        user-select: none;
        -webkit-user-drag: none;
        width: 48px;
        height: 48px;
    }

    .navbar-item {
        user-select: none;
        text-decoration: none;
        font-weight: 500;
        color: var(--text-primary);
        opacity: .5;
        font-size: 16px;
        cursor: pointer;
        transition: 200ms ease opacity;
        border-radius: 2px;
        margin-right: 32px;
        &:hover {
            opacity: .75;
        }
        &.selected,
        &:focus-visible {
            opacity: 1;
        }
    }
    
    .navbar-divider {
        margin: 0 18px;
        height: 24px;
        border-left: 1px solid #000;
        opacity: .15;
    }
</style>