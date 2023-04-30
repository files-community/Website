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

type Entries<T, K extends keyof T = keyof T> = Array<[K, T[K]]>;

export const keys = <T extends object>(obj: T) =>
	Object.keys(obj) as (keyof T)[];
export const values = <T extends object>(obj: T) =>
	Object.values(obj) as T[keyof T][];
export const entries = <T extends object>(obj: T) =>
	Object.entries(obj) as Entries<T>;
