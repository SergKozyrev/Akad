if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

var tabs = document.querySelector(".blog-history__tabs");

tabs.addEventListener("click", function (e) {
    var target = e.target;
    if (!target.classList.contains("blog-history__tabs-btn")) return;

    this.querySelectorAll(".blog-history__tabs-btn").forEach(function (elem) {
        elem.classList.remove("blog-history__tabs-btn--active");
    });

    target.classList.add("blog-history__tabs-btn--active");

    var targetIndex = [].indexOf.call(target.parentNode.children, target);

    var tabContent = this.querySelectorAll(".blog-history__tab-content");

    for (var i = 0; i < tabContent.length; i++) {
        if (i === targetIndex) {
            tabContent[i].classList.add("blog-history__tab-content--active");
        } else {
            tabContent[i].classList.remove("blog-history__tab-content--active");
        }
    }
})