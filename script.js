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
/* =========================================================
   COPIAR CHAVE PIX
   ========================================================= */

const pixKey = "663099810001-61";

const copyPixButton =
  document.getElementById("copyPixButton");

const copyPixFeedback =
  document.getElementById("copyPixFeedback");


if (copyPixButton && copyPixFeedback) {

  copyPixButton.addEventListener("click", async () => {

    try {

      /* Tenta copiar normalmente */
      await navigator.clipboard.writeText(pixKey);

    } catch (error) {

      /* Fallback para Safari / navegadores antigos */
      const textarea =
        document.createElement("textarea");

      textarea.value =
        pixKey;

      textarea.style.position =
        "fixed";

      textarea.style.top =
        "-9999px";

      textarea.style.left =
        "-9999px";

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      document.execCommand("copy");

      textarea.remove();
    }


    /* Mostra a mensagem somente depois da cópia */
    copyPixFeedback.hidden = false;

    requestAnimationFrame(() => {

      copyPixFeedback.classList.add(
        "is-visible"
      );

    });


    /* Esconde novamente depois de 2,2 segundos */
    setTimeout(() => {

      copyPixFeedback.classList.remove(
        "is-visible"
      );


      setTimeout(() => {

        copyPixFeedback.hidden = true;

      }, 200);

    }, 2200);

  });

}

  });

});
