function generateRectangles() {
  var maxRectSize = 300;
  var numRectangles = Math.floor(document.body.offsetHeight * window.innerWidth / (100000 * 5));

  for (var i = 0; i < numRectangles; i++) {
    var rectangle = document.createElement("div");
    rectangle.className = "rectangle";

    var width = Math.floor(Math.random() * 100) + maxRectSize;
    var height = Math.floor(Math.random() * 100) + maxRectSize;

    rectangle.style.width = width + "px";
    rectangle.style.height = height + "px";

    var x = Math.floor(Math.random() * (window.innerWidth + maxRectSize)) - maxRectSize / 2;
    var y = Math.floor(Math.random() * (document.body.offsetHeight - maxRectSize))
    rectangle.style.left = x + "px";
    rectangle.style.top = y + "px";
    document.body.appendChild(rectangle);
  }
}

window.onload = function() {
  generateRectangles();
}
