
export type TrendingProduct = {
  product_id: string;
  name: string;
  category: string;
  price: {
    current: number;
    original: number;
    discount_percentage: number;
    currency?: string;
  };
  sales_metrics: {
    monthly_sales: number;
    rating: number;
    number_of_reviews: number;
  };
  trending_score: number;
  viral_potential: number;
  optimal_tiktok_content_type: string;
  image_urls: string[];
};

export type Kpi = {
  label: string;
  value: string;
  icon: string;
  description: string;
};
