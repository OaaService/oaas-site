// Minimal i18n: <html data-i18n-page="index|privacy">, elements with data-i18n="key".
// Language = ?lang= > localStorage > navigator, fallback en.
(function () {
  const dict = {
    en: {
      "nav.work": "Work", "nav.principles": "Principles", "nav.studio": "Studio", "nav.contact": "Contact",
      "hero.eyebrow": "Independent software studio — France",
      "hero.title": "Software that does one thing.<br><em>And does it well.</em>",
      "hero.cta1": "See the work",
      "work.title": "Work", "work.count": "03 products",
      "tl.tag": "Team passwords, actually secured.", "tl.desc": "Enterprise password manager, open source (GPL-3) and self-hosted. Per-user RSA keys, encrypted vault, browser extension and mobile app. Your secrets never leave your infrastructure.", "tl.status": "Coming soon", "tl.meta": "Open source · Self-hosted",
      "sentinel.status": "Live", "bw.status": "Coming to Google Play", "bw.offline": "100% offline",
      "principles.title": "Principles", "principles.sub": "Non-negotiable",
      "hero.lead": "OAAS designs and ships focused, dependable tools — from cloud infrastructure monitoring to a baby monitor on your wrist. Same standard everywhere: simplicity, robustness, respect for your data.",
      "hero.cta2": "Get in touch",
      "sol.title": "Solutions", "sol.sub": "Two products, two worlds, one philosophy.",
      "sentinel.tag": "Know when your services break.",
      "sentinel.desc": "Aggregates health signals from Prometheus, Grafana, Datadog and Kubernetes into one hub, and alerts instantly via Slack, email or webhook. Service discovery, infrastructure map, rollout detection.",
      "sentinel.chip4": "Freemium", "sentinel.cta": "sentinel-app.io →",
      "bw.tag": "Forgot the baby monitor? Your watch is enough.",
      "bw.desc": "Turns a Wear OS watch into a baby monitor. The watch listens, the phone alerts — over Bluetooth, no account, no server. Auto-calibrated cry detection, live listening, talk-back, lost-link alarm.",
      "bw.chip3": "100% offline", "bw.chip4": "Coming to Google Play", "bw.cta": "Privacy policy →",
      "approach.title": "Approach", "approach.sub": "What we refuse to compromise on.",
      "p1.h": "Simple by design", "p1.p": "A product should make sense in ten seconds. Complexity is absorbed by the software, never pushed onto the user.",
      "p2.h": "Reliable first", "p2.p": "A monitoring tool or a baby monitor that goes quiet when things break is worse than nothing. Our products also alert when <em>they</em> lose their grip.",
      "p3.h": "Data respected", "p3.p": "Offline by default whenever possible, no tracking, no data collected without a reason. What you don't give us cannot leak.",
      "studio.title": "The studio",
      "studio.p1": "OAAS is an independent software studio founded by <strong>Olivier de Régis</strong>, software and infrastructure engineer. After years building and operating cloud platforms, the urge to make clean, quiet products that solve a real problem — usually his own, first.",
      "studio.p2": "Sentinel was born from the need to see clearly inside production Kubernetes clusters. BabyWatch, from a baby monitor forgotten one evening at friends'.",
      "contact.p": "A question, a project, feedback on a product?",
      "footer.legal": "© OAAS · SAS with €100 share capital · 12 rue de Rivoli, 59230 Saint-Amand-les-Eaux, France · SIREN 953 100 484",
      "footer.privacy": "BabyWatch privacy",
      // privacy page
      "pv.back": "← OAAS", "pv.title": "🌙 BabyWatch — Privacy Policy",
      "pv.badge": "In short: no data ever leaves your devices.",
      "pv.what.h": "What the app does",
      "pv.what.p": "BabyWatch turns your Wear OS watch into a baby monitor: the watch listens to the room and alerts your Android phone, over Bluetooth (or local Wi-Fi), directly between your two paired devices.",
      "pv.data.h": "Data collected",
      "pv.data.p": "<strong>None.</strong> BabyWatch has no server, does not request the Internet permission and creates no account. We technically have no way to access your data.",
      "pv.mic.h": "Microphone and audio",
      "pv.mic.1": "The watch microphone measures the sound level and, on request, streams audio to your phone. Audio travels only between your devices, with no intermediary.",
      "pv.mic.2": "The phone microphone is used only for the “Talk” feature (your voice to the watch speaker), when you activate it.",
      "pv.mic.3": "On an alert, a 10-second clip is kept <em>on your phone</em> so you can replay it. You can delete clips by uninstalling the app or clearing its data.",
      "pv.hist.h": "History",
      "pv.hist.p": "Monitoring sessions and their events (cries detected, link lost) are stored locally on your phone. They are never transmitted.",
      "pv.perm.h": "Permissions requested",
      "pv.perm.1": "<strong>Microphone</strong> (watch and phone) — see above.",
      "pv.perm.2": "<strong>Notifications</strong> — for alerts.",
      "pv.perm.3": "<strong>Foreground service</strong> — so monitoring keeps running with the screen off.",
      "pv.warn.h": "Disclaimer",
      "pv.warn.p": "BabyWatch is an aid and never replaces adult supervision. Bluetooth range is limited; the app warns you when the link is lost, but cannot guarantee continuous availability.",
      "pv.contact.h": "Contact", "pv.updated": "Last updated: August 25, 2026"
    },
    fr: {
      "nav.work": "Réalisations", "nav.principles": "Principes", "nav.studio": "Studio", "nav.contact": "Contact",
      "hero.eyebrow": "Studio logiciel indépendant — France",
      "hero.title": "Des logiciels qui font une chose.<br><em>Et la font bien.</em>",
      "hero.cta1": "Voir les réalisations",
      "work.title": "Réalisations", "work.count": "03 produits",
      "tl.tag": "Les mots de passe d'équipe, vraiment sécurisés.", "tl.desc": "Gestionnaire de mots de passe d'entreprise, open source (GPL-3) et auto-hébergé. Clés RSA par utilisateur, coffre chiffré, extension navigateur et app mobile. Vos secrets ne quittent jamais votre infrastructure.", "tl.status": "Bientôt", "tl.meta": "Open source · Auto-hébergé",
      "sentinel.status": "En ligne", "bw.status": "Bientôt sur Google Play", "bw.offline": "100 % hors ligne",
      "principles.title": "Principes", "principles.sub": "Non négociable",
      "hero.lead": "OAAS conçoit et édite des outils sobres et fiables — du monitoring d'infrastructure cloud au babyphone de poignet. Même exigence partout : simplicité, robustesse, respect des données.",
      "hero.cta2": "Nous écrire",
      "sol.title": "Solutions", "sol.sub": "Deux produits, deux mondes, une même philosophie.",
      "sentinel.tag": "Know when your services break.",
      "sentinel.desc": "Agrège les signaux de santé de Prometheus, Grafana, Datadog et Kubernetes en un seul hub, et alerte instantanément via Slack, email ou webhook. Découverte des services, carte d'infrastructure, détection des rollouts.",
      "sentinel.chip4": "Freemium", "sentinel.cta": "sentinel-app.io →",
      "bw.tag": "Babyphone oublié ? Ta montre suffit.",
      "bw.desc": "Transforme une montre Wear OS en babyphone. La montre écoute, le téléphone alerte — en Bluetooth, sans compte, sans serveur. Détection des pleurs auto-calibrée, écoute en direct, talk-back, alerte de liaison perdue.",
      "bw.chip3": "100 % hors ligne", "bw.chip4": "Bientôt sur Google Play", "bw.cta": "Politique de confidentialité →",
      "approach.title": "Approche", "approach.sub": "Ce qu'on refuse de négocier.",
      "p1.h": "Simple par design", "p1.p": "Un produit doit se comprendre en dix secondes. La complexité est absorbée par le logiciel, jamais reportée sur l'utilisateur.",
      "p2.h": "Fiable avant tout", "p2.p": "Un outil de monitoring ou un babyphone qui se tait quand ça casse est pire que rien. Nos produits alertent aussi quand <em>eux</em> perdent la main.",
      "p3.h": "Données respectées", "p3.p": "Hors ligne par défaut quand c'est possible, aucun tracking, aucune donnée collectée sans raison. Ce que vous ne nous donnez pas ne peut pas fuiter.",
      "studio.title": "Le studio",
      "studio.p1": "OAAS est un studio logiciel indépendant fondé par <strong>Olivier de Régis</strong>, ingénieur logiciel et infrastructure. Après des années à construire et opérer des plateformes cloud, l'envie de faire des produits nets, sans bruit, qui règlent un vrai problème — le sien d'abord, souvent.",
      "studio.p2": "Sentinel est né du besoin de voir clair dans des clusters Kubernetes en production. BabyWatch, d'un babyphone oublié un soir chez des amis.",
      "contact.p": "Une question, un projet, un retour sur un produit ?",
      "footer.legal": "© OAAS · SAS au capital de 100 € · 12 rue de Rivoli, 59230 Saint-Amand-les-Eaux, France · SIREN 953 100 484",
      "footer.privacy": "Confidentialité BabyWatch",
      "pv.back": "← OAAS", "pv.title": "🌙 BabyWatch — Politique de confidentialité",
      "pv.badge": "En résumé : aucune donnée ne quitte vos appareils.",
      "pv.what.h": "Ce que fait l'application",
      "pv.what.p": "BabyWatch transforme votre montre Wear OS en babyphone : la montre écoute la chambre et alerte votre téléphone Android, par Bluetooth (ou Wi-Fi local), directement entre vos deux appareils appairés.",
      "pv.data.h": "Données collectées",
      "pv.data.p": "<strong>Aucune.</strong> BabyWatch ne possède pas de serveur, ne demande pas la permission Internet et ne crée pas de compte. Nous n'avons techniquement aucun moyen d'accéder à vos données.",
      "pv.mic.h": "Micro et audio",
      "pv.mic.1": "Le micro de la montre mesure le niveau sonore et, à votre demande, diffuse le son vers votre téléphone. L'audio transite uniquement entre vos appareils, sans intermédiaire.",
      "pv.mic.2": "Le micro du téléphone sert uniquement à la fonction « Parler » (votre voix vers le haut-parleur de la montre), quand vous l'activez.",
      "pv.mic.3": "Lors d'une alerte, un extrait de 10 secondes est conservé <em>sur votre téléphone</em> pour que vous puissiez le réécouter. Vous pouvez les supprimer en désinstallant l'application ou en effaçant ses données.",
      "pv.hist.h": "Historique",
      "pv.hist.p": "Les sessions de surveillance et leurs événements (pleurs détectés, liaison perdue) sont enregistrés localement sur votre téléphone. Ils ne sont jamais transmis.",
      "pv.perm.h": "Permissions demandées",
      "pv.perm.1": "<strong>Micro</strong> (montre et téléphone) — voir ci-dessus.",
      "pv.perm.2": "<strong>Notifications</strong> — pour les alertes.",
      "pv.perm.3": "<strong>Service au premier plan</strong> — pour que la surveillance continue écran éteint.",
      "pv.warn.h": "Avertissement",
      "pv.warn.p": "BabyWatch est une aide et ne remplace en aucun cas la surveillance d'un adulte. La portée Bluetooth est limitée ; l'application vous prévient si la liaison est perdue, mais ne peut garantir une disponibilité continue.",
      "pv.contact.h": "Contact", "pv.updated": "Dernière mise à jour : 25 août 2026"
    }
  };

  function pick() {
    const q = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("lang");
    const nav = (navigator.language || "en").slice(0, 2);
    const l = q || saved || nav;
    return dict[l] ? l : "en";
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = dict[lang][el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    localStorage.setItem("lang", lang);
  }

  window.setLang = apply;
  document.addEventListener("DOMContentLoaded", () => {
    apply(pick());
    document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); apply(b.dataset.lang); }));
  });
})();
