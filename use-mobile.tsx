import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Question } from "@/lib/quiz-data";

interface Props {
  question: Question;
  index: number;
  total: number;
  onAnswer: (points: number) => void;
}

export function QuizCard({ question, index, total, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [stars, setStars] = useState(0);
  const [text, setText] = useState("");

  const progress = ((index + 1) / total) * 100;

  function handleChoice(idx: number, points: number) {
    if (selected !== null) return;
    setSelected(idx);
    setTimeout(() => onAnswer(points), 450);
  }

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="font-semibold text-tiktok-cyan">Pergunta {index + 1}/{total}</span>
          <span>🔥 {Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full bg-gradient-cta"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="rounded-3xl bg-card border border-border p-6 shadow-glow-magenta">
        <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-6 text-balance">
          {question.title}
        </h2>

        {question.type === "choice" && (
          <div className="space-y-3">
            {question.options.map((opt, i) => {
              const isSel = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => handleChoice(i, opt.points)}
                  disabled={selected !== null}
                  className={`w-full text-left flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 ${
                    isSel
                      ? "border-tiktok-success bg-tiktok-success/15 scale-[0.98]"
                      : "border-border bg-secondary/40 hover:border-tiktok-cyan hover:bg-tiktok-cyan/5"
                  } ${selected !== null && !isSel ? "opacity-40" : ""}`}
                >
                  <span className={`flex-shrink-0 w-9 h-9 rounded-xl font-bold flex items-center justify-center text-sm ${
                    isSel ? "bg-tiktok-success text-white" : "bg-card text-tiktok-cyan border border-border"
                  }`}>
                    {opt.letter}
                  </span>
                  <span className="flex-1 text-sm font-medium">{opt.label}</span>
                  <span className="text-tiktok-pink text-lg">→</span>
                </button>
              );
            })}
          </div>
        )}

        {question.type === "stars" && (
          <div className="flex flex-col items-center gap-5 py-2">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onMouseEnter={() => setStars(n)}
                  onClick={() => {
                    setStars(n);
                    setTimeout(() => onAnswer(n), 350);
                  }}
                  className="text-5xl transition-transform hover:scale-125"
                >
                  <span
                    className={n <= stars ? "text-tiktok-gold drop-shadow-[0_0_8px_rgba(255,200,0,0.6)]" : "text-white/70"}
                    style={n <= stars ? undefined : { WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
                  >★</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full text-xs text-muted-foreground px-2">
              <span>{question.minLabel}</span>
              <span>{question.maxLabel}</span>
            </div>
          </div>
        )}

        {question.type === "text" && (
          <div className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={question.placeholder}
              rows={4}
              className="w-full p-4 rounded-2xl bg-secondary/40 border-2 border-border focus:border-tiktok-cyan focus:outline-none text-sm resize-none"
            />
            <button
              onClick={() => onAnswer(text.trim().length > 5 ? 5 : 3)}
              disabled={text.trim().length < 2}
              className="w-full py-4 rounded-2xl bg-gradient-cta text-white font-bold shadow-cta disabled:opacity-40 disabled:cursor-not-allowed transition-transform active:scale-[0.98]"
            >
              PRÓXIMA ➤
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function QuizShell({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
