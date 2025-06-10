// Função para mostrar a animação do coração
function showHeartAnimation() {
  const heartAnimation = document.getElementById("heartAnimation");
  
  // Torna o coração visível e aplica a animação
  heartAnimation.style.visibility = "visible";
  heartAnimation.classList.add("heartBeat");

  // Remove a animação do coração após 1.5 segundos
  setTimeout(() => {
    heartAnimation.style.visibility = "hidden";
    heartAnimation.classList.remove("heartBeat");
  }, 1500); // 1.5 segundos de animação do coração
}

// Função para revelar o conteúdo
window.onload = () => {
  const container = document.querySelector(".container");
  container.style.opacity = 1;

  // Adicionar o evento de clique no botão
  const heartButton = document.getElementById("heartButton");
  heartButton.addEventListener("click", showHeartAnimation);
};
