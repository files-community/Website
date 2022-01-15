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

/**
 * Create an array of indices.
 *
 * @param {number} size The size of the array.
 * @param {number} start The start index.
 * @returns {number[]}
 */
export const rangeArray = (size: number, start: number = 0) =>
	Array.from({ length: size }, (_, i) => i + start);
