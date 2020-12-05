const withTestId = document.querySelectorAll('[data-testid]');

for (let i = 0; i < withTestId.length; i++) {
  const currElem = withTestId[i];
  currElem.classList.add('peepSelect');
}
