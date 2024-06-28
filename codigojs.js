const frases = [
    "Você é especial, continue sendo a pessoa incrível que você é!",
  "Acredite em si mesmo e em seus sonhos, você é capaz de conquistar tudo que deseja!",
  "A vida é uma jornada curta, então aproveite cada momento ao máximo!",
  "Não tenha medo de errar, os erros são a melhor forma de aprender e crescer!",
  "Seja grato pelas coisas boas da sua vida, mesmo as pequenas!",
  "A felicidade está nas pequenas coisas, aprenda a apreciá-las!",
  "O amor é a força mais poderosa do universo, deixe-o guiar sua vida!",
  "Seja positivo e otimista, a vida fica muito mais fácil assim!",
  "Nunca desista dos seus sonhos, lute por eles até o fim!",
  "A vida é feita de altos e baixos, aproveite os altos e aprenda com os baixos!",
  "Cada dia é uma nova oportunidade para ser feliz, aproveite-a!",
  "Viva o presente, o passado já passou e o futuro ainda não chegou!",
  "Seja você mesmo, não tente ser alguém que você não é!",
  "Faça o bem sem olhar a quem, a bondade sempre volta!",
  "Ajude o próximo, a sua ajuda pode fazer a diferença na vida de alguém!",
  "Perdoe as pessoas que te magoaram, o perdão é libertador!",
  "Não guarde rancores, eles só vão te fazer mal!",
  "Viva em paz consigo mesmo e com o mundo!",
  "Seja feliz, você merece!",
  "A vida é linda, aprenda a apreciá-la!",
  "Cada dia é um presente, desfrute-o!",
  "O tempo é precioso, não o desperdice!",
  "Faça as coisas que te fazem feliz!",
  "O único limite é você mesmo.",
  "Acredite na sua força interior.",
  "Você é capaz de conquistar tudo que deseja.",
  "Nunca desista dos seus sonhos.",
  "A vida é uma aventura, viva-a com intensidade.",
  "Cada dia é uma nova oportunidade para aprender e crescer.",
  "Seja grato pelas coisas boas da sua vida.",
  "Ajude o próximo, a sua ajuda pode fazer a diferença.",
  "Faça o bem sem olhar a quem.",
  "Perdoe as pessoas que te magoaram.",
  "Viva em paz consigo mesmo e com o mundo.",
  "Seja feliz, você merece!"
  ];
  
  function gerarMensagem() {
    const tela = document.querySelector(".tela");
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    tela.innerHTML = fraseAleatoria;
  }