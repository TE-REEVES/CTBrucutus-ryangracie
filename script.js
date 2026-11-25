/* =========================================================
   CT BRUCUTUS / RYAN GRACIE SBC
   JavaScript
   ========================================================= */


/* =========================================================
   1. ANIMAÇÕES DE ENTRADA
   ========================================================= */

const animatedElements = [
  document.querySelector(".eyebrow"),
  document.querySelector(".brand-logos"),
  document.querySelector(".brand-copy"),
  ...document.querySelectorAll(".link-button"),
  document.querySelector(".address"),
  document.querySelector(".modalities"),
  document.querySelector(".footer")
].filter(Boolean);


/* Adiciona o estado inicial da animação */
animatedElements.forEach((element, index) => {

  element.classList.add("reveal");

  element.style.setProperty(
    "--reveal-delay",
    `${index * 70}ms`
  );

});


/* Inicia a animação depois da renderização */
requestAnimationFrame(() => {

  requestAnimationFrame(() => {

    animatedElements.forEach((element) => {

      element.classList.add("is-visible");

    });

  });

});


/* =========================================================
   2. COPIAR CHAVE PIX
   ========================================================= */

const pixKey = "663099810001-61";

const copyPixButton =
  document.getElementById("copyPixButton");

const copyPixFeedback =
  document.getElementById("copyPixFeedback");


/* Só executa se os elementos existirem */
if (copyPixButton && copyPixFeedback) {

  copyPixButton.addEventListener("click", async () => {

    let copied = false;


    /* =====================================================
       TENTATIVA 1
       Clipboard API
       ===================================================== */

    try {

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        await navigator.clipboard.writeText(
          pixKey
        );

        copied = true;

      }

    } catch (error) {

      console.warn(
        "Clipboard API indisponível:",
        error
      );

    }


    /* =====================================================
       FALLBACK
       Safari / navegadores antigos
       ===================================================== */

    if (!copied) {

      const textarea =
        document.createElement("textarea");


      textarea.value =
        pixKey;


      textarea.setAttribute(
        "readonly",
        ""
      );


      textarea.style.position =
        "fixed";

      textarea.style.left =
        "-9999px";

      textarea.style.top =
        "-9999px";

      textarea.style.opacity =
        "0";


      document.body.appendChild(
        textarea
      );


      textarea.focus();
      textarea.select();


      try {

        copied =
          document.execCommand("copy");

      } catch (error) {

        copied =
          false;

        console.error(
          "Não foi possível copiar:",
          error
        );

      }


      textarea.remove();

    }


    /* =====================================================
       FEEDBACK
       ===================================================== */

    if (copied) {

      showPixFeedback(
        "Chave Pix copiada!"
      );

    } else {

      showPixFeedback(
        "Não foi possível copiar."
      );

    }

  });

}


/* =========================================================
   3. MOSTRAR FEEDBACK
   ========================================================= */

let pixFeedbackTimeout;


function showPixFeedback(message) {

  if (!copyPixFeedback) {
    return;
  }


  /*
    Cancela timeout anterior
    caso o usuário clique várias vezes.
  */
  clearTimeout(
    pixFeedbackTimeout
  );


  copyPixFeedback.textContent =
    message;


  /*
    Remove o atributo hidden.
  */
  copyPixFeedback.hidden =
    false;


  /*
    Aguarda um frame antes de aplicar
    a classe de animação.
  */
  requestAnimationFrame(() => {

    copyPixFeedback.classList.add(
      "is-visible"
    );

  });


  /*
    Esconde após 2,2 segundos.
  */
  pixFeedbackTimeout =
    setTimeout(() => {

      copyPixFeedback.classList.remove(
        "is-visible"
      );


      setTimeout(() => {

        copyPixFeedback.hidden =
          true;

      }, 200);

    }, 2200);

}
