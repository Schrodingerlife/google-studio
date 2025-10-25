import React from 'react';
import type { TrendingProduct } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface ProductCardProps {
  product: TrendingProduct;
  onGenerateStrategy: (product: TrendingProduct) => void;
}

const StatChip: React.FC<{ icon: string; label: string; value: string | number; color: string; }> = ({ icon, label, value, color }) => (
    <div className="flex items-center gap-2 bg-slate-700/50 rounded-full px-3 py-1 text-xs cursor-pointer">
        <i className={`${icon} ${color}`}></i>
        <span className="text-gray-300">{label}:</span>
        <span className="font-bold text-white">{value}</span>
    </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, onGenerateStrategy }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl border border-slate-700 flex flex-col transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-600 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image_urls[0]}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
          {product.price.discount_percentage}% OFF
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-cyan-400 font-semibold uppercase">{product.category.replace('_', ' ')}</p>
        <h3 className="text-lg font-bold text-white mt-1 mb-2 flex-grow">{product.name}</h3>

        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-2xl font-extrabold text-cyan-400">R$ {product.price.current.toFixed(2)}</p>
          <p className="text-sm text-gray-500 line-through">R$ {product.price.original.toFixed(2)}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
            <StatChip icon="fas fa-arrow-trend-up" label="Trend" value={product.trending_score} color="text-green-400" />
            <StatChip icon="fas fa-fire" label="Viral" value={product.viral_potential} color="text-orange-400" />
            
            {/* Tooltip for Sales Metrics */}
            <div className="relative group">
                <StatChip icon="fas fa-shopping-cart" label="Vendas" value={`${(product.sales_metrics.monthly_sales / 1000).toFixed(1)}k`} color="text-blue-400" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-slate-900 text-sm text-gray-300 rounded-md shadow-lg p-3 border border-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <h4 className="font-bold text-white mb-2 text-base border-b border-slate-700 pb-1">Métricas de Vendas</h4>
                    <ul className="space-y-1.5 text-left">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-chart-line w-4 text-center text-gray-400"></i>
                            <span>Vendas Mensais: <strong className="text-white">{product.sales_metrics.monthly_sales.toLocaleString('pt-BR')}</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-star w-4 text-center text-yellow-400"></i>
                            <span>Avaliação: <strong className="text-white">{product.sales_metrics.rating.toFixed(1)} / 5.0</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-comment-dots w-4 text-center text-gray-400"></i>
                            <span>Nº de Avaliações: <strong className="text-white">{product.sales_metrics.number_of_reviews.toLocaleString('pt-BR')}</strong></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <button
          onClick={() => onGenerateStrategy(product)}
          className="mt-auto w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <SparklesIcon className="w-5 h-5" />
          Gerar Estratégia de Marketing
        </button>
      </div>
    </div>
  );
};

export default ProductCard;