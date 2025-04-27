interface RecommendationsResponse {
  pizzas_recomendadas: string[];
  bebidas_recomendadas: string[];
}

export function useRecommendations() {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  async function obterRecomendacoes() {
    const { data, error } = await useFetch<RecommendationsResponse>(`/recomendacao/${userStore.usuarioId}`, {
      baseURL: config.public.apiBase,
    });
    if (error.value) throw error.value;
    return data.value;
  }

  return { obterRecomendacoes };
}
