import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const CookiePolicy = () => (
  <>
    <header className="py-4 bg-background border-b border-border">
      <div className="container-custom">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alla home
        </Link>
      </div>
    </header>

    <main className="section-padding bg-background">
      <div className="container-custom">
        <article className="max-w-3xl mx-auto space-y-6">
          <div>
            <h1 className="text-foreground font-bold mb-2">Cookie Policy</h1>
            <p className="text-muted-foreground italic text-sm">Ultimo aggiornamento: 13 aprile 2026</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            La presente Cookie Policy descrive i cookie e le tecnologie di tracciamento utilizzati sul sito www.eleva-tavo.it (di seguito "Sito") e come gestirne le preferenze. La presente informativa integra la Privacy Policy generale, che rimane il documento principale di riferimento per il trattamento dei dati personali.
          </p>

          <h2 className="text-foreground font-semibold">1. Titolare del trattamento</h2>
          <p className="text-muted-foreground leading-relaxed">
            Eleva di Stefania Favero<br />
            P.IVA 12946040016<br />
            Via Monte Ortigara 41, 10141 Torino (TO), Italia<br />
            Email: info@elevapet.com
          </p>

          <h2 className="text-foreground font-semibold">2. Cosa sono i cookie</h2>
          <p className="text-muted-foreground leading-relaxed">
            I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi al medesimo sito alla visita successiva. Insieme ai cookie, possono essere utilizzate altre tecnologie di tracciamento come web beacon, pixel, oggetti di archiviazione locale (localStorage), ecc., che nella presente informativa vengono genericamente ricomprese nel termine "cookie".
          </p>

          <h2 className="text-foreground font-semibold">3. Tipologie di cookie utilizzati</h2>

          <h3 className="text-foreground font-semibold text-lg">3.1 Cookie tecnici (sempre attivi)</h3>
          <p className="text-muted-foreground leading-relaxed">
            Sono indispensabili per il corretto funzionamento del Sito. Non richiedono consenso ai sensi dell'art. 122 del Codice Privacy.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-foreground font-semibold">Nome</th>
                  <th className="text-left py-2 pr-4 text-foreground font-semibold">Finalità</th>
                  <th className="text-left py-2 pr-4 text-foreground font-semibold">Durata</th>
                  <th className="text-left py-2 text-foreground font-semibold">Titolare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 pr-4 text-muted-foreground">eleva_consent_v1</td>
                  <td className="py-2 pr-4 text-muted-foreground">Memorizza la scelta dell'utente in merito ai cookie</td>
                  <td className="py-2 pr-4 text-muted-foreground">12 mesi</td>
                  <td className="py-2 text-muted-foreground">Eleva (first-party, localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-foreground font-semibold text-lg">3.2 Cookie di analisi statistica (opzionali)</h3>
          <p className="text-muted-foreground leading-relaxed">
            Attualmente il Sito NON utilizza cookie di analisi statistica. Qualora venissero attivati in futuro (es. Google Analytics), verranno caricati esclusivamente previo consenso dell'utente e la presente informativa sarà aggiornata di conseguenza.
          </p>

          <h3 className="text-foreground font-semibold text-lg">3.3 Cookie di marketing / terze parti (opzionali)</h3>
          <p className="text-muted-foreground leading-relaxed">
            Vengono attivati SOLO previo consenso esplicito dell'utente tramite il banner cookie.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-foreground font-semibold">Fornitore</th>
                  <th className="text-left py-2 pr-4 text-foreground font-semibold">Finalità</th>
                  <th className="text-left py-2 pr-4 text-foreground font-semibold">Cookie / Tecnologia</th>
                  <th className="text-left py-2 text-foreground font-semibold">Informativa terza parte</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 pr-4 text-muted-foreground">YouTube (Google Ireland Ltd)</td>
                  <td className="py-2 pr-4 text-muted-foreground">Riproduzione video integrati (modalità privacy-enhanced youtube-nocookie.com)</td>
                  <td className="py-2 pr-4 text-muted-foreground">VISITOR_INFO1_LIVE, YSC, __Secure-* e altri</td>
                  <td className="py-2 text-muted-foreground">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                      https://policies.google.com/privacy
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 pr-4 text-muted-foreground">Vimeo Inc.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Riproduzione video crash-test (modalità "Do Not Track" attiva)</td>
                  <td className="py-2 pr-4 text-muted-foreground">vuid (solo al click su play)</td>
                  <td className="py-2 text-muted-foreground">
                    <a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                      https://vimeo.com/privacy
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Per i video YouTube: fino al consenso marketing, viene mostrato un placeholder statico e NESSUNA richiesta viene inviata ai server Google. Al consenso, gli iframe vengono caricati dal dominio youtube-nocookie.com, che limita i cookie di tracciamento rispetto a youtube.com standard.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Per il video Vimeo: viene caricato solo al click dell'utente sul tasto play (click-to-load) e con parametro dnt=1 (Do Not Track) attivo.
          </p>

          <h2 className="text-foreground font-semibold">4. Come gestire le preferenze</h2>
          <p className="text-muted-foreground leading-relaxed">
            L'utente può in ogni momento modificare le proprie preferenze cliccando sul link "Preferenze cookie" presente nel footer del Sito, che riaprirà il banner.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In alternativa, è possibile cancellare i cookie dalle impostazioni del browser. Link alle guide dei principali browser:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Microsoft Edge
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                Apple Safari
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del Sito.
          </p>

          <h2 className="text-foreground font-semibold">5. Diritti dell'utente</h2>
          <p className="text-muted-foreground leading-relaxed">
            L'utente ha diritto di accedere ai propri dati, chiederne la rettifica o la cancellazione, opporsi al trattamento, revocare il consenso in qualsiasi momento e presentare reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it). Per maggiori dettagli si rimanda alla{" "}
            <Link to="/privacy-policy" className="text-primary underline hover:no-underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="text-foreground font-semibold">6. Modifiche alla presente Cookie Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            La presente informativa può essere aggiornata periodicamente. La data in testa al documento indica l'ultima revisione. In caso di modifiche sostanziali, verrà richiesto nuovamente il consenso tramite banner.
          </p>
        </article>
      </div>
    </main>

    <Footer />
  </>
);

export default CookiePolicy;
