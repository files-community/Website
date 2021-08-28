export const renderHeroCanvas = (node: HTMLCanvasElement) => {
	let time: number = 0

	const context: CanvasRenderingContext2D = node.getContext("2d")

	const red = (x: number, y: number, t: number) => Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t))
	const green = (x: number, y: number, t: number) => Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300))
	const blue = (x: number, y: number, t: number) => Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100))

	const getColor = (x: number, y: number, r: number, g: number, b: number): void => {
		context.fillStyle = `rgb(${ r }, ${ g }, ${ b })`
		context.fillRect(x, y, 1, 1)
	}

	const animate = () => {
		for (let x = 0; x <= 35; x++) {
			for (let y = 0; y <= 35; y++) {
				getColor(x, y, red(x, y, time), green(x, y, time), blue(x, y, time))
			}
		}
		time += 0.05
		requestAnimationFrame(animate)
	}

	animate()
}

export default renderHeroCanvas