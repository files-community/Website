/// <reference types="@sveltejs/kit" />
// gives us highlighting on ?raw imports
declare module "*?raw" {
	const src: string
	export default src
}