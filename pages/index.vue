<template>
  <div class="bg-white h-full w-full md:w-425px shadow-md md:rounded-3xl overflow-hidden relative">
    <header class="bg-main-green py-4 px-2 mm:px-6">
      <div class="flex justify-between items-center border-b border-green-700 pb-2 pt-4">
        <div class="flex gap-3">
          <div class="bg-green-100  rounded-full w-10 h-10 flex justify-center items-center">
            <i class="bx bx-user text-green-300 text-xl"></i>
          </div>
          <div class="text-main-gray">
            <p>Olá,</p>
            <strong class="font-semibold">@immichjs</strong>
          </div>
        </div>
        <div class="flex text-main-gray text-2xl gap-5">
          <i class="bx bx-gift cursor-pointer"></i>
          <i class="bx bx-message-rounded-dots cursor-pointer"></i>
        </div>
      </div>

      <div class="flex flex-col gap-2 mm:flex-row mm:justify-between items-center text-main-gray mt-4">
        <div class="w-full mm:w-auto flex justify-between mm:flex-col mm:text-lg">
          <span>Saldo PicPay</span>
          <div class="flex items-center mm:gap-2">
            <strong class="mm:text-xl">R$ 123,88</strong>
            <i class="bx bx-show text-2xl cursor-pointer"></i>
          </div>
        </div>
        <button class="py-1 px-6 border-3 w-full mm:w-auto rounded-full font-semibold">Conferir extrato</button>
      </div>

      <div class="grid grid-cols-2 mm:grid-cols-4 text-main-gray gap-3 mt-4 pb-6">
        <div class="bg-secondary-green rounded-2xl h-22 flex flex-col justify-start items-start gap-2 font-semibold p-3 text-xs cursor-pointer">
          <i class="bx bx-qr-scan text-2xl"></i>
          <span>QR Code</span>
        </div>
        <div class="bg-secondary-green rounded-2xl h-22 flex flex-col justify-start items-start gap-2 font-semibold p-3 text-xs cursor-pointer">
          <i class="bx bxl-microsoft transform rotate-45 text-2xl"></i>
          <span>Pix</span>
        </div>
        <div class="bg-secondary-green rounded-2xl h-22 flex flex-col justify-start items-start gap-2 font-semibold p-3 text-xs cursor-pointer">
          <i class="bx bx-barcode text-2xl"></i>
          <span>Pagar boleto</span>
        </div>
        <div class="bg-secondary-green rounded-2xl h-22 flex flex-col justify-start items-start gap-2 font-semibold p-3 text-xs cursor-pointer">
          <i class="bx bx-message-square text-2xl"></i>
          <span>Cobrar</span>
        </div>
      </div>
    </header>

    <main class="-mt-5 rounded-3xl bg-white p-4 pt-6">
      <div class="w-full border-2 rounded-full text-gray-500 flex items-center justify-start overflow-hidden px-2.5 border-gray-300">
        <i class="bx bx-search-alt-2 text-2xl"></i>
        <input type="search" class="w-full p-2 outline-none placeholder-gray-500 font-normal" placeholder="O que você quer pagar?" />
      </div>

      <div class="mt-4">
        <strong>Sugestões para você</strong>
        <ul class="grid grid-flow-col-dense gap-8 overflow-x-scroll mt-2 w-full scroll-default">
          <li class="text-xs w-14 flex flex-col items-center gap-1 text-center flex-1">
            <div class="w-14 h-14 flex justify-center items-center rounded-full border bg-gray-100">#</div>
            <p>Pagar pessoas</p>
          </li>
          <li class="text-xs w-14 flex flex-col items-center gap-1 text-center flex-1">
            <div class="w-14 h-14 flex justify-center items-center rounded-full border bg-gray-100">#</div>
            <p>Pedir Empréstimo</p>
          </li>
          <li class="text-xs w-14 flex flex-col items-center gap-1 text-center flex-1">
            <div class="w-14 h-14 flex justify-center items-center rounded-full border bg-gray-100">#</div>
            <p>Cadastre seu cartão</p>
          </li>
          <li class="text-xs w-14 flex flex-col items-center gap-1 text-center flex-1">
            <div class="w-14 h-14 flex justify-center items-center rounded-full border bg-gray-100">#</div>
            <p>@cliente1</p>
          </li>
          <li class="text-xs w-14 flex flex-col items-center gap-1 text-center flex-1">
            <div class="w-14 h-14 flex justify-center items-center rounded-full border bg-gray-100">#</div>
            <p>@cliente2</p>
          </li>
          <li class="text-xs w-14 flex flex-col items-center gap-1 text-center flex-1">
            <div class="w-14 h-14 flex justify-center items-center rounded-full border bg-gray-100">#</div>
            <p>@cliente3</p>
          </li>
        </ul>
      </div>
    </main>

    <footer class="absolute grid grid-cols-5 border-t bottom-0 w-full h-16">
      <div class="flex flex-col justify-center items-center text-gray-500">
        <i class="bx bx-home-alt text-xl"></i>
        <span>Início</span>
      </div>
      <div class="flex flex-col justify-center items-center text-gray-500">
        <i class="bx bx-wallet text-xl"></i>
        <span>Carteira</span>
      </div>
      <div class="flex flex-col justify-center items-center text-gray-500">
        <div class="w-12 h-12 rounded-full flex justify-center items-center text-2xl bg-pay-icon-footer text-white -mt-8">
          <i class="bx bx-dollar"></i>
        </div>
        <span>Pagar</span>
      </div>
      <div class="flex flex-col justify-center items-center text-gray-500">
        <i class="bx bx-bell text-xl"></i>
        <span>Notificações</span>
      </div>
      <div class="flex flex-col justify-center items-center text-gray-500">
        <i class="bx bx-shopping-bag text-xl"></i>
        <span>Store</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
