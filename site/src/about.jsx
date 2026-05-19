// about.jsx — Mission block, three pillars, "about IHA" panel with coach list
function MissionBlock() {
  return (
    <section className="ihh-section" id="about" data-screen-label="02 About">
      <div className="ihh-container">
        <span className="ihh-eyebrow">The Mission</span>
        <div className="ihh-mission" style={{ marginTop: 24 }}>
          <h2 className="ihh-mission__lead">
            Develop players who <em>love the fight</em> for the puck — and
            understand the game well enough to win it.
          </h2>
          <div className="ihh-mission__body">
            <p>
              IronHorse Hockey Academy is a development program built around
              one idea: the players who win the next level are the players who
              compete every shift. We pair the grit our name promises with
              modern teaching — attacking with control, sophisticated puck
              movement, and team play that holds up under pressure.
            </p>
            <p>
              Our camps run small. Every skater gets reps with experienced
              coaches who have played and developed at the highest levels.
              Every drill is built around game-realistic decisions, not lines
              of cones. Come in a player. Leave a different one.
            </p>
          </div>
        </div>

        <div className="ihh-pillars" style={{ marginTop: 72 }}>
          <article className="ihh-pillar">
            <span className="ihh-pillar__num">01 / Coaching</span>
            <div className="ihh-pillar__icon"><SkaterIcon size={32} /></div>
            <h3 className="ihh-pillar__title">Elite Coaching</h3>
            <p className="ihh-pillar__body">
              Learn from coaches who've played and developed at the highest
              levels. Direct, in-drill feedback every rep — not standing on
              the bench with a clipboard.
            </p>
          </article>
          <article className="ihh-pillar">
            <span className="ihh-pillar__num">02 / Concepts</span>
            <div className="ihh-pillar__icon"><PlaybookIcon size={32} /></div>
            <h3 className="ihh-pillar__title">Team Play & Hockey IQ</h3>
            <p className="ihh-pillar__body">
              Build the fundamentals — game awareness, puck support, spacing,
              offensive execution — that turn talented skaters into players
              coaches at the next level want.
            </p>
          </article>
          <article className="ihh-pillar">
            <span className="ihh-pillar__num">03 / Compete</span>
            <div className="ihh-pillar__icon"><TrophyIcon size={32} /></div>
            <h3 className="ihh-pillar__title">Compete &amp; Grow</h3>
            <p className="ihh-pillar__body">
              Daily competitive environment. Small-area games, battle drills,
              measured progress. You leave knowing where you sharpened — and
              what to keep working on.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

// "Who's behind it" — coach placeholder block. Names redacted until user provides.
function CoachStaff() {
  const coaches = [
    { num: "01", name: "L. Heuer",   role: "Founder · Lead instructor",        pos: "Forwards" },
    { num: "02", name: "Coach TBA",  role: "Development coach",                pos: "Defense"  },
    { num: "03", name: "Coach TBA",  role: "Skill development",                pos: "Goalies"  },
    { num: "04", name: "Guest TBA",  role: "Guest instructor · Camp #1",       pos: "Forwards" },
  ];
  return (
    <section className="ihh-section ihh-section--alt" data-screen-label="03 Staff">
      <div className="ihh-container">
        <div className="ihh-about">
          <div className="ihh-about__heading">
            <span className="ihh-eyebrow">The Staff</span>
            <h2 className="ihh-display ihh-display--md" style={{ margin: "18px 0 16px" }}>
              <span style={{ color: "#fff" }}>Coaches who've</span>{" "}
              <span className="ihh-blue-text">been there.</span>
            </h2>
            <p style={{ color: "var(--ihh-text-mute)", maxWidth: 460, fontSize: 16.5, lineHeight: 1.65 }}>
              Our staff played and coached at high levels of the game. They
              teach the way they were taught at their best — through reps,
              context, and a high bar.
            </p>
            <p className="ihh-about__sig">
              <em style={{ fontStyle: "normal", color: "var(--ihh-blue-hi)" }}>Note —</em>{" "}
              Roster for Camp #1 finalizes June 2026. Drop your email and we'll
              send the lineup when it locks.
            </p>
          </div>

          <div>
            <div className="ihh-coach-list">
              {coaches.map((c) => (
                <div className="ihh-coach" key={c.num}>
                  <span className="ihh-coach__num">{c.num}</span>
                  <div>
                    <div className="ihh-coach__name">{c.name}</div>
                    <div className="ihh-coach__role">{c.role}</div>
                  </div>
                  <span className="ihh-coach__pos">{c.pos}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.MissionBlock = MissionBlock;
window.CoachStaff = CoachStaff;
