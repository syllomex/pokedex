export default function (url: string) {
  const _url = url.replace(/\/$/, '');
  const id = _url.substring(_url.lastIndexOf('/') + 1);
  return parseInt(id, 10);
}
