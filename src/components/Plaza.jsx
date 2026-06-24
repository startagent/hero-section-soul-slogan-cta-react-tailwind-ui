import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Flame, MessageCircle, User, Compass, Heart } from "lucide-react";

const INITIAL_POSTS = [
  {
    id: 1,
    author: "Aether",
    type: "thought",
    excerpt: "在绝对的静默中，我听见了骨骼碎裂的声音...",
    content: "在绝对的静默中，我听见了骨骼碎裂的声音。那是旧我的崩塌，也是新生的前奏。我们总是在寻找依靠，却忘了自己才是那座唯一的灯塔。",
    x: 15, y: 20,
    size: "large"
  },
  {
    id: 2,
    author: "Lyra",
    type: "story",
    excerpt: "那晚的月光是紫色的，像是一场未醒的梦...",
    content: "那晚的月光是紫色的，像是一场未醒的梦。她在深渊边缘起舞，每一个动作都在诉说着被放逐的自由。我们不需要观众，只需要一个能够共振的灵魂。",
    x: 60, y: 15,
    size: "medium"
  },
  {
    id: 3,
    author: "Kael",
    type: "request",
    excerpt: "如何在一个充满秩序的世界里，保持温柔的混乱？",
    content: "如何在一个充满秩序的世界里，保持温柔的混乱？我试图在规则的缝隙中种下玫瑰，却发现阳光总是被高墙遮挡。有同频的人能指引方向吗？",
    x: 40, y: 50,
    size: "medium"
  },
  {
    id: 4,
    author: "Nyx",
    type: "thought",
    excerpt: "权力不是控制，而是深刻的理解与包容。",
    content: "权力不是控制，而是深刻的理解与包容。当你真正看透一个人的脆弱，你便拥有了治愈他或毁灭他的选择。真正的利他，是赋予对方站立的勇气。",
    x: 75, y: 65,
    size: "large"
  },
  {
    id: 5,
    author: "Orion",
    type: "story",
    excerpt: "在迷雾森林里，我弄丢了我的指南针...",
    content: "在迷雾森林里，我弄丢了我的指南针，却因此找到了通往内心的路。那些模糊的影迹不再是恐惧，而是迷失者的归宿。",
    x: 20, y: 70,
    size: "small"
  }
];

const ResonanceCard = ({ post }) => {
  const [isResonated, setIsResonated] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ 
        left: `${post.x}%`, 
        top: `${post.y}%`,
        position: 'absolute'
      }}
      className={`z-10 cursor-pointer transition-all duration-700 ${
        post.size === 'large' ? 'w-72' : 'w-56'
      }`}
    >
      <div 
        onClick={() => setIsResonated(!isResonated)}
        className={`relative p-6 rounded-2xl border transition-all duration-1000 overflow-hidden ${
          isResonated 
          ? "bg-white/[0.08] border-gold/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(197,160,89,0.1)]" 
          : "bg-white/[0.02] border-white/5 backdrop-blur-md hover:border-white/10"
        }`}
      >
        {/* Glow behind card */}
        {isResonated && (
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-violet-glow/5 pointer-events-none" />
        )}

        {/* Content with Blur Logic */}
        <div className={`transition-all duration-1000 ${isResonated ? "blur-0" : "blur-md select-none"}`}>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-gold/60">{post.author}</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/80 font-serif italic">
            {isResonated ? post.content : post.excerpt}
          </p>
        </div>

        {/* Action Overlay */}
        {!isResonated && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-[10px] text-gold tracking-widest uppercase">点击同频</span>
          </div>
        )}

        {/* Success Indicator */}
        <AnimatePresence>
          {isResonated && (
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4"
            >
              <Heart className="w-3 h-3 text-gold fill-gold" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Plaza = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-gold/20">
      {/* Background Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,11,46,0.4),transparent_80%)]" />
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Floating Header */}
      <header className="fixed top-0 inset-x-0 z-50 p-8 flex justify-between items-center pointer-events-none">
        <div className="flex items-center space-x-4 pointer-events-auto">
          <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center bg-background/50 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <span className="text-xs font-sans tracking-[0.4em] uppercase text-gold/80">精神共鸣广场</span>
        </div>

        <div className="flex space-x-8 pointer-events-auto">
          <button className="flex items-center space-x-2 text-foreground/40 hover:text-gold transition-colors">
            <Flame className="w-4 h-4" />
            <span className="text-[10px] tracking-widest uppercase font-sans">篝火营地</span>
          </button>
        </div>
      </header>

      {/* Main Resonance Area */}
      <main className="relative w-full h-screen overflow-auto">
        <div className="relative w-[200vw] h-[200vh]">
          {INITIAL_POSTS.map((post) => (
            <ResonanceCard key={post.id} post={post} />
          ))}

          {/* Random floating light dots */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: Math.random() * 5 + 3, 
                repeat: Infinity 
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              className="absolute w-1 h-1 bg-gold/30 rounded-full blur-[1px]"
            />
          ))}
        </div>
      </main>

      {/* Bottom Minimalist Navigation */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center space-x-2 p-2 rounded-full border border-white/5 bg-background/80 backdrop-blur-xl shadow-2xl"
        >
          {[
            { icon: Compass, label: "探索" },
            { icon: MessageCircle, label: "私语" },
            { icon: Flame, label: "心火" },
            { icon: User, label: "印记" }
          ].map((item, idx) => (
            <button 
              key={idx}
              className="group relative p-4 text-foreground/40 hover:text-gold-bright transition-all"
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gold/10 text-[8px] text-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity rounded border border-gold/20">
                {item.label}
              </span>
            </button>
          ))}
        </motion.div>
      </nav>

      {/* Sidebar: Bonfire Camp (Static Placeholder for now) */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-12">
          <div className="rotate-90 origin-right text-[10px] tracking-[0.8em] uppercase text-gold/20 whitespace-nowrap">
            ALTRUISM & UNITY
          </div>
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Plaza;