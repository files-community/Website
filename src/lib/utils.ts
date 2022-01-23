/**
 * Make a link external.
 *
 * Usage:
 * ```
 * <a href="https://example.com/" {...external}>Example</a>
 * ```
 */
export const externalLink: Partial<HTMLAnchorElement> = {
	target: "_blank",
	rel: "noreferrer noopener"
};