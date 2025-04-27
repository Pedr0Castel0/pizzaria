interface RecommendationsResponse {
  pizzas_recomendadas: {
    nome: string;
    preco: number;
  }[];
  bebidas_recomendadas: string[];
}

export function useRecommendations() {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  async function obterRecomendacoes() {
    console.log("userStore.usuarioId", userStore.usuarioId);
    const { data, error } = await useFetch<RecommendationsResponse>(
      `/recomendacao/${userStore.usuarioId}`,
      {
        baseURL: config.public.apiBase,
      }
    );
    if (error.value) throw error.value;
    console.log("data", data.value);
    return data.value;
  }

  return { obterRecomendacoes };
}
