function createElement(tagName, attrs, ...children) {
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
window.a = (
  <div id="main-div" class="show-num">
    <div>父节点</div>
    <div class="text-child">
      子节点
      <div class="cc">孙节点</div>
    </div>
    <div>父节点</div>
    <div class="text-child">
      子节点
      <div>孙节点</div>
    </div>
  </div>
);

document.body.appendChild(window.a);
