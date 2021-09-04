# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

it took me days to finished the project i started with installing [tailwindcss] (https://tailwindcss.com/docs/installation) into the project. then i configuring it with the styles i want in the.
After i finished with the design stage i started giving it the functionality
### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Tailwind CSS
- JS


### What I learned

I learnt how to use Tailwind CSS to style the website in the Html without having to create and external css file. i learnt how to create a  carousel and accordion .Also validating and email.
To see how you can add code snippets, see below:

```
HTML AND TAILWIND CSS

    <!-- FAQs items -->
    <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto px-3">
      <div class="items-center border-b border-t py-4">
        <div x-data={show:false} class="rounded-sm">
          <div class="px-10 py-2 flex items-center justify-between" id="headingOne">
            <h2 @click="show=!show" class="text-very-dark-blue hover:text-soft-red flex-1 bg-transparent text-xl cursor-pointer border-b-0 flex justify-between" type="button">
              What is Bookmarking?
              <i class="fas fa-chevron-down"></i>
            </h2>          
          </div>
          <div x-show="show" class="border-b-0 px-10 py-6 text-grayish-blue flex justify-between">
            <p class="text-base flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
              justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </p>
            <i class="fas fa-chevron-up text-soft-red"></i>
          </div>
        </div>
      </div>      
      <div class="items-center border-b py-4">
        <div x-data={show:false} class="rounded-sm">
          <div class="px-10 py-2 flex items-center justify-between" id="headingOne">
            <h2 @click="show=!show" class="text-very-dark-blue hover:text-soft-red flex-1 bg-transparent text-xl cursor-pointer border-b-0 flex justify-between" type="button">
              How can I request a new browser?
              <i class="fas fa-chevron-down"></i>
            </h2>
          </div>
          <div x-show="show" class="border-b-0 px-10 py-6 text-grayish-blue flex justify-between">
            <p class="text-base flex-1">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
              Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
              ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
              Mauris augue massa, ultricies non ligula. Suspendisse imperdiet..
            </p>
            <i class="fas fa-chevron-up text-soft-red"></i>
          </div>
        </div>
      </div>
      <div class="items-center border-b py-4">
        <div x-data={show:false} class="rounded-sm">
          <div class="px-10 py-2 flex items-center justify-between" id="headingOne">
            <h2 @click="show=!show" class="text-very-dark-blue hover:text-soft-red flex-1 bg-transparent text-xl cursor-pointer border-b-0 flex justify-between" type="button">
              Is there a mobile app?
              <i class="fas fa-chevron-down"></i>
            </h2>           
          </div>
          <div x-show="show" class="border-b-0 px-10 py-6 text-grayish-blue flex justify-between">
            <p class="text-base flex-1">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
              urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
              sollicitudin ex et ultricies bibendum.
            </p>
            <i class="fas fa-chevron-up text-soft-red"></i>
          </div>
        </div>
      </div>
      <div class="items-center border-b py-4">
        <div x-data={show:false} class="rounded-sm">
          <div class="px-10 py-2 flex items-center justify-between" id="headingOne">
            <h2 @click="show=!show" class="text-very-dark-blue hover:text-soft-red flex-1 bg-transparent text-xl cursor-pointer border-b-0 flex justify-between" type="button">
              What about other Chromium browsers?
              <i class="fas fa-chevron-down"></i>
            </h2>          
          </div>
          <div x-show="show" class="border-b-0 px-10 py-6 text-grayish-blue flex justify-between">
            <p class="text-base flex-1">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
              vitae neque eget nisl gravida pellentesque non ut velit
            </p>
            <i class="fas fa-chevron-up text-soft-red"></i>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center flex-col mt-10 mb-16">
        <button class="btn btn-purple mt-6 hover:text-soft-blue hover:bg-transparent border-2 border-soft-blue font-medium">More Info</button>
      </div>
    </div>

```
```
js
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
```

### Continued development

 Continue growing in Tech and keep learning

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@andreas-15](https://www.frontendmentor.io/profile/andreas-15)
- Twitter - [@Daredevs](https://www.twitter.com/Daredevs)
- CodePen - [@JudeIV] (https://codepen.io/JudeIV)
