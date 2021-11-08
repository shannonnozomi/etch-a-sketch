const pixels = document.getElementsByClassName("pixels");
const input = document.getElementById("colorPicker");

function bigPixelGenerator() {
  const div = document.createElement("div");
  div.style.width = "25px";
  div.style.height = "25px";
  div.textContent = "";
  div.style.border = "solid .5px white";
  div.className = "pixels";
  document.getElementById("main").appendChild(div);
  div.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = input.value;
  });
}
function smallPixelGenerator() {
  const div = document.createElement("div");
  div.style.width = "10px";
  div.style.height = "10px";
  div.textContent = "";
  div.style.border = "solid .5px white";
  div.className = "pixels";
  document.getElementById("main").appendChild(div);
  div.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = input.value;
  });
}

function bigPixelCorners() {
  if (pixels.length === 768) {
    pixels[0].style.borderRadius = "10px 0 0 0";
    pixels[31].style.borderRadius = "0 10px 0 0";
    pixels[736].style.borderRadius = "0 0 0 10px";
    pixels[767].style.borderRadius = "0 0 10px 0";
  }
}
function smallPixelCorners() {
  if (pixels.length === 4800) {
    pixels[0].style.borderRadius = "30px 0 0 0";
    pixels[79].style.borderRadius = "0 30px 0 0";
    pixels[4720].style.borderRadius = "0 0 0 30px";
    pixels[4799].style.borderRadius = "0 0 30px 0";
  }
}

for (var i = 0; i < 768; i++) {
  bigPixelGenerator();
  bigPixelCorners();
}

function sizeAdjust() {
  const big = document.getElementById("big");
  const small = document.getElementById("small");
  if (big.innerHTML === "BIG") {
    big.style.cssText = null;
    small.style.cssText = "background-color: gold; font-size: 35px;";
    big.innerHTML = "big";
    small.innerHTML = "SMAll";
    document.getElementById("main").innerHTML = "";
    for (var i = 0; i < 4800; i++) {
      smallPixelGenerator();
      smallPixelCorners();
    }
  } else {
    small.style.cssText = null;
    big.style.cssText = "background-color: gold; font-size: 35px;";
    big.innerHTML = "BIG";
    small.innerHTML = "small";
    document.getElementById("main").innerHTML = "";
    for (var i = 0; i < 768; i++) {
      bigPixelGenerator();
      bigPixelCorners();
    }
  }
}
function refresh() {
  if (pixels.length < 800) {
    document.getElementById("main").innerHTML = "";
    for (var i = 0; i < 768; i++) {
      bigPixelGenerator();
      bigPixelCorners();
    }
  } else if (pixels.length > 760) {
    document.getElementById("main").innerHTML = "";
    for (var i = 0; i < 4800; i++) {
      smallPixelGenerator();
      smallPixelCorners();
    }
  }
}
