import { loadImage } from './ImageLoader';

test('image loader loads image', () => {
  const src = 'http://via.placeholder.com/350x150';
  return loadImage(src).then(img => {
    expect(img).toBe(src);
  });
});

test('image loader fails on bad src', () => {
  const src = '';
  return loadImage(src).catch(e => expect(e).toMatch('error'));
});
