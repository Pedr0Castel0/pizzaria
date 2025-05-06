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
    const data = await $fetch<LoginResponse>("/login", {
      baseURL: config.public.apiBase,
      method: "POST",
      body: { email, senha },
    });

    userStore.setUser(data.usuario_id ?? 0);
    localStorage.setItem("usuario_id", JSON.stringify(data.usuario_id));
    console.log("data", data);
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
    await $fetch<RegisterResponse>("/cadastro", {
      baseURL: config.public.apiBase,
      method: "POST",
      body: payload,
    });
  }

  return { login, register };
}
