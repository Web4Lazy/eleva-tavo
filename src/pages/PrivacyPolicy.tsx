import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
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
            <h1 className="text-foreground font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground italic text-sm">Ultimo aggiornamento: 13 aprile 2026</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            La presente Informativa sulla privacy descrive le modalità di trattamento dei dati personali degli utenti che visitano il sito www.eleva-tavo.it (di seguito "Sito"), ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (di seguito "GDPR") e della normativa italiana vigente.
          </p>

          <h2 className="text-foreground font-semibold">1. Titolare del trattamento</h2>
          <p className="text-muted-foreground leading-relaxed">
            Titolare del trattamento è:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Eleva di Stefania Favero<br />
            P.IVA 12946040016<br />
            Via Monte Ortigara 41, 10141 Torino (TO), Italia<br />
            Email: info@elevapet.com
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Non è stato nominato un Data Protection Officer (DPO) in quanto non ricorrono i presupposti di cui all'art. 37 GDPR.
          </p>

          <h2 className="text-foreground font-semibold">2. Tipi di dati trattati e finalità</h2>

          <h3 className="text-foreground font-semibold text-lg">2.1 Dati di navigazione</h3>
          <p className="text-muted-foreground leading-relaxed">
            I sistemi informatici e le procedure software preposte al funzionamento del Sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione internet: indirizzi IP, tipo di browser, sistema operativo, data e ora della richiesta, pagine visitate.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Finalità</strong>: garantire il corretto funzionamento del Sito e la sicurezza della navigazione.</li>
            <li><strong className="text-foreground">Base giuridica</strong>: legittimo interesse del Titolare (art. 6.1.f GDPR) al corretto funzionamento tecnico del Sito.</li>
            <li><strong className="text-foreground">Conservazione</strong>: i dati di navigazione non vengono conservati oltre il tempo strettamente necessario, salvo eventuale uso per accertamento di responsabilità in caso di illeciti informatici.</li>
          </ul>

          <h3 className="text-foreground font-semibold text-lg">2.2 Dati forniti volontariamente</h3>
          <p className="text-muted-foreground leading-relaxed">
            Il Sito è una landing page informativa e NON raccoglie dati tramite form di contatto o iscrizione. Eventuali comunicazioni inviate all'indirizzo email info@elevapet.com saranno trattate per dare seguito alla richiesta.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Finalità</strong>: rispondere alle richieste dell'utente.</li>
            <li><strong className="text-foreground">Base giuridica</strong>: esecuzione di misure precontrattuali o consenso dell'interessato (art. 6.1.b/a GDPR).</li>
            <li><strong className="text-foreground">Conservazione</strong>: per il tempo necessario a gestire la richiesta, salvo obblighi di legge.</li>
          </ul>

          <h3 className="text-foreground font-semibold text-lg">2.3 Cookie e tecnologie simili</h3>
          <p className="text-muted-foreground leading-relaxed">
            Per il dettaglio dei cookie utilizzati si rimanda alla{" "}
            <Link to="/cookie-policy" className="text-primary underline hover:no-underline">
              Cookie Policy
            </Link>{" "}
            dedicata.
          </p>

          <h2 className="text-foreground font-semibold">3. Servizi di terze parti</h2>
          <p className="text-muted-foreground leading-relaxed">
            Il Sito, previo consenso dell'utente, può integrare contenuti da servizi esterni:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">YouTube (Google Ireland Ltd)</strong>: riproduzione video, in modalità privacy-enhanced (youtube-nocookie.com). Informativa:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              <strong className="text-foreground">Vimeo Inc.</strong>: riproduzione video crash-test, caricati solo al click dell'utente e con parametro Do Not Track attivo. Informativa:{" "}
              <a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                https://vimeo.com/privacy
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Il Sito è inoltre ospitato su <strong className="text-foreground">GitHub Pages (GitHub, Inc.)</strong>, che può registrare log tecnici di accesso per motivi di sicurezza e diagnostica. Informativa:{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
              https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
            </a>
          </p>

          <h2 className="text-foreground font-semibold">4. Destinatari dei dati</h2>
          <p className="text-muted-foreground leading-relaxed">
            I dati personali potranno essere comunicati esclusivamente a:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>Fornitori di servizi tecnici (hosting, manutenzione del Sito) nominati Responsabili del trattamento ex art. 28 GDPR;</li>
            <li>Autorità pubbliche in adempimento di obblighi di legge.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            I dati NON vengono diffusi, né ceduti a terzi per finalità commerciali autonome.
          </p>

          <h2 className="text-foreground font-semibold">5. Trasferimento dei dati extra-UE</h2>
          <p className="text-muted-foreground leading-relaxed">
            Alcuni fornitori di servizi (es. Google, Vimeo, GitHub) hanno sede negli Stati Uniti. Eventuali trasferimenti di dati extra-UE avvengono sulla base delle garanzie previste dal GDPR (art. 45 e seguenti), in particolare tramite Clausole Contrattuali Standard approvate dalla Commissione Europea e/o adesione al Data Privacy Framework UE-USA.
          </p>

          <h2 className="text-foreground font-semibold">6. Diritti dell'interessato</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ai sensi degli artt. 15-22 del GDPR, l'utente ha diritto di:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Accedere</strong> ai propri dati personali;</li>
            <li><strong className="text-foreground">Rettificare</strong> dati inesatti o incompleti;</li>
            <li><strong className="text-foreground">Cancellare</strong> i dati ("diritto all'oblio") nei casi previsti;</li>
            <li><strong className="text-foreground">Limitare</strong> il trattamento;</li>
            <li><strong className="text-foreground">Opporsi</strong> al trattamento per motivi legittimi;</li>
            <li><strong className="text-foreground">Portabilità</strong> dei dati, ricevendoli in formato strutturato di uso comune;</li>
            <li><strong className="text-foreground">Revocare</strong> il consenso in qualsiasi momento, senza pregiudizio per la liceità del trattamento precedente alla revoca;</li>
            <li><strong className="text-foreground">Proporre reclamo</strong> all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Per esercitare questi diritti è sufficiente inviare una richiesta via email a info@elevapet.com.
          </p>

          <h2 className="text-foreground font-semibold">7. Minori</h2>
          <p className="text-muted-foreground leading-relaxed">
            Il Sito non è rivolto a minori di anni 16. Non vengono raccolti consapevolmente dati personali di minori. Qualora si venga a conoscenza dell'avvenuta raccolta di tali dati, si provvederà tempestivamente alla cancellazione.
          </p>

          <h2 className="text-foreground font-semibold">8. Sicurezza</h2>
          <p className="text-muted-foreground leading-relaxed">
            Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate a proteggere i dati da perdita, uso improprio, accesso non autorizzato, modifica o distruzione, nel rispetto dell'art. 32 GDPR.
          </p>

          <h2 className="text-foreground font-semibold">9. Modifiche alla presente Informativa</h2>
          <p className="text-muted-foreground leading-relaxed">
            La presente Informativa può essere aggiornata periodicamente. Si raccomanda agli utenti di consultarla con regolarità. La data di ultimo aggiornamento è indicata in testa al documento.
          </p>
        </article>
      </div>
    </main>

    <Footer />
  </>
);

export default PrivacyPolicy;
