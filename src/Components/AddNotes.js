import React from 'react'

function AddNotes(props) {
  const addNotesStyle = {
    marginTop: "75px",
    paddingTop: "80px",
    paddingBottom: "80px"
  }

  return (
    <div className='container' style={addNotesStyle}>
      <div className="row mb-3">
        <div className="col-4">
          <b>Date: {props.date.toLocaleDateString()}</b>
        </div>
        <div className="col-4" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
          <b>Add Notes</b>
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
                <input type="text" className="form-control" id="title" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} placeholder="Enter title here" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <label htmlFor="description" className="form-label">Description</label>
              </div>
              <div className="col-8">
                <textarea className="form-control" id="description" rows="7" value={props.desc} onChange={(e) => { props.setDesc(e.target.value) }} placeholder="Enter descrition here"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-outline-dark btn-sm mx-2" type="button" onClick={props.addNotes}>Add</button>
            <button className="btn btn-outline-dark btn-sm mx-2" type="button" onClick={props.clear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNotes
