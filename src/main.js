import Vue from 'vue';
import App from './App';

import wrap from "@vue/web-component-wrapper";

const wrappedElement = wrap(Vue, App);

window.customElements.define("vue-chart", wrappedElement);
