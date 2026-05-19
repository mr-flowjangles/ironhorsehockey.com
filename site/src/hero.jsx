// hero.jsx — Hero, mission marquee, stat bar
function Hero({ onCTA }) {
  return (
    <section className="ihh-hero" id="home" data-screen-label="01 Home">
      <div className="ihh-hero__bg" aria-hidden="true">
        {/* Diagonal streaks */}
        <div className="ihh-streak" style={{ top: "10%",  left: "-5%",  width: "70%" }} />
        <div className="ihh-streak" style={{ top: "16%",  left: "10%",  width: "60%", opacity: 0.5 }} />
        <div className="ihh-streak" style={{ bottom: "12%", left: "-10%", width: "55%", opacity: 0.4 }} />
      </div>

      <div className="ihh-container">
        <div className="ihh-hero__grid">
          <div className="ihh-hero__copy">
            <div className="ihh-pill">
              <span className="dot" />
              Reg. open · Camp #1 · Aug 2026
            </div>

            <h1 className="ihh-display ihh-display--md" style={{ marginTop: 22, marginBottom: 0, fontSize: "clamp(40px, 6.4vw, 88px)" }}>
              <span className="ihh-chrome-text">Built<br />To Compete</span>
            </h1>

            <p style={{
              fontFamily: "var(--ihh-font-sub)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: 14,
              color: "var(--ihh-blue-hi)",
              marginTop: 22,
              marginBottom: 0,
            }}>
              Train <span style={{ color: "#fff", margin: "0 6px" }}>·</span>
              Compete <span style={{ color: "#fff", margin: "0 6px" }}>·</span>
              Improve
            </p>

            <p style={{
              maxWidth: 520,
              marginTop: 20,
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--ihh-text-mute)",
            }}>
              IronHorse Hockey Academy develops high-compete players through
              relentless effort, intensity, and grit — while teaching the modern
              concepts of attacking with control and sophisticated puck movement.
            </p>

            <div className="ihh-hero__cta">
              <button type="button" className="ihh-btn ihh-btn--lg" onClick={() => onCTA?.("register")}>
                Register for camp <ArrowIcon size={16} />
              </button>
              <button type="button" className="ihh-btn ihh-btn--ghost ihh-btn--lg" onClick={() => onCTA?.("schedule")}>
                View schedule
              </button>
            </div>

            <div className="ihh-hero__metas">
              <span className="ihh-hero__meta-item"><CalendarIcon size={18} /><span><strong>Jul 31 – Aug 2, 2026</strong></span></span>
              <span style={{ width: 1, height: 16, background: "var(--ihh-line-2)" }} />
              <span className="ihh-hero__meta-item"><PinIcon size={18} /><span><strong>New Ulm, MN</strong></span></span>
              <span style={{ width: 1, height: 16, background: "var(--ihh-line-2)" }} />
              <span className="ihh-hero__meta-item"><GroupIcon size={18} /><span><strong>Grades 7 – 9</strong></span></span>
            </div>
          </div>

          <div className="ihh-hero__art">
            <div className="ihh-hero__logo-stage" aria-hidden="true">
              <span className="ihh-hero__logo-glow" />
              <img
                className="ihh-hero__logo-img"
                src="assets/ironhorse-logo.png"
                alt="IronHorse Hockey Academy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ihh-container" style={{ marginTop: 64 }}>
        <div className="ihh-statbar">
          <div className="ihh-statbar__cell">
            <div className="ihh-statbar__num">5<small>×</small></div>
            <div className="ihh-statbar__lbl">Ice sessions per camp</div>
          </div>
          <div className="ihh-statbar__cell">
            <div className="ihh-statbar__num">7.5<small>hr</small></div>
            <div className="ihh-statbar__lbl">Total on-ice time</div>
          </div>
          <div className="ihh-statbar__cell">
            <div className="ihh-statbar__num">3<small>days</small></div>
            <div className="ihh-statbar__lbl">Friday through Sunday</div>
          </div>
          <div className="ihh-statbar__cell">
            <div className="ihh-statbar__num">$150</div>
            <div className="ihh-statbar__lbl">All skill levels · Grades 7–9</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Looping mission marquee strip — modern ESPN pre-game vibe.
function Marquee() {
  const items = [
    { t: "Train. Compete. Improve.", blue: false },
    { t: "Built To Compete", blue: true },
    { t: "Relentless Effort", blue: false },
    { t: "Sophisticated Puck Movement", blue: true },
    { t: "Hockey IQ", blue: false },
    { t: "Attack With Control", blue: true },
  ];
  const seq = [...items, ...items];
  return (
    <div className="ihh-marquee" aria-hidden="true">
      <div className="ihh-marquee__track">
        {seq.map((it, i) => (
          <span key={i} className={`ihh-marquee__item ${it.blue ? "is-blue" : ""}`}>
            <span className="dot" />
            {it.t}
          </span>
        ))}
      </div>
    </div>
  );
}

window.Hero = Hero;
window.Marquee = Marquee;
