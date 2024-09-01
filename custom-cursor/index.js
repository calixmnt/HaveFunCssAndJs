const cursorEl = document.querySelector(".cursor");
const cursorInnerEl = document.querySelector('.cursor__inner');


let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

const mouseMoveHandler = (e) => {
  mouseX = e.pageY;
  mouseY = e.pageX;

};

const mouseOverHandler = e => {
    if (e.target.tagName === 'A') {
        cursorEl.classList.add('cursor--big');
        cursorEl.classList.add('cursor--smooth');
        cursorInnerEl.classList.add('cursor__inner--visible');
    }
}

const mouseOutHandler = e => {
    if (e.target.tagName === 'A') {
        cursorEl.classList.remove('cursor--big');
        cursorEl.classList.remove('cursor--smooth');
        cursorInnerEl.classList.remove('cursor__inner--visible');
    }
}

const animate = () => {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursorEl.style.top = cursorX + "px";
  cursorEl.style.left = cursorY + "px";

  requestAnimationFrame(animate);
};

document.addEventListener("mousemove", mouseMoveHandler);
document.addEventListener('mouseover', mouseOverHandler);
document.addEventListener('mouseout', mouseOutHandler);

animate();
