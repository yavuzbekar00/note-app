import React from 'react'
import "./Note.css"

function Note() {
    return (
        <div className='note-app'>
            <div className='note-head'>
                Yeni Not Oluşturun
            </div>
            <div className='note-card'>
                <div className='note-inputs'>
                    <input className='note-input' type='text' placeholder='Not başlığını girin'></input>
                </div>
                <div className='note-textareas'>
                    <textarea className='note-textarea' placeholder='Notunuzu girin'></textarea>
                </div>
            </div>
            <div className='note-button-area'>
                <button className='note-button'>Notu Ekle</button>
            </div>
        </div>
    )
}

export default Note