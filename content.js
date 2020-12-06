const withTestId = document.querySelectorAll('[data-testid]');
const peepModes = {
  normal: true,
  select: false,
  peeping: false,
};

const overlay = document.createElement('div');
overlay.classList.add('peep-overlay');
overlay.style = 'display: none';
document.body.appendChild(overlay);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < withTestId.length; i++) {
  const currElem = withTestId[i];

  currElem.classList.add('peep-select');

  currElem.addEventListener('mouseenter', (e) => {
    e.stopPropagation();

    if (!peepModes.select) return;

    const { top, left } = currElem.getBoundingClientRect();
    overlay.style.top = `${Math.floor(top)}px`;
    overlay.style.left = `${Math.floor(left)}px`;
    overlay.style.display = 'block';
    overlay.style.position = 'relative';
    overlay.style.background = 'red';
    overlay.style.width = '100%';
    overlay.style.heigh = '100%';
    overlay.style['z-index'] = '2000000';
  });

  currElem.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    overlay.style = 'display: none';
  });
}

chrome.runtime.onMessage.addListener(({ mode }) => {
  if (mode) {
    Object.keys(peepModes).forEach((key) => {
      peepModes[key] = false;
    });
    peepModes[mode] = true;
  }
});
