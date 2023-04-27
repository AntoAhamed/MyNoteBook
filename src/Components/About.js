import React from 'react'

function About() {
    const aboutStyle = {
        marginTop: "75px",
        paddingTop: "80px",
        paddingBottom: "80px"
    }
    return (
        <div className='container' style={aboutStyle}>
            <h1 style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                <b>About Us</b>
            </h1>
            <p>
                Welcome to <strong>MyNoteBook</strong>, a React-based note-taking application designed to help you stay organized and productive.
            </p>
            <p>
                At MyNoteBook, we understand that taking notes is an essential part of daily life. Whether you're a student, a professional, or just someone who likes to keep things organized, having a reliable and user-friendly note-taking app can make all the difference.

                Our team is made up of experienced developers and designers who are passionate about creating high-quality applications that meet the needs of our users. We're dedicated to delivering a seamless and intuitive experience that makes it easy to take, organize, and access your notes anytime, anywhere.

                We take pride in our commitment to user privacy and data security. MyNoteBook is built on a solid foundation of secure coding practices, and we continuously update our app to ensure that your data is always safe and protected.

                Our goal is to provide you with an exceptional note-taking experience that helps you stay focused and productive. We welcome your feedback and suggestions and are committed to continuously improving our app to meet the needs of our users.
            </p>
            <p>
                <strong>Thank you</strong> for choosing <strong>MyNoteBook</strong> as your go-to note-taking app. We're excited to be a part of your journey towards greater productivity and organization.
            </p>
        </div>
    )
}

export default About
