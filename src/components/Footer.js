import React from 'react'

export default function Footer() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
         <footer className="footer">
                <div className="container1">
                    <div className="row">
                        <div className="col">
                            <h3>company</h3>
                            <ul>
                                <li><a href="/">about</a></li>
                                <li><a href="/">our services</a></li>
                                <li><a href="/">privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>get help</h3>
                            <ul>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">shipping</a></li>
                                <li><a href="/">returns</a></li>
                                <li><a href="/">order status</a></li>
                                <li><a href="/">payment option</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>follow us</h3>
                            <div className="social-links">
                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
