import React from 'react';
import { render, run, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Note from '../Components/Note';

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

describe("Note", () => {
    it("Mounts to DOM and renders note", () => {
        act(() => {
            render(<Note note={{ id: 1, content: "First Note" }} />, container);
            expect(container.querySelector('li').textContent).toBe("First Note");
        });
    });
});