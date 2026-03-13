import { getWhatsAppUrl, sendEvent } from "@/config";

const AssistanceBanner = () => (
  <div className="bg-secondary border-y border-border py-5">
    <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
      <p className="text-sm text-muted-foreground">
        Hai bisogno di aiuto per scegliere?
      </p>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("ClickWhatsApp", { section: "pre-products-banner" })}
        className="text-sm font-semibold text-primary hover:underline"
      >
        Parla con un assistente umano →
      </a>
    </div>
  </div>
);

export default AssistanceBanner;
