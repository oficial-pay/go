import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/quiz-data";

export function Products() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl sm:text-3xl font-black text-gradient-tiktok mb-2">
          🔓 Prêmios Desbloqueados!
        </h1>
        <p className="text-sm text-muted-foreground">
          Produto grátis — pague apenas o frete!
        </p>
        <p className="text-xs text-tiktok-pink mt-1">
          Apenas 1 produto por pessoa. Resgate rápido!
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col"
          >
            <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-tiktok-pink text-white text-[10px] font-black">
              -100%
            </div>
            <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-gradient-gold text-black text-[10px] font-black flex items-center gap-1">
              🔥 LIMITADO
            </div>
            <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" width={512} height={512} className="w-full h-full object-contain p-2" />
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-xs font-bold leading-tight line-clamp-2 mb-2 min-h-[2.5rem]">
                {p.name}
              </h3>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-tiktok-pink font-black text-lg">R$0,00</span>
                <span className="text-[10px] text-muted-foreground line-through">{p.original}</span>
              </div>
              <p className="text-[10px] text-muted-foreground mb-1">
                <span className="text-tiktok-success font-bold">{p.redeemed}</span> resgataram
              </p>
              <div className="flex items-center gap-1 text-[10px] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tiktok-success animate-pulse" />
                <span className="text-tiktok-orange font-bold">⚡ Restam {p.remaining}%</span>
                <span className="text-muted-foreground ml-auto">Esgotando</span>
              </div>
              <div className="h-1 rounded-full bg-secondary overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-cta"
                  style={{ width: `${100 - p.remaining}%` }}
                />
              </div>
              <button
                onClick={() => {
                  // CHECKOUT: usuário implementará — placeholder
                  window.location.href = `/checkout?produto=${encodeURIComponent(p.name)}`;
                }}
                className="mt-auto w-full py-2.5 rounded-xl bg-gradient-cta text-white text-xs font-bold shadow-cta active:scale-[0.97] transition-transform"
              >
                🎁 RESGATAR
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-muted-foreground space-y-1">
        <p>🔒 Seus dados são protegidos com a mesma tecnologia dos bancos</p>
        <p>📦 Entrega em até 3 dias úteis</p>
      </div>
    </div>
  );
}
