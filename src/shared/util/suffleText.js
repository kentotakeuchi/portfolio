import ShuffleText from 'shuffle-text';

export const shuffleText = (id) => {
  // Get element
  const element = document.getElementById(id);
  // Create instance
  const shuffleText = new ShuffleText(element);
  // Trigger effect
  shuffleText.start();

  // ['click'].forEach((event) => {
  //   element.addEventListener(event, () => {
  //     // Create instance
  //     const shuffleText = new ShuffleText(element);
  //     // Trigger effect
  //     shuffleText.start();
  //   });
  // });
};
