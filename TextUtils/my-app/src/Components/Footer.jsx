import React from 'react'

const Footer = () => {
    return (
        <section>
            <div className="container">
                <footer id="footer">
                    <a href="https://github.com/abhiiiman">
                        <i class="social-icon fa-brands fa-github fa-spin fa-spin"></i>
                    </a>
                    <a href="https://www.instagram.com/_m_abhijit_/">
                        <i class="social-icon fa-brands fa-instagram fa-spin"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/abhijit-mandal-842428220/">
                        <i class="social-icon fa-brands fa-linkedin fa-spin"></i>
                    </a>
                    <a href="mailto:mandalabhijit2008@gmail.com">
                        <i class="social-icon fa-solid fa-envelope fa-spin"></i>
                    </a>
                    <p>
                        Made with <i id="heart" class="fa-solid fa-heart fa-beat"></i> by <strong>Abhijit Mandal</strong>
                    </p>
                </footer>
            </div>
        </section>
    )
}

export default Footer