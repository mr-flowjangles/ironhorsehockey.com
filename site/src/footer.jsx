// footer.jsx
function Footer() {
  return (
    <footer className="ihh-footer">
      <div className="ihh-container">
        <div className="ihh-footer__grid">
          <div>
            <img
              src="assets/ironhorse-mark-transparent.png"
              alt="IronHorse Hockey Academy"
              style={{ height: 96, width: "auto" }}
            />
            <p style={{ color: "var(--ihh-text-mute)", maxWidth: 360, marginTop: 22, fontSize: 14.5, lineHeight: 1.65 }}>
              A youth development hockey academy out of New Ulm, MN. Train.
              Compete. Improve.
            </p>
          </div>

          <div className="ihh-footer__col">
            <h4>Site</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          <div className="ihh-footer__col">
            <h4>Camp #1</h4>
            <ul>
              <li>July 31 – Aug 2, 2026</li>
              <li>New Ulm Civic Center</li>
              <li>Grades 7 – 9 · All levels</li>
              <li>$150 per player</li>
            </ul>
          </div>

          <div className="ihh-footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:lheuer@ironhorsehockey.com">lheuer@ironhorsehockey.com</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>@IronHorseHockeyAcademy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Venmo · pay $150</a></li>
            </ul>
          </div>
        </div>

        <div className="ihh-footer__btm">
          <span>© {new Date().getFullYear()} IronHorse Hockey Academy</span>
          <span>Site by Bellese · Design preview</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
