const fadeElements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

fadeElements.forEach(function(element){

    observer.observe(element);

});
