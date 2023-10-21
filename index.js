window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const grasses = ["⺌", "丶", "⺍", "灬", "艹"];
  let touching = false;
  function drawDot(x, y) {
    const dot = document.createElement("span");
    dot.innerText = grasses[getRandomInt(0, grasses.length)]; // 
    dot.style.top = y-7+"px";
    dot.style.left = x-7+"px";
    container.appendChild(dot);
  }

  function handleTouch(e, isMobile = false) {
    let [x, y] = (!isMobile) ? [e.pageX, e.pageY] : [e.targetTouches[0].pageX, e.targetTouches[0].pageY];
    if (!touching) drawDot(x, y);
    touching = true;
    // while (touching) {
    //   console.log("touching");
    //   drawDot(x+=2, y+=2);
    //   (!isMobile) ? onmouseup = () => {touching = false; console.log({touching});} : ontouchend = () => {touching = false; console.log({touching});};
    // }
    console.log({touching});
  }

  onmousedown = (e) => handleTouch(e);
  ontouchmove = (e) => handleTouch(e, true);
});