// register.jsx — Registration form (design only, no real submit) + Venmo panel
function Register() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    skater: "", parent: "", email: "", phone: "",
    grade: "7th", level: "All / mixed",
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  if (submitted) {
    return (
      <section className="ihh-section" id="register" data-screen-label="05 Register">
        <div className="ihh-container">
          <div className="ihh-card ihh-card--cut ihh-card--accent" style={{ padding: "56px 48px", textAlign: "center" }}>
            <span className="ihh-pill" style={{ marginBottom: 20, background: "rgba(34,196,116,0.12)", color: "#22C474", borderColor: "rgba(34,196,116,0.35)" }}>
              <span className="dot" /> Request received
            </span>
            <h2 className="ihh-display ihh-display--md" style={{ margin: "12px 0 16px" }}>
              <span className="ihh-chrome-text">You’re on the list.</span>
            </h2>
            <p style={{ color: "var(--ihh-text-mute)", maxWidth: 540, margin: "0 auto 24px", fontSize: 16.5 }}>
              We'll confirm your spot by email and send the Venmo payment link to
              lock it in. Spaces are limited — your skater is in good company.
            </p>
            <button type="button" className="ihh-btn" onClick={() => setSubmitted(false)}>
              Add another player <ArrowIcon size={14} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ihh-section" id="register" data-screen-label="05 Register">
      <div className="ihh-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
          <div>
            <span className="ihh-eyebrow">Reserve a Spot</span>
            <h2 className="ihh-display ihh-display--md" style={{ margin: "18px 0 0" }}>
              <span style={{ color: "#fff" }}>Lock&nbsp;</span>
              <span className="ihh-blue-text">your ice.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--ihh-text-mute)", margin: 0, fontSize: 15.5 }}>
            Send your details below — we'll reply with a confirmation and a
            Venmo link. Space limited; first paid, first on the ice.
          </p>
        </div>

        <div className="ihh-reg">
          <form
            className="ihh-reg__form"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div className="ihh-row ihh-row--2">
              <label className="ihh-field">
                <span className="ihh-field__lbl">Skater’s name <span className="req">*</span></span>
                <input className="ihh-input" required value={form.skater} onChange={set("skater")} placeholder="First &amp; last" />
              </label>
              <label className="ihh-field">
                <span className="ihh-field__lbl">Parent / Guardian <span className="req">*</span></span>
                <input className="ihh-input" required value={form.parent} onChange={set("parent")} placeholder="First &amp; last" />
              </label>
            </div>
            <div className="ihh-row ihh-row--2">
              <label className="ihh-field">
                <span className="ihh-field__lbl">Email <span className="req">*</span></span>
                <input className="ihh-input" required type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" />
              </label>
              <label className="ihh-field">
                <span className="ihh-field__lbl">Phone</span>
                <input className="ihh-input" type="tel" value={form.phone} onChange={set("phone")} placeholder="(___) ___-____" />
              </label>
            </div>
            <div className="ihh-row ihh-row--2">
              <label className="ihh-field">
                <span className="ihh-field__lbl">Grade in 2026–27</span>
                <select className="ihh-select" value={form.grade} onChange={set("grade")}>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                </select>
              </label>
              <label className="ihh-field">
                <span className="ihh-field__lbl">Skill level</span>
                <select className="ihh-select" value={form.level} onChange={set("level")}>
                  <option>All / mixed</option>
                  <option>Recreational</option>
                  <option>Travel / association</option>
                  <option>Advanced / AAA</option>
                </select>
              </label>
            </div>
            <label className="ihh-field">
              <span className="ihh-field__lbl">Notes (optional)</span>
              <textarea
                className="ihh-input"
                style={{ height: 88, padding: 14, resize: "vertical" }}
                placeholder="Position, allergies, anything we should know."
              />
            </label>
            <button type="submit" className="ihh-btn ihh-btn--lg" style={{ marginTop: 8 }}>
              Send registration <ArrowIcon size={16} />
            </button>
            <p style={{ marginTop: 14, color: "var(--ihh-text-subtle)", fontSize: 12 }}>
              By submitting you'll receive a confirmation email at the address
              above. We never share your info.
            </p>
          </form>

          <aside className="ihh-reg__pay">
            <span className="ihh-eyebrow">Payment</span>
            <h3 className="ihh-display ihh-display--sm" style={{ margin: "16px 0 8px" }}>
              <span style={{ color: "#fff" }}>Via</span>{" "}
              <span className="ihh-blue-text">Venmo.</span>
            </h3>
            <p style={{ color: "var(--ihh-text-mute)", fontSize: 15, lineHeight: 1.6 }}>
              Send <strong style={{ color: "#fff" }}>$150</strong> to lock the
              spot. Note your skater's name in the memo.
            </p>

            <div className="ihh-venmo">
              <div className="ihh-venmo__hd">
                <span className="ihh-venmo__lbl">Pay to</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#3D95F2", fontWeight: 700, fontSize: 13 }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d="M20 4l-7 16h-5L4 4h4l3 9 4-9z" />
                  </svg>
                  venmo
                </span>
              </div>
              <div className="ihh-venmo__handle">@IronHorseHockeyAcademy</div>
              <div className="ihh-venmo__sub" style={{ marginTop: 4 }}>IronHorse Hockey</div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 20 }}>
                <div className="ihh-qr" aria-hidden="true" />
                <div style={{ fontSize: 13, color: "var(--ihh-text-mute)" }}>
                  <div style={{ fontFamily: "var(--ihh-font-sub)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ihh-text-subtle)" }}>
                    Scan to pay
                  </div>
                  <div style={{ marginTop: 6 }}>
                    Memo: skater’s name &amp; “Camp&nbsp;#1”
                  </div>
                </div>
              </div>
            </div>

            <hr className="ihh-rule" style={{ margin: "28px 0" }} />

            <div className="ihh-stack ihh-stack--md">
              <div>
                <div className="ihh-eyebrow ihh-eyebrow--mute" style={{ color: "var(--ihh-text-mute)" }}>Direct contact</div>
                <a
                  href="mailto:lheuer@ironhorsehockey.com"
                  style={{ fontFamily: "var(--ihh-font-sub)", fontSize: 16, color: "#fff", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 8 }}
                >
                  <MailIcon size={16} />
                  lheuer@ironhorsehockey.com
                </a>
              </div>
              <p style={{ color: "var(--ihh-text-subtle)", fontSize: 12.5 }}>
                Prefer email instead of the form? Send name, grade, and contact
                info and we'll route it from there.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.Register = Register;
