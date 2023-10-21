window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const grasses = ["⺌", "丶", "⺍", "灬", "艹"];

  function drawDot(x, y) {
    const dot = document.createElement("span");
    dot.innerText = grasses[getRandomInt(0, grasses.length)]; // 
    dot.style.top = y-7+"px";
    dot.style.left = x-7+"px";
    container.appendChild(dot);
  }

  function handleTouch(e, isMobile = false) {
    e.preventDefault();
    let [x, y] = (!isMobile) ? [e.pageX, e.pageY] : [e.targetTouches[0].pageX, e.targetTouches[0].pageY];
    drawDot(x, y);
    let diff = 2;
    let interval = setInterval(() => {
      diff += getRandomInt(1,10);
      let sign = (Math.random()>0.5?1:-1);
      drawDot(sign*(x+diff), sign*(y+diff));
    }, 50);
    (!isMobile) ? onmouseup = () => {clearInterval(interval);} : ontouchend = () => {clearInterval(interval);};
  }

  document.addEventListener('mousedown', handleTouch, {passive: false});
  document.addEventListener('touchstart', (e) => handleTouch(e, true), {passive: false});
  // ontouchstart = (e) => handleTouch(e, true);
});