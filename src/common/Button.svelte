<script>
    export let type = 'secondary';
    export let custom = false;
    export let id = undefined;
    export let href = undefined;
    export let target = undefined;
    export let disabled = undefined;

    const types = ['primary', 'secondary'];
</script>

{#if !href}
    <button class="button {(types.includes(type)) ? `type-${type}` : 'type-secondary'}" type="button" {id} {disabled}>
        {#if custom}
            <slot/>
        {:else}
            <span>
                <slot/>
            </span>
        {/if}
    </button>
{:else}
    <a class="button {(types.includes(type)) ? `type-${type}` : 'type-secondary'}"
              type="button"
              role="button"
              target={(target === '_blank') ? '_blank' : undefined}
              rel={(target === '_blank') ? 'noreferrer noopener' : undefined}
              {href}
              {id}
              {disabled}>
        {#if custom}
            <slot/>
        {:else}
            <span>
                <slot/>
            </span>
        {/if}
    </a>
{/if}

<style lang="scss">
    .button {
        max-width: 100%;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        text-decoration: none;
        text-align: center;
        cursor: default;
        user-select: none;
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        border-radius: 4px;
        padding: 0 10px;
        transition: 100ms linear;
        cursor: pointer;
        span {
            display: flex;
            flex-direction: column;
        }
        &.type- {
            &secondary {
                color: var(--text-primary);
                background-color: rgba(255, 255, 255, 0.7);
                box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.059), inset 0 -1px 0 rgba(0, 0, 0, 0.102);
                &:hover {
                    background-color: rgba(255, 255, 255, 0.5);
                }
                &:active {
                    background-color: rgba(255, 255, 255, 0.3);
                    color: rgba(0, 0, 0, 0.62);
                }
            }
            &primary {
                background-color: var(--accent);
                box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.22);
                color: #fff;
                &:hover {
                    background-color: var(--accent-hover);
                }
                &:active {
                    background-color: var(--accent-active);
                }
            }
        }
        &[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
</style>