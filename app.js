document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.transform = "translate(-50%, -50%) scale(1)";
        loader.style.opacity = 1;

        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }, 1000);
});
