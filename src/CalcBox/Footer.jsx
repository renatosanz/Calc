import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer id='footer'>
      <span><span id='autor'>©</span> Renato S. Loeza - Web developer · 2023</span>
      <a className='link' href="https://github.com/renatosanz/Calc" target="_blank" >
        <i className="fa-2x  fa-solid fa-code"></i>
      </a>
      <a className='link' href="https://www.behance.net/renorenato" target="_blank">
        <i className="fa-2x  fa-brands fa-behance"></i>
      </a>
      <a href="https://www.linkedin.com/in/s%C3%A1nchez-loeza-renato-2326a6205/" target="_blank">
        <i className="fa-2x  fa-brands fa-linkedin"></i>
      </a>
      <a className='link' href="https://github.com/renatosanz" target="_blank">
        <i className="fa-2x  fa-brands fa-github"></i>
      </a>
    </footer>
  )
}
