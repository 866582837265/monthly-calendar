document.addEventListener("DOMContentLoaded", function () {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    if (currentMonth === 3 && currentYear === 2025) { // April 2025
        let day = today.getDate();
        let cells = document.querySelectorAll("td");
        cells.forEach(cell => {
            if (cell.textContent == day) {
                cell.style.backgroundColor = "lightblue";
            }
        });
    }
});
