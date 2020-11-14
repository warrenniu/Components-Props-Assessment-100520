import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NotesContainer from '../Containers/NotesContainer';

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

describe("Notes Container", () => {
    it("Mounts to the DOM", () => {
        act(() => {
            render(<NotesContainer />, container);
            expect(container.querySelector('ul')).toBeTruthy();
        });
    });

    it("Mounts Notes to DOM", () => {
        act(() => {
            render(<NotesContainer />, container);
            expect(container.querySelectorAll('li').length).toBe(4);
        });
    });
});