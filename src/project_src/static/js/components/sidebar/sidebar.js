document.addEventListener("DOMContentLoaded", function() {
    const sidebarButtons = document.querySelectorAll("g-sidebar-button");
    const dashboardContent = document.querySelector("g-content");

    sidebarButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const url = button.getAttribute("href");
            
            if (url) {
                // Добавляем анимацию ухода вправо
                dashboardContent.style.animation = "slideOut 0.5s ease-in forwards";

                // Дожидаемся завершения анимации перед переходом
                setTimeout(() => {
                    window.location.href = url;
                }, 500); // Время должно совпадать с длительностью анимации slideOut
            }
        });
    });
});