"use client";

import { useEffect, useRef } from "react";

type Particle = {
  baseX: number; // 원래 자리 (항상 여기 주변에 머무름)
  baseY: number;
  size: number;
  phase: number;
};

const PARTICLE_COUNT = 420;

// ✨ 느낌 조절 파라미터
const FIELD_RADIUS = 260;      // 커서 주변 영향 범위
const CLAY_DEPTH = 12;         // 찰흙이 얼마나 눌렸다/올라오는지 (px)
const BREATH_SPEED = 0.8;      // 전체 파동 속도
const CENTER_SMOOTH = 0.14;    // 커서 중심 따라가는 부드러움
const BASE_INTENSITY = 0.16;   // 기본 배경 빛 세기 (전체적으로 얼마나 보일지)

export default function GlowField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];

    // 화면 전체에 기본 입자 깔기
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: 0.25 + Math.random() * 0.55, // 아주 작은 점
        phase: Math.random() * Math.PI * 2,
      });
    }

    // “변형 중심” (커서를 약간 딜레이 따라감)
    let centerX = width / 2;
    let centerY = height / 2;

    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      const tSec = time / 1000;

      // 배경 (어두운 네이비)
      ctx.fillStyle = "rgba(3, 6, 23, 1)";
      ctx.fillRect(0, 0, width, height);

      // 중심을 커서를 부드럽게 따라가도록
      const targetX = mouse.active ? mouse.x : width / 2;
      const targetY = mouse.active ? mouse.y : height / 2;
      centerX += (targetX - centerX) * CENTER_SMOOTH * (1 + dt * 40);
      centerY += (targetY - centerY) * CENTER_SMOOTH * (1 + dt * 40);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.shadowColor = "rgba(148, 197, 253, 0.75)";
      ctx.shadowBlur = 8;

      for (const p of particles) {
        // 기본 위치에서 시작
        let x = p.baseX;
        let y = p.baseY;

        // 기본 살짝 숨쉬는 느낌 (mouse 없을 때도)
        const baseBreath =
          1 + 0.06 * Math.sin(tSec * 0.9 + p.phase);

        // 커서 기준 거리
        const dx = p.baseX - centerX;
        const dy = p.baseY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = dx / dist;
        const ny = dy / dist;

        // 커서 주변 영향(0~1), 멀수록 부드럽게 줄어듦
        const influence =
          dist > FIELD_RADIUS
            ? 0
            : Math.exp(
                -Math.pow(dist / FIELD_RADIUS, 2)
              );

        // 찰흙 눌린 자국 + 링처럼 튀어오르는 변형
        let displacement = 0;
        if (mouse.active && influence > 0.001) {
          // 중심은 살짝 눌리고, 주변은 약간 튀어나오는 곡선
          const inner = 1 - Math.exp(-Math.pow(dist / 40, 2)); // 중앙 움푹
          const ring =
            Math.exp(
              -Math.pow((dist / FIELD_RADIUS - 0.4) * 3.0, 2)
            ); // 주변 링

          const wave =
            (-inner + 1.25 * ring) *
            (0.7 + 0.3 * Math.sin(tSec * BREATH_SPEED + p.phase));

          displacement = CLAY_DEPTH * wave * influence;
        }

        x = p.baseX - nx * displacement;
        y = p.baseY - ny * displacement;

        // 밝기 계산
        // 1) 전체 기본 빛 (화면 전체에 깔려있는 조용한 별들)
        let intensity = BASE_INTENSITY;

        // 2) 커서 주변일수록 약간 더 밝게
        intensity += 0.55 * influence;

        // 3) 약간의 반짝임
        const twinkle =
          0.65 +
          0.35 * Math.sin(tSec * 1.3 + p.phase * 1.7);
        intensity *= twinkle * baseBreath;

        if (intensity <= 0.03) continue;

        const radius = 2.0 * p.size; // 점 크기 (작게 유지)

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius * 3
        );

        gradient.addColorStop(
          0,
          `rgba(239, 246, 255, ${0.55 * intensity})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(191, 219, 254, ${0.32 * intensity})`
        );
        gradient.addColorStop(1, "rgba(37, 99, 235, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}