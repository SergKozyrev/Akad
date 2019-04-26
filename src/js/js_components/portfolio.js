if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

var iso = new Isotope('.portfolio-content__list', {
    itemSelector: '.portfolio-content__item',
    masonry: {
        columnWidth: '.portfolio-content__item'
    }
});

var filterList = document.getElementsByClassName("portfolio-category__list")[0];

filterList.addEventListener("click", function (e) {
    var target = e.target;
    if (!target.classList.contains("portfolio-category__item")) return;
    var filterValue = target.getAttribute("data-filter");
    iso.arrange({
        filter: filterValue
    });
    this.querySelectorAll(".portfolio-category__item").forEach(function (elem) {
        elem.classList.remove("portfolio-category__item--active");
    });

    target.classList.add("portfolio-category__item--active");
});