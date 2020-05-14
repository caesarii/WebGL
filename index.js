function main() {
  // canvas
  const canvas = document.querySelector("#glcanvas");
  // 初始化 webgl 上下文
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // 设置颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 使用指定颜色清除上下文
  gl.clear(gl.COLOR_BUFFER_BIT);
}
window.onload = function () {
  main()

}