const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    },

];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currectProductSize = document.querySelectorAll('.size')



let chosenProduct = products[0];


menuItems.forEach((items, index)=> {
    items.addEventListener('click',()=>{
        
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        chosenProduct = products[index];

        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = `$`+chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        currentProductColors.forEach((color, index)=>{
            color.style.background = chosenProduct.colors[index].code;
        })
    })
})

currentProductColors.forEach((color, index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    })
})

currectProductSize.forEach((size,index)=>{
    size.addEventListener('click',()=>{

        currectProductSize.forEach((size)=>{
            size.style.background = 'white';
            size.style.color = 'black';
        })

        size.style.background = 'black';
        size.style.color = 'white';
    })
})


// payment modal

const close = document.querySelector('.close');
const payment = document.querySelector('.payment');
const productButton = document.querySelector('.productButton');

close.addEventListener('click', ()=>{
    payment.style.display = 'none';
})

productButton.addEventListener('click',()=>{
    payment.style.display = 'flex';
    
})




const slider = document.querySelector('.slider');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const backgroundPosition = `bottom ${scrollPosition * 0.3}px`;

    slider.style.backgroundPosition = backgroundPosition;
});
