// nav.jsx — Sticky top navigation
function Nav({ active, onNav }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const links = [
    { id: "home",     label: "Home" },
    { id: "about",    label: "About" },
    { id: "schedule", label: "Schedule" },
    { id: "register", label: "Register" },
  ];

  const go = (id) => {
    setMobileOpen(false);
    onNav?.(id);
  };

  return (
    <nav className="ihh-nav">
      <div className="ihh-container ihh-nav__inner">
        <a className="ihh-nav__logo" href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} aria-label="IronHorse Hockey Academy — home">
          <img
            src="assets/ironhorse-mark-transparent.png"
            alt="IronHorse Hockey Academy"
            style={{ height: 54, width: "auto", display: "block" }}
          />
        </a>

        <div className="ihh-nav__links">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className={`ihh-nav__link ${active === l.id ? "is-active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="ihh-btn" type="button" onClick={() => go("register")} style={{ height: 42, padding: "0 22px", fontSize: 12 }}>
            Register <ArrowIcon size={14} />
          </button>
          <button
            type="button"
            className="ihh-nav__menu"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="ihh-mobile-menu">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className="ihh-mobile-menu__link"
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;
