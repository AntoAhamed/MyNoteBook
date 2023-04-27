import React from 'react'
import Note from './Note'

function YourNotes(props) {
    const notesStyle = {
        marginTop: "75px",
        paddingTop: "150px",
        paddingBottom: "180px"
    }

    return (
        <div className='container' style={notesStyle}>
            <div className="row mb-3">
                <div className="col-4">
                    <b>Date: {props.date.toLocaleDateString()}</b>
                </div>
                <div className="col-4" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Your Notes</b>
                </div>
                <div className="col-4">
                    <b>Time: {props.time}</b>
                </div>
            </div>
            <div className="row">
                {props.notes.length === 0 ? "No more notes" : props.notes.map((note) => {
                    return <Note key={note.sno} note={note} title={note.title} desc={note.desc} date={note.date} time={note.time} deleteNotes={props.deleteNotes} editNotes={props.editNotes} />
                })}
            </div>
        </div>
    )
}

export default YourNotes
