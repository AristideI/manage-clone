let section = document.querySelectorAll("article")


section.forEach(function(e) {
    e.addEventListener("click", function(ev){
        if(ev.target.tagName === "DIV"){
            document.body.classList.toggle("bod")
        }
    })
})