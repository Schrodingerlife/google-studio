import React from 'react';

interface FiltersProps {
  categories: { value: string; label: string }[];
  currentFilters: { category: string; sort: string; searchQuery: string };
  onFilterChange: (filters: { category: string; sort: string; searchQuery: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ categories, currentFilters, onFilterChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...currentFilters, searchQuery: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...currentFilters, category: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...currentFilters, sort: e.target.value });
  };

  return (
    <div className="bg-slate-800 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center border border-slate-700">
      <div className="w-full md:flex-1">
        <label htmlFor="search-filter" className="block text-sm font-medium text-gray-300 mb-1">
          Buscar por Nome
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fas fa-search text-gray-400"></i>
          </span>
          <input
            type="text"
            id="search-filter"
            value={currentFilters.searchQuery}
            onChange={handleSearchChange}
            placeholder="Ex: Fone de ouvido, Sérum..."
            className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-2 pl-10 focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
      </div>
      <div className="w-full md:w-64">
        <label htmlFor="category-filter" className="block text-sm font-medium text-gray-300 mb-1">
          Filtrar por Categoria
        </label>
        <select
          id="category-filter"
          value={currentFilters.category}
          onChange={handleCategoryChange}
          className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-64">
        <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-300 mb-1">
          Ordenar por
        </label>
        <select
          id="sort-filter"
          value={currentFilters.sort}
          onChange={handleSortChange}
          className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500"
        >
          <option value="trending_score">Maior Trend Score</option>
          <option value="viral_potential">Maior Potencial Viral</option>
          <option value="monthly_sales">Mais Vendidos</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;