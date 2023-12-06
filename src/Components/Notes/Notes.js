import React from 'react'
import "./Notes.css"

function Notes({ notes, setIsClick, setSelectedNote }) {

    const handleClickNotes = (note) => {
        setSelectedNote(note)
        setIsClick(true)
    }
    return (
        <div className='notes-app'>
            <div className='head'>
                Notlarım
            </div>
            <div className='notes-cards'>
                {
                    notes.length === 0 ? (
                        <div className='notes-warning'>Henüz bir not eklenmemiş!</div>
                    ) : (
                        notes.map((note) => (
                            <div onClick={() => handleClickNotes(note)} key={note.id} className='notes-card'>
                                <div className='notes-head'>
                                    {note.title}
                                </div>
                            </div>
                        ))
                    )
                }

            </div>
        </div >
    )
}

export default Notes