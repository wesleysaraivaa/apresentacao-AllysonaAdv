export const DEMO_URL = "https://allysson-carvalho-advocacia.vercel.app/";
export const WHATSAPP_NUMBER = "";
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conversar sobre o projeto de site para o escritório.";
export const DEVELOPER_NAME = "";

export const SECTIONS = [
  { id: "inicio", label: "Abertura" },
  { id: "oportunidade", label: "Oportunidade" },
  { id: "ferramenta", label: "O site" },
  { id: "demonstracao", label: "Demonstração" },
  { id: "dispositivos", label: "Dispositivos" },
  { id: "google", label: "No Google" },
  { id: "processo", label: "Processo" },
  { id: "escopo", label: "Escopo" },
  { id: "contato", label: "Próximo passo" },
] as const;

export function whatsappHref(): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
