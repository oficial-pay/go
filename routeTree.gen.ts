export type Question =
  | {
      id: number;
      type: "choice";
      title: string;
      options: { letter: string; label: string; emoji?: string; points: number }[];
    }
  | {
      id: number;
      type: "stars";
      title: string;
      maxLabel?: string;
      minLabel?: string;
    }
  | {
      id: number;
      type: "text";
      title: string;
      placeholder: string;
    };

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: "choice",
    title: "Quantas vezes por dia você abre o TikTok? 👀",
    options: [
      { letter: "A", label: "Só de vez em quando (1-5x)", points: 2 },
      { letter: "B", label: "Toda hora que tenho um tempinho (6-15x)", points: 4 },
      { letter: "C", label: "Eu VIVO lá! Nem conto mais (20x+)", points: 5 },
      { letter: "D", label: "Abro pra ver uma coisa e fico 2h (Clássico)", points: 5 },
    ],
  },
  {
    id: 2,
    type: "stars",
    title: "De 1 a 5, o quanto o 'For You' te conhece melhor que seus amigos? 🤖",
    minLabel: "Nem tanto",
    maxLabel: "Lê minha mente",
  },
  {
    id: 3,
    type: "choice",
    title: "O que você mais assiste? 📺",
    options: [
      { letter: "A", label: "Dancinhas e Trends Virais 💃", points: 4 },
      { letter: "B", label: "Humor e Memes 😂", points: 4 },
      { letter: "C", label: "Dicas, Tutoriais e 'Aprenda no TikTok' 🧠", points: 5 },
      { letter: "D", label: "Unboxing, Reviews e comprinhas 🛍️", points: 5 },
    ],
  },
  {
    id: 4,
    type: "choice",
    title: "Você já comprou algo só porque viu no TikTok? (TikTok made me buy it!) 💸",
    options: [
      { letter: "A", label: "Sim, sou culpado(a)! 🙋‍♀️", points: 5 },
      { letter: "B", label: "Ainda não, mas quase... 🤔", points: 3 },
      { letter: "C", label: "Não, sou forte 💪", points: 2 },
    ],
  },
  {
    id: 5,
    type: "stars",
    title: "Qual nota você dá para as Lives de Compras (aquelas promoções relâmpago)? ⚡",
    minLabel: "Não curto",
    maxLabel: "Amo demais",
  },
  {
    id: 6,
    type: "choice",
    title: "Qual sua relação com anúncios no App? 📢",
    options: [
      { letter: "A", label: "Pulo todos instantaneamente ⏭️", points: 2 },
      { letter: "B", label: "Assisto se for criativo/engraçado 🎨", points: 4 },
      { letter: "C", label: "Às vezes clico pra ver o produto 👀", points: 5 },
      { letter: "D", label: "Adoro descobrir marcas novas 😍", points: 5 },
    ],
  },
  {
    id: 7,
    type: "text",
    title: "Se você pudesse mudar UMA coisa no TikTok hoje, o que seria? ✍️",
    placeholder: "Ex: Menos anúncios, vídeos mais longos...",
  },
  {
    id: 8,
    type: "choice",
    title: "Você pretende comprar na TikTok Shop nos próximos 30 dias? 🛒",
    options: [
      { letter: "A", label: "Com certeza! Tô de olho numas coisas", points: 5 },
      { letter: "B", label: "Talvez, se tiver cupom bom", points: 4 },
      { letter: "C", label: "Provavelmente não", points: 2 },
      { letter: "D", label: "Não uso pra compras", points: 1 },
    ],
  },
];

export function getLevel(score: number) {
  if (score >= 32)
    return {
      title: "TikToker Supremo",
      subtitle: "Você é #TeamTikTok nível PRO! 🔥",
      description:
        "Você domina as trends, conhece tudo do app e aproveita ao máximo. Um verdadeiro Creator em potencial!",
      level: 5,
      icon: "👑",
    };
  if (score >= 24)
    return {
      title: "TikToker Profissional",
      subtitle: "Usuário Curioso e Conectado! 👀",
      description:
        "Você curte o app, se diverte, mas ainda não foi totalmente abduzido pelo algoritmo. Equilíbrio é tudo!",
      level: 4,
      icon: "⭐",
    };
  if (score >= 16)
    return {
      title: "TikToker Casual",
      subtitle: "Nível Pro! 🏆",
      description:
        "Você curte o app, se diverte, mas ainda não foi totalmente abduzido pelo algoritmo. Equilíbrio é tudo!",
      level: 3,
      icon: "🎯",
    };
  return {
    title: "TikToker Iniciante",
    subtitle: "Turista no TikTok! ✈️",
    description:
      "Você passa por lá de vez em quando, mas prefere a vida offline ou outras redes. Tá tudo bem ser low profile!",
    level: 1,
    icon: "🌱",
  };
}

import iphone from "@/assets/products/iphone.jpg";
import jbl from "@/assets/products/jbl.jpg";
import applewatch from "@/assets/products/applewatch.jpg";
import galaxy from "@/assets/products/galaxy.jpg";
import ipad from "@/assets/products/ipad.jpg";
import macbook from "@/assets/products/macbook.jpg";
import tv from "@/assets/products/tv.jpg";
import ps5 from "@/assets/products/ps5.jpg";
import poco from "@/assets/products/poco.jpg";
import bike from "@/assets/products/bike.jpg";

export const PRODUCTS = [
  { name: "Apple iPhone 17 Pro Max (256 GB)", original: "R$9.499", redeemed: "842+", remaining: 9, image: iphone },
  { name: "Caixa de Som Bluetooth JBL Boombox 4", original: "R$2.399", redeemed: "415+", remaining: 25, image: jbl },
  { name: "Apple Watch Series 11 GPS 46mm", original: "R$2.499", redeemed: "670+", remaining: 17, image: applewatch },
  { name: "Smartphone Samsung Galaxy S25 5G (256GB)", original: "R$2.199", redeemed: "289+", remaining: 23, image: galaxy },
  { name: "Apple iPad 11 Geração A16 Wi-Fi (128GB)", original: "R$3.500", redeemed: "512+", remaining: 14, image: ipad },
  { name: 'MacBook Air M1 13" 8GB de RAM', original: "R$4.899", redeemed: "188+", remaining: 8, image: macbook },
  { name: 'Samsung AI TV 65" QLED', original: "R$3.500", redeemed: "320+", remaining: 11, image: tv },
  { name: "Sony PlayStation 5 Pro 2TB", original: "R$4.500", redeemed: "740+", remaining: 6, image: ps5 },
  { name: "Xiaomi Poco F7 512GB", original: "R$2.800", redeemed: "455+", remaining: 19, image: poco },
  { name: "Bicicleta Aro 29 Aço Carbono", original: "R$1.200", redeemed: "210+", remaining: 27, image: bike },
];
