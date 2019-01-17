module MyGame {

	export class Paint extends Phaser.State {

		init() {
			//  Unless you specifically need to support multitouch I would recommend setting this to 1
			this.input.maxPointers = 1;

			//  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
			this.stage.disableVisibilityChange = true;


			if (this.game.device.desktop) {
				//  If you have any desktop specific settings, they can go in here
				this.scale.pageAlignHorizontally = true;
			}
			else {
				//  Same goes for mobile settings.
				//  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
				this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
				this.scale.setMinMax(480, 260, 1024, 768);
				this.scale.forceLandscape = true;
				this.scale.pageAlignHorizontally = true;
			}

		}

		preload() {
			this.load.image('preloadBar', 'assets/loader.png');
		}

		// Hier passiert das eigentliche Zeichnen.
		create() {
			var graphics = this.game.add.graphics(300, 200);

			// diese Funktionen zum Zeichnen von Linien kommen von Phaser
			// und sollen nicht verwendet werden. Als Übung kannst du damit
			// aber mal das Haus-vom-Nikolaus zeichnen.
			graphics.lineStyle(1, 0xff0000, 1);
			graphics.moveTo(0, 0);
			graphics.lineTo(100, 0);

			graphics.lineStyle(1, 0x00ff00, 1);
			graphics.moveTo(100, 0);
			graphics.lineTo(100, 100);

			graphics.lineStyle(1, 0x0000ff, 1);
			graphics.moveTo(100, 100);
			graphics.lineTo(0, 100);

			graphics.lineStyle(1, 0xff00ff, 1);
			graphics.moveTo(0, 100);
			graphics.lineTo(0, 0);

			// so ruft man die Funktion auf, die einen Pixel zeichnet, siehe unten.
			this.drawPixel(50, 50, graphics);

			// so soll dann die Funktion drawLine aufgerufen werden können
			//this.drawLine(0, 10, 50, 50, graphics)

			// Hier schreibst du den Code, der das Haus-vom-Nikolaus zeichnet.

		}

		// Diese Funktion muss noch erstellt werden. Sie soll eine durchgehende Line von der Koordinate
		// (x1, y1) nach (x2, y2) zeichnen. Benutze dazu nur die Funtion `drawPixel`.
		//		drawLine(x1, y1, x2, y2, graphics) {

		//		}


		// Zeichnet einen Pixel an der Koordinate (x, y)
		drawPixel(x: number, y: number, graphics: Phaser.Graphics) {
			graphics.drawRect(x, y, 1, 1)
		}
	}
}

