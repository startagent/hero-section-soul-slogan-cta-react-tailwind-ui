import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Trial from "./components/Trial";
import Results from "./components/Results";
import Plaza from "./components/Plaza";
import "./index.css";

function App() {
  const [stage, setStage] = useState("hero"); // hero, trial, results, plaza
  const [trialResults, setTrialResults] = useState([]);

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-gold/30">
      <AnimatePresence mode="wait">
        {stage === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <Hero onStart={() => setStage("trial")} />
          </motion.div>
        )}
        
        {stage === "trial" && (
          <motion.div
            key="trial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Trial onComplete={(results) => {
              setTrialResults(results);
              setStage("results");
            }} />
          </motion.div>
        )}

        {stage === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Results 
              selections={trialResults} 
              onEnter={() => setStage("plaza")} 
            />
          </motion.div>
        )}

        {stage === "plaza" && (
          <motion.div
            key="plaza"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Plaza />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;