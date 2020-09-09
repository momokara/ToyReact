import { createElement } from './toy-react';
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
