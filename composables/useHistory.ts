interface HistoryResponse {
  status: string;
  historico: string[];
}

export function useHistory() {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  async function listarHistorico() {
    const { data, error } = await useFetch<HistoryResponse>(`/historico/${userStore.usuarioId}`, {
      baseURL: config.public.apiBase,
    });
    if (error.value) throw error.value;
    return data.value?.historico ?? [];
  }

  return { listarHistorico };
}
