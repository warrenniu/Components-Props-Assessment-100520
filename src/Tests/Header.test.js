import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from '../Components/Header';
import App from '../App';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Header", () => {
    it("Mounts to the DOM", () => {
        act(() => {
            render(<App />, container);
            expect(container.querySelector('h1')).toBeTruthy();
        });
    });

    it("Renders props to DOM", () => {
        act(() => {
            render(<Header text="Hello World" />, container);
            expect(container.querySelector('h1').textContent).toBe("Hello World");
        });

    });
});
