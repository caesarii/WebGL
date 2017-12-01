// 创建着色器
function initShaderProgram(gl) {
    // opengl 代码
    const vsSource = `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
    `;
    const fsSource = `
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
    `;
    
    // 加载 webgl 着色器程序
    // VERTEX_SHADER: 顶点着色器
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    // FRAGMENT_SHADER: 片段着色器
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    
    // 创建并连接着色器
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    
    // 检测重建是否成功
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    
    return shaderProgram;
}


// 创建指定类型的 webgl 着色器程序, 并返回一个编译好的的着色器程序
function loadShader(gl, type, source) {
    // type: 着色器类型
    // source: 着色器代码
    const shader = gl.createShader(type);
    
    // Send the source to the shader object
    gl.shaderSource(shader, source);
    
    // Compile the shader program
    gl.compileShader(shader);
    
    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    
    return shader;
}