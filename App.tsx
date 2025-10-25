import React, { useState, useEffect, useMemo } from 'react';
import type { TrendingProduct } from './types';
import { MOCK_PRODUCTS, MOCK_KPIS, CATEGORIES } from './constants';
import { generateMarketingStrategy } from './services/geminiService';
import Dashboard from './components/Dashboard';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import RecommendationModal from './components/RecommendationModal';
import NewProductAlert from './components/NewProductAlert'; // Import the new component
import { SparklesIcon } from './components/icons/SparklesIcon';

const App: React.FC = () => {
  const [products, setProducts] = useState<TrendingProduct[]>([]);
  const [filters, setFilters] = useState({ category: 'all', sort: 'trending_score', searchQuery: '' });
  const [selectedProduct, setSelectedProduct] = useState<TrendingProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [isLoadingRecommendation, setIsLoadingRecommendation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newProductAlert, setNewProductAlert] = useState<TrendingProduct | null>(null); // State for the alert

  useEffect(() => {
    // Simulate fetching data on mount
    setProducts(MOCK_PRODUCTS);

    // In a real app, you'd compare new data with old to find "new" products.
    // For this demo, we'll find a product with a score > 95 and show an alert for it.
    const highTrendProduct = MOCK_PRODUCTS.find(p => p.trending_score > 95);

    if (highTrendProduct) {
      // Use a timeout to make the notification appear after the page has loaded, making it more noticeable.
      const timer = setTimeout(() => {
        setNewProductAlert(highTrendProduct);
      }, 1500);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (filters.searchQuery.trim() !== '') {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    return [...filtered].sort((a, b) => {
      if (filters.sort === 'trending_score') {
        return b.trending_score - a.trending_score;
      }
      if (filters.sort === 'viral_potential') {
        return b.viral_potential - a.viral_potential;
      }
      if (filters.sort === 'monthly_sales') {
        return b.sales_metrics.monthly_sales - a.sales_metrics.monthly_sales;
      }
      return 0;
    });
  }, [products, filters]);

  const handleGenerateStrategy = async (product: TrendingProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsLoadingRecommendation(true);
    setRecommendation('');
    setError(null);
    try {
      const result = await generateMarketingStrategy(product);
      setRecommendation(result);
    } catch (e) {
      console.error(e);
      setError('Falha ao gerar a estratégia. Por favor, tente novamente.');
    } finally {
      setIsLoadingRecommendation(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setRecommendation('');
    setError(null);
  };
  
  const handleDismissAlert = () => {
    setNewProductAlert(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      {newProductAlert && (
        <NewProductAlert product={newProductAlert} onDismiss={handleDismissAlert} />
      )}

      <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SparklesIcon className="w-8 h-8 text-cyan-400" />
            <h1 className="text-2xl font-bold text-white tracking-tight">Shopee Viral Analytics Pro</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Dashboard kpis={MOCK_KPIS} />

        <div className="my-8">
          <Filters
            categories={CATEGORIES}
            currentFilters={filters}
            onFilterChange={setFilters}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.product_id}
              product={product}
              onGenerateStrategy={handleGenerateStrategy}
            />
          ))}
        </div>
      </main>
      
      {isModalOpen && selectedProduct && (
        <RecommendationModal
          product={selectedProduct}
          recommendation={recommendation}
          isLoading={isLoadingRecommendation}
          error={error}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;