// app.jsx — Top-level App: composes sections, owns nav state + Tweaks panel
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState("home");

  // Apply tweaks → CSS variables / body attributes
  React.useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    // Palette (electric / ice / chrome)
    const p = PALETTES[t.palette] || PALETTES.electric;
    Object.entries(p).forEach(([k, v]) => {
      if (k.startsWith("--")) root.style.setProperty(k, v);
    });
    // Display font swap
    root.style.setProperty("--ihh-font-display", FONTS[t.displayFont] || FONTS.bigShoulders);
    // Grit level
    body.setAttribute("data-grit", t.grit);
  }, [t.palette, t.displayFont, t.grit]);

  // Spy on scroll for active nav highlight
  React.useEffect(() => {
    const ids = ["home", "about", "schedule", "register"];
    const opts = { rootMargin: "-45% 0px -50% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, opts);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className="ihh-grain" aria-hidden="true" />
      {t.scanlines && <div className="ihh-scanlines" aria-hidden="true" />}

      <Nav active={active} onNav={scrollTo} />
      <Hero onCTA={scrollTo} />
      <Marquee />
      <MissionBlock />
      <Schedule onRegister={() => scrollTo("register")} />
      <CoachStaff />
      <Register />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakColor
          label="Palette"
          value={PALETTES[t.palette].swatch}
          options={Object.values(PALETTES).map((p) => p.swatch)}
          onChange={(v) => {
            const name = Object.keys(PALETTES).find(
              (k) => JSON.stringify(PALETTES[k].swatch) === JSON.stringify(v)
            );
            if (name) setTweak("palette", name);
          }}
        />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          options={[
            { value: "bigShoulders", label: "Big Shoulders (default)" },
            { value: "oswald",       label: "Oswald" },
            { value: "anton",        label: "Anton" },
            { value: "saira",        label: "Saira Condensed" },
            { value: "russo",        label: "Russo One" },
          ]}
          onChange={(v) => setTweak("displayFont", v)}
        />
        <TweakSection label="Atmosphere" />
        <TweakRadio
          label="Grit"
          value={t.grit}
          options={["off", "low", "regular", "high"]}
          onChange={(v) => setTweak("grit", v)}
        />
        <TweakToggle
          label="Scanlines"
          value={t.scanlines}
          onChange={(v) => setTweak("scanlines", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

// Tweak helpers — alternate palettes for the brand
const PALETTES = {
  // Default. Cobalt electric on near-black. Matches the flyer 1:1.
  electric: {
    swatch: ["#1E63FF", "#04070F", "#B8C4D6"],
    "--ihh-bg":        "#04070F",
    "--ihh-bg-alt":    "#080D1B",
    "--ihh-bg-card":   "#0C1326",
    "--ihh-blue":      "#1E63FF",
    "--ihh-blue-hi":   "#4E86FF",
    "--ihh-blue-deep": "#0A3FCC",
    "--ihh-blue-glow": "rgba(30, 99, 255, 0.55)",
    "--ihh-chrome":    "#B8C4D6",
    "--ihh-line-blue": "rgba(30, 99, 255, 0.35)",
  },
  // Cooler — frozen ice / arctic. Pulls toward cyan.
  ice: {
    swatch: ["#2BC4F6", "#03080F", "#C8D6E0"],
    "--ihh-bg":        "#03080F",
    "--ihh-bg-alt":    "#061018",
    "--ihh-bg-card":   "#0A1822",
    "--ihh-blue":      "#2BC4F6",
    "--ihh-blue-hi":   "#7BE0FF",
    "--ihh-blue-deep": "#0B7AAA",
    "--ihh-blue-glow": "rgba(43, 196, 246, 0.55)",
    "--ihh-chrome":    "#C8D6E0",
    "--ihh-line-blue": "rgba(43, 196, 246, 0.35)",
  },
  // High-contrast steel — black, near-white, hot blue spot only.
  chrome: {
    swatch: ["#3F76FF", "#06070A", "#E8EDF5"],
    "--ihh-bg":        "#06070A",
    "--ihh-bg-alt":    "#0C0E14",
    "--ihh-bg-card":   "#11141C",
    "--ihh-blue":      "#3F76FF",
    "--ihh-blue-hi":   "#9AB6FF",
    "--ihh-blue-deep": "#1B3CB8",
    "--ihh-blue-glow": "rgba(63, 118, 255, 0.4)",
    "--ihh-chrome":    "#E8EDF5",
    "--ihh-line-blue": "rgba(154, 182, 255, 0.28)",
  },
  // Aggressive red accent — only if you want a real heel-turn.
  blood: {
    swatch: ["#FF2746", "#08060A", "#DCC8CE"],
    "--ihh-bg":        "#08060A",
    "--ihh-bg-alt":    "#11090E",
    "--ihh-bg-card":   "#180B12",
    "--ihh-blue":      "#FF2746",
    "--ihh-blue-hi":   "#FF6680",
    "--ihh-blue-deep": "#9E0E22",
    "--ihh-blue-glow": "rgba(255, 39, 70, 0.55)",
    "--ihh-chrome":    "#DCC8CE",
    "--ihh-line-blue": "rgba(255, 39, 70, 0.32)",
  },
};

const FONTS = {
  bigShoulders: '"Big Shoulders Display", "Oswald", system-ui, sans-serif',
  oswald:       '"Oswald", system-ui, sans-serif',
  anton:        '"Anton", system-ui, sans-serif',
  saira:        '"Saira Condensed", system-ui, sans-serif',
  russo:        '"Russo One", system-ui, sans-serif',
};

window.App = App;
window.PALETTES = PALETTES;
window.FONTS = FONTS;
