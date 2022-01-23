/**
 * Make a link external.
 *
 * Usage:
 * ```
 * <a href="https://example.com/" {...external}>Example</a>
 * ```
 */
export const external: Partial<HTMLAnchorElement> = {
	target: "_blank",
	rel: "noreferrer noopener"
};