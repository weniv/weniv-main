export default function myImageLoader({ src, width, quality }) {
  return `https://main.weniv.co.kr/${src}?w=${width}&q=${quality || 75}`;
}
