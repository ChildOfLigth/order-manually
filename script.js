const productsList = [
    { name: "Classic Cheese", assessment: 4, price: 10, prodImg: "/imgs/classic-chese.webp" },
    { name: "Margarita", assessment: 5, price: 13, prodImg: "imgs/margarita.webp" },
    { name: "Hot Peperoni", assessment: 5, price: 15, prodImg: "imgs/hot-peperoni.webp" },
    { name: "Meat pizza", assessment: 4, price: 13.5, prodImg: "imgs/meat-pizza.webp" },
];

const ulElement = document.querySelector(".swiper-wrapper");

const swiperSlide = productsList.map((data) => {
    let pizzaSize = "M";
    let correctPrice;

    switch (pizzaSize) {
        case "M": correctPrice = data.price;
        case "S": correctPrice = data.price - 2;
        case "L": correctPrice = data.price + 2;
    };

    function generateStars(assessment) {
        const standartAssess = 5;
        const starsArray = [];

        for (let i = 0; i < assessment; i++) {
            starsArray.push('<div><img src="/imgs/star.svg"/></div>');
        };

        if (standartAssess > assessment) {
            const remainder = standartAssess - assessment;

            for (let i = 0; i < remainder; i++) {
                starsArray.push('<div><img src="/imgs/empty-star.svg"/></div>');
            };
        }

        return starsArray.join("");
    }

    return `<li class="swiper-slide">
    
    <div class="swiper-slide_img-prod">
      <img src="/imgs/desk-for-pizza.webp" alt="Pizza desk" class="back-part" />
      <img src="${data.prodImg}" alt="pizza photo" class="first-part" />
    </div>

   <div class="swiper-slide_card">
     <div class="card_data-pizza">
      <h3 class="data-pizza_name">${data.name}</h3>
      <div class="data-pizza_assessment">${generateStars(data.assessment)}</div>
      <p class="data-pizza_price">$${correctPrice}</p>
      <div class="data-pizza_choose-size">
        <button class="size" 
        onclick="pizzaSize = event.target.textContent; event.target.classList.add("active");">S</button>

        <button class="size active" 
        onclick="pizzaSize = event.target.textContent; event.target.classList.add("active");">M</button>

        <button class="size" 
        onclick="pizzaSize = event.target.textContent; event.target.classList.add("active");">L</button>
       </div>
      </div>
    </div>

    <button class="swiper-slide_add-to-cart"></button>
    </li>`
}).join("");

ulElement.innerHTML = swiperSlide;