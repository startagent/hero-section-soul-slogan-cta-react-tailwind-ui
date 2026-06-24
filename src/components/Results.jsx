import React, { useMemo } from "react";
import { motion } from "framer-motion";

const IMPRINTS = {
  order: {
    title: "执剑人",
    subtitle: "ORDER & SHIELD",
    quote: "以克制为刃，以温柔为盾，守护你卸下防备的灵魂。",
    description: "你是秩序的构建者，深知力量的终点是克制。在混沌的荒原中，你选择成为那个提供绝对安全感的支点。",
    icon: "⚔️"
  },
  chaos: {
    title: "提线者",
    subtitle: "GUIDANCE & WEB",
    quote: "不触碰你的躯体，只在你的精神深渊里编织罗网。",
    description: "你擅长在无声处听惊雷。精神的博弈是你最爱的舞步，你轻拨心弦，让灵魂在你的节奏中起舞。",
    icon: "🕸️"
  },
  sacrifice: {
    title: "献祭者",
    subtitle: "TRUST & REBIRTH",
    quote: "在绝对的信任中碎裂，又在你的凝视中重塑。",
    description: "你拥有最纯粹的灵魂。你深知摧毁与重建的艺术，在极致的交付中，你找到了超越自我的存在。",
    icon: "🕯️"
  },
  abyss: {
    title: "寻渊者",
    subtitle: "ABYSS & AESTHETIC",
    quote: "在危险的边缘试探，只为确认我真实的存在。",
    description: "你对平庸免疫。痛楚与边界是你感知的触手，你在黑暗中挖掘美感，在禁忌中触碰真实。",
    icon: "👁️"
  },
  tide: {
    title: "潮汐",
    subtitle: "FLUIDITY & HARMONY",
    quote: "没有固定的形态，只为与你的灵魂同频共振。",
    description: "你是万物，也是空无。你拒绝被定义，只愿随风起舞，随月升降，与契合的灵魂共赴一场盛大的消融。",
    icon: "🌊"
  }
};

const Results = ({ selections, onEnter }) => {
  const imprintKey = useMemo(() => {
    const first = selections[0]?.value;
    const third = selections[2]?.value;
    
    if (first === "order") return "order";
    if (first === "chaos") return "chaos";
    if (third === "bond") return "sacrifice";
    if (third === "memory") return "abyss";
    return "tide";
  }, [selections]);

  const imprint = IMPRINTS[imprintKey];

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_80%)] animate-pulse-slow" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="relative z-10 w-full max-w-xl text-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-6"
        >
          <span className="text-gold tracking-[0.6em] text-xs uppercase font-sans">
            灵魂印记已定格
          </span>
        </motion.div>

        <div className="relative p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30 rounded-br-3xl" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mb-8"
          >
            <div className="text-6xl mb-4 grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700">
              {imprint.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-gold-bright tracking-widest">
              {imprint.title}
            </h1>
            <p className="text-[10px] tracking-[0.4em] font-sans text-gold/40 mt-4 uppercase">
              {imprint.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-lg md:text-xl font-serif italic text-foreground/90 leading-loose mb-8"
          >
            “{imprint.quote}”
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="text-sm font-light leading-relaxed max-w-sm mx-auto text-foreground/80 mb-10"
          >
            {imprint.description}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="pt-6 border-t border-white/5"
          >
            <p className="text-[10px] text-gold/30 tracking-[0.2em] leading-relaxed uppercase italic">
              在 Nocturne，隐私是神圣的契约。<br />
              在这里，没有评判，只有灵魂的共振。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-12"
        >
          <button 
            onClick={onEnter}
            className="group relative px-12 py-5 rounded-full overflow-hidden transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="relative z-10 text-gold-bright tracking-[0.3em] font-sans text-sm font-medium">
              进入精神广场
            </span>
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["0%", "-100%"],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;