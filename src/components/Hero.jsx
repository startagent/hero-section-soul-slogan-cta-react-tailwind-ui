import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 160, 89, ${p.opacity})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

const Hero = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden px-6">
      <ParticleBackground />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,11,46,0.6),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center space-y-12 max-w-4xl"
      >
        <div className="space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold tracking-[0.4em] text-sm uppercase font-sans"
          >
            NOCTURNE INNER CIRCLE
          </motion.p>
          
          <h1 className="text-4xl md:text-7xl font-serif font-light leading-tight tracking-tight">
            在深渊边缘<br />
            <span className="italic text-gold-bright">重塑灵魂的羁绊</span>
          </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          这是一个为少数派准备的静谧空间。摒弃喧嚣，<br />
          在克制的欲望与高尚的精神契合中，找寻真正的自我。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-8"
        >
          <button 
            onClick={onStart}
            className="group relative px-10 py-4 bg-transparent border border-gold/30 rounded-full overflow-hidden transition-all duration-500 hover:border-gold/80 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 rounded-full bg-gold/5 animate-breath blur-md" />
            <span className="relative z-10 text-gold-bright tracking-[0.2em] font-sans text-sm font-medium">
              开启精神试炼
            </span>
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </div>
    </div>
  );
};

export default Hero;