// Minimal i18n: <html data-i18n-page="index|privacy">, elements with data-i18n="key".
// Language = ?lang= > localStorage > navigator, fallback en.
(function () {
  const dict = {
    en: {
      "intro": "OAAS is a small software studio in Lille, France. <em>We make a few tools, and we take our time doing them.</em>",
      "sub": "Infrastructure monitoring, secret management, a baby monitor for the wrist. Different things, same care.",
      "work.h": "Work",
      "sentinel.meta": "monitoring", "sentinel.p": "Know when your services break. One hub for Prometheus, Grafana, Datadog and Kubernetes signals, alerts in Slack or email.",
      "tl.meta": "open source", "tl.p": "Secret manager for teams. Everything encrypted on your side, self-hosted, with browser extensions and fine-grained sharing.",
      "bw.meta": "Wear OS", "bw.p": "Forgot the baby monitor? Your watch is enough. Works over Bluetooth, without an account or a server. Coming to Google Play.",
      "about.h": "About",
      "about.p1": "The studio is run by <strong>Olivier de Régis</strong>, a software and infrastructure engineer. Most of what we build started as something we needed ourselves — clearer monitoring for production clusters, a safer place for team passwords, a baby monitor one evening at friends'.",
      "about.p2": "We like software that stays out of the way: simple to understand, honest when something goes wrong, and quiet about your data. Offline by default whenever it makes sense.",
      "contact.h": "Contact",
      "footer.legal": "OAAS, SAS with €100 share capital — 12 rue de Rivoli, 59230 Saint-Amand-les-Eaux, France — SIREN 953 100 484. Publication director: Olivier de Régis.",
      "footer.privacy": "BabyWatch privacy policy",
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
      "intro": "OAAS est un petit studio logiciel à Lille. <em>On fait quelques outils, et on prend le temps de bien les faire.</em>",
      "sub": "Monitoring d'infrastructure, gestion de secrets, un babyphone au poignet. Des choses différentes, le même soin.",
      "work.h": "Réalisations",
      "sentinel.meta": "monitoring", "sentinel.p": "Savoir quand vos services cassent. Un seul hub pour les signaux Prometheus, Grafana, Datadog et Kubernetes, des alertes dans Slack ou par email.",
      "tl.meta": "open source", "tl.p": "Gestionnaire de secrets pour les équipes. Tout est chiffré de votre côté, auto-hébergé, avec extensions navigateur et partage fin.",
      "bw.meta": "Wear OS", "bw.p": "Babyphone oublié ? Votre montre suffit. Fonctionne en Bluetooth, sans compte ni serveur. Bientôt sur Google Play.",
      "about.h": "À propos",
      "about.p1": "Le studio est tenu par <strong>Olivier de Régis</strong>, ingénieur logiciel et infrastructure. La plupart de ce qu'on construit a commencé par un besoin à nous — y voir clair dans des clusters en production, un endroit plus sûr pour les mots de passe d'équipe, un babyphone un soir chez des amis.",
      "about.p2": "On aime les logiciels qui ne se font pas remarquer : simples à comprendre, honnêtes quand quelque chose cloche, discrets avec vos données. Hors ligne par défaut dès que ça a du sens.",
      "contact.h": "Contact",
      "footer.legal": "OAAS, SAS au capital de 100 € — 12 rue de Rivoli, 59230 Saint-Amand-les-Eaux, France — SIREN 953 100 484. Directeur de la publication : Olivier de Régis.",
      "footer.privacy": "Politique de confidentialité BabyWatch",
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
