/**
 * Make a link external.
 *
 * Usage:
 * ```
 * <a href="https://example.com/" {...external}>Example</a>
 * ```
 */
export const externalLink = {
	target: "_blank",
	rel: "noreferrer noopener",
};

/**
 * Checks if the url contains a path
 *
 * @param url source url
 * @param path path to page
 * @returns true if specified url contains path
 *
 * Examples:
 *
 * isUrlContainPath("/blog","/blog") = true
 * isUrlContainPath("/blog/posts/introducing-files-v2-4","/blog") = true
 * isUrlMathPath("/docs","/blog") = false
 */
export const isUrlContainPath = (url: string, path: string) =>
	url === path ||
	(url.split("/").length > 1 &&
		path.split("/").length > 1 &&
		url.startsWith(path) &&
		!(path === "" || path === "/")) ||
	(path === "/" && url === "");

export const storeHref = (productId: string) =>
	`https://apps.microsoft.com/detail/${productId}?cid=FilesWebsite`;

export const storeProtocolHref = (productId: string) =>
	`ms-windows-store://pdp/?ProductId=${productId}&cid=FilesWebsite`;

/**
 * Try the ms-windows-store: protocol first and fall back to the web
 * listing if nothing handles it. If the Store app opens, this window
 * loses focus/visibility, which cancels the fallback.
 *
 * Takes any Event because fluent-svelte types its forwarded clicks as
 * CustomEvent; at runtime they are the native MouseEvent.
 */
export const openWithStoreProtocol = (
	e: Event,
	protocolHref: string,
	href: string,
) => {
	const { button, ctrlKey, metaKey, shiftKey, altKey } = e as MouseEvent;
	if (
		button !== 0 ||
		ctrlKey ||
		metaKey ||
		shiftKey ||
		altKey ||
		!navigator.userAgent.includes("Windows")
	)
		return;

	e.preventDefault();

	let cancelled = false;
	const cancel = () => (cancelled = true);
	window.addEventListener("blur", cancel, { once: true });
	document.addEventListener("visibilitychange", cancel, { once: true });

	window.setTimeout(() => {
		window.removeEventListener("blur", cancel);
		document.removeEventListener("visibilitychange", cancel);
		if (cancelled || document.visibilityState !== "visible") return;
		// Still here: no protocol handler took over, open the web listing.
		if (!window.open(href, "_blank", "noopener,noreferrer"))
			location.assign(href);
	}, 1500);

	location.assign(protocolHref);
};

type Entries<T, K extends keyof T = keyof T> = Array<[K, T[K]]>;

export const keys = <T extends object>(obj: T) =>
	Object.keys(obj) as (keyof T)[];
export const values = <T extends object>(obj: T) =>
	Object.values(obj) as T[keyof T][];
export const entries = <T extends object>(obj: T) =>
	Object.entries(obj) as Entries<T>;
