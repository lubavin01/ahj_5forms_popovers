import './css/style.css';

const buttons = document.querySelectorAll('.button');
const popover = document.querySelector('.popover-container');
const popoverTitle = document.querySelector('.popover-title');
const popoverBody = document.querySelector('.popover-body');

function showPopover(anchor, title, text) {
  popover.classList.remove('hidden');
  const boxAnchor = anchor.getBoundingClientRect();
  const boxPopover = popover.getBoundingClientRect();

  const top = boxAnchor.top + window.pageYOffset - boxPopover.height - 10;
  const left = boxAnchor.left + window.pageXOffset + (boxAnchor.width - boxPopover.width) / 2;
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;

  popoverTitle.textContent = title;
  popoverBody.textContent = text;
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    showPopover(e.target, 'super title', 'bla bla bla');
  });
});
