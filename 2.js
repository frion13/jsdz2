"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];
function renderReviews(productData) {
  const productReviews = document.getElementById("product-reviews");

  productData.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productName = document.createElement("h2");
    productName.textContent = item.product;

    const reviewsList = document.createElement("ul");
    item.reviews.forEach((review) => {
      const reviewItem = document.createElement("li");
      reviewItem.textContent = review.text;
      reviewsList.appendChild(reviewItem);
    });

    const form = document.createElement("form");
    form.classList.add("add-review-form");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Добавить отзыв...";
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Отправить";

    form.appendChild(input);
    form.appendChild(button);

    productDiv.appendChild(productName);
    productDiv.appendChild(reviewsList);
    productDiv.appendChild(form);

    productReviews.appendChild(productDiv);
  });
}

function addReview() {
  const forms = document.querySelectorAll(".add-review-form");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      const reviewText = input.value;
      if (reviewText.length < 50 || reviewText.length > 500) {
        alert("Отзыв должен содержать от 50 до 500 символов.");
        return;
      }
      const reviewsList = form.previousElementSibling;
      const newReview = document.createElement("li");
      newReview.textContent = reviewText;
      reviewsList.appendChild(newReview);
      input.value = "";
    });
  });
}

renderReviews(initialData);
addReview();
