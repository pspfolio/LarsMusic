export const loadImage = imageName => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const src = `/images/${imageName}`;
    image.onload = () => resolve(src);
    image.onerror = err => reject(err);
    image.src = src;
  });
};
