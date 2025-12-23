document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close-btn");
    
    // Находим ВСЕ картинки с классом openModal
    const allImages = document.querySelectorAll(".openModal");

    // Перебираем их и каждой вешаем событие клика
    allImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Запрет прокрутки
        }
    });

    // Закрытие по крестику
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeModal();
        };
    }

    // Закрытие по клику вне окна
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Возврат прокрутки
    }
});