window.onload = function() {
    window.scrollTo(0, 0);
}


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});


// animation for education section 
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');

    function animateSections() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    animateSections();

    window.addEventListener('scroll', function() {
        animateSections();
    });
});