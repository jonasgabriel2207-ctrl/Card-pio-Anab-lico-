
import React, { useState } from 'react';
import Button from './components/Button';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';
import Popup from './components/Popup';
import { FAQItem, ProductFeature, BonusItem } from './types';

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const faqItems: FAQItem[] = [
    {
      question: "Esse cardápio funciona mesmo para quem tem dificuldade em ganhar massa?",
      answer: "Sim! O cardápio foi desenvolvido estrategicamente com alta densidade calórica e as proporções ideais de macronutrientes para forçar o corpo ao estado anabólico."
    },
    {
      question: "Preciso usar suplementos para ter resultado?",
      answer: "Não. O plano é baseado 100% em comida real. Os suplementos são opcionais para quem busca praticidade, mas o foco é nutrição de verdade."
    },
    {
      question: "Esse cardápio serve para iniciantes?",
      answer: "Totalmente. Ele é perfeito para quem está começando e não quer perder tempo errando na dieta."
    },
    {
      question: "Os ingredientes são fáceis de encontrar?",
      answer: "Sim, utilizamos alimentos comuns do dia a dia que você encontra em qualquer supermercado, sem frescuras ou ingredientes caros."
    },
    {
      question: "As receitas são fáceis de fazer?",
      answer: "Sim, todas as refeições foram pensadas na praticidade. Temos opções rápidas para quem tem a vida corrida."
    },
    {
      question: "Como vou receber o acesso ao material?",
      answer: "Assim que o pagamento for confirmado, você receberá o link de acesso diretamente no seu e-mail e no seu WhatsApp."
    },
    {
      question: "É seguro fazer a compra?",
      answer: "Sim. Utilizamos as plataformas de pagamento mais seguras do Brasil, com criptografia de ponta a ponta."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos Pix, cartão de crédito e boleto bancário."
    }
  ];

  const features: ProductFeature[] = [
    {
      title: "Refeições Anabólicas",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-41.webp",
      description: "A combinação de carboidratos e proteínas perfeita para hipertrofia."
    },
    {
      title: "Shakes Proteicos",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-42.webp",
      description: "Bebidas proteicas para manutenção dos músculos e definição."
    },
    {
      title: "Refeições Práticas",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-43.webp",
      description: "Refeições rápidas e prontas com frutas, cereais, pães, laticínios... sem precisar preparar nada, para facilitar sua rotina e ter prazer em comer."
    },
    {
      title: "Vitaminas Hipercalóricas",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-44.webp",
      description: "Bebidas dos Deuses para ganhar músculos mais rápido."
    },
    {
      title: "Cardápios para Cutting e Bulking",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-45.webp",
      description: "Cardápios práticos e variados para o dia todo."
    }
  ];

  const bonuses: BonusItem[] = [
    {
      number: "01",
      title: "FÓRMULA DA MASSA MUSCULAR",
      description: "Todas as dicas fundamentais que eu queria ter recebido quando comecei a treinar para ter resultados rápidos.",
      oldPrice: "R$ 47,00",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-48.webp"
    },
    {
      number: "02",
      title: "RECEITAS ANABÓLICAS",
      description: "receitas altamente nutritivas e calculadas. Com preparo simples e prático para você inserir na alimentação.",
      oldPrice: "R$ 29,90",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-47.webp"
    },
    {
      number: "03",
      title: "GUIA DA SUPLEMENTAÇÃO",
      description: "Descubra quais suplementos realmente funcionam, quando usar e como combinar para potencializar o ganho de massa muscular.",
      oldPrice: "R$ 17,00",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-_49_.webp"
    },
    {
      number: "04",
      title: "CALCULADORA AUTOMÁTICA DE CALORIAS E MACROS COMPLETA",
      description: "Desenvolvemos uma calculadora automática de Calorias e também de carboidratos, proteínas e gorduras para facilitar sua vida com base na ciência.",
      oldPrice: "R$ 19,90",
      imageUrl: "https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-_51_.webp"
    }
  ];

  const resultsImages = [
    "https://infostart.shop/wp-content/uploads/2026/01/CARDAPIO-ANABOLICO-_1_.webp",
    "https://infostart.shop/wp-content/uploads/2026/01/CARDAPIO-ANABOLICO-_2_.webp",
    "https://infostart.shop/wp-content/uploads/2026/01/CARDAPIO-ANABOLICO-_3_.webp",
    "https://infostart.shop/wp-content/uploads/2026/01/CARDAPIO-ANABOLICO.webp"
  ];

  const handleCTA = () => {
    const el = document.getElementById('offers-selection');
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-[1.15] uppercase">
          GANHE MASSA MUSCULAR MAIS RÁPIDO COM UM <span className="text-blue-highlight">CARDÁPIO ANABÓLICO SIMPLE E PRONTO!</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-white/80 mb-10 max-w-2xl mx-auto">
          O plano alimentar ideal para quem treina, mas não vê resultados mesmo sem suplementos caros ou dietas complicadas.
        </p>
        <div className="relative mb-10 max-w-sm mx-auto">
          <img 
            src="https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-40.webp" 
            alt="Product Preview" 
            className="w-full h-auto"
          />
        </div>

        {/* 2. BLOCO DE PREÇO PRINCIPAL (ALTO IMPACTO) */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-md mx-auto shadow-2xl">
          <p className="text-xl font-bold mb-1">
            <span className="text-white">DE </span>
            <span className="text-[#FF0010]">R$97,00</span>
            <span className="text-white"> POR:</span>
          </p>
          <p className="text-6xl font-black text-neon-green mb-8 tracking-tighter">R$ 10,00</p>
          
          <Button onClick={handleCTA} className="mb-6">
            QUERO acessar AGORA!
          </Button>

          <div className="flex flex-col items-center gap-3 text-sm font-bold text-white/80">
            <div className="flex items-center gap-2">
              <svg className="text-neon-green" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Pagamento Único
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-neon-green" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Sem Mensalidade
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-neon-green" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Acesso Vitalício
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOCO DE DOR */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-dark-blue text-2xl md:text-3xl font-black mb-8 leading-tight uppercase">
          VOCÊ TREINA FIRME, FAZ MUSCULAÇÃO TODA SEMANA, MAS O CORPO NÃO RESPONDE.
        </h2>
        
        <div className="mb-10 max-w-xs mx-auto">
          <img 
            src="https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-38.png" 
            alt="Frustration Icon" 
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-4 mb-10 text-dark-blue">
          {["O braço não cresce.", "O peito não enche.", "O peso mal sobe."].map((text, i) => (
            <div key={i} className="flex items-center justify-center gap-3 font-bold text-lg">
              <div className="w-6 h-6 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-xs font-black">X</div>
              {text}
            </div>
          ))}
        </div>

        <p className="text-dark-blue text-xl md:text-2xl font-black uppercase leading-tight">
          o problema não é o treino. É a <span className="text-red-600">alimentação errada</span> para crescimento muscular.
        </p>
      </section>

      {/* 3. SEÇÃO DE APRESENTAÇÃO */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-black mb-10 leading-tight uppercase">
          O CARDÁPIO ANABÓLICO PARA CRESCER RÁPIDO É UM PLANO ALIMENTAR SIMPLES, DIRETO E TESTADO, CRIADO PARA:
        </h2>

        <div className="space-y-5 mb-12 max-w-lg mx-auto text-left">
          {[
            "Quem quer ganhar massa muscular",
            "Quem não sabe o que comer para crescer",
            "Quem está cansado de errar nas quantidades"
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 text-lg font-bold">
              <div className="mt-1 bg-neon-green text-black rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              {text}
            </div>
          ))}
        </div>

        <div className="bg-blue-highlight/10 border border-blue-highlight/30 rounded-2xl p-6 mb-12 inline-block">
          <p className="text-xl md:text-2xl font-black leading-tight text-white uppercase">
            Aqui você não <span className="text-blue-highlight">inventa dieta.</span><br/>
            Você <span className="text-neon-green">Segue o Cardápio já Pronto.</span>
          </p>
        </div>

        {/* 5. BENEFÍCIOS */}
        <h3 className="text-2xl font-black mb-8 uppercase text-blue-highlight">Com o Cardápio Anabólico, você vai:</h3>
        
        <div className="space-y-6 mb-12 max-w-lg mx-auto text-left">
          {[
            "Comer a quantidade certa para ganhar massa",
            "Aumentar força e volume muscular",
            "Parar de desperdiçar treino por erro alimentar",
            "Ter mais energia e recuperação muscular",
            "Ganhar massa sem ganhar gordura desnecessária"
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4 text-lg font-bold bg-white/5 p-4 rounded-xl">
              <div className="text-blue-highlight mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              </div>
              {text}
            </div>
          ))}
        </div>

        <Button onClick={handleCTA} className="mb-6">
          QUERO acessar AGORA!
        </Button>
      </section>

      {/* 4. SEÇÃO WHATSAPP / ENTREGA */}
      <section className="bg-white py-16 px-6 text-center">
        <p className="text-[#0D3B66] text-lg font-bold uppercase mb-12">
          receba os cardápios pelo seu WhatsApp e e-mail e acesse como preferir
        </p>
        <div className="max-w-md mx-auto">
          <img src="https://infostart.shop/wp-content/uploads/2026/01/TABLE.webp" alt="Multi-device access" className="w-full h-auto" />
        </div>
      </section>

      {/* 5. SEÇÃO “OS CARDÁPIOS TEM COMO BASE…” */}
      <section className="bg-white/5 py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="font-black uppercase mb-4 leading-tight" style={{ fontSize: '19px' }}>
            os Cardápios TEM COMO BASE ALIMENTOS Simples e práticos que você tem em casa, são receitas como:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((item, i) => (
            <div key={i} className="border-2 border-dashed border-blue-highlight/40 rounded-3xl p-6 bg-black/40 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-blue-highlight mb-3 uppercase">{item.title}</h3>
              <p className="text-white/70 font-medium leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CABEÇALHO DOS BÔNUS */}
      <section className="bg-custom-blue py-10 px-6 text-center text-white">
        <h2 className="font-black uppercase mb-2" style={{ fontSize: '30px' }}>4 SUPER BÔNUS EXCLUSIVOS</h2>
        <p className="font-bold" style={{ fontSize: '17px' }}>
          Leve Mais 3 Bônus na <span className="underline">Super Oferta!</span>
        </p>
      </section>

      {/* 7. SEÇÃO DOS CARDS DE BÔNUS */}
      <section className="py-16 px-6 bg-black">
        <div className="space-y-12 max-w-md mx-auto">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 text-dark-blue shadow-2xl flex flex-col items-center text-center border-[3px] border-dashed border-custom-blue relative">
              <p className="text-sm font-black uppercase mb-1 text-dark-blue/80">Bônus Exclusivo {bonus.number}</p>
              <p className="text-xs font-bold uppercase mb-4 tracking-widest text-dark-blue/50 italic">Super Oferta</p>
              
              <div className="w-40 h-40 mb-6">
                <img src={bonus.imageUrl} alt={bonus.title} className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-2xl font-black mb-4 leading-tight uppercase">{bonus.title}</h3>
              <p className="text-sm font-medium mb-6 leading-relaxed opacity-80">{bonus.description}</p>
              
              <div className="border-t border-dark-blue/10 pt-6 w-full">
                <p className="text-lg font-bold text-red-600 line-through mb-1">De {bonus.oldPrice}</p>
                <p className="text-2xl font-black text-price-green">Você leva de Graça!</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SEÇÃO RESULTADOS */}
      <section className="py-20 px-6 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase text-white leading-tight">
            RESULTADOS DE QUEM SEGUIU O PROGRAMA:
          </h2>
        </div>
        <Carousel images={resultsImages} />
      </section>

      {/* 💰 SEÇÃO DE OFERTAS TITLE (AZUL #1F6ABF) */}
      <section id="offers-selection" className="py-10 px-6 bg-[#1F6ABF] text-center">
        <h2 className="text-[24px] font-black text-white uppercase leading-tight">
          ESCOLHA A MELHOR OPÇÃO PARA VOCÊ:
        </h2>
      </section>

      {/* 💰 SEÇÃO DE OFERTAS CARDS (PRETO #000000) */}
      <section id="offers" className="py-20 px-6 bg-black">
        <div className="flex flex-col gap-12 max-w-md mx-auto">
          {/* OFERTA BÁSICA */}
          <div className="bg-white rounded-[40px] p-8 text-dark-blue shadow-2xl flex flex-col items-center">
            <h3 className="text-2xl font-black mb-6 uppercase text-center">Básico <span className="text-red-600">sem os bônus</span></h3>
            
            <img src="https://infostart.shop/wp-content/uploads/2026/01/Design-sem-nome-_50_.webp" alt="Oferta Básica" className="w-full h-auto mb-8" />
            
            <ul className="w-full space-y-3 mb-10">
              <li className="flex items-center gap-2 font-bold text-sm">
                <svg className="text-price-green shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Cardápio Anabólico para Crescer Rápido
              </li>
              <li className="flex items-center gap-2 font-bold text-sm">
                <svg className="text-price-green shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                1 Ano de Acesso sem Atualizações
              </li>
            </ul>

            <div className="text-center mb-8">
              <p className="text-lg font-bold uppercase opacity-80 mb-1">Você vai investir somente...</p>
              <p className="text-6xl font-black text-price-green tracking-tight">R$10</p>
            </div>

            <Button variant="neon" onClick={() => setIsPopupOpen(true)}>
              quero apenas o básico
            </Button>
          </div>

          {/* SUPER OFERTA R$27 */}
          <div className="bg-white rounded-[40px] p-8 text-dark-blue shadow-2xl flex flex-col items-center border-[6px] border-[#009300] relative transform scale-105">
            <div className="absolute -top-6 bg-neon-green text-black px-6 py-2 rounded-full font-black uppercase text-sm shadow-xl">O mais vendido</div>
            
            <h3 className="text-2xl font-black mb-6 uppercase text-center mt-2 leading-tight">SUPER OFERTA COM BÔNUS EXCLUSIVOS!</h3>
            
            <img src="https://infostart.shop/wp-content/uploads/2026/01/CARDAPIO-ANABOLICO-4-1.webp" alt="Super Oferta" className="w-full h-auto mb-8" />
            
            <ul className="w-full space-y-3 mb-8">
              {[
                "Cardápio Anabólico para Crescer Rápido",
                "Acesso Vitalício + Atualizações",
                "Fórmula da Massa Muscular",
                "Receitas anabólicas",
                "Guia da Suplementação",
                "Garantia incondicional de 7 dias",
                "Calculadora Automática de Calorias"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 font-bold text-sm">
                  <svg className="text-price-green shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-8">
              <p className="font-bold uppercase mb-1" style={{ fontSize: '17px', color: '#000000' }}>
                DE <span className="text-[#FF0010] line-through">R$ 197,80</span> você vai investir só hoje apenas...
              </p>
              <p className="text-7xl font-black text-price-green tracking-tight">R$27</p>
            </div>

            <Button variant="neon" href="https://pay.lowify.com.br/checkout?product_id=Ax7tIB" className="mb-4">
              QUERO ADQUIRIR TUDO AGORA!
            </Button>

            <p className="text-[10px] font-black uppercase text-center text-dark-blue/60 leading-relaxed italic">
              Esse é o mais vantajoso! Aproveite agora, você não vai encontrar essa oferta depois.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FUNDO DA SEÇÃO ABAIXO DAS OFERTAS (PRETO) */}
      <div className="bg-black">
        {/* 🛡 SEÇÃO GARANTIA */}
        <section className="py-20 px-6 bg-white text-center">
          <img 
            src="https://infostart.shop/wp-content/uploads/2025/07/risco-zero-oab-1.png" 
            alt="Garantia" 
            className="h-auto mx-auto mb-8" 
            style={{ width: '70px' }}
          />
          <h2 className="text-[#000000] text-3xl font-black uppercase mb-8">Experimente por <span className="text-blue-highlight">7 Dias!</span></h2>
          
          <div className="max-w-2xl mx-auto text-[#000000] font-medium text-lg leading-relaxed space-y-4">
            <p>Ainda não tem certeza? Não se preocupe.</p>
            <p>Se o conteúdo descrito acima não for o mesmo que você receber, você tem <strong>7 dias de garantia</strong> e devolvemos seu dinheiro sem burocracia!</p>
            <p>Lembrando que seu acesso a plataforma é vitalício e sempre estamos incluindo Atualizações.</p>
          </div>
        </section>

        {/* ❓ FAQ */}
        <section className="py-20 px-6 bg-black">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-white leading-tight">PERGUNTAS FREQUENTES</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-16">
            <Accordion items={faqItems} />
          </div>

          <div className="max-w-md mx-auto">
            <Button onClick={handleCTA}>
              QUERO acessar AGORA!
            </Button>
          </div>
        </section>

        <footer className="py-12 bg-black border-t border-white/10 text-center text-white/40 text-xs font-bold uppercase tracking-widest px-6">
          &copy; {new Date().getFullYear()} CARDÁPIO ANABÓLICO - TODOS OS DIREITOS RESERVADOS
        </footer>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default App;
