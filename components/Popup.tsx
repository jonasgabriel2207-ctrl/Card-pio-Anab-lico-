
import React from 'react';
import Button from './Button';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white text-[#0D3B66] w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h2 className="text-2xl font-black text-center mb-4 uppercase leading-tight">
          🔥 Upgrade Especial por Tempo Limitado
        </h2>

        <img 
          src="https://infostart.shop/wp-content/uploads/2026/01/CARDAPIO-ANABOLICO-4-1.webp" 
          alt="Upgrade Special" 
          className="w-[55%] h-auto mx-auto mb-6"
        />
        
        <p className="text-center font-medium mb-8 text-lg">
          Por apenas <span className="font-black text-red-600 underline">R$ 19</span> você desbloqueia acesso vitalício + todos os bônus exclusivos.
        </p>

        <div className="space-y-4">
          <Button 
            variant="green"
            href="https://pay.lowify.com.br/go.php?offer=wn5bk0o"
            className="text-sm px-2 py-4"
          >
            QUERO O PREMIUM COM DESCONTO!
          </Button>

          <button 
            onClick={() => window.location.href = "https://pay.lowify.com.br/checkout?product_id=xOOEsC"}
            className="w-full text-center text-gray-500 underline text-sm font-bold uppercase hover:text-gray-700 transition-colors"
          >
            quero so a oferta básica
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
