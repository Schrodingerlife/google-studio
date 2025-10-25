
import React from 'react';
import type { TrendingProduct } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface RecommendationModalProps {
  product: TrendingProduct;
  recommendation: string;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
        <p className="text-lg font-semibold text-gray-200">Gerando estratégia com IA...</p>
        <p className="text-sm text-gray-400">Aguarde um momento, estamos criando a melhor campanha para o seu produto.</p>
    </div>
);

const RecommendationModal: React.FC<RecommendationModalProps> = ({
  product,
  recommendation,
  isLoading,
  error,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-4 border-b border-slate-700 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <SparklesIcon className="w-6 h-6 text-cyan-400"/>
            <h2 className="text-xl font-bold text-white">Estratégia de Marketing para: <span className="text-cyan-400">{product.name}</span></h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </header>
        
        <main className="p-6 overflow-y-auto">
          {isLoading && <LoadingSpinner />}
          {error && (
            <div className="text-center p-6 bg-red-900/50 border border-red-700 rounded-lg">
                <i className="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
                <p className="text-lg font-semibold text-red-300">Ocorreu um Erro</p>
                <p className="text-red-400">{error}</p>
            </div>
            )}
          {!isLoading && !error && recommendation && (
            <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-cyan-400 prose-strong:text-white prose-blockquote:border-l-cyan-500">
               {recommendation.split('\n').map((line, index) => {
                  if (line.startsWith('**')) {
                    return <h3 key={index} className="font-bold text-lg mt-4 mb-2 text-cyan-400">{line.replace(/\*\*/g, '')}</h3>;
                  }
                  if (line.startsWith('* ') || line.startsWith('- ')) {
                    return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
                  }
                   if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.') || line.startsWith('5.') || line.startsWith('6.') || line.startsWith('7.')) {
                     const title = line.substring(line.indexOf(' ')+1).replace(/\*\*/g, '');
                     return <h3 key={index} className="font-bold text-lg mt-4 mb-2 text-cyan-400">{title}</h3>;
                   }
                  return <p key={index} className="my-2">{line}</p>;
               })}
            </div>
          )}
        </main>
        
        <footer className="p-4 border-t border-slate-700 flex-shrink-0 text-right">
            <button onClick={onClose} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-md transition-colors">
                Fechar
            </button>
        </footer>
      </div>
    </div>
  );
};

export default RecommendationModal;
