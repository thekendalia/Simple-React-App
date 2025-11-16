import { useState } from 'react';

export default function AddNote() {
    const [viewNotes, setNewNotes] = useState([]);
    const [noteList, setNoteList] = useState('');

    return (
        <>
            <h1>Add a New Note</h1>
            <input 
                onChange={(e) => setNoteList(e.target.value)} 
                value={noteList} 
                type='text' 
            />
            <button 
                onClick={() => {
                    setNewNotes([...viewNotes, noteList]);
                    setNoteList('');
                }}
            >
                Submit
            </button>

            <h2>View Notes</h2>
            <ul>
                {noteList}
                {viewNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </>
    );
}
