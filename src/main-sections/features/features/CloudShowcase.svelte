<script lang="ts">
	import { draw } from "svelte/transition"
	import Checkmark from "@fluentui/svg-icons/icons/checkmark_20_regular.svg?raw"
	import ArrowSync from "@fluentui/svg-icons/icons/arrow_sync_20_regular.svg?raw"
	import { cloudFiles } from "$data/features"
</script>

<svg class="backdrop-icon" height="256" viewBox="0 0 48 48" width="256" xmlns="http://www.w3.org/2000/svg">
	<path d="M24 10C18.262 10 13.5501 14.3935 13.0448 20H12.75C8.46979 20 5 23.4698 5 27.75C5 32.0302 8.46979 35.5 12.75 35.5H35.25C39.5302 35.5 43 32.0302 43 27.75C43 23.4698 39.5302 20 35.25 20H34.9552C34.4499 14.3935 29.738 10 24 10Z"
	      in:draw={{ duration: 1000 }}/>
</svg>
<div class="showcase-panel cloud-files-showcase">
	<svg class="cloud-provider" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
		<path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
		<path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
		      fill="#00ac47"/>
		<path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
		      fill="#ea4335"/>
		<path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
		<path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
		<path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
		      fill="#ffba00"/>
	</svg>
	<svg class="cloud-provider" viewBox="0 0 595.3 841.9" xmlns="http://www.w3.org/2000/svg">
		<path d="M296.8,168.2C157.2,168.2,43.9,281.4,43.9,421c0,139.6,113.2,252.8,252.8,252.8S549.6,560.6,549.6,421  C549.6,281.4,436.4,168.2,296.8,168.2z M428.1,510.5c0,4.3-3.5,7.8-7.8,7.8h-33.1c-4.3,0-7.8-3.5-7.8-7.8V408.8c0-0.9-1-1.3-1.7-0.7  l-70,70c-6.1,6.1-15.9,6.1-22,0l-70-70c-0.6-0.6-1.7-0.2-1.7,0.7v101.7c0,4.3-3.5,7.8-7.8,7.8h-33.1c-4.3,0-7.8-3.5-7.8-7.8V331.5  c0-4.3,3.5-7.8,7.8-7.8H196c4.1,0,8.1,1.6,11,4.6l87,87c1.5,1.5,4,1.5,5.5,0l87-87c2.9-2.9,6.9-4.6,11-4.6h22.7  c4.3,0,7.8,3.5,7.8,7.8V510.5z"
		      fill="#D9272E"/>
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

<style lang="scss">
	@use "CloudShowcase";
</style>