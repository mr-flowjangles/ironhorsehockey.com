// schedule.jsx — Featured camp block + ice-session timetable
function Schedule({ onRegister }) {
  const sessions = [
    { day: "FRI",  date: "Jul 31", time: "5:30 – 7:00 PM",   pill: "Skate-In",    accent: true },
    { day: "SAT",  date: "Aug 1",  time: "9:00 – 10:30 AM",  pill: "Skill"  },
    { day: "SAT",  date: "Aug 1",  time: "10:45 – 12:15 PM", pill: "Concepts" },
    { day: "SAT",  date: "Aug 1",  time: "4:00 – 5:30 PM",   pill: "Compete" },
    { day: "SUN",  date: "Aug 2",  time: "9:00 – 10:30 AM",  pill: "Compete" },
  ];
  return (
    <section className="ihh-section" id="schedule" data-screen-label="04 Schedule">
      <div className="ihh-container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="ihh-eyebrow">Up Next</span>
            <h2 className="ihh-display ihh-display--md" style={{ margin: "18px 0 0" }}>
              <span style={{ color: "#fff" }}>Camp&nbsp;</span>
              <span className="ihh-blue-text">#01</span>
            </h2>
          </div>
          <div className="ihh-pill" style={{ background: "rgba(34,196,116,0.1)", color: "#22C474", borderColor: "rgba(34,196,116,0.35)" }}>
            <span className="dot" />
            Registration open
          </div>
        </div>

        <div className="ihh-featured" style={{ marginTop: 28 }}>
          <div className="ihh-featured__main">
            <span className="ihh-eyebrow">Built To Compete · Summer ’26</span>
            <h3 className="ihh-display ihh-display--md" style={{ margin: "14px 0 0", color: "#fff" }}>
              New Ulm Civic Center
            </h3>
            <div className="ihh-featured__date">
              <span className="ihh-display ihh-display--sm" style={{ color: "var(--ihh-blue-hi)" }}>
                Jul 31 – Aug 2
              </span>
              <span className="m">Fri – Sun · 2026</span>
            </div>
            <dl className="ihh-featured__meta">
              <div>
                <dt>Grades</dt>
                <dd>7th — 9th</dd>
              </div>
              <div>
                <dt>Skill level</dt>
                <dd>All levels</dd>
              </div>
              <div>
                <dt>Sessions</dt>
                <dd>5 on ice</dd>
              </div>
              <div>
                <dt>Total on ice</dt>
                <dd>7.5 hours</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>New Ulm, MN</dd>
              </div>
              <div>
                <dt>Spaces</dt>
                <dd>Limited</dd>
              </div>
            </dl>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "5 ice sessions across the weekend",
                "Skill development, compete level, puck movement, team concepts",
                "Great chance to elevate your game pre-season",
              ].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14.5, color: "var(--ihh-text-mute)" }}>
                  <span style={{ color: "var(--ihh-blue-hi)" }}><CheckIcon size={16} /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ihh-featured__price">
            <div>
              <div className="ihh-eyebrow ihh-eyebrow--mute" style={{ color: "var(--ihh-text-mute)" }}>Cost</div>
              <div className="ihh-featured__price big">
                <small>$</small>150
              </div>
              <div style={{ color: "var(--ihh-text-mute)", fontSize: 13.5, marginTop: 6 }}>
                Per player · Includes all 5 sessions
              </div>
            </div>
            <button type="button" className="ihh-btn ihh-btn--lg ihh-btn--block" onClick={onRegister}>
              Reserve a Spot <ArrowIcon size={16} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ihh-text-subtle)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--ihh-font-sub)", fontWeight: 600 }}>
              <MailIcon size={14} />
              <span>Email registration · Venmo payment</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <span className="ihh-eyebrow">Ice Sessions · 5 Total</span>
          <div className="ihh-sessions" style={{ marginTop: 18 }}>
            {sessions.map((s, i) => (
              <div key={i} className={`ihh-session ${s.accent ? "is-friday" : ""}`}>
                <div className="ihh-session__day">
                  <span className="num">{s.date}</span>
                  {s.day}
                </div>
                <div className="ihh-session__time"><ClockIcon size={14} /> &nbsp; {s.time}</div>
                <div style={{ marginTop: 8 }}>
                  <span className="ihh-pill" style={{ height: 22, fontSize: 10, padding: "0 8px" }}>{s.pill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Schedule = Schedule;
