const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


// card slideshow
let cardIndex =1;
const cards = document.getElementsByClassName('card')
const dots = document.getElementsByClassName('dot')

showCard(cardIndex)


function displayCard(n){
    showCard(cardIndex=n);
}


function nextCard(){
    cardIndex++;

    if(cardIndex > cards.length){
        cardIndex=1
    }

    showCard(c)
}
function showCard(n){
    let i
     if(n>cards.length){
        cardIndex=1;
     }

     if(n < 1){
        cardIndex= cards.length
     }

     for(i=0;i<cards.length;i++){
        cards[i].classList.remove('active-card')
     }
     for(i=0;i<dots.length;i++){
        dots[i].classList.remove('active')
     }

     cards[cardIndex -1 ].classList.add('active-card')
     dots[cardIndex-1].classList.add('active')

}

setInterval(nextCard, 15000)