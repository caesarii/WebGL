
function __main() {
    const canvas = document.querySelector('#glcanvas');
    // 获取 webgl 上下文
    const gl = canvas.getContext('webgl');
    
    

    
    // 初始化着色器
    const shaderProgram = initShaderProgram(gl);
    
    // 创建缓冲器
    const buffers = initBuffers(gl);
    
    
    // Collect all the info needed to use the shader program.
    // Look up which attribute our shader program is using
    // for aVertexPosition and look up uniform locations.
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };
    
    // 绘制
    drawScene(gl, programInfo, buffers);
}

__main();





