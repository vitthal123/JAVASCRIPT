import {products} from "./db/products.js";

console.log(products)
let productContainer=document.getElementById("products");

for(let product of products){
   let cardContainer =document.createElement('div');
   cardContainer.classList.add("card","card-vertical","d-flex","direction-column","relative", "shadow") 
  
   /**
    * Create Image Container
    */
   let imgContainer=document.createElement('div');
   imgContainer.classList.add("card-image-container");
   let img=document.createElement("img");
   img.classList.add("card-image");
   img.setAttribute("src",product.img);
   img.setAttribute("alt",product.alt);
   imgContainer.appendChild(img);
   cardContainer.appendChild(imgContainer);

   /** Card Detail Description  */
   let cardDetailsContainer=document.createElement("div");
   cardDetailsContainer.classList.add("card-details");
   let cardTitle=document.createElement("div");
   cardTitle.classList.add("card-title");
   cardTitle.innerText=product.name;
   cardDetailsContainer.appendChild(cardTitle);
   

   let cardDescription=document.createElement("div");
   cardDescription.classList.add("card-description");   
   let desc=document.createElement("p");
   desc.classList.add("card-des");
   desc.innerText=product.alt;
   cardDescription.appendChild(desc);

   let cardPrice=document.createElement("p");
   cardPrice.classList.add("card-price");
   cardPrice.innerText=product.newPrice;
   let oldPrice=document.createElement("span");
   oldPrice.classList.add("price-strike-through");
   oldPrice.innerText=`Rs. ${product.oldPrice}`;
   cardPrice.appendChild(oldPrice);
   

   let discount=document.createElement("span");
   discount.classList.add("discount");
   discount.innerText=`${product.discount}% OFF `;
   cardPrice.appendChild(discount);
   
   cardDescription.appendChild(cardPrice);

   let btn=document.createElement("div");
   btn.classList.add("cta-btn");
   let btnCart=document.createElement("button");
   btnCart.classList.add("button","btn-primary","btn-icon","cart-btn","d-flex","align-center","justify-center","gap","cursor","btn-margin")

   let btnspan=document.createElement("span");
   btnspan.classList.add("material-icons-outlined");
   btnspan.innerText='shopping_cart';
   btnCart.appendChild(btnspan);

   let btnspan1=document.createElement("span");
   btnspan1.innerText='Add To Cart';
   btnCart.appendChild(btnspan1);
   
   btn.appendChild(btnCart);
   cardDetailsContainer.appendChild(cardDescription);
   cardDetailsContainer.appendChild(btn);
   
   
   cardContainer.appendChild(cardDetailsContainer);
   









    // cardContainer.innerText="productCard";
    productContainer.appendChild(cardContainer);

}
