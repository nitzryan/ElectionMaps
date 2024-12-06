"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const message = 'Hello, World';
    const baseElement = document.createElement('h1');
    baseElement.textContent = message;
    document.body.appendChild(baseElement);
});
