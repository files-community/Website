<script>
    export let id = '';
    export let direction = '';
    export let align = '';
    export let justify = '';
    export let inline = false;
    export let wrap = false;
    export let reverse = false;
    export let gap = false;

    const directions = ['row', 'column', 'row-reverse', 'column-reverse'];
    const alignments = ['center', 'start', 'end', 'between', 'around', 'evenly'];
</script>

<template>
    <div class="flex-container
                {(directions.includes(direction)) ? `direction-${direction}` : ''}
                {(alignments.includes(align)) ? `align-${align}` : ''}
                {(alignments.includes(justify)) ? `justify-${justify}` : ''}
                {($$props.class) ? $$props.class : ''}"
                class:wrap
                class:inline
                class:reverse
                class:gap
                {id}>
        <slot/>
    </div>
</template>

<style lang="scss">
    .flex-container {
        display: flex;
        &.direction- {
            &row {
                flex-direction: row;
            }
            &column {
                flex-direction: column;
            }
            &row.reverse {
                flex-direction: row-reverse;
            }
            &column.reverse {
                flex-direction: column-reverse;
            }
        }
        &.justify- {
            &center {
                justify-content: center;
            }
            &start {
                justify-content: flex-start;
            }
            &end {
                justify-content: flex-end;
            }
            &between {
                justify-content: space-between;
            }
            &around {
                justify-content: space-around;
            }
            &evenly {
                justify-content: space-evenly;
            }
        }
        &.align- {
            &center {
                align-items: center;
            }
            &start {
                align-items: flex-start;
            }
            &end {
                align-items: flex-end;
            }
            &between {
                align-items: space-between;
            }
            &around {
                align-items: space-around;
            }
            &evenly {
                align-items: space-evenly;
            }
        }
        &.inline {
            display: inline-flex;
        }
        &.wrap {
            flex-wrap: wrap;
        }
        &.gap {
            gap: 10px;
        }
    }
</style>