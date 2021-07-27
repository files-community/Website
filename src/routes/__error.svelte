<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
                error: error
			}
		};
	}
</script>

<script lang="ts">
    export let status;
    export let error;
</script>

<style lang="scss">
    @use "src/styles/mixins" as *;

    .error-page {
        @include flex($direction: column, $align: center, $justify: center);
        color: #222;
        width: 100%;
        flex: 1 1 auto;
        position: relative;
        color-scheme: light;
        font-size: 1.2rem;
        *:not(code), *::before, *::after {
            font-family: "Microsoft Sans Serif", Tahoma, Arial, sans-serif;
            font-smooth: never;
            -webkit-font-smooth: never;
            -moz-osx-font-smoothing: never;
        }
        ::selection {
            background-color: navy;
        }
        button {
            box-sizing: border-box;
            border: none;
            border-radius: 0;
            min-width: 75px;
            min-height: 23px;
            padding: 0 12px;
            background: silver;
            font-size: 1.2rem;
            box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
            &:not(:disabled):active {
                box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey;
                padding: 2px 11px 0 13px;
            }
            &:focus {
                outline: 1px dotted #000;
                outline-offset: -4px;
            }
        }
        pre {
            overflow: auto;
            display: block;
            background: #fff;
            box-shadow: inset -1px -1px #fff,
                        inset 1px 1px grey,
                        inset -2px -2px #dfdfdf,
                        inset 2px 2px #0a0a0a;
            padding: 12px 8px;
            margin: 0;
            code {
                font-family: monospace;
            }
        }
        ::-webkit-scrollbar {
            width: 16px;
            &-button {
                &:horizontal:end:increment,
                &:horizontal:start:decrement,
                &:vertical:end:increment,
                &:vertical:start:decrement {
                    display: block
                }
                &:horizontal {
                    height: 17px;
                    &:start {
                        width: 16px;
                        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 4H8v1H7v1H6v1H5v1h1v1h1v1h1v1h1V4z' fill='%23000'/%3E%3C/svg%3E");
                    }
                    &:end {
                        width: 16px;
                        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 4H6v7h1v-1h1V9h1V8h1V7H9V6H8V5H7V4z' fill='%23000'/%3E%3C/svg%3E");
                    }
                }
                &:vertical {
                    &:start {
                        height: 17px;
                        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 6H7v1H6v1H5v1H4v1h7V9h-1V8H9V7H8V6z' fill='%23000'/%3E%3C/svg%3E");
                    }
                    &:end {
                        height: 17px;
                        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z' fill='%23000'/%3E%3C/svg%3E");
                    }
                }
            }
            &-corner {
                background: #dfdfdf;
            }
            &-track {
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='2' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 0H0v1h1v1h1V1H1V0z' fill='silver'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 0H1v1H0v1h1V1h1V0z' fill='%23fff'/%3E%3C/svg%3E");
            }
            &-thumb {
                background-color: #dfdfdf;
                box-shadow: inset -1px -1px #0a0a0a,
                            inset 1px 1px #fff,
                            inset -2px -2px #808080,
                            inset 2px 2px #dfdfdf;
            }
        }
    }

    .window {
        @include flex($direction: column);
        width: 380px;
        max-width: 100%;
        box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
        background: silver;
        padding: 3px;
        pre,
        &-body {
            flex: 1 1 auto;
        }
        &-body {
            @include flex($direction: column);
            margin: 8px;
        }
        footer {
            @include flex($justify: end, $gap: 6px);
            margin-top: 8px;
        }
    }

    .titlebar {
        @include flex($justify: between, $align: center);
        user-select: none;
        background: linear-gradient(90deg, navy, #1084d0);
        padding: 3px 2px 3px 3px;
        &-text {
            font-weight: 700;
            color: #fff;
            letter-spacing: 0;
            margin-right: 24px;
        }
        &-controls {
            display: flex;
            button {
                padding: 0 !important;
                display: block;
                min-width: 16px;
                min-height: 14px;
            }
        }
        button {
            &[aria-label="Minimize"] {
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: bottom 3px left 4px;
            }
            &[aria-label="Maximize"] {
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: top 2px left 3px;
            }
            &[aria-label="Close"] {
                margin-left: 2px;
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: top 3px left 4px;
            }
        }
    }

    .error-inner {
        margin-top: 4px;
        margin-bottom: 8px;
        display: flex;
        img {
            user-select: none;
            -webkit-user-drag: none;
            width: 32px;
            height: 32px;
            margin-right: 1em;
        }
        p {
            line-height: 1.5;
            margin: 0;
        }
    }

    @media only screen and (max-width: 648px) {
        .window {
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% - 48px);
            height: calc(100% - 48px);
            margin: 24px;
        }
    }
</style>

<section class="error-page">
    <div class="window">
        <div class="titlebar">
            <div class="titlebar-text">Error: {status}</div>
            <div class="titlebar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <div class="error-inner">
                <img alt="Error icon" src="ui/98-error.png" />
                <div class="error-message">
                    <p>
                        Uh Oh! Something went wrong while loading this page.
                        <br />
                        {error.message}
                    </p>
                </div>
            </div>
            {#if error.stack}
                <pre><code>{error.stack}</code></pre>
            {/if}
            <footer>
                <a href="/">
                    <button>Return Home</button>
                </a>
            </footer>
        </div>
    </div>
</section>