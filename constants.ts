import type { TrendingProduct, Kpi } from './types';

export const CATEGORIES: { value: string; label: string }[] = [
  { value: 'all', label: 'Todas as Categorias' },
  { value: 'health_wellness', label: 'Saúde e Bem-estar' },
  { value: 'electronics', label: 'Eletrônicos' },
  { value: 'home_living', label: 'Casa e Decoração' },
  { value: 'beauty_care', label: 'Beleza e Cuidado Pessoal' },
  { value: 'fashion', label: 'Moda' },
  { value: 'toys_games', label: 'Brinquedos e Jogos' },
];

export const MOCK_KPIS: Kpi[] = [
  {
    label: "Produtos em Tendência",
    value: "1,2k+",
    icon: "fa-solid fa-arrow-trend-up",
    description: "Total de produtos com alto potencial."
  },
  {
    label: "Vídeos Virais Detectados",
    value: "47",
    icon: "fa-brands fa-tiktok",
    description: "Vídeos com produtos monitorados."
  },
  {
    label: "Score Médio de Viralidade",
    value: "89.5",
    icon: "fa-solid fa-fire",
    description: "Potencial médio de viralização."
  },
  {
    label: "Potencial de Alcance",
    value: "25M+",
    icon: "fa-solid fa-users",
    description: "Estimativa de alcance combinado."
  }
];

export const MOCK_PRODUCTS: TrendingProduct[] = [
  {
    product_id: "12345678",
    name: "Suplemento Multivitamínico Premium",
    category: "health_wellness",
    price: {
      current: 89.90,
      original: 149.90,
      discount_percentage: 40,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 5420,
      rating: 4.9,
      number_of_reviews: 1204
    },
    trending_score: 92,
    viral_potential: 88,
    optimal_tiktok_content_type: "tutorial",
    image_urls: ["https://picsum.photos/id/102/400/400"]
  },
  {
    product_id: "23456789",
    name: "Fone de Ouvido Bluetooth TWS 5.3",
    category: "electronics",
    price: {
      current: 129.99,
      original: 259.99,
      discount_percentage: 50,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 8910,
      rating: 4.8,
      number_of_reviews: 3450
    },
    trending_score: 95,
    viral_potential: 91,
    optimal_tiktok_content_type: "unboxing",
    image_urls: ["https://picsum.photos/id/106/400/400"]
  },
  {
    product_id: "34567890",
    name: "Luminária de Mesa LED Inteligente",
    category: "home_living",
    price: {
      current: 199.00,
      original: 299.00,
      discount_percentage: 33,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 3200,
      rating: 4.9,
      number_of_reviews: 890
    },
    trending_score: 88,
    viral_potential: 85,
    optimal_tiktok_content_type: "lifestyle",
    image_urls: ["https://picsum.photos/id/119/400/400"]
  },
  {
    product_id: "45678901",
    name: "Sérum Facial Vitamina C Anti-idade",
    category: "beauty_care",
    price: {
      current: 59.90,
      original: 99.90,
      discount_percentage: 40,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 12500,
      rating: 4.9,
      number_of_reviews: 5600
    },
    trending_score: 98,
    viral_potential: 96,
    optimal_tiktok_content_type: "before_after",
    image_urls: ["https://picsum.photos/id/129/400/400"]
  },
  {
    product_id: "56789012",
    name: "Tênis Esportivo Leve e Flexível",
    category: "fashion",
    price: {
      current: 179.90,
      original: 329.90,
      discount_percentage: 45,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 6800,
      rating: 4.7,
      number_of_reviews: 2100
    },
    trending_score: 90,
    viral_potential: 89,
    optimal_tiktok_content_type: "challenge",
    image_urls: ["https://picsum.photos/id/146/400/400"]
  },
  {
    product_id: "67890123",
    name: "Kit Potes Herméticos de Vidro (5 Peças)",
    category: "home_living",
    price: {
      current: 119.90,
      original: 199.90,
      discount_percentage: 40,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 4100,
      rating: 5.0,
      number_of_reviews: 1500
    },
    trending_score: 89,
    viral_potential: 92,
    optimal_tiktok_content_type: "asmr",
    image_urls: ["https://picsum.photos/id/180/400/400"]
  },
   {
    product_id: "78901234",
    name: "Câmera de Segurança Wi-Fi 360° Full HD",
    category: "electronics",
    price: {
      current: 159.90,
      original: 299.90,
      discount_percentage: 47,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 7200,
      rating: 4.8,
      number_of_reviews: 2800
    },
    trending_score: 93,
    viral_potential: 90,
    optimal_tiktok_content_type: "tutorial",
    image_urls: ["https://picsum.photos/id/211/400/400"]
  },
  {
    product_id: "89012345",
    name: "Kit de Skincare Coreano (Essência + Creme)",
    category: "beauty_care",
    price: {
      current: 139.90,
      original: 249.90,
      discount_percentage: 44,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 9800,
      rating: 4.9,
      number_of_reviews: 4300
    },
    trending_score: 96,
    viral_potential: 97,
    optimal_tiktok_content_type: "review",
    image_urls: ["https://picsum.photos/id/249/400/400"]
  },
  {
    product_id: "90123456",
    name: "Balança Digital de Precisão para Cozinha",
    category: "home_living",
    price: {
      current: 49.90,
      original: 89.90,
      discount_percentage: 44,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 15000,
      rating: 4.9,
      number_of_reviews: 6200
    },
    trending_score: 94,
    viral_potential: 93,
    optimal_tiktok_content_type: "haul",
    image_urls: ["https://picsum.photos/id/292/400/400"]
  },
  {
    product_id: "01234567",
    name: "Massageador Elétrico Portátil Shiatsu",
    category: "health_wellness",
    price: {
      current: 189.90,
      original: 349.90,
      discount_percentage: 46,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 4500,
      rating: 4.8,
      number_of_reviews: 1800
    },
    trending_score: 91,
    viral_potential: 94,
    optimal_tiktok_content_type: "pov",
    image_urls: ["https://picsum.photos/id/305/400/400"]
  },
  {
    product_id: "11234568",
    name: "Ring Light Profissional 12” com Tripé",
    category: "electronics",
    price: {
      current: 149.90,
      original: 299.90,
      discount_percentage: 50,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 11000,
      rating: 4.9,
      number_of_reviews: 4500
    },
    trending_score: 97,
    viral_potential: 95,
    optimal_tiktok_content_type: "tutorial",
    image_urls: ["https://picsum.photos/id/312/400/400"]
  },
  {
    product_id: "22345679",
    name: "Escova Secadora Oval 3 em 1",
    category: "beauty_care",
    price: {
      current: 159.90,
      original: 279.90,
      discount_percentage: 43,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 14000,
      rating: 4.8,
      number_of_reviews: 6800
    },
    trending_score: 99,
    viral_potential: 98,
    optimal_tiktok_content_type: "before_after",
    image_urls: ["https://picsum.photos/id/401/400/400"]
  },
  {
    product_id: "33456780",
    name: "Jaqueta Corta-Vento Impermeável Unissex",
    category: "fashion",
    price: {
      current: 129.90,
      original: 249.90,
      discount_percentage: 48,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 3500,
      rating: 4.7,
      number_of_reviews: 950
    },
    trending_score: 85,
    viral_potential: 87,
    optimal_tiktok_content_type: "lifestyle",
    image_urls: ["https://picsum.photos/id/433/400/400"]
  },
  {
    product_id: "44567891",
    name: "Carregador Portátil Power Bank 20000mAh",
    category: "electronics",
    price: {
      current: 179.90,
      original: 319.90,
      discount_percentage: 44,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 18000,
      rating: 5.0,
      number_of_reviews: 9200
    },
    trending_score: 96,
    viral_potential: 85,
    optimal_tiktok_content_type: "unboxing",
    image_urls: ["https://picsum.photos/id/503/400/400"]
  },
  {
    product_id: "55678902",
    name: "Teclado Mecânico Gamer RGB",
    category: "toys_games",
    price: {
      current: 299.90,
      original: 499.90,
      discount_percentage: 40,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 6500,
      rating: 4.9,
      number_of_reviews: 2100
    },
    trending_score: 92,
    viral_potential: 94,
    optimal_tiktok_content_type: "review",
    image_urls: ["https://picsum.photos/id/474/400/400"]
  },
  {
    product_id: "66789013",
    name: "Umidificador de Ar Ultrassônico com LED",
    category: "home_living",
    price: {
      current: 89.90,
      original: 159.90,
      discount_percentage: 44,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 7800,
      rating: 4.8,
      number_of_reviews: 3200
    },
    trending_score: 90,
    viral_potential: 91,
    optimal_tiktok_content_type: "lifestyle",
    image_urls: ["https://picsum.photos/id/555/400/400"]
  },
  {
    product_id: "77890124",
    name: "Mouse Gamer Sem Fio 16000 DPI",
    category: "toys_games",
    price: {
      current: 249.90,
      original: 429.90,
      discount_percentage: 42,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 8200,
      rating: 4.9,
      number_of_reviews: 3500
    },
    trending_score: 93,
    viral_potential: 92,
    optimal_tiktok_content_type: "unboxing",
    image_urls: ["https://picsum.photos/id/60/400/400"]
  },
  {
    product_id: "88901235",
    name: "Garrafa Térmica Inteligente com Display LED",
    category: "health_wellness",
    price: {
      current: 99.90,
      original: 189.90,
      discount_percentage: 47,
      currency: "BRL"
    },
    sales_metrics: {
      monthly_sales: 9500,
      rating: 4.9,
      number_of_reviews: 4100
    },
    trending_score: 95,
    viral_potential: 96,
    optimal_tiktok_content_type: "trending_audio",
    image_urls: ["https://picsum.photos/id/65/400/400"]
  }
];
