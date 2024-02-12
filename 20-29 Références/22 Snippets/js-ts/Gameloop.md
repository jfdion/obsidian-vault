---
tags:
  - code
  - snippet
  - "#typescript"
language: Typescript
created: 2024-01-29 Mon
last_updated: 2024-01-29 Mon
---
# Description
Basic game loop for Web rendering

```Typescript
export function createGameLoop(game: Game, canvas: Canvas, fps: number, debugConfig: DebugConfig): GameLoop {

	const fspInterval = 1000 / fps
	const eventBus = new EventBus()
	let elapsedTime = createElapsedTime()

	clearCanvas(canvas)

	return function gameLoop(time: DOMHighResTimeStamp): void {

		if (time > elapsedTime.timestamp + fspInterval) {
		
			elapsedTime = updateElapsedTime(elapsedTime, time)
			
			game.handleInputs(eventBus)
			
			game.update(elapsedTime)

			game.clearScreen(canvas)

			game.draw(canvas)

			debug(debugConfig, { canvas, elapsedTime })
		}
		
		window.requestAnimationFrame(gameLoop)
	}
}
```