const main_menu_lis=document.querySelectorAll('.main-menu>ul>li');
const main_body_sections=document.querySelectorAll('.main-body>section');

main_menu_lis.forEach((li, index)=>{
    li.addEventListener('click' , (e)=>{
        e.preventDefault();
        for(j=0; j<main_menu_lis.length; j++){
            main_menu_lis[j].classList.remove('show')
        }
        li.classList.add('show')

        for(i=0; i<main_body_sections.length; i++){
            main_body_sections[i].classList.remove('active')
        }
        main_body_sections[index].classList.add('active')
    })
})







// _______________Added__width to span of progress-bars____
const progressBars_spans=document.querySelectorAll(".progress-bars>span")
// let count=0
// setInterval(function progress() {
//     progressBars_spans.forEach((span)=>{
//         let currentValue=span.getAttribute('data-width')
//         span.style.width=currentValue
//         span.innerText=currentValue
//         console.log(count++)
//     })
// }, 1000);
progressBars_spans.forEach((span)=>{
    let currentValue=span.getAttribute('data-width')
    span.style.width=currentValue
    span.innerText=currentValue
})

// ____________added style of status_item______
const status_items=document.querySelectorAll('.status>.status_item')
status_items.forEach((status_item)=>{
    status_item.addEventListener('click' , ()=>{
        for(i=0; i<status_items.length; i++){
            status_items[i].classList.remove('active')
        }
        status_item.classList.add('active')
    })
})





// _________Slider_________
const row_slider=document.querySelector('.row-slider')
const row_slider_figures=document.querySelectorAll('.row-slider>figure')
row_slider.style.width=200*row_slider_figures.length+'px'

// BTNS Sliders 
let index=200
const prevSlide=document.getElementById('prev-slide')
const nextSlide=document.getElementById('next-slide')
nextSlide.addEventListener('click' , ()=>{
    row_slider.style.transform='translateX(-'+index+'+px)'
    index++
})

prevSlide.addEventListener('click' , ()=>{
    alert('Prev')
})



// ______Accordio_____
const accordionButton=document.querySelectorAll('.accordion-button')
const accordionItem=document.querySelectorAll('.accordion-item')
accordionButton.forEach((btn ,index)=>{
    btn.addEventListener('click' , ()=>{
        for(i=0; i<accordionItem.length; i++){
            accordionItem[i].classList.remove('show')
        }
        accordionItem[index].classList.toggle('show')
    })
})



// _____________Students_______show more___
const liStudents=document.querySelector('#CONTACTS>section>ul')
console.log(liStudents.offsetHeight)
