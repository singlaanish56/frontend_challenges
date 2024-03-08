const faqs = document.querySelectorAll(".faq")

for(const faq of faqs){
    const expandButton = faq.querySelector(".faq-question").querySelector(".faq-expand-ans")
    const img = expandButton.querySelector("img")
    console.log(img)
    const answer = faq.querySelector(".faq-answer")

    expandButton.addEventListener("click", function (){
        answer.classList.toggle("hidden")
        answer.classList.toggle("max-h-0")
        if(img.getAttribute("src") === "./img/icon-plus.svg"){
            img.setAttribute("src", "./img/icon-minus.svg")
        }else{
            img.setAttribute("src", "./img/icon-plus.svg")
        }
    })
}
