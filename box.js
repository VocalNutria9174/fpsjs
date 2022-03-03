			var box,
				boxWidth,
				boxPos = 0,
				boxVelocity = 3,
				limit = 500;
			document.addEventListener('DOMContentLoaded', function() {
				
				myFPSCounter = new fpsCounter(); //fps-counter.js
				box = document.querySelector('#box');
				boxWidth = document.querySelector('#box').offsetWidth;
				limit = document.querySelector("#board").clientWidth;
				
				requestAnimationFrame(mainLoop);
			});
			function mainLoop(timestamp) {
				myFPSCounter.update(timestamp); //fps-counter.js
				update();
				draw();
				requestAnimationFrame(mainLoop);
			}
			function update() {
				boxPos += boxVelocity;
				if (boxPos + boxWidth >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
			}
			function draw() {
				box.style.left = boxPos + 'px';
			}
