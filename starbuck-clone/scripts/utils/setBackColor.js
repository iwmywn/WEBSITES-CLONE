export default function setBColor(selector, color) {
  document.querySelectorAll(`.js-${selector}`)
    .forEach((sectionItem) => {
      const { id } = sectionItem.dataset;
      color.forEach((colorItem) => {
        if (id === colorItem.id)
          sectionItem.style.backgroundColor = colorItem.bColor;
      });
    });
}