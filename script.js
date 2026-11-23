/* =========================================================
   CT BRUCUTUS / RYAN GRACIE SBC
   JavaScript
   ========================================================= */


/* =========================================================
   ANIMAÇÕES DE ENTRADA
   ========================================================= */

/*
  Seleciona os principais elementos
  que queremos animar ao abrir a página.
*/

const animatedElements = [
  document.querySelector(".eyebrow"),
  document.querySelector(".brand-logos"),
  document.querySelector(".brand-copy"),
  ...document.querySelectorAll(".link-button"),
  document.querySelector(".address"),
  document.querySelector(".modalities"),
  document.querySelector(".footer")
].filter(Boolean);


/*
  Adiciona a classe inicial.
*/

animatedElements.forEach((element, index) => {

  element.classList.add("reveal");

  /*
    Cria uma pequena diferença de tempo
    entre cada elemento.
  */

  element.style.setProperty(
    "--reveal-delay",
    `${index * 70}ms`
  );

});


/*
  Espera o navegador renderizar a página
  antes de iniciar a animação.
*/

requestAnimationFrame(() => {

  requestAnimationFrame(() => {

    animatedElements.forEach((element) => {

      element.classList.add("is-visible");

    });

  });

});
