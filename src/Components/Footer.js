import React from 'react'

function Footer() {
    const footerStyle = {
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
        color: "white",
        position: "relative",
        backgroundColor: "#062a47"
    }
    return (
        <div style={footerStyle}>
            <div className="container">
                <hr />
                @CopyRight MyNoteBook 2023
            </div>
        </div>
    )
}

export default Footer
