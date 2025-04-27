interface LoginResponse {
  status: string;
  mensagem: string;
  usuario_id: number;
}

interface RegisterResponse {
  status: string;
  mensagem: string;
}

export function useAuth() {
  const config = useRuntimeConfig();
  const userStore = useUserStore();

  async function login(email: string, senha: string) {
    const { data, error } = await useFetch<LoginResponse>("/login", {
      baseURL: config.public.apiBase,
      method: "POST",
      body: { email, senha },
    });

    if (error.value) throw error.value;
    userStore.setUser(data.value?.usuario_id ?? 0);
  }

  async function register(payload: {
    nome: string;
    senha: string;
    email: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
  }) {
    const { error } = await useFetch<RegisterResponse>("/cadastro", {
      baseURL: config.public.apiBase,
      method: "POST",
      body: payload,
    });
    if (error.value) throw error.value;
  }

  return { login, register };
}
