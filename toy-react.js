export function createElement(tagName, attrs, ...children) {
  let e = document.createElement(tagName);
  for (const attr in attrs) {
    e.setAttribute(attr, attrs[attr]);
  }

  for (const child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
      e.appendChild(child);
    }
    e.appendChild(child);
  }
  return e;
}