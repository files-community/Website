<script lang="ts">
	import { draw } from "svelte/transition";
    
    import { cloudFiles, previewFiles, tags } from "$data/features";
    import { Titlebar, ColorSwatch } from "$lib";

	import Checkmark from "@fluentui/svg-icons/icons/checkmark_20_regular.svg?raw";
	import ArrowSync from "@fluentui/svg-icons/icons/arrow_sync_20_regular.svg?raw";

    export let feature = 0;

    let currentPreviewFile = 0;
    let currentTag = 0;
</script>

<style lang="scss" src="./FeatureShowcase.scss"></style>

{#if feature === 0}
    <svg class="backdrop-icon" height="256" viewBox="0 0 48 48" width="256" xmlns="http://www.w3.org/2000/svg">
        <path in:draw={{ duration: 1000 }} d="M24 10C18.262 10 13.5501 14.3935 13.0448 20H12.75C8.46979 20 5 23.4698 5 27.75C5 32.0302 8.46979 35.5 12.75 35.5H35.25C39.5302 35.5 43 32.0302 43 27.75C43 23.4698 39.5302 20 35.25 20H34.9552C34.4499 14.3935 29.738 10 24 10Z" />
    </svg>
    <div class="showcase-panel cloud-files-showcase">
        <svg class="cloud-provider" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
        </svg>
        <svg class="cloud-provider" viewBox="0 0 595.3 841.9" xmlns="http://www.w3.org/2000/svg">
            <path d="M296.8,168.2C157.2,168.2,43.9,281.4,43.9,421c0,139.6,113.2,252.8,252.8,252.8S549.6,560.6,549.6,421  C549.6,281.4,436.4,168.2,296.8,168.2z M428.1,510.5c0,4.3-3.5,7.8-7.8,7.8h-33.1c-4.3,0-7.8-3.5-7.8-7.8V408.8c0-0.9-1-1.3-1.7-0.7  l-70,70c-6.1,6.1-15.9,6.1-22,0l-70-70c-0.6-0.6-1.7-0.2-1.7,0.7v101.7c0,4.3-3.5,7.8-7.8,7.8h-33.1c-4.3,0-7.8-3.5-7.8-7.8V331.5  c0-4.3,3.5-7.8,7.8-7.8H196c4.1,0,8.1,1.6,11,4.6l87,87c1.5,1.5,4,1.5,5.5,0l87-87c2.9-2.9,6.9-4.6,11-4.6h22.7  c4.3,0,7.8,3.5,7.8,7.8V510.5z"fill="#D9272E"/>
        </svg>
        <table>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Status</th>
            </tr>
            {#each cloudFiles as {name, icon, status}, i}
                <tr style="--file-index: {i}">
                    <td>
                        <img src="ui/{icon}.png" alt={icon === "folder" ? `${icon} file` : "Folder"} width="24" height="24"/>
                    </td>
                    <td>{name}</td>
                    <td class="status-{status === 'success' ? status : 'sync'}">
                        {@html status === "success" ? Checkmark : ArrowSync}
                    </td>
                </tr>
            {/each}
        </table>
    </div>
    {:else if feature === 1}    
    <svg class="backdrop-icon" width="48" height="48" style="--icon-scale: 0.9; --icon-stroke-width: 0.3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path in:draw={{ duration: 1250 }} d="M24.833 12.5H40.25C42.2543 12.5 43.8913 14.0724 43.9948 16.0508L44 16.25V35.25C44 37.2543 42.4276 38.8913 40.4492 38.9948L40.25 39H7.75C5.74574 39 4.10873 37.4276 4.0052 35.4492L4 35.25V18.999L17.8036 19L18.0297 18.9932C19.0049 18.9344 19.9192 18.4968 20.5769 17.7743L20.724 17.6025L24.833 12.5ZM17.0607 9C17.8933 9 18.7 9.27703 19.3552 9.78393L19.5301 9.92784L21.974 12.066L18.7771 16.0342L18.6826 16.1388C18.4832 16.336 18.223 16.4605 17.9443 16.4921L17.8036 16.5L4 16.499V12.75C4 10.7457 5.57236 9.10873 7.55084 9.0052L7.75 9H17.0607Z" xmlns="http://www.w3.org/2000/svg"/>
    </svg>
    <div class="previewer-showcase">
        <aside class="showcase-panel preview-pane">
            {#each [previewFiles[currentPreviewFile]] as file}
                <div class="preview">
                    {#if file?.extension === "html"}
                        <iframe title="Document" style="border: none" src="/preview-samples/{file.name}.{file.extension}"></iframe>
                    {:else if file?.code}
                        <pre class="scroller">
                            <code>
                                {@html file.code}
                            </code>
                        </pre>
                    {:else}
                        <img src={file.icon} alt="File icon"/>
                    {/if}
                </div>
                <div class="grabber"></div>
                <div class="metadata scroller">
                    <h4>
                        {file.name}{typeof file.extension !== "undefined" ? "." : ""}{file.extension ?? ""}
                    </h4>
                    <h5>
                        {file.extension ? `${file.extension.toUpperCase()} File` : "File Folder"}
                    </h5>
                    {#if file.bitDepth}
                        <h6>Bit Depth</h6>
                        <span>{file.bitDepth}</span>
                    {/if}
                    {#if file?.dimensions?.horizontal && file?.dimensions?.vertical}
                        <h6>Dimensions</h6>
                        <span>{file.dimensions.horizontal} x {file.dimensions.vertical}</span>
                    {/if}
                    {#if file?.dpi?.horizontal}
                        <h6>Horizontal Resolution</h6>
                        <span>{file.dpi.horizontal}</span>
                    {/if}
                    {#if file?.dpi?.vertical}
                        <h6>Vertical Resolution</h6>
                        <span>{file.dpi.vertical}</span>
                    {/if}
                    {#if file.items}
                        <h6>Item Count</h6>
                        <span>{file.items}</span>
                    {/if}
                    {#if file.lineCount}
                        <h6>Line Count</h6>
                        <span>{file.lineCount}</span>
                    {/if}
                    {#if file.path}
                        <h6>Path</h6>
                        <span>{file.path}</span>
                    {/if}
                    {#if file.added}
                        <h6>Date Created</h6>
                        <span>{file.added}</span>
                    {/if}
                    {#if file.modified}
                        <h6>Date Created</h6>
                        <span>{file.modified}</span>
                    {/if}
                </div>
            {/each}
        </aside>
        <div class="showcase-panel files-grid">
            {#each previewFiles as file, i}
                <div
                    class="file"
                    class:selected={currentPreviewFile === i}
                    on:click={() => currentPreviewFile = i}
                >
                    <img src={file.icon} alt="File icon"/>
                    {file.name}{typeof file.extension !== "undefined" ? "." : ""}{file.extension ?? ""}
                </div>
            {/each}
        </div>
    </div>
    {:else if feature === 2}
    <svg class="backdrop-icon" style="--icon-scale: 0.75" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path in:draw={{ duration: 1200 }} d="M15.9516 4.07892C16.6927 3.38568 17.6695 3 18.6842 3H25.4998C27.4328 3 28.9998 4.567 28.9998 6.5V13.2574C28.9998 14.3182 28.5783 15.3356 27.8282 16.0858L16.005 27.909C14.3452 29.5687 11.6543 29.5687 9.99455 27.909L3.66863 21.5831C1.96966 19.8841 2.01578 17.1157 3.77041 15.4742L15.9516 4.07892ZM22.4998 12C23.8805 12 24.9998 10.8807 24.9998 9.5C24.9998 8.11929 23.8805 7 22.4998 7C21.119 7 19.9998 8.11929 19.9998 9.5C19.9998 10.8807 21.119 12 22.4998 12Z" />
    </svg>
    <div class="tags-showcase">
        <div class="showcase-panel">
            <div class="showcase-panel tags-picker">
                {#each tags as { color }, i}
                    <ColorSwatch
                        bind:group={currentTag}
                        value={i}
                        --color-index={i}
                        tabindex="-1"
                        type="round"
                        {color}
                    />
                {/each}
            </div>
        </div>
    </div>
    {:else if feature === 3}
    <svg class="backdrop-icon" height="20" style="--icon-scale: 0.9; --icon-stroke-width: 0.125" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path in:draw={{ duration: 1200 }} d="M5.49707 3C4.11636 3 2.99707 4.11929 2.99707 5.5V14.5C2.99707 15.8807 4.11636 17 5.49707 17H14.4971C15.8778 17 16.9971 15.8807 16.9971 14.5V7H9.49707C8.66864 7 7.99707 6.32843 7.99707 5.5V3H5.49707Z M8.99707 3V5.5C8.99707 5.77614 9.22093 6 9.49707 6H16.9971V5.5C16.9971 4.11929 15.8778 3 14.4971 3H8.99707Z" />
    </svg>
    <div class="tabs-showcase">
        <div class="showcase-panel">
            <Titlebar>Window</Titlebar>
        </div>
        <div class="showcase-panel">
            <Titlebar>Window</Titlebar>
        </div>
        <div class="showcase-panel">
            <Titlebar>Window</Titlebar>
        </div>
    </div>
{/if}