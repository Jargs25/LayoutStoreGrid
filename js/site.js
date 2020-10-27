(function() {
    window.onload = () => {
        var observer = new IntersectionObserver(function(element) {
            var byJG = document.getElementsByClassName("pre-byJG")[0];
            if (element[0].isIntersecting) {
                byJG.classList.add("show");
            } else {
                byJG.classList.remove("show");
            }
        });
        observer.observe(document.querySelector(".copyright"));
    };
})();