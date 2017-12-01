
//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple two-dimensional square.
//
function initBuffers(gl) {
    // 缓冲器对象
    const positionBuffer = gl.createBuffer();
    // 绑定上下文
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // 表示正方形顶点的数组
    const positions = [
        1.0,  1.0,
        -1.0,  1.0,
        1.0, -1.0,
        -1.0, -1.0,
    ];
    
    // 将 js 数组转换为 Float32Array 数组
    const webglPos = new Float32Array(positions)
    // 将数据填充到 buffer
    gl.bufferData(gl.ARRAY_BUFFER, webglPos, gl.STATIC_DRAW);
    
    return {
        position: positionBuffer,
    };
}