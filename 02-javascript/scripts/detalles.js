// Route first "main"
// Volver a page Empleos
const firstRoute = document.querySelector(".first-route");

firstRoute?.addEventListener("click", () => {
    window.location.href = "./empleos.html";
});

// Aplicar Trabajo "detalle.html"
// Usando delegacion de eventos
// Componente padre que contiene la card (donde estan los botones)
const card = document.querySelector(".card");

card?.addEventListener("click", (e) => {
    const element = e.target;

    if (element.classList.contains("btn-card")) {
        // Selecciona ambos botones dentro de la misma card
        const allButtons = card.querySelectorAll(".btn-card");

        allButtons.forEach((btn) => {
            // Cambia en ambos botones
            btn.textContent = "¡Aplicado!";
            btn.classList.add("applied");
            btn.disabled = true;
        });
    }
});

