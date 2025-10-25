import React from 'react';
import type { TrendingProduct } from '../types';

interface NewProductAlertProps {
  product: TrendingProduct;
  onDismiss: () => void;
}

const NewProductAlert: React.FC<NewProductAlertProps> = ({ product, onDismiss }) => {
  const shopeeSearchUrl = `https://shopee.com.br/search?keyword=${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 text-center relative animate-slide-down z-30">
      <div className="container mx-auto flex items-center justify-center gap-3 sm:gap-4 px-8">
          <i className="fas fa-fire text-xl animate-pulse flex-shrink-0"></i>
          <p className="text-sm sm:text-base text-left sm:text-center flex-grow">
            <span className="font-semibold hidden sm:inline">Alerta de Tendência:</span>
            <span className="font-semibold sm:hidden">Novo Produto:</span>
            <span className="ml-1">
              "
              <a 
                href={shopeeSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-cyan-200 transition-colors"
              >
                {product.name}
              </a>
              " está viralizando com score de {product.trending_score}!
            </span>
          </p>
          <button onClick={onDismiss} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
      </div>
    </div>
  );
};

export default NewProductAlert;
