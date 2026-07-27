/**
 * RED-K EMPIRE — map, filtres, vault, nav
 */
(() => {
  "use strict";

  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const searchForm = document.getElementById("market-search");
  const grid = document.getElementById("portfolio-grid");
  const emptyMsg = document.getElementById("portfolio-empty");
  const cards = grid ? [...grid.querySelectorAll(".data-card")] : [];
  const vaultForm = document.getElementById("vault-form");

  /* —— Mobile nav —— */
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      nav.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
    document.querySelectorAll(".header-cta").forEach((cta) => {
      cta.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* —— Active nav —— */
  const sections = ["home", "off-market", "vault", "investisseurs", "vendeurs", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = [...document.querySelectorAll(".nav__link")];

  const navHrefForSection = (id) => {
    if (id === "home") return "#home";
    if (id === "off-market") return "#off-market";
    if (id === "vault") return "#vault";
    if (id === "investisseurs") return "#investisseurs";
    if (id === "vendeurs") return "#vendeurs";
    if (id === "contact") return "#contact";
    return null;
  };

  const updateActiveNav = () => {
    const y = window.scrollY + 110;
    let current = "home";
    for (const section of sections) {
      if (section.offsetTop <= y) current = section.id;
    }
    const activeHref = navHrefForSection(current);
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("is-active", href === activeHref);
    });
  };
  window.addEventListener("scroll", updateActiveNav, { passive: true });

  /* —— Paris dark map (Leaflet + CartoDB Dark Matter) —— */
  const mapEl = document.getElementById("paris-map");
  if (mapEl && typeof L !== "undefined") {
    const map = L.map(mapEl, {
      zoomControl: false,
      attributionControl: true,
      dragging: true,
      scrollWheelZoom: false,
    }).setView([48.8566, 2.3522], 13);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    const pinIcon = L.divIcon({
      className: "",
      html: '<div class="rk-pin"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 18],
    });

    const assets = [
      { lat: 48.8738, lng: 2.2950, label: "Boutique d'angle — 8ème", pin: "1" },
      { lat: 48.8631, lng: 2.3708, label: "Restauration — 11ème", pin: "2" },
      { lat: 48.8637, lng: 2.2769, label: "Bureaux prime — 16ème", pin: "3" },
      { lat: 48.8606, lng: 2.3376, label: "Off-Market α", pin: "4" },
      { lat: 48.8700, lng: 2.3320, label: "Off-Market β", pin: "5" },
    ];

    const markers = {};
    assets.forEach((a) => {
      const m = L.marker([a.lat, a.lng], { icon: pinIcon, title: a.label }).addTo(map);
      markers[a.pin] = m;
    });

    cards.forEach((card) => {
      const pin = card.dataset.pin;
      card.addEventListener("mouseenter", () => {
        const m = markers[pin];
        if (m) {
          map.panTo(m.getLatLng(), { animate: true, duration: 0.4 });
        }
      });
    });

    setTimeout(() => map.invalidateSize(), 200);
    window.addEventListener("resize", () => map.invalidateSize());
  }

  /* —— Filtres —— */
  const applyFilters = () => {
    if (!grid) return;
    const type = document.getElementById("filter-type")?.value ?? "";
    const tx = document.getElementById("filter-tx")?.value ?? "";
    const arr = document.getElementById("filter-arr")?.value ?? "";

    let visible = 0;
    cards.forEach((card) => {
      const show =
        (!type || card.dataset.type === type) &&
        (!tx || card.dataset.transaction === tx) &&
        (!arr || card.dataset.arr === arr);
      card.classList.toggle("is-hidden", !show);
      if (show) visible += 1;
    });

    if (emptyMsg) emptyMsg.hidden = visible > 0;
    document.getElementById("off-market")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      applyFilters();
    });
  }

  /* —— Vault form —— */
  if (vaultForm) {
    vaultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(vaultForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      if (!name || !email) return;

      const subject = encodeURIComponent("Accès Off-Market VIP — RED-K EMPIRE");
      const body = encodeURIComponent(`Nom / Société: ${name}\nEmail: ${email}\n\nDemande d'accès aux dossiers confidentiels.`);

      const success = document.getElementById("vault-success");
      vaultForm.querySelectorAll("input, button[type='submit']").forEach((el) => {
        el.style.display = "none";
      });
      if (success) success.hidden = false;

      window.location.href = `mailto:contact@red-k-empire.fr?subject=${subject}&body=${body}`;
    });
  }
})();
