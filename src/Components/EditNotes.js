import React from 'react'

function editNotes(props) {
    const editNotesStyle = {
        marginTop: "75px",
        paddingTop: "80px",
        paddingBottom: "80px"
    }

    return (
        <div className='container' style={editNotesStyle}>
            <div className="row mb-3">
                <div className="col-4">
                    <b>Date: {props.date.toLocaleDateString()}</b>
                </div>
                <div className="col-4" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Edit Note</b>
                </div>
                <div className="col-4">
                    <b>Time: {props.time}</b>
                </div>
            </div>
            <div className="row mb-3">
                <form action="" method=''>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-4">
                                <label htmlFor="title" className="form-label">Title</label>
                            </div>
                            <div className="col-8">
                                <input disabled={props.toEditNote === ''} type="text" className="form-control" id="title" value={props.newTitle} onChange={(e) => { props.setNewTitle(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <label htmlFor="description" className="form-label">Description</label>
                            </div>
                            <div className="col-8">
                                <textarea disabled={props.toEditNote === ''} className="form-control" id="description" rows="7" value={props.newDesc} onChange={(e) => { props.setNewDesc(e.target.value) }} ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                    <div className="d-grid gap-2 d-md-block">
                        <button disabled={props.toEditNote === ''} className="btn btn-outline-dark btn-sm mx-2" type="button" onClick={props.save}>Save</button>
                        <button disabled={props.toEditNote === ''} className="btn btn-outline-dark btn-sm mx-2" type="button" onClick={props.clear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default editNotes
