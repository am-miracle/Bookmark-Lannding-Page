//grab everything we need
const menu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".mobile-menu-open");
const menuClose = document.querySelector(".mobile-menu-close");

//add event listener
menuOpen.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
menuClose.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// carousel

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".item");
    const buttons = carousel.querySelectorAll(".button");


    buttons.forEach((button , i) => {
        button.addEventListener("click", () =>{
            //un-select all the Items
            items.forEach(item => item.classList.remove("item--selected"));
            items.forEach(item => item.classList.add("item"));
            buttons.forEach(button => button.classList.remove("button--selected"));


            // selecting all the items
            items[i].classList.add("item--selected");
            items[i].classList.remove("item");
            buttons[i].classList.add("button--selected");
        });

        // select the first item on page load 
        items[0].classList.add("item--selected");
        items[0].classList.remove("item");
        buttons[0].classList.add("button--selected");

        
    });
});


// Email validator

let emailButton = document.querySelector("#submit");
let email = document.querySelector("#email");
let err = document.querySelector("#error");
let userEmail = email.value;
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let errorImg = document.querySelector("#errorImg")


function validateEmail(email)  {

    if (email.value.match(mailFormat)) {
        err.style="none";
        err.classList.add("hidden");
        errorImg.classList.add("hidden");
        return true;
    }
    else {
        err.classList.remove("hidden")
        email.style.border="solid 2px hsl(0, 94%, 66%)";
        errorImg.classList.remove("hidden");
        return false;
    }
}
