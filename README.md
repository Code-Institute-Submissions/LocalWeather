# LocalWeather



**Welcome to your local weather app where you can easily find your current weather in cities worldwide**

![Mockup](/assets/images/mockup.png)


## Content

  * [Content](#content)
  * [UX](#ux)
    + [Project Goals](#project-goals)
      - [User Goals](#user-goals)
      - [Site Owner Goals](#site-owner-goals)
    + [User Stories](#user-stories)
  * [User Requirements and Expectations](#user-requirements-and-expectations)
    + [Requirements](#requirements)
    + [Expectations](#expectations)
    + [Fonts](#fonts)
    + [Colors](#colours)
    + [Styling](#styling)
    + [Backgrounds](#backgrounds)
  * [Wireframes](#wireframes)
    + [Desktop](#desktop)
    + [Tablet](#tablet)
    + [Phone](#phone)
  * [Features](#features)
    + [Features that have been developed:](#features-that-have-been-developed-)
    + [Features that will be developed in the future:](#features-that-will-be-developed-in-the-future-)
  * [Technologies Used](#technologies-used)
    + [Languages](#languages)
    + [Libaries & Frameworks](#libaries---frameworks)
    + [Tools](#tools)
  * [Testing](#testing)
  * [Bugs](#bugs)
  * [Credits](#credits)

## UX

### Project goals

The **goal** is to create an **weather app** that is **beautiful** to look at and **easy** to **navigate.** 

#### User goals
* Let users **see** the current **weather** in **their city.**
* Let user **search** from what **city** to **display** weather from.
* Let user **choose** from **popular** cities to **display** weather from.

#### Site owner goals
* Create a **website** that is visually **appealing.**
* Create a **website** that is **easy** to use.

#### User stories
* As a **user** I want the **weather** app to be **easy** to use.
* As a **user** I want the **weather data** to be **presented** to me in a **visually appealing** way.
* as a **user** I want to be **able** to **choose** which **city** I want to **display** weather **info** from.

## User requirements and expectations

### Requirements
* The **website** needs to be **fully** responsive.
* The **weather** info needs to be **easy** to understand.
* The **website** needs to be **visually appealing.**

### Expectations
* There **should** not be **too much** information **presented** at the **same** time.
* It **should** be **easy** to **navigate** the **website.**

### Fonts

The **font** I have **chosen** to **use** for this **project** is the **google font** [Poppins](https://fonts.google.com/specimen/Poppins). Poppins is **playful** yet **simple**

![Poppins](/wireframes/fonts/Poppins.png)

### Colors

When I **think** about the **weather** the color **blue** pops into my head. **Perhaps** it is **because** the **sky** is **blue.** The **color scheme** I **chose** to go with this **project** is **blue,** like the **sky.**

![Colors](/wireframes/colors/colors.png)

### Styling

For the **styling** of this **website** I'm using the foundation of **Bootstrap** alongside with **custom styling.**

### Background

The **background** for this **website** is created with [getwaves.io](https://getwaves.io/) and **Photoshop.**

## Wireframes

I used **Adobe XD** to **create wireframes** for the **desktop, tablet, phone**. Every **wireframe** has the **index** site and the **contact** site.

### Desktop

You can find the **wireframes** for the **desktop**  [here](https://raw.githubusercontent.com/Elinkatalina/LocalWeather/master/wireframes/desktopindex.png) 

### Tablet

You can find the **wireframes** for the **tablet**  [here](https://raw.githubusercontent.com/Elinkatalina/LocalWeather/master/wireframes/ipadindex.png) 

### Phone

You can find the **wireframes** for the **phone**  [here](https://raw.githubusercontent.com/Elinkatalina/LocalWeather/master/wireframes/phoneindex.png)

## Features

### Features that have been developed :
* **Jumbotron** with **navlinks.**
* **Searchbar** for **cities.**
* **Errormessage** if **city** is not **valid.**

### Features that will be developed in the future
* **Show** different **icons** based on **weather**.
* **Some** appealing **animations**
* **The** weather for the **different** html-pages should **display** on **load.**

## Technologies Used

### Languages
* HTML
* CSS
* JavaScript

### Libaries & Frameworks
* [Boostrap](https://getbootstrap.com/)
* [FontAwesome](https://fontawesome.com/)
* [JsPopper](https://popper.js.org/)
* [JQuery](https://jquery.com/)

### Tools
* Wc3 CSS Validator
* Wc3 HTML Validator
* [Javascript Validator](https://extendsclass.com/javascript-fiddle.html)
* Git
* Adobe XD
* Adope Photoshop
* Figma
* Adobe Dreamweaver
* [Github TOC generator](https://ecotrust-canada.github.io/markdown-toc/)
* [OpenWeatherMap](https://openweathermap.org/api)

## Testing

To **make** sure my website is **working** as **intended** I **doublecheck** everything. I **check** if the **responsivness** is **working properly** with google **devTools**. 
**I check** so that **my** code **works** crossbrowser and on **all devices**. I **also** validate the **code** with **WC3** validators for **CSS** and **HTML**. 

To **validate** my **javaScript** I use [ExtendedClass javaScript Validator](https://extendsclass.com/javascript-fiddle.html). **Both** my **HTML** and **CSS** came **without** errors. But my **JavaScript** hade some **semicolons** missing. I **also** got **this** warning *arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').* I used **Google** and **found** this on [StackOverflow](https://stackoverflow.com/questions/42866159/arrow-function-syntax-is-only-available-in-es6-use-esversion-6) **that** fixed the **error** and all the **code** now **validates** with no **errors.**

I **tested** my **website** with **different** browser. It **seemed** to work **fine** in everything but **internet explorer 9**. I'm not **putting** too **much** weight into **this** because there is **a lot** of things that **does not** work in **IE9**.

### Header & Navbar

* Plan : The **header & navbar** needs to be **fully responsive.**

* Implementation : I used [getwaves.io](https://getwaves.io/) to **create** the **background** of the header. I **edited** it a bit in **Photoshop**. My header is a **Bootstrap Jumbotron** with a **Bootstrap** navbar. I **customized** the **navbar** and **jumbotron** with custom **CSS.** The navbar **collapses** into an **icon** at **smaller** screensized. I **added** my own **hamburgericon**.

* Test : I **test** the **responsivness** of the header & navbar by **using** chromes **developer tools**. I also **resize** my **browser** windows to see how **the responsivness** behaves. **Lastly** I check how the website looks on my **Samsung s20** and **Ipad Pro**. I **test** if my **navlinks** are **linked** properly by **clicking** them.
 
* Results : The header & navbar **works** as intended. It is **fully responsive** and all the **links** works **correctly.** The **nav items** collapse into an **icon** as expected.

* Verdict : The header & navbar **passed** all the **tests.**


### Searchbar & weatherdisplay

* Plan : Make a **searchbar** where the user can search for a **city** and **display** its **weather.**

* Implementation : I **used** the [OpenWeatherMapApi](https://openweathermap.org/api) to **get** weather **info** from **different cities** all **over** the **world**. I used *const* to **declare** variables with the **different** parts of the **API**. Then I **created** a **function** that **gets** the **input** the user typed into the **searchbar** in the **HTML document.** I **fetched** the data **from** the **API**. I **used** catch to **be able** to **catch** any **errors** and display an **error message**. Lastly I **used** a **function** to **display** the **data** to the **HTML document.**

* Test : I **test** if my **code** is **working** as **intended** by typing in **different** types of **cities**. I **also** check if I get **an error** if I leave the **searchbox** empty.

* Results : The searchbar & weatherdisplay **works** as **intended** the user is **able** to **search** for any **city** and displaying its **weather.**

* Verdict : The searchbar & weatherdisplay **passed** all the **tests.**

### Responsivness 

* Plan : **Build** a **fully responsive** layout with **Bootstrap**

* Implementation : I used **container, row and  col** to make my **website responsive**.

* Test : I **use** the **chrome developer tools** to test the websites **responsivness**. I also tested the **website** on my **Phone** and on my **Ipad**. I **also** resize the **browser window** to see how the **code reacts.**

* Results : The responsivness **works** as **intended** on all **screen sizes.**

* Verdict : The responsivness **passed** all the **tests.**

## Bugs 

There **were** some **bugs** in my **code** giving me **issues**

### OpenWeatherMapApi not working
* Bug: **The** API **was** not **working** properly.
* Solution:  I **friend** of mine **took** a **look** at my **code** and **saw** that the URL **was** with **HTTP** instead of **HTTPS**. Once **changed** to **HTTPS** it worked.

### Javascript validating error
* Bug: **Got** this **error** when **validating** my javaScript *arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').*
* Solution:  I used **Google** and **found** this on [StackOverflow](https://stackoverflow.com/questions/42866159/arrow-function-syntax-is-only-available-in-es6-use-esversion-6) **that** fixed the **error** and all the **code** now **validates** with no **errors.**

## Deployment

LocalWeather was **developed** using **Dreamweaver** and **GitHub.** **Dreamweaver** has a built in connection with **GitHub** that lets you commit, push and more to **GitHub.**

**Github** was used deploying **LocalWeather** by these **steps:**

* **Opened** up **GitHub** in the browser.
* **Signed in** using username and password.
* **Selected** my **repositories.**
* **Navigated** to **elinkatalina/LocalWeather**
* In the **top navigation** clicked **settings.**
* **Scrolled down** to the **GitHub Pages area.**
* **Selected Master Branch** from the **Source dropdown menu.**
* **Clicked** to **confirm** my **selection.**
* **LocalWeather** is now **live** on **GitHub Pages.**

If you want to **clone LocalWeather** follow **these steps.**

* **Navigate** to **elinkatalina/LocalWeater**
* **Click** the **green Clone** or **Download button.**
* **Copy the url** in the **dropdown box.**
* **Using** your **IDE** of choice **open** up **your** preferred **terminal.**
* **Navigate** to **your** desired **file location.**
* **Copy** the **following code** and **input** it into **your terminal** to **clone LocalWeather**

Git clone https://elinkatalina.github.io/LocalWeather/


## Credits

### Pictures
The **mockup** picture **is** from [FreeMockupWorld](https://www.freemockupworld.com/workspace-with-devices-mockup/)

### Special thanks to
My code institute **mentor** [Simen Daehlin](https://github.com/Eventyret)

**This site is for educational purposes only**

