interface PedidoResponse {
  status: string;
  mensagem: string;
}

export function usePedido() {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  async function criarPedido(itens: string[]) {
    const { error } = await useFetch<PedidoResponse>(`/pedido/${userStore.usuarioId}`, {
      baseURL: config.public.apiBase,
      method: "POST",
      body: { itens },
    });
    if (error.value) throw error.value;
  }

  return { criarPedido };
}
