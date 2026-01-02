export const Vertex = `
precision mediump float;

varying vec2 vUv;
uniform float uCurveStrength;
const float PI = 3.14159265359;

void main() {
    vUv = uv;
    vec3 newPosition = position;

    float curve = sin(uv.y * PI);  

    // FOR X
    if (uv.x < 0.5) {
        newPosition.x += curve * uCurveStrength ;
    } else {
        newPosition.x -= curve * uCurveStrength ;
    }

    // FOR Y
    float curvey = sin(uv.x * PI);   
    if (uv.y < 0.5) {
        newPosition.y += curvey * uCurveStrength ;
    } else {
        newPosition.y -= curvey * uCurveStrength ;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    
}
`;


export const Fragment = `
precision mediump float;
varying vec2 vUv;

void main() {
    // simple gradient
    gl_FragColor = vec4(0.290, 0.133, 0.078, 1.0);
}

`;