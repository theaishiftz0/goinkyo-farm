"use client";

import { useEffect, useRef } from "react";

export default function FarmMotionLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", {
      alpha: true,
      antialias: true,
      depth: false,
      stencil: false
    });

    if (!canvas || !gl) {
      return;
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute float a_size;
      attribute float a_phase;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying float v_alpha;

      void main() {
        vec2 pos = a_position;
        pos.x += sin(u_time * 0.00022 + a_phase) * 28.0;
        pos.y += cos(u_time * 0.00018 + a_phase) * 18.0;
        vec2 clip = ((pos / u_resolution) * 2.0) - 1.0;
        gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
        gl_PointSize = a_size;
        v_alpha = 0.18 + (sin(u_time * 0.0003 + a_phase) * 0.08);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying float v_alpha;

      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        if (d > 0.5) discard;
        float edge = smoothstep(0.5, 0.04, d);
        gl_FragColor = vec4(0.12, 0.48, 0.27, edge * v_alpha);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();

    if (!vertexShader || !fragmentShader || !program) {
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return;
    }

    const particleCount = 56;
    const positions = new Float32Array(particleCount * 2);
    const sizes = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 2] = Math.random() * window.innerWidth;
      positions[index * 2 + 1] = Math.random() * window.innerHeight;
      sizes[index] = 2 + Math.random() * 4;
      phases[index] = Math.random() * Math.PI * 2;
    }

    const positionBuffer = gl.createBuffer();
    const sizeBuffer = gl.createBuffer();
    const phaseBuffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const sizeLocation = gl.getAttribLocation(program, "a_size");
    const phaseLocation = gl.getAttribLocation(program, "a_phase");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    let animationFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (time: number) => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(sizeLocation);
      gl.vertexAttribPointer(sizeLocation, 1, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, phaseBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, phases, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(phaseLocation);
      gl.vertexAttribPointer(phaseLocation, 1, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, window.innerWidth, window.innerHeight);
      gl.uniform1f(timeLocation, time);
      gl.drawArrays(gl.POINTS, 0, particleCount);
      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="farm-motion-layer" aria-hidden="true" />;
}
