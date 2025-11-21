function showMenu(sectionId) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
}

function goBack() {
    document.querySelectorAll(".menu-page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById("home").classList.remove("hidden");
}
