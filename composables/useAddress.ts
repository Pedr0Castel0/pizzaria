export function useAddress() {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  async function getAddress() {
    const { data, error } = await useFetch<any>(`/endereco/${userStore.usuarioId}`, {
      baseURL: config.public.apiBase,
      method: "GET",
    });
    if (error.value) throw error.value;
    return data.value;
  }

  return { getAddress };
}
