import React from 'react';
import Note from '../Components/Note';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    notes = () => {
    return this.apiResponse().map(element => {return <Note note={element}/>})
    }

    render() {
        return (
            <ul>
                {this.notes()}
            </ul>
        )
    }

    // class Note extends React.Component {
//     render() {
//         return <li>{this.props.note.content}</li>
//     }
//   }

}
export default NotesContainer;

