# Giardino Bistrot — Sito vetrina (prototipo)

Prototipo di sito vetrina per **Giardino Bistrot**, Viale Cesare Battisti 35, Treviso — pensato per essere mostrato al proprietario come proposta di rifacimento del sito attuale.

Stack: **HTML, CSS e JavaScript puri**, nessun framework, nessuna build necessaria.

## Struttura

```
index.html              Home
chi-siamo-menu.html     Storia del locale + menù
galleria.html           Galleria fotografica (illustrazioni placeholder)
contatti.html           Indirizzo, orari, mappa, form
css/style.css           Design system (palette "bio-chic parigino", tipografia, componenti)
js/main.js              Nav mobile, lightbox galleria, validazione form
images/*.svg            Illustrazioni originali placeholder + favicon
netlify.toml            Configurazione di deploy per Netlify
```

## Stato del progetto

Questo è un **mockup/prototipo**, non il sito definitivo. Contenuti e dati di contatto sono stati verificati incrociando Google, Facebook, Instagram e Tripadvisor del locale, ma alcuni elementi restano da confermare col proprietario prima del lancio.

### Da validare prima del lancio

- [ ] **Copy**: i testi (storia, descrizioni, recensioni riportate) sono una bozza plausibile basata su fonti pubbliche — vanno riletti e approvati dal proprietario riga per riga.
- [ ] **Prezzi del menù**: sono una stima indicativa dedotta da recensioni pubbliche (Tripadvisor/Google), non un listino ufficiale — vedi nota nella pagina Chi Siamo & Menù (`chi-siamo-menu.html`, sezione `.callout`).
- [ ] **Numero di telefono**: mostriamo sia il cellulare (+39 347 491 9202) sia il fisso (+39 0422 540650), entrambi trovati su fonti pubbliche del locale — confermare con il proprietario quale mostrare come principale.
- [ ] **Foto reali**: tutte le immagini in `/images/*.svg` sono illustrazioni originali create per il mockup (nessuna foto di terzi/recensori per motivi di copyright). Ogni riquadro nella Galleria indica quale scatto reale dovrebbe sostituirla. Da rifare con foto ufficiali del locale una volta approvata la direzione.
- [ ] **Recensioni Google (4,7★/533)**: la valutazione è confermata da fonte indipendente; il numero esatto di recensioni va riverificato dal vivo sulla scheda Google Business prima della pubblicazione (cambia nel tempo).
- [ ] **Form contatti**: attualmente solo dimostrativo (nessun invio reale). Va collegato a un servizio email (es. Formspree, EmailJS) o a un gestionale prenotazioni.
- [ ] **Dominio**: da scegliere e collegare in fase di pubblicazione.
- [ ] **SEO legata al dominio**: URL canonici, `og:url`, `og:image`, `sitemap.xml` e `robots.txt` sono stati lasciati fuori perché richiedono un dominio definitivo — da aggiungere una volta scelto.

## Pubblicare su Netlify

1. Vai su [app.netlify.com](https://app.netlify.com) e accedi (o crea un account gratuito).
2. **Opzione rapida (drag & drop)**: trascina l'intera cartella del progetto nell'area "Deploy manually" della dashboard Netlify. Il sito sarà online in pochi secondi con un URL tipo `nome-a-caso.netlify.app`.
3. **Opzione consigliata (collegata a GitHub, con aggiornamenti automatici)**: su Netlify scegli "Add new site" → "Import an existing project" → collega il repository GitHub `giardino-bistrot-sito`. Netlify legge già la configurazione da `netlify.toml`, quindi non serve impostare build command (il sito è statico). Ogni push su `main` aggiornerà automaticamente il sito online.
4. Una volta pubblicato, da Netlify puoi collegare un dominio personalizzato in "Domain settings" → "Add a custom domain".

## Sviluppo locale

Non serve alcuna installazione. Basta aprire `index.html` nel browser, oppure servire la cartella con un server locale qualsiasi, ad esempio:

```
python3 -m http.server 8080
```

e visitare `http://localhost:8080`.
