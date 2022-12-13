!!!! Please visit the following address to view my hosted website: https://summer-o00o.netlify.app/index.html.  !!!!

!!! For viewing the website on local machine, please use "npx serve" command. !!!



Final project:

This project is a portfolio website of myself. It has six main pages. All the pages use flex or grid to make the pages responsive, and Media query is also used. So, the layout is liquid. The header and navigation bar is consistent in all pages, and is user friendly. All the contents are in containers so that when enlarging the screen size, the contents can still be in good shape. Some highlights of using flex, grid or Media query are:
1. In hometown page, grid is used to create three columns. 
2. When the screen size becomes smaller, the size of the photos, YouTube videos, google maps etc. will also become small.
3. Using Media query, when reaching 1000px or 650px width, some elements’ font size will change, the color of the headers (Luyao's Sweet Home o_0) and the clock color will change. The back to top button in hometown page will change to an arrow button. The font size of navigation bar will change smaller then wrap.

Sematic elements are used throughout the web pages: main, footer, and header are used on almost all the pages, and section, article, aside, figure etc. are used individual pages to denote semantics for the content on the pages.

All the pages are styled with CSS. Some highlights can be:
1. In the home page, an animation is added to the welcome message when entering the page. The name is highlighted. Portfolio photo is styled.
2. In the hometown page, animation is added to the header. 
3. The navigation bar in the header will turn yellow when mouse hovering, and will stay pink when the page is selected.
4. The navigation bar in the hometown will become pink when hovering and turn light green after visited.
5. In the Furry Friends page, a slide show of my cat photos is played. On the bottom, a wiggle animation effect is added to the button "let's play!". 
6. In the hobby page, text on the photo is designed as a link button to its own section. When mouse is hovering the text turn yellow, and when the section is active, the text will stay yellow. In the travelling section, polaroid style is used for photos. In the photography section, when hovering the photo, it will enlarge.
7. In the experience page, tables are styled. In the academic background table, a horizontal scrolling is added when the window of the website becomes too small.
8. All the font families used in the website are found online.

JavaScript is widely used in the website. Some highlights can be:
1. A digit clock is created using JavaScript Date object and is embedded in all the pages. Use of setTimeOut to update time every second.
2. A good morning/ good afternoon/ good evening welcome message in "Home page" is created using JavaScript based on visit time.
3.On "Furry Friends" page, JavaScript is used to fetch data, add event listener to buttons and create a small guessing game. The guessing game is to choose the correct photo. If play is chosen, a random position will be generated to contain the correct photo and when user clicks the photo, a function will be used to check if it's the correct one. If not play is chosen, a function will be called to insert 2 photos of Amber and display them on the page.
4.On "Experience" page, JavaScript is used to fetch data from my glitch site, add event listener to button and process data to create a table.
5. On "Contact" page, JavaScript is used to validate form, add event listener to button and fetch data from a JSON file created by myself.

Vue.js is used in the website. Some highlights can be:
1. The header which includes navigation bar, digital clock and head text uses Vue and it's embedded in every page. v-if, v-else is used to show either <a> or <span> form of navigation bar.
2. The "Hobby" page is created with Vue as a single page app that contained three tab-buttons that can show different hobby content. Dynamic component is used and ":is" is used to check which component should be displayed. There are 4 Vue components in 4 different files, and are imported to one js file. In the travelling part, when hovering the photo, it will show another one. When mouseout, it will go back to the previous one.
3. On "Contact" page, Vue is used to create a drop-down list containing all the states name of USA. (Data is stored in a JSON file I created).

DOM is updated frequently in different pages. Some highlights can be:
1. On "Furry Friends" page, depending on either playing the game or not, images will be inserted and displayed on the screen with text.
2. On "Hobby" page, when pressing different tab-button, different component will be displayed on the page and DOME is updated.
3. On "Experience" page, after clicking the button, the academic background table will be created and inserted into the page and update the DOM.
4. On "Contact" page, after successfully submitted the form will be hidden and a thank you message will show up on the screen to update the DOM.

Extra credits:
1. Flex, Grid, and Media Queries are used.
2. External API is used to fetch data. (Dog picture API and data hosted in my glitch site.)
3. ES6 functionality is used such as: arrow function, de-structuring, template literal, async await.
