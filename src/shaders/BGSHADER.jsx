export const Vertex = `
precision mediump float;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;


export const Fragment = `

precision mediump float;

uniform vec2 uResolution;   // canvas size
uniform float uGridSize;    // size of each box (in px)
uniform float uLineWidth;   // thickness of lines

void main() {
    // Convert pixel coords
    vec2 uv = gl_FragCoord.xy;

    // Grid spacing
    float gx = mod(uv.x, uGridSize);
    float gy = mod(uv.y, uGridSize);

    // Distance from grid line
    float lineX = step(gx, uLineWidth) + step(uGridSize - gx, uLineWidth);
    float lineY = step(gy, uLineWidth) + step(uGridSize - gy, uLineWidth);

    float line = clamp(lineX + lineY, 0.0, 1.0);

    // Colors
    vec3 background = vec3(0.98, 0.96, 0.93);  // beige-ish like your image
    vec3 gridColor  = vec3(0.933, 0.918, 0.894);  // light brown grid

    vec3 color = mix(background, gridColor, line);

    gl_FragColor = vec4(color, 1.0);
}
`;
