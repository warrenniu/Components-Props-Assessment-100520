# react-props-self-assessment: Hello World

## Instructions:

- Fork and clone this lab. Then read the below deliverables and make all necessary changes to the app to get it to work. 

## Deliverables:

### Header
- You are provided a `Header` component that is rendered inside of `App`
- `Header` should have a `text` key in its props that evaluates to a string that says "Hello World"
- Header should append the value of this prop to the DOM

### Notes Container
- `NotesContainer` has an `apiResponse` method that returns an array of note objects
- `NotesContainer` is responsible for rendering multiple `Note` components
- Each `Note` component should be able to access the `note` key inside of its props and print the value of the note's `content` to the DOM as a `li` tag
- The `NotesContainer` should be rendered underneath the `Header` on the DOM

- You can run `npm run lab` to test your code. However, you should use both TDD and BDD to verify functionality
- You can run `npm run submit` to save your work and push to github
