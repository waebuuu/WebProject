# Personal Portfolio Website – ExpressJS (EJS)

## Overview

This project is a personal portfolio website built using **Node.js** and **Express.js** with the **EJS templating engine**.  
It includes four main pages: **Home**, **About Me**, **Projects**, and **Contact Me**, and is deployed live via **Render**.

The purpose of this assignment is to demonstrate understanding of **Express routing**, **EJS templates**, **Bootstrap integration**, and **version control best practices**, in accordance with the INFR3120 Assignment 2 rubric.

---

## Technologies Used

- **Node.js** and **Express.js**
- **EJS Templating Engine**
- **Bootstrap 5** and **Font Awesome**
- **Custom CSS Styling**
- **GitHub** for Version Control
- **Render** for Cloud Deployment

---

## Site Structure

The site was generated using the **Express Generator** with the `--views=ejs` option to properly configure the EJS templating engine.

### Key Folders

- **/public** – contains all static assets such as CSS, JavaScript, images, and multimedia  
- **/views** – contains all EJS templates and shared partials  
- **/routes** – includes the routing logic (`index.js`) for each page  
- **/bin/www** – manages the server startup configuration  

This structure adheres to the required Express application layout as stated in the rubric.

---

## EJS Templating and Partials

Each page uses its own **EJS view template**, while shared components such as the **header**, **navigation bar**, and **footer** are included through **EJS partials**.  
This ensures consistent design, modular structure, and easy updates across the site.

The **footer** contains active links to both **GitHub** and **LinkedIn**, satisfying layout template requirements.

---

## Express Routing

Each page is connected to a dedicated **Express route** in the `index.js` file located in the `routes` directory.  
These routes utilize `res.render()` to load the correct EJS template for each page, ensuring full functionality and navigation throughout the site.

---

## Styling and Front-End

The project integrates **Bootstrap 5** and **Font Awesome** to achieve a modern, responsive, and accessible design.  
A **custom `style.css`** file adds personalized styling and is located in `/public/Content/`.

All interface components (navbar, cards, buttons, and footer) were tested for responsiveness and browser compatibility.  
Bootstrap components were referenced from official documentation, and general page layout and content were adapted from **Assignment 1** as per project requirements.

---

## Version Control Practices

This project follows **GitHub version control best practices**:

- The repository is **public** and clearly **organized**
- Multiple commits record major development stages (setup, routing, styling, and deployment)
- Commit messages are **descriptive and meaningful**

**Repository Link:**  
[https://github.com/waebuuu/WebProject]

---

## Cloud Deployment

The site is **deployed on Render** to ensure stable and accessible cloud hosting.  
The deployment is configured so that all static assets load correctly through Express middleware.

**Live Site Link:**  
[https://web-portfolio-assignemnt.onrender.com/home]

