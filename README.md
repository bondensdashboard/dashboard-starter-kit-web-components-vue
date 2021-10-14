# Starter Kit: Create Vue application using Web Components

This project was generated with [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create). The repository contains sample code that you can use as a starting point to develop Vue applications with Web Components. The chart visualization has been created by using [Chart.js](https://www.chartjs.org/docs/latest/) which has good support for [Vue specific charts](https://vue-chartjs.org/))

![Chart](./public/chart.PNG)

## About Web Components

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

* **Custom elements**: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
* **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
* **HTML templates**: The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

You can then use the custom element just like you would normally use any HTML tag. For example if AppMenu is the name of our custom element, we can use it as follows in our HTML document:

```
<AppMenu></AppMenu>
```

Here you can read more about Web Components: [Building Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components#concepts_and_usage)

## Requirements

The following item is required to run this example:

* [Node.js](https://nodejs.org/)
* [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)

## How to get started

### 1. Clone the repository and install dependencies

Clone the repository, go inside the folder and run the following command on your terminal to install all dependencies:
```bash
$ npm install
```

### 2. Run the application

When the node modules have finished installing it's time to start the application:
```
npm run serve
```

The above command will start the development server. Go to [localhost:8080](http://localhost:8080/) to visit the application.

## Behind the scenes: Transforming the Vue Component to A Web Component

A few changes are needed to transform a Vue component to a Web Component. Open the `src/main.js` file to see how the component has been converted. we will have to write a little more code than before to wrap a standard Vue component and present it as a native web component (custom element).

    import Vue from 'vue';
    import App from './App';

    import wrap from "@vue/web-component-wrapper";

    const wrappedElement = wrap(Vue, App);

    // Use customElements.define() to encapsulate your code as as a web component
    window.customElements.define("vue-chart", wrappedElement);

The component can now be used as a Web Component in the following way by adding `<vue-chart></vue-chart>` to your `public/index.html` file:

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Vue Chart Example</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <style>
        .container {
        max-width: 620px;
        }
    </style>
    </head>

    <body>

    <div class="container">
        <vue-chart></vue-chart>
    </div>

    </body>

    </html>