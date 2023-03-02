// FUNCAO PARA QUE A BARRA DE ROLAGEM VOLTE PARA A POSICAO 0 NO EIXO Y.

// function scrollBar() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// }



// function controlarBotao() {
//     if (window.scrollY === 0) {
//         document.querySelector("#back-to-top").style.display = 'none';
//     } else {
//         document.querySelector("#back-to-top").style.display = 'block';
//     }
// }
// window.addEventListener("scroll", controlarBotao);


// FUNCAO QUE PARA FAZER COM QUE O BOTAO SUMA QUANDO A POSICAO Y DO SCROLL ESTIVER EM 0

function scrollBar() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  function controlarBotao() {
    if (window.scrollY === 0) {
      const botaoVoltarTopo = document.querySelector("#back-to-top");
      if (botaoVoltarTopo) {
        botaoVoltarTopo.style.display = 'none';
      }
    } else {
      const botaoVoltarTopo = document.querySelector("#back-to-top");
      if (botaoVoltarTopo) {
        botaoVoltarTopo.style.display = 'block';
      }
    }
  }
  
  window.addEventListener("scroll", controlarBotao);
  