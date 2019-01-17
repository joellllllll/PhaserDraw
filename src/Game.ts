module MyGame {

	export class Game extends Phaser.Game {

		constructor() {

			super(800, 600, Phaser.AUTO, 'content', Paint);

		}
	}
}