import React from 'react'

function Contact() {
    const contactStyle = {
        marginTop: "75px",
        paddingTop: "80px",
        paddingBottom: "80px"
    }

    return (
        <div className='container' style={contactStyle}>
            <h1 style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                <b>Contact Us</b>
            </h1>
            <p>
                Thank you for your interest in <strong>MyNoteBook</strong> We'd love to hear from you and are here to help with any questions, comments, or concerns you may have.

                If you have any questions about using our app or need technical support, please reach out to our support team at . We're available 24/7 to assist you and ensure that you have a seamless experience with our app.

                For general inquiries or feedback, you can reach out to us at . We value your feedback and suggestions, and we're always looking for ways to improve our app to meet the needs of our users.

                You can also follow us on social media to stay up to date on the latest news and updates from MyNotebook. We're active on Facebook, Twitter, and Instagram, and we'd love to connect with you.

                If you're interested in partnering with us or would like to explore advertising opportunities, please email us at . We're open to partnerships and collaborations that align with our mission and values.

                Thank you for choosing <strong>MyNoteBook</strong> as your go-to note-taking app. We're dedicated to providing you with the best possible user experience and look forward to hearing from you soon.
            </p>
        </div>
    )
}

export default Contact
