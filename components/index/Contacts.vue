<template>
  <section class="mx-auto px-48 py-12 bg-[#FEF2F2]">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-red-600">Entre em Contato</h2>
      <p class="text-gray-600 mt-2">
        Estamos sempre prontos para atender você. Faça seu pedido ou tire suas
        dúvidas.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg p-8 text-center shadow-sm">
        <div class="flex justify-center mb-4">
          <div class="bg-[#FEF2F2] p-4 rounded-full">
            <Icon name="uil:phone" class="text-red-600 w-8 h-8" />
          </div>
        </div>
        <h3 class="font-bold text-xl mb-2 text-gray-800">Telefone</h3>
        <p class="text-gray-600 text-sm mb-2">Faça seu pedido por telefone</p>
        <p class="text-red-600 font-bold text-lg">(82) 4002-8922</p>
      </div>

      <div class="bg-white rounded-lg p-8 text-center shadow-sm">
        <div class="flex justify-center mb-4">
          <div class="bg-[#FEF2F2] p-4 rounded-full">
            <Icon name="uil:location-point" class="text-red-600 w-8 h-8" />
          </div>
        </div>
        <h3 class="font-bold text-xl mb-2 text-gray-800">Endereço</h3>
        <p class="text-gray-600 text-sm mb-2">Visite nossa pizzaria</p>
        <p class="text-gray-800 font-bold text-lg">
          Rua Fernando Pinheiro, Nº 175
        </p>
      </div>

      <div class="bg-white rounded-lg p-8 text-center shadow-sm">
        <div class="flex justify-center mb-4">
          <div class="bg-[#FEF2F2] p-4 rounded-full">
            <Icon name="uil:clock" class="text-red-600 w-8 h-8" />
          </div>
        </div>
        <h3 class="font-bold text-xl mb-2 text-gray-800">Horário</h3>
        <p class="text-gray-600 text-sm mb-2">Estamos abertos</p>
        <p class="text-gray-800 font-bold text-lg">Seg-Dom: 18h às 23h</p>
      </div>
    </div>
  </section>
</template>
