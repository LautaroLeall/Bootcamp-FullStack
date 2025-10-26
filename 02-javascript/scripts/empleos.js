// Para un solo boton .btn-card
// const btnCardUnique = document.querySelector(".btn-card");

// btnCardUnique.addEventListener("click", () => {
//     btnCardUnique.textContent = "Aplicado!";
// });

// 1er Forma
// Para todos los botones .btn-card
// const btnCard = document.querySelectorAll(".btn-card");

// btnCard.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         if (btn.textContent !== "¡Aplicado!") {
//             alert("¡Hola! Te estaremos contactando pronto.");
//             btn.textContent = "¡Aplicado!";
//             btn.classList.add("applied");
//             btn.disabled = true;
//         }
//     });
// });

//2do Forma
// Usando delegacion de eventos
// Componente padre que contiene a todos las cards (donde estan los botones)
const sectionCards = document.querySelector(".section-cards");

// Pregunta si es Null o undefined para no Ejecutar el codigo
sectionCards?.addEventListener("click", (e) => {
    const element = e.target;

    if (element.classList.contains("btn-card")) {
        element.textContent = "¡Aplicado!";
        element.classList.add("applied");
        element.disabled = true;
    }
});

// Detalles de empleos
// Precionar card y llevar a detalles.html
const detail = document.querySelector("#card-1");

// Pregunta si es Null o undefined para no Ejecutar el codigo
detail?.addEventListener("click", (e) => {
    const element = e.target;

    if (element.classList.contains("card-1")) {
        window.location.href = "./pages/detalles.html";
    }
});
