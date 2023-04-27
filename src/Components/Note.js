import React from 'react'
import editIcon from './assets/edit.png'
import removeIcon from './assets/remove.png'
import { Link } from 'react-router-dom'

function note(props) {
    const noteStyle = {
        backgroundColor: "#f3ec8c",
        boxShadow: "5px 5px lightblue"
    }

    return (
        <div className="col-sm-6 mb-3 mb-sm-0 my-4">
            <div className="card" style={noteStyle}>
                <div className="card-body">
                    <h4 className="card-title"><b>{props.title}</b></h4>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text">
                        <small className="text-body-secondary my-4">
                            On {props.date} at {props.time}
                            <Link to="/editNotes" onClick={() => { props.editNotes(props.note) }}>
                                <button type='button' className='btn btn-sm'>
                                    <img src={editIcon} alt="" height={"25px"} width={"25px"} title='Edit' />
                                </button>
                            </Link>
                            <button type='button' className='btn btn-sm' onClick={() => { props.deleteNotes(props.note) }} >
                                <img src={removeIcon} alt="" height={"25px"} width={"25px"} className='mx-2' title='Remove' />
                            </button>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default note
