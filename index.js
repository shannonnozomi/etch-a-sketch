var pixels = document.getElementsByClassName("pixels");
var input = document.getElementById("colorPicker");

function pixelGenerator() {
  var div = document.createElement("div");
  div.style.width = "30px";
  div.style.height = "30px";
  div.textContent = "";
  div.style.border = "solid .5px white";
  div.className = "pixels";
  document.getElementById("main").appendChild(div);
  div.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = input.value;
  });
}

for (var i = 0; i < 520; i++) {
  pixelGenerator();
  if (pixels.length === 520) {
    pixels[0].style.borderRadius = "30px 0 0 0";
    pixels[25].style.borderRadius = "0 30px 0 0";
    pixels[494].style.borderRadius = "0 0 0 30px";
    pixels[519].style.borderRadius = "0 0 30px 0";
  }
  console.log(input);
}

function refresh() {
  document.getElementById("main").innerHTML = "";
  for (var i = 0; i < 520; i++) {
    pixelGenerator();
    if (pixels.length === 520) {
      pixels[0].style.borderRadius = "30px 0 0 0";
      pixels[25].style.borderRadius = "0 30px 0 0";
      pixels[494].style.borderRadius = "0 0 0 30px";
      pixels[519].style.borderRadius = "0 0 30px 0";
    }
  }
}
