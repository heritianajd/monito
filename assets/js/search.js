 //Bouton search

 document.addEventListener("DOMContentLoaded", function () {
    const btnSearch = document.querySelector('.searchBtn');
    const inputSearch = document.querySelector('.inputSearch');

    btnSearch.addEventListener('mouseenter', function () {
        inputSearch.style.display = "block";
    })

    inputSearch.addEventListener('mouseleave', function () {
        inputSearch.style.display = "none";
    })

    btnSearch.addEventListener('click', function () {
        inputSearch.style.display = "none";
    })

})
