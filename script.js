// Função para abrir a caixa de presente e exibir o texto
document.getElementById("openButton").addEventListener("click", function() {
  const giftLid = document.getElementById("giftLid");
  const giftBody = document.getElementById("giftBody");
  const message = document.getElementById("message");

  // Animar a tampa da caixa para abrir
  giftLid.style.transform = "rotateX(180deg)"; 
  giftLid.style.transition = "all 1s ease-in-out";

  // Revelar o conteúdo da caixa após a animação
  setTimeout(() => {
    giftBody.style.visibility = "visible";
    message.style.display = "block"; // Exibir a mensagem
  }, 1000); // A caixa vai abrir em 1 segundo
});
