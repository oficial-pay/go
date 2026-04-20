import { motion } from "framer-motion";
import { getLevel } from "@/lib/quiz-data";

interface Props {
  score: number;
  streak: number;
  onRedeem: () => void;
}

export function Result({ score, streak, onRedeem }: Props) {
  const level = getLevel(score);
  const xp = 800 + score * 5;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="rounded-3xl bg-card border border-border p-6 text-center shadow-glow-magenta">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center text-4xl mb-3"
        >
          {level.icon}
        </motion.div>
        <h2 className="text-2xl font-bold text-tiktok-gold">{level.title}</h2>
        <p className="text-sm text-muted-foreground mb-6">Nível {level.level}</p>

        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Seu resultado:</p>
        <div className="relative mx-auto w-40 h-40 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-tiktok opacity-20 blur-xl" />
          <div className="absolute inset-0 rounded-full border-4 border-tiktok-cyan/40" />
          <div className="absolute inset-2 rounded-full border-4 border-tiktok-magenta/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-gradient-tiktok">{score}</span>
            <span className="text-xs text-muted-foreground">pontos</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tiktok-orange/20 text-tiktok-orange font-bold text-sm mb-6">
          🔥 Maior Sequência: {streak}x
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-sm">👑 {level.title}</span>
          <span className="font-bold text-tiktok-gold text-sm">{xp} XP</span>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden mb-1">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, (xp / 1200) * 100)}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-gold"
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mb-6">
          <span>{xp} / 1200 XP</span>
          <span>Próximo: 💎 Mestre TikToker</span>
        </div>

        <h3 className="text-lg font-bold text-tiktok-gold mb-2">{level.subtitle}</h3>
        <p className="text-sm text-muted-foreground mb-6">{level.description}</p>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <Stat icon="🎯" label="Quiz" value="Completo" color="text-tiktok-success" />
          <Stat icon="⚡" label="Tempo" value="Rápido" color="text-tiktok-cyan" />
          <Stat icon="🔓" label="Prêmios" value="Liberados" color="text-tiktok-pink" />
        </div>

        <div className="rounded-2xl border-2 border-tiktok-success/40 bg-tiktok-success/10 p-4 mb-4 flex items-center gap-3">
          <span className="text-3xl">🎁</span>
          <div className="text-left">
            <p className="font-bold text-tiktok-success">RECOMPENSA DESBLOQUEADA!</p>
            <p className="text-xs text-tiktok-success/80">Você ganhou acesso a produtos exclusivos</p>
          </div>
        </div>

        <button
          onClick={onRedeem}
          className="w-full py-4 rounded-2xl bg-gradient-cta text-white font-bold text-lg shadow-cta animate-pulse-glow active:scale-[0.98] transition-transform"
        >
          🎁 RESGATAR MEU PRÊMIO
        </button>
        <p className="text-xs text-muted-foreground mt-3">
          🔴 Oferta expira em breve • Resgate agora!
        </p>
      </div>
    </motion.div>
  );
}

function Stat({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl bg-secondary/50 border border-border p-3">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className={`text-xs font-bold ${color}`}>{value}</div>
    </div>
  );
}
