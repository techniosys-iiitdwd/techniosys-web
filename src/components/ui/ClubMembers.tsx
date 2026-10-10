import Image from 'next/image';
import type { ReactNode } from 'react';
import membersData from './club-members.json';

type Accent = 'pink' | 'cyan' | 'purple' | 'gold';
type Member = {
  id: string;
  name: string;
  role: string;
  accent: Accent;
  photo?: string;
  hairstyle?: number;
  domain?: string;
};
type Domain = {
  id: string;
  name: string;
  accent: Accent;
  icon: string;
  members: Member[];
};

const COLORS: Record<Accent, { text: string; border: string; glow: string; line: string }> = {
  pink: { text: 'text-[#ff398b]', border: 'border-[#ff398b]/50', glow: 'shadow-[0_0_28px_rgba(255,57,139,0.10)]', line: 'bg-[#ff398b]' },
  cyan: { text: 'text-[#20dff5]', border: 'border-[#20dff5]/50', glow: 'shadow-[0_0_28px_rgba(32,223,245,0.10)]', line: 'bg-[#20dff5]' },
  purple: { text: 'text-[#bb7cff]', border: 'border-[#bb7cff]/50', glow: 'shadow-[0_0_28px_rgba(187,124,255,0.10)]', line: 'bg-[#bb7cff]' },
  gold: { text: 'text-[#ffc65c]', border: 'border-[#ffc65c]/50', glow: 'shadow-[0_0_28px_rgba(255,198,92,0.10)]', line: 'bg-[#ffc65c]' },
};

const HAIR_STYLES = [
  'M72 83c0-36 20-58 49-58 30 0 49 22 49 58v11h-12l-8-24c-19 13-45 18-78 17v7H72z',
  'M72 83c0-34 19-58 48-58 31 0 50 24 50 58v14h-13l-4-27c-10 10-24 16-41 16-13 0-25-3-35-10v21H72z',
  'M72 84c0-37 20-60 49-60 28 0 48 23 48 60v11h-12l-3-19-9 8-8-18c-15 12-36 18-65 17v12H72z',
  'M72 84c0-36 20-59 49-59 28 0 48 23 48 59v15h-12l-3-25c-8 8-18 12-30 12-16 0-27-7-34-18l-5 31H72z',
  'M72 84c0-35 19-59 49-59 30 0 49 24 49 59v12h-12l-5-27c-9 12-23 18-42 18-12 0-23-3-32-9v18H72z',
  'M72 84c0-37 20-60 49-60 29 0 48 23 48 60v12h-12l-4-21c-8 9-19 14-32 14-16 0-28-6-36-18l-3 25H72z',
];

function Avatar({ member, compact = false }: { member: Member; compact?: boolean }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        fill
        sizes={compact ? '64px' : '(max-width: 768px) 100vw, 300px'}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  const index = (member.hairstyle ?? 0) % HAIR_STYLES.length;
  const hair = ['#252239', '#321f32', '#18283b', '#40252c', '#282238', '#1d2932'][index];
  const skin = ['#d99b75', '#bd805f', '#e4ac86', '#c68a68', '#d99c78', '#ba7959'][index];
  const shirt = ['#b92f70', '#147d91', '#724ca0', '#216c83', '#a74774', '#455eaa'][index];
  const color = member.accent === 'pink' ? '#ff398b' : member.accent === 'cyan' ? '#20dff5' : member.accent === 'purple' ? '#bb7cff' : '#ffc65c';

  return (
    <svg aria-label={`Illustrated avatar of ${member.name}`} role="img" viewBox="0 0 240 200" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
      <defs>
        <linearGradient id={`shirt-${member.id}`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor={shirt} /><stop offset="1" stopColor="#101827" /></linearGradient>
        <radialGradient id={`glow-${member.id}`}><stop offset="0" stopColor={color} stopOpacity=".24" /><stop offset="1" stopColor={color} stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="240" height="200" fill="#080d17" />
      <ellipse cx="120" cy="102" rx="108" ry="100" fill={`url(#glow-${member.id})`} />
      <circle cx="120" cy="91" r="72" fill="none" stroke={color} strokeOpacity=".45" />
      <circle cx="120" cy="91" r="87" fill="none" stroke={color} strokeOpacity=".2" />
      <path d="M41 200c5-35 30-54 79-54s74 19 79 54" fill={`url(#shirt-${member.id})`} />
      <path d="m101 149 19 20 19-20-9-15h-20z" fill={skin} />
      <path d="M78 85c0-29 16-47 42-47s42 18 42 47v24c0 25-18 44-42 44s-42-19-42-44z" fill={skin} />
      <path d={HAIR_STYLES[index]} fill={hair} />
      <path d="M89 105c4-3 9-3 13 0m36 0c4-3 9-3 13 0" fill="none" stroke="#35242a" strokeLinecap="round" strokeWidth="3" />
      <ellipse cx="99" cy="114" rx="3" ry="4" fill="#201d29" /><ellipse cx="141" cy="114" rx="3" ry="4" fill="#201d29" />
      <path d="M116 118c-1 6-3 11-2 13 2 2 5 2 8 0" fill="none" stroke="#9c5c4b" strokeWidth="2" />
      <path d="M108 137c7 6 17 6 24 0" fill="none" stroke="#873f4b" strokeLinecap="round" strokeWidth="3" />
      {index === 2 && <g fill="none" stroke={color} strokeWidth="2"><rect x="85" y="106" width="26" height="17" rx="5" /><rect x="129" y="106" width="26" height="17" rx="5" /><path d="M111 114h18" /></g>}
    </svg>
  );
}

function SectionLabel({ children, accent = 'pink' }: { children: ReactNode; accent?: Accent }) {
  return <div className={`my-5 flex items-center justify-center gap-4 ${COLORS[accent].text}`}><span className="h-px w-10 bg-current opacity-60" /><h2 className="text-[10px] font-bold uppercase tracking-[0.42em] sm:text-xs">{children}</h2><span className="h-px w-10 bg-current opacity-60" /></div>;
}

function ExecutiveCard({ member }: { member: Member }) {
  const color = COLORS[member.accent];
  return (
    <article className={`group relative flex min-w-0 overflow-hidden rounded-2xl border ${color.border} bg-[#090f1b]/90 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,255,255,0.07)]`}>
      <div className="relative h-36 w-2/5 shrink-0 overflow-hidden sm:h-44 sm:w-[42%] md:h-48"><Avatar member={member} /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#090f1b]/70" /></div>
      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6 md:p-8">
        <p className={`mb-2 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs ${color.text}`}>{member.role}</p>
        <h3 className="text-base font-semibold font-sans leading-tight tracking-wide text-white sm:text-lg md:text-[1.4rem]">{member.name}</h3>
        <span className={`mt-4 h-[3px] w-8 rounded-full ${color.line}`} />
      </div>
    </article>
  );
}

function LeadCard({ member }: { member: Member }) {
  const color = COLORS[member.accent];
  return (
    <article className={`group overflow-hidden rounded-xl border ${color.border} bg-[#090f1b]/80 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,255,255,0.07)]`}>
      <div className="relative mx-auto mt-2 h-32 w-full overflow-hidden sm:h-36"><Avatar member={member} /><div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#090f1b] to-transparent" /></div>
      <div className="px-3 pb-4 pt-1"><p className={`text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px] ${color.text}`}>{member.role}</p><h3 className="mt-1.5 text-sm font-semibold font-sans tracking-widest text-white sm:text-base">{member.name}</h3><span className={`mx-auto mt-3 block h-[3px] w-7 rounded-full ${color.line}`} /></div>
    </article>
  );
}

function DomainSection({ domain }: { domain: Domain }) {
  const color = COLORS[domain.accent];
  return (
    <section className={`rounded-2xl border ${color.border} bg-[#080e19]/70 p-3 sm:p-4`}>
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <div className="flex min-w-0 items-center gap-3"><span className={`text-xl font-bold ${color.text}`}>{domain.icon}</span><h3 className={`text-xs font-bold uppercase tracking-[0.16em] sm:text-sm ${color.text}`}>{domain.name}</h3></div>
        <span className="shrink-0 text-[10px] text-slate-400 sm:text-xs">{domain.members.length} {domain.members.length === 1 ? 'member' : 'members'} <span aria-hidden="true">→</span></span>
      </div>
      {domain.members.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {domain.members.map((member) => <article key={member.id} className="group flex min-w-0 items-center gap-3 overflow-hidden rounded-lg border border-slate-800/90 bg-[#0b1422] p-2.5 transition hover:border-slate-600">
            <div className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-full border ${color.border}`}><Avatar member={member} compact /></div>
            <div className="min-w-0"><h4 className="truncate text-xs font-semibold text-white tracking-widest font-sans sm:text-sm">{member.name}</h4><p className="mt-1 text-[10px] text-slate-400">{member.role || 'Member'}</p></div>
          </article>)}
        </div>
      ) : <p className="px-1 py-3 text-xs text-slate-500">Members List to be updated.</p>}
    </section>
  );
}

export function ClubMembers() {
  const data = membersData as { executive: Member[]; leads: Member[]; domains: Domain[] };
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#050912] px-4 pb-14 pt-8 text-white sm:px-6 md:px-10">
      <div className="pointer-events-none absolute -left-28 -top-20 h-80 w-80 rounded-full border border-cyan-400/10" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full border border-pink-400/10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(12,40,65,0.22),transparent_58%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <header className="mb-2 text-center">
          <h1 className="text-4xl font-black uppercase tracking-[0.06em] mt-20 sm:text-5xl md:text-6xl">CORE <span className="bg-gradient-to-r from-[#ff398b] via-[#c77dff] to-[#20dff5] bg-clip-text text-transparent">TEAM</span></h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base tracking-wider font-semibold">Meet the people behind Techniosys.</p>
          <div className="mx-auto mt-4 flex w-32 items-center justify-center gap-1.5"><span className="h-px flex-1 bg-slate-500" /><span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ff398b] to-[#20dff5]" /><span className="h-px flex-1 bg-slate-500" /></div>
        </header>

        <SectionLabel>Executive Leadership</SectionLabel>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{data.executive.map((member) => <ExecutiveCard key={member.id} member={member} />)}</div>

        <SectionLabel accent="cyan">Domain Leads</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">{data.leads.map((member) => <LeadCard key={member.id} member={member} />)}</div>

        <SectionLabel accent="purple">Team Members</SectionLabel>
        <div className="space-y-3">{data.domains.map((domain) => <DomainSection key={domain.id} domain={domain} />)}</div>
      </div>
    </section>
  );
}
