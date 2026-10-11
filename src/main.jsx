import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const interests = [
  { number: '01', title: 'Video Games', copy: 'They are fun :).' },
  { number: '02', title: 'Sports', copy: 'I like to play tennis and basketball.' },
  { number: '03', title: 'Engineering', copy: 'I like being able to design and create things.' },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↓'}</span>
}

function App() {
  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Back to top">YN<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#interests">What I’m into</a>
          <a className="nav-contact" href="#contact">Say hello <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> A little corner of the internet</p>
            <h1>Hi, I’m <em>[Niko].</em><br />And This is my Beginning Website.</h1>
            <p className="hero-intro">A student, a curious person, and a work in progress. This is where I’m collecting a few things about me and what I’m learning along the way.</p>
            <a href="#about" className="text-link">A little more about me <Arrow /></a>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a sunny, winding path">
            <div className="sun" />
            <div className="art-note note-one">currently growing</div>
            <div className="art-note note-two">one day at a time</div>
            <svg className="path-art" viewBox="0 0 520 510" role="img" aria-label="A winding path through a bright landscape">
              <path className="hill hill-back" d="M0 176C74 130 134 147 204 177c76 33 126 17 189-30 48-36 91-40 127-30v393H0Z" />
              <path className="hill hill-front" d="M0 263c73-35 146-18 210 24 84 55 128 44 202-7 42-29 73-36 108-20v250H0Z" />
              <path className="road-shadow" d="M125 510c88-86 108-142 82-207-17-42-11-79 28-115 37-34 41-74 16-124" />
              <path className="road" d="M125 510c88-86 108-142 82-207-17-42-11-79 28-115 37-34 41-74 16-124" />
              <path className="road-line" d="M125 510c88-86 108-142 82-207-17-42-11-79 28-115 37-34 41-74 16-124" />
              <circle className="flower flower-a" cx="419" cy="250" r="8" /><circle className="flower flower-b" cx="73" cy="340" r="6" /><circle className="flower flower-c" cx="456" cy="389" r="7" />
              <path className="sprig" d="M390 340c9-23 10-41 4-60m0 25c-13-2-20-8-24-17m25 6c12-5 17-12 19-22" />
              <ellipse className="leaf" cx="367" cy="286" rx="8" ry="4" transform="rotate(24 367 286)"/><ellipse className="leaf" cx="416" cy="278" rx="8" ry="4" transform="rotate(-32 416 278)" />
              <path className="sparkle" d="M90 135v20m-10-10h20M322 72v14m-7-7h14" />
            </svg>
            <div className="art-caption"><span>FIG. 01</span> — the long way is the good way</div>
          </div>
          <div className="hero-index"><span>01 / 03</span><span className="index-line" /><span>SCROLL TO EXPLORE</span></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-label"><span>01</span><span>THE SHORT VERSION</span></div>
          <div className="about-content">
            <p className="eyebrow">A bit about me</p>
            <h2>Right now, I’m a<br /><em> person of the internet.</em></h2>
            <div className="about-bottom">
              <p>I’m currently studying <strong>[AIBHS]</strong> at <strong>[UF in Jacksonville]</strong>. I like acquiring knowledge to be able o create technologies to be able to bend to my will.</p>
              <p>This site is only the beginning of my github and project experiences so it SHALL GROW!!!!.</p>
            </div>
          </div>
          <div className="about-stamp">CURIOUS<br />BY NATURE <span>✳</span></div>
        </section>

        <section className="interests section-wrap" id="interests">
          <div className="section-label"><span>02</span><span>THINGS THAT KEEP ME CURIOUS</span></div>
          <div className="interests-heading"><div><p className="eyebrow">Outside the syllabus</p><h2>A few things<br /><em>I’m into.</em></h2></div><p className="section-aside">The list is always changing.<br />That’s kind of the point.</p></div>
          <div className="interest-list">
            {interests.map((item) => <article className="interest-row" key={item.number}><span className="interest-number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="interest-mark" aria-hidden="true">↗</span></article>)}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-label"><span>03</span><span>THE NEXT CHAPTER</span></div>
          <p className="eyebrow">You made it to the bottom</p>
          <h2>Good things start<br />with <em>hello.</em></h2>
          <p className="contact-copy">Have a question, an idea, or just want to talk about something interesting? I’d love to hear from you.</p>
          <a className="contact-button" href="mailto:hello@example.com">Get in touch <Arrow diagonal /></a>
          <span className="contact-doodle" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark" href="#home">YN<span>.</span></a><p>Made with curiosity & a little bit of CSS.</p><a href="#home" className="back-top">Back to top ↑</a><span className="copyright">© 2025 [Your Name]</span></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
