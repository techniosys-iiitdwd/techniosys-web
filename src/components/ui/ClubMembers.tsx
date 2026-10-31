import Image from 'next/image';
import type { ReactNode } from 'react';
import membersData from './club-members.json';
import Navbar from './Navbar';

type Accent = 'pink' | 'cyan' | 'purple' | 'gold';
type Member = {
  id: string;
  name: string;
  role: string;
  accent: Accent;
  photo?: string;
  domain?: string;
};
type Domain = {
  id: string;
  name: string;
  accent: Accent;
  icon: string;
  members: Member[];
};

const PHOTOS: Record<string, string> = {
  president: '/team/president.jpg',
  'vice-president': '/team/vice-president.jpg',

  'technical-lead': '/team/technical-lead.jpg',
  'event-management-lead': '/team/event-management-lead.jpg',
  'social-media-lead': '/team/social-media-lead.jpg',
};

const COLORS: Record<Accent, { text: string; border: string; ring: string; line: string }> = {
  pink: { text: 'text-[#ff398b]', border: 'border-[#ff398b]/60', ring: 'ring-[#ff398b]/20', line: 'bg-[#ff398b]' },
  cyan: { text: 'text-[#20dff5]', border: 'border-[#20dff5]/60', ring: 'ring-[#20dff5]/20', line: 'bg-[#20dff5]' },
  purple: { text: 'text-[#bb7cff]', border: 'border-[#bb7cff]/60', ring: 'ring-[#bb7cff]/20', line: 'bg-[#bb7cff]' },
  gold: { text: 'text-[#ffc65c]', border: 'border-[#ffc65c]/60', ring: 'ring-[#ffc65c]/20', line: 'bg-[#ffc65c]' },
};

/* Round photo frame used for president, vice president, leads and members */
function CircleFrame({ member, sizes, className = '' }: { member: Member; sizes: string; className?: string }) {
  const color = COLORS[member.accent];
  const src = PHOTOS[member.id] || member.photo;
  const initials = member.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full border-2 ${color.border} bg-[#0b1422] ring-4 ${color.ring} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={member.name}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center text-xl font-bold tracking-widest ${color.text}`} aria-label={member.name} role="img">
          {initials}
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children, accent = 'pink' }: { children: ReactNode; accent?: Accent }) {
  return <div className={`my-5 flex items-center justify-center gap-4 ${COLORS[accent].text}`}><span className="h-px w-10 bg-current opacity-60" /><h2 className="text-[10px] font-bold uppercase tracking-[0.42em] sm:text-xs">{children}</h2><span className="h-px w-10 bg-current opacity-60" /></div>;
}

function ExecutiveCard({ member }: { member: Member }) {
  const color = COLORS[member.accent];
  return (
    <article className={`group relative flex min-w-0 items-center gap-5 overflow-hidden rounded-2xl border ${color.border} bg-[#090f1b]/90 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,255,255,0.07)] sm:gap-7 sm:p-6`}>
      <CircleFrame member={member} sizes="160px" className="h-28 w-28 sm:h-36 sm:w-36" />
      <div className="flex min-w-0 flex-1 flex-col justify-center">
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
    <article className={`group overflow-hidden rounded-xl border ${color.border} bg-[#090f1b]/80 px-4 pb-5 pt-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,255,255,0.07)]`}>
      <CircleFrame member={member} sizes="140px" className="mx-auto h-28 w-28 sm:h-32 sm:w-32" />
      <div className="pt-4">
        <p className={`text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px] ${color.text}`}>{member.role}</p>
        <h3 className="mt-1.5 text-sm font-semibold font-sans tracking-widest text-white sm:text-base">{member.name}</h3>
        <span className={`mx-auto mt-3 block h-[3px] w-7 rounded-full ${color.line}`} />
      </div>
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
            <CircleFrame member={{ ...member, accent: domain.accent }} sizes="64px" className="h-14 w-14 !ring-2 text-sm" />
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
      <Navbar />
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

        {/* <SectionLabel accent="purple">Team Members</SectionLabel>
        <div className="space-y-3">{data.domains.map((domain) => <DomainSection key={domain.id} domain={domain} />)}</div> */}
      </div>
    </section>
  );
}