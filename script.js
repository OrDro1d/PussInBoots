class PussInBoots {
	constructor(canvas, x, y, size) {
		this.canvas = canvas;
		this.x = x;
		this.y = y;
		this.size = size;
	}

	draw() {
		// Задняя часть шляпы
		this.#drawHatBack();
		// Голова
		this.#drawCircle(500, 300, 150, "rgb(210, 105, 30)");
		// Подбородок
		this.#drawCircle(500, 430, 40, "rgb(255, 222, 173)");
		// Щёки
		for (let i = 0; i <= 80; i += 80) {
			this.#drawCircle(460 + i, 400, 40, "rgb(255, 222, 173)");
		}
		// Глаза
		this.#drawEye(425, 300, 50);
		this.#drawEye(575, 300, 50);
		// Нос
		this.#drawNose();
		// Перед шляпы
		this.#drawHatFront();
		// Координаты отрезков, являющихся усами кота
		let mustache_x1 = [450, 460, 470, 530, 540, 550];
		let mustache_y1 = [390, 400, 390, 390, 400, 390];
		let mustache_x2 = [300, 320, 300, 700, 680, 700];
		let mustache_y2 = [390, 430, 410, 410, 430, 390];
		// Усы
		for (let i = 0; i < 6; i++) {
			this.#drawMustache(
				mustache_x1[i],
				mustache_y1[i],
				mustache_x2[i],
				mustache_y2[i]
			);
		}
	}

	#drawHatBack() {
		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(198, 145, 12)";
		this.canvas.fillStyle = "rgb(198, 145, 12)";
		this.canvas.arc(800, 150, 100, 0, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(218, 165, 32)";
		this.canvas.fillStyle = "rgb(218, 165, 32)";
		this.canvas.ellipse(760, 120, 100, 60, -Math.PI / 6, 0, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(20, 20, 20)";
		this.canvas.fillStyle = "rgb(20, 20, 20)";
		this.canvas.ellipse(500, 250, 300, 50, 0, 0, Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();
	}

	#drawCircle(x, y, size, color) {
		this.canvas.beginPath();
		this.canvas.fillStyle = color;
		this.canvas.arc(x, y, size, 0, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.fill();
		this.canvas.stroke();
	}

	#drawEye(x, y, size) {
		// Глазные яблоки
		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(0, 0, 0)";
		this.canvas.fillStyle = "rgb(50, 205, 50)";
		this.canvas.ellipse(x, y, size, size / 2, 0, 0, Math.PI * 2);
		this.canvas.closePath();
		this.canvas.fill();
		this.canvas.stroke();
		// Зрачки
		this.canvas.beginPath();
		this.canvas.fillStyle = "rgb(0, 0, 0)";
		this.canvas.ellipse(x, y, size / 2, size / 3, Math.PI / 2, 0, Math.PI * 2);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();
		// Блики
		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(255, 255, 255)";
		this.canvas.fillStyle = "rgb(255, 255, 255)";
		this.canvas.arc(x + 15, y + 5, size / 10, 0, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();
		// Брови
		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(255, 222, 173)";
		this.canvas.fillStyle = "rgb(255, 222, 173)";
		this.canvas.ellipse(x, y - 40, size - 10, size / 10, 0, 0, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();
	}

	#drawNose() {
		this.canvas.beginPath();
		this.canvas.fillStyle = "rgb(180, 75, 0)";
		this.canvas.moveTo(460, 360);
		this.canvas.lineTo(500, 320);
		this.canvas.lineTo(540, 360);
		this.canvas.closePath();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(0, 0, 0)";
		this.canvas.fillStyle = "rgb(255, 182, 193)";
		this.canvas.moveTo(460, 360);
		this.canvas.lineTo(540, 360);
		this.canvas.lineTo(500, 400);
		this.canvas.closePath();
		this.canvas.fill();
		this.canvas.stroke();
	}

	#drawHatFront() {
		this.canvas.beginPath();
		this.canvas.fillStyle = "rgb(30, 30, 30)";
		this.canvas.ellipse(500, 250, 150, 160, 0, Math.PI, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.fillStyle = "rgb(139, 0, 0)";
		this.canvas.ellipse(500, 220, 150, 50, 0, Math.PI, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(20, 20, 20)";
		this.canvas.fillStyle = "rgb(20, 20, 20)";
		this.canvas.ellipse(500, 250, 300, 50, 0, Math.PI, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.fillStyle = "rgb(20, 20, 20)";
		this.canvas.arc(650, 250, 150, Math.PI, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();

		this.canvas.beginPath();
		this.canvas.strokeStyle = "rgb(0, 0, 0)";
		this.canvas.fillStyle = "rgb(0, 0, 0)";
		this.canvas.arc(700, 150, 12, 0, 2 * Math.PI);
		this.canvas.closePath();
		this.canvas.stroke();
		this.canvas.fill();
	}

	#drawMustache(x1, y1, x2, y2) {
		this.canvas.beginPath();
		// this.canvas.strokeStyle = "rgb(225, 225, 225)";
		this.canvas.strokeStyle = "rgb(255, 255, 255)";
		this.canvas.moveTo(x1, y1);
		this.canvas.lineTo(x2, y2);
		this.canvas.closePath();
		this.canvas.stroke();
	}
}

let puss = new PussInBoots(
	document.getElementById("canvas").getContext("2d"),
	500,
	300,
	150
);
puss.draw();
