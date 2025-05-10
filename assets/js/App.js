const main_menu_lis = document.querySelectorAll('.main-menu>ul>li');
const main_body_sections = document.querySelectorAll('.main-body>section');

main_menu_lis.forEach((li, index) => {
    li.addEventListener('click', (e) => {
        e.preventDefault();
        for (j = 0; j < main_menu_lis.length; j++) {
            main_menu_lis[j].classList.remove('show')
        }
        li.classList.add('show')

        for (i = 0; i < main_body_sections.length; i++) {
            main_body_sections[i].classList.remove('active')
        }
        main_body_sections[index].classList.add('active')
    })
})







// _______________Added__width to span of progress-bars____
const progressBars_spans = document.querySelectorAll(".progress-bars>span")
// let count=0
// setInterval(function progress() {
//     progressBars_spans.forEach((span)=>{
//         let currentValue=span.getAttribute('data-width')
//         span.style.width=currentValue
//         span.innerText=currentValue
//         console.log(count++)
//     })
// }, 1000);
progressBars_spans.forEach((span) => {
    let currentValue = span.getAttribute('data-width')
    span.style.width = currentValue
    span.innerText = currentValue
})

// ____________added style of status_item______
const status_items = document.querySelectorAll('.status>.status_item')
status_items.forEach((status_item) => {
    status_item.addEventListener('click', () => {
        for (i = 0; i < status_items.length; i++) {
            status_items[i].classList.remove('active')
        }
        status_item.classList.add('active')
    })
})





// _________Slider_________
// const row_slider = document.querySelector('.row-slider')
// const row_slider_figures = document.querySelectorAll('.row-slider>figure')
// row_slider.style.width = 200 * row_slider_figures.length + 'px'

// // BTNS Sliders 
// let index = 200
// const prevSlide = document.getElementById('prev-slide')
// const nextSlide = document.getElementById('next-slide')
// nextSlide.addEventListener('click', () => {
//     row_slider.style.transform = 'translateX(-' + index + '+px)'
//     index++
// })

// prevSlide.addEventListener('click', () => {
//     alert('Prev')
// })

const row_slider = document.querySelector('.row-slider');
const row_slider_figures = document.querySelectorAll('.row-slider > figure');

// گرفتن عرض یک عکس
const slideWidth = row_slider_figures[0].offsetWidth;

// تعیین عرض کل اسلایدر
row_slider.style.width = slideWidth * row_slider_figures.length + 'px';

// موقعیت فعلی
// let currentIndex = 0;

// دکمه‌ها
const error=document.querySelector('.error')
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');

nextSlide.addEventListener('click' , ()=>{
    error.classList.add('show')
})





// // کلیک روی "بعدی"
// nextSlide.addEventListener('click', () => {
//     if (currentIndex < row_slider_figures.length - 1) {
//         currentIndex++;
//     } else {
//         // رفتن به اول وقتی آخر رسیدیم
//         currentIndex = 0;
//     }
//     moveSlider();
// });

// // کلیک روی "قبلی"
// prevSlide.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         // رفتن به آخر وقتی اول رسیدیم
//         currentIndex = row_slider_figures.length - 1;
//     }
//     moveSlider();
// });

// // تابع حرکت دادن اسلایدر
// function moveSlider() {
//     row_slider.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
//     row_slider.style.transition = 'transform 0.5s ease-in-out';
// }



// ______Accordio_____
const accordionButton = document.querySelectorAll('.accordion-button')
const accordionItem = document.querySelectorAll('.accordion-item')
accordionButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        for (i = 0; i < accordionItem.length; i++) {
            accordionItem[i].classList.remove('show')
        }
        accordionItem[index].classList.toggle('show')
    })
})



// _____________Students_______show more___
const sectionOFContact = document.querySelector('#CONTACTS>section')
const liStudents = document.querySelector('#CONTACTS>section>ul')
const show_more = document.getElementById('show-more')
show_more.addEventListener('click', () => {
    //    alert(liStudents.offsetHeight)
    sectionOFContact.style.height += liStudents.offsetHeight + 'px'
})


const students = [
    {
        firstName: "faddows", lastName: "Yousofi", course: "4 semestar", photo: "assets/img/contact/c-us-3-img-1.webp"
    },
    {
        firstName: "Somia", lastName: "Safdari", course: "4 semester", photo: "assets/img/contact/digital-marketing-357x220.webp"
    },
    {
        firstName: "Rukhsar", lastName: "shirzay", course: "4 semestar", photo: "assets/img/contact/t1-img-2.webp"
    }
    ,
    {
        firstName: 'Namatullah', lastName: 'Mohmmadi', course: '6 semestar', photo: 'assets/img/contact/a3-img-1.webp'
    },
    {
        firstName: 'Mortazr', lastName: 'Karimi', course: '6 semester', photo: 'assets/img/contact/a3-img-1.webp'
    },
    {
        firstName: 'Hasib', lastName: 'Shahab', course: '6 semester', photo: 'assets/img/contact/blog-2-400x265 (1).webp'
    },
    {
        firstName: 'Moqtader', lastName: 'Sofiazda', course: '6 semester', photo: 'assets/img/contact/blog-1-400x265.webp'
    },
    {
        firstName: 'Ariana', lastName: 'Khan', course: '6 semester', photo: 'assets/img/contact/blof-400x265.webp'
    },
    {
        firstName: 'Fatima', lastName: 'Nazar', course: '6 semester', photo: 'assets/img/contact/a3-img-2.webp'
    },
    {
        firstName: 'Zainab', lastName: 'Ali', course: '6 semester', photo: 'assets/img/contact/a3-img-1.webp'
    }
];

students.forEach((student) => {
    const li = document.createElement('li')
    li.innerHTML = `
        <div>
            <img src="${student.photo}" alt="${student.firstName}" alt="">
        </div>
        <div class="align-content-start">
            <p>${student.firstName}${student.lastName}</p>
            <span class="col-12">${student.course}</span>
        </div>
    `
    document.querySelector("#CONTACTS > section > ul").appendChild(li);
})