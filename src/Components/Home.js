import React from 'react'
import coverImage from './assets/cover.jpg'

function Home(props) {
  const homeStyle = {
    marginTop: "30px",
    paddingTop: "80px"
  }

  return (
    <div style={homeStyle}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <b>Date: {props.date.toLocaleDateString()}</b>
          </div>
          <div className="col-6" style={{ textAlign: "center", fontSize: "55px", paddingBottom: "20px" }}>
            <b>MyNoteBook</b>
          </div>
          <div className="col-3">
            <b>Time: {props.time}</b>
          </div>
        </div>
      </div>
      <img src={coverImage} alt="" height={"500px"} width={"100%"} />
    </div>
  )
}

export default Home
