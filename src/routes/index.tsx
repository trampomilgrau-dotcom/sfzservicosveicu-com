import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import nioLogo from "@/assets/nio-logo.png.asset.json";
import {
  Wifi,
  FileText,
  Wallet,
  Home as HomeIcon,
  XCircle,
  ArrowUpCircle,
  Headphones,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  LifeBuoy,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5517982073504";
const openWhats = (msg: string) => {
  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};

type Reason = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  message: string;
};

const REASONS: Reason[] = [
  {
    icon: Wifi,
    title: "Suporte Técnico",
    subtitle: "Sem internet, lenta ou instável",
    message:
      "Olá! Estou com problemas na minha internet e preciso de suporte técnico.",
  },
  {
    icon: FileText,
    title: "Segunda via",
    subtitle: "Fatura em aberto",
    message: "Olá! Gostaria de solicitar a segunda via da minha fatura.",
  },
  {
    icon: Wallet,
    title: "Financeiro",
    subtitle: "Negociação e pagamentos",
    message:
      "Olá! Preciso falar com o setor financeiro para negociar minha situação.",
  },
  {
    icon: HomeIcon,
    title: "Mudança",
    subtitle: "Transferir endereço",
    message: "Olá! Gostaria de solicitar mudança de endereço do meu plano.",
  },
  {
    icon: XCircle,
    title: "Cancelamento",
    subtitle: "Encerrar contrato",
    message: "Olá! Gostaria de informações sobre cancelamento do meu plano.",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrade",
    subtitle: "Aumentar meu plano",
    message: "Olá! Tenho interesse em fazer upgrade do meu plano de internet.",
  },
  {
    icon: Headphones,
    title: "Atendente",
    subtitle: "Falar com uma pessoa",
    message: "Olá! Gostaria de falar com um atendente humano da Nio Fibra.",
  },
  {
    icon: HelpCircle,
    title: "Outros",
    subtitle: "Demais assuntos",
    message: "Olá! Preciso de ajuda com outro assunto.",
  },
];

function Index() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen overflow-hidden pb-6">
        {/* HEADER */}
        <header className="relative overflow-hidden pt-8 pb-24 px-5 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
          {/* Green blobs */}
          <div className="pointer-events-none absolute -top-16 -left-10 w-64 h-64 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center gap-3"
          >
            <img
              src={nioLogo.url}
              alt="Nio Fibra"
              className="w-24 h-24 object-contain drop-shadow-lg"
            />
            <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 font-semibold leading-none">
              Soluções
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative mt-5 text-2xl font-extrabold tracking-tight leading-tight whitespace-nowrap"
          >
            Como podemos <span className="text-emerald-400">ajudar</span>?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative mt-2 text-sm text-neutral-400 max-w-[280px]"
          >
            Escolha o assunto e fale com nosso time no WhatsApp em segundos.
          </motion.p>
        </header>

        {/* STATUS CARD (overlap) */}
        <div className="relative px-5 -mt-14 z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-4 flex items-center justify-between shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-semibold">Atendimento Online</p>
                <p className="text-[11px] text-neutral-400">Seg a Sáb • 08h às 20h</p>
              </div>
            </div>
            <LifeBuoy className="text-emerald-400" strokeWidth={2} />
          </motion.div>
        </div>

        {/* REASONS GRID */}
        <section className="px-5 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-neutral-300">Motivo do contato</h2>
            <span className="text-[11px] text-neutral-500">via WhatsApp</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {REASONS.map((r, i) => (
              <ReasonCard key={r.title} reason={r} index={i} />
            ))}
          </div>
        </section>

        {/* CTA + MAIN WHATSAPP BUTTON */}
        <section className="px-5 mt-8">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-white">
              Fale com o suporte <span className="text-emerald-400">agora</span>
            </h2>
            <p className="text-[13px] text-neutral-400 mt-1">
              Atendimento rápido, humano e sem fila de espera.
            </p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              openWhats(
                "Olá! Vim pela Central de Suporte da Nio Fibra e gostaria de atendimento.",
              )
            }
            className="relative group w-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white font-bold py-4 px-6 flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/40"
          >
            {/* shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {/* pulse ring */}
            <span className="absolute inset-0 rounded-3xl ring-2 ring-emerald-300/50 animate-ping opacity-20" />
            <span className="absolute inset-0 rounded-3xl ring-1 ring-white/30" />
            <svg
              className="w-6 h-6 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10 text-base">Iniciar atendimento</span>
            <Sparkles className="w-4 h-4 relative z-10 opacity-90" />
          </motion.button>

          <p className="text-center text-[11px] text-neutral-500 mt-3">
            Resposta em poucos minutos durante o horário de atendimento.
          </p>
        </section>

        {/* ALT CHANNELS */}
        <section className="px-5 mt-8">
          <h2 className="text-sm font-semibold text-neutral-300 mb-3">Outros canais</h2>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl divide-y divide-white/5 overflow-hidden">
            <AltRow
              icon={Phone}
              title="17 98207-3504"
              subtitle="Canal de suporte"
            />
            <AltRow
              icon={Mail}
              title="suporte@niofibra.com.br"
              subtitle="E-mail de suporte"
            />
            <AltRow
              icon={MapPin}
              title="Rua Epaminondas Gracindo, 22 — Sala 6"
              subtitle="Pajuçara, Maceió/AL • CEP 57.030-101"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-5 mt-8 mb-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <SocialBtn icon={Instagram} href="https://www.instagram.com/niointernet" />
          </div>
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            © {new Date().getFullYear()} Nio Fibra
            <br />
            CNPJ 53.420.564/0001-40
          </p>
        </footer>

      </div>
    </div>
  );
}

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const Icon = reason.icon;
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -2 }}
      onClick={() => openWhats(reason.message)}
      className="group relative overflow-hidden text-left rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 hover:border-emerald-400/40 hover:bg-emerald-500/[0.06] transition-colors"
    >
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 grid place-items-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
        <Icon className="w-5 h-5 text-emerald-400" strokeWidth={2} />
      </div>
      <p className="text-sm font-semibold leading-tight">{reason.title}</p>
      <p className="text-[11px] text-neutral-400 mt-1 leading-snug">{reason.subtitle}</p>
      <span className="pointer-events-none absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-emerald-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}

function AltRow({
  href,
  icon: Icon,
  title,
  subtitle,
}: {
  href?: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
}) {
  const content = (
    <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.03] transition-colors">
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 grid place-items-center shrink-0">
        <Icon className="w-5 h-5 text-emerald-400" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold truncate">{title}</p>
        <p className="text-[11px] text-neutral-400 truncate">{subtitle}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
}

function SocialBtn({
  icon: Icon,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileTap={{ scale: 0.9 }}
      whileHover={{ y: -2 }}
      className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] grid place-items-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
    >
      <Icon className="w-4 h-4" strokeWidth={2} />
    </motion.a>
  );
}
