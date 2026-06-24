import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRIAL_QUESTIONS = [
  {
    id: 1,
    scenario: "月色隐没的荒原上，一个极度渴望依赖你的灵魂正向你走来。在那双空洞的眼眸中，你看到了自己曾经的倒影。你的第一反应是：",
    options: [
      { text: "建立绝对的秩序与庇护，成为其荒原上的唯一灯塔。", value: "order" },
      { text: "在精神深处编织罗网，引导其在沉沦中寻得安宁。", value: "chaos" },
      { text: "卸下所有防备，与之在废墟上开启一场同频共振。", value: "harmony" }
    ]
  },
  {
    id: 2,
    scenario: "如果这世间的规则不过是一场华丽的假面舞会，而你手中握着能撕碎一切伪装的信标。你会选择在何时扣动扳机？",
    options: [
      { text: "当虚伪达到极致，美感崩塌的瞬间。", value: "aesthetic" },
      { text: "在午夜钟声敲响，所有人以为永恒的刹那。", value: "timing" },
      { text: "我不会扣动扳机，我选择成为舞会中最完美的伪装者。", value: "mirror" }
    ]
  },
  {
    id: 3,
    scenario: "你被允许在某人的灵魂深处刻下一道永久的印记，这道印记将决定你们关系的终极形态。你留下的会是：",
    options: [
      { text: "一条锁链，即便在梦境的边缘也无法挣脱。", value: "bond" },
      { text: "一朵枯萎的玫瑰，代表永恒却带有痛感的怀念。", value: "memory" },
      { text: "一道光，让他/她看清深渊的同时也看见了出口。", value: "salvation" }
    ]
  }
];

const Trial = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState([]);

  const handleSelect = (option) => {
    const newSelections = [...selections, option];
    setSelections(newSelections);

    if (currentStep < TRIAL_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newSelections);
    }
  };

  const currentQuestion = TRIAL_QUESTIONS[currentStep];

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-deep/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-2xl"
        >
          <div className="flex justify-center mb-12 space-x-4">
            {TRIAL_QUESTIONS.map((_, idx) => (
              <div 
                key={idx}
                className={`h-[1px] transition-all duration-1000 ${
                  idx === currentStep ? "w-12 bg-gold" : "w-6 bg-gold/20"
                }`}
              />
            ))}
          </div>

          <div className="space-y-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-foreground/90 tracking-wide">
              {currentQuestion.scenario}
            </h2>

            <div className="flex flex-col space-y-6">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(197, 160, 89, 0.03)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelect(option)}
                  className="group relative w-full p-6 text-left border border-white/5 rounded-xl transition-all duration-500 hover:border-gold/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex items-center space-x-6">
                    <span className="text-[10px] font-sans text-gold/40 tracking-widest uppercase">
                      Option 0{index + 1}
                    </span>
                    <span className="text-lg font-light text-foreground/70 group-hover:text-gold-bright transition-colors duration-500">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute bottom-12 text-center"
      >
        <button className="text-xs tracking-[0.3em] font-sans uppercase hover:text-gold hover:opacity-100 transition-all duration-500 cursor-pointer">
          已有印记？恢复身份
        </button>
      </motion.div>
    </div>
  );
};

export default Trial;