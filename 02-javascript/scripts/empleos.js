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
// Presionar card y llevar a detalles.html
const detail = document.querySelector("#card-1");

detail?.addEventListener("click", (e) => {
    // Evita la redirección si el clic fue en el botón
    if (e.target.classList.contains("btn-card")) return;

    // Redirige al hacer clic en cualquier otra parte de la card
    window.location.href = "./detalles.html";
});

// Select - Options
// Filtrar empleos por UBICACION
const filter = document.querySelector("#ubicacion");
const mensaje = document.querySelector("#filter-result");

filter?.addEventListener('change', function () {
    const selectedValue = filter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = '';
    }
});

// Input - Buscar empleos
const searchInput = document.querySelector("#empleos-search-input");

searchInput?.addEventListener("input", function () {
    // cada vez que el usuario cambia algo en el input (escribe o borra)
    console.log("Buscando empleos para:", searchInput.value);
});

searchInput?.addEventListener("blur", function () {
    // cada vez que el usuario deja el input (pierde el foco)
    console.log("Has dejado el input");
});

// Form - Buscar empleos
const searchForm = document.querySelector("#empleos-search-form");

searchForm?.addEventListener("submit", function (e) {
    // Evita la redirección si el usuario presiona Enter
    e.preventDefault();

    console.log("Formulario enviado");
});

// Evento global - Teclado
document.addEventListener("keydown", (e) => {
    // Tecla presionada
    console.log("Tecla presionada:", e.key);
});