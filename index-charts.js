// DRINKS BRAND INFO

// 1. Select the canvas and get the drawing context
const canvas = document.getElementById("drink-brand-info-canvas");
const ctx = canvas.getContext("2d");

// 2. Draw a solid blue rectangle
// ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 10, 10);

// 3. Draw a red outlined rectangle
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(50, 50, 20, 20);
