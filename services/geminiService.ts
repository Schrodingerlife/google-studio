
import { GoogleGenAI } from "@google/genai";
import type { TrendingProduct } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function generateMarketingStrategy(product: TrendingProduct): Promise<string> {
  const prompt = `
    Você é um especialista em marketing viral para o TikTok e marketing de performance na Shopee.
    Crie uma estratégia de marketing detalhada e acionável para o seguinte produto da Shopee:

    **Produto:**
    - **Nome:** ${product.name}
    - **Categoria:** ${product.category}
    - **Tipo de Conteúdo Ideal para TikTok:** ${product.optimal_tiktok_content_type}
    - **Preço Atual:** R$ ${product.price.current.toFixed(2)} (com ${product.price.discount_percentage}% de desconto)
    - **Vendas Mensais (Shopee):** ${product.sales_metrics.monthly_sales}
    - **Potencial Viral:** ${product.viral_potential}/100

    **Sua Tarefa:**
    Elabore uma estratégia completa que integre o TikTok e a Shopee para maximizar as vendas. A resposta deve ser em formato Markdown e clara, dividida nas seguintes seções:

    1.  **Título da Campanha:** Um nome criativo e cativante para a campanha.
    2.  **Conceito Criativo (TikTok):** Descreva uma ideia principal para uma série de 3 vídeos curtos no TikTok. Seja específico sobre o que mostrar em cada vídeo.
    3.  **Hashtags Estratégicas:** Forneça uma lista de 5 a 7 hashtags, misturando hashtags de alto volume (ex: #shopee, #tiktokmademebuyit) com hashtags de nicho específicas para o produto.
    4.  **Áudios em Alta:** Sugira o tipo de áudio/música que deve ser usado (ex: áudio de tutorial rápido, música pop viral do momento, som de ASMR, etc.).
    5.  **Público-Alvo:** Descreva o perfil demográfico e de interesses do público ideal no TikTok.
    6.  **Estratégia na Shopee:** Como otimizar a página do produto na Shopee para receber o tráfego do TikTok? Inclua sugestões para o título, descrição e uso de promoções (ex: "cupom para seguidores do TikTok").
    7.  **Call-to-Action (CTA):** Qual a chamada para ação que deve ser usada nos vídeos e na bio do TikTok?

    Seja criativo, direto e focado em resultados de vendas.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Não foi possível gerar a recomendação. Verifique a chave de API e tente novamente.");
  }
}
