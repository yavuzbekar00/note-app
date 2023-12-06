import React, { useState } from 'react';
import "./Note.css";
import { v4 as uuidv4 } from 'uuid';

function Note({ notes, setNotes }) {
    const [newNote, setNewNote] = useState({
        id: "",
        title: "",
        content: ""
    });

    const handleClick = () => {
        const newId = uuidv4()
        if (newNote.title !== "" && newNote.content !== "") {
            setNotes([...notes, { id: newId, title: newNote.title, content: newNote.content }]);
        } else {
            alert("Henüz bir not girilmemiş")
        }
        setNewNote({
            id: "",
            title: "",
            content: ""
        });
    }


    return (
        <div className='note-app'>
            <div className='note-head'>
                Yeni Not Oluşturun
            </div>
            <div className='note-card'>
                <div className='note-inputs'>
                    <input
                        className='note-input'
                        type='text'
                        placeholder='Not başlığını girin'
                        value={newNote.title}
                        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    ></input>
                </div>
                <div className='note-textareas'>
                    <textarea
                        className='note-textarea'
                        placeholder='Notunuzu girin'
                        value={newNote.content}
                        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    ></textarea>
                </div>
            </div>
            <div className='note-button-area'>
                <button onClick={handleClick} className='note-button'>Notu Ekle</button>
            </div>
        </div>
    );
}

export default Note;
