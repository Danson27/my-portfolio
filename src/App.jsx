import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero">
        <h1>Dan Sonnenblick</h1>
        <h2>Computer Science Student</h2>
        <p>
          I am a CS student at Bar Ilan University building full-stack applications and data-driven solutions.
        </p>
        <p>
          Feel free to email me at <a href="mailto:dan.sonnenblick@gmail.com" className="link"><strong>dan.sonnenblick@gmail.com</strong></a>       
        </p>
        <div className="hero-links">
        <a href="https://www.linkedin.com/in/dan-sonnenblick

" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>          <a href="https://github.com/Danson27" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </header>
      <section className="skills-section">
        <div className="skills-group">
          <h3>Languages</h3>
          <div className="pill-container">
            <span className="pill">C</span>
            <span className="pill">Python</span>
            <span className="pill">Java</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Technologies & Tools</h3>
          <div className="pill-container">
            <span className="pill">HTML</span>
            <span className="pill">Jira</span>
            <span className="pill">GitHub</span>
            <span className="pill">React</span>
            <span className="pill">Firebase</span>
          </div>
        </div>
      </section>
      <section className="projects-section">
        <h3>Featured Projects</h3>
        
        <div className="project-card">
          <h4>NCAA March Madness Predictor</h4>
          <p className="tech-stack">Python | Pandas | React</p>
          <p>
            A data analysis and algorithmic modeling project designed to predict the NCAA March Madness tournament bracket. 
            Aggregates historical team performance metrics to simulate matchups and optimize bracket selections.
          </p>
          <div className="project-links">
            <a href="https://marchmeshuguna.lovable.app/" className="link">View Live Dashboard ↗</a>
            <a 
            href="/march-madness-paper.pdf" 
            className="link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read Algorithm Deep-Dive ↗
          </a>     
             </div>
        </div>

        <div className="project-card">
          <h4>RealAI</h4>
          <p className="tech-stack">React | Firebase | Node.js</p>
          <p>
            A full-stack web application for sharing and interacting with AI-generated videos. 
            Engineered the backend architecture using Firebase for secure user authentication and seamless media storage.
          </p>
          <div className="project-links">
            <a href="https://realai.lovable.app/" className="link">Visit RealAI ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Dan Sonnenblick. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App