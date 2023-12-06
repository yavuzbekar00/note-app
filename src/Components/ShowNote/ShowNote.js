import React, { useEffect, useState } from 'react'
import "./ShowNote.css"

function ShowNote({ selectedNote, setIsClick, handleDelete, updatedNote, setUpdatedNote, handleUpdate }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        setTitle(selectedNote.title)
        setContent(selectedNote.content)
        setUpdatedNote({ ...updatedNote, id: selectedNote.id, title: selectedNote.title, content: selectedNote.content })
    }, [selectedNote])

    const handleClickNewNote = () => {
        setIsClick(false)
    }

    return (
        <div className='note-app'>
            <div className='note-top'>
                <div className='note-head'>
                    Notunuz
                </div>
                <div>
                    <button onClick={handleUpdate} className='update-note-button'>Notu Düzenle</button>
                    <button onClick={handleDelete} className='delete-note-button'>Notu Sil</button>
                    <button onClick={handleClickNewNote} className='add-note-button'>Yeni Not Ekle</button>
                </div>
            </div>
            <div className='note-card'>
                <div className='note-inputs'>
                    <input
                        className='note-input'
                        type='text'
                        value={updatedNote.title}
                        onChange={(e) => setUpdatedNote({ ...updatedNote, title: e.target.value })}
                    ></input>

                </div>
                <div className='note-textareas'>
                    <textarea
                        className='note-textarea'
                        placeholder='Notunuzu girin'
                        value={updatedNote.content}
                        onChange={(e) => setUpdatedNote({ ...updatedNote, content: e.target.value })}
                    ></textarea>
                </div>
            </div>

        </div>
    )
}

export default ShowNote