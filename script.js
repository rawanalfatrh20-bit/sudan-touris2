// البحث عن الوجهات السياحية
function searchPlaces() {
    let input = document.getElementById("searchInput");

    if (!input) return;

    let value = input.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let text = card.innerText.toLowerCase();

        card.style.display =
            text.includes(value) ? "block" : "none";
    });
}

// عرض تفاصيل الوجهة
function showDetails(name, description) {
    alert(name + "\n\n" + description);
}

// التنقل السلس بين صفحات الموقع
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        let target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// رسالة ترحيبية في وحدة التحكم
console.log("Welcome to Sudan Tourism Website!");
console.log("تم تشغيل الموقع بنجاح");