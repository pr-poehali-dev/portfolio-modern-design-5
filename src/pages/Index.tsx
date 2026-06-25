import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

/* ─── Data ─────────────────────────────────────────────── */
const NAV = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Работы', href: '#portfolio' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contacts' },
];

const PROJECTS = [
  {
    num: '01',
    cat: 'Интернет-магазин',
    name: 'ChargerOne',
    desc: 'Гипермаркет зарядных станций для электромобилей — каталог, фильтры, WooCommerce',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/722ddacb-18c5-43fb-aef4-8bf76639ff63.jpg',
    span: 'lg:col-span-2',
  },
  {
    num: '02',
    cat: 'Ветеринарная клиника',
    name: 'EVC',
    desc: 'Многостраничный сайт с записью на приём и описанием услуг клиники',
    tags: ['WordPress', 'Кастомная тема'],
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/48680e25-39f6-4203-9f6c-f5d18552027f.jpg',
    span: 'lg:col-span-1',
  },
  {
    num: '03',
    cat: 'Лендинг',
    name: 'АКПП-Сервис',
    desc: 'Конверсионный лендинг для автосервиса с кнопкой бесплатной диагностики',
    tags: ['Tilda', 'Лендинг'],
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/a132036d-7b8d-4468-9087-d198e98994e6.jpg',
    span: 'lg:col-span-1',
  },
  {
    num: '04',
    cat: 'Корпоративный сайт',
    name: 'Formatta',
    desc: 'Сайт консалтинговой компании: кастомный дизайн, CMS, мультиязычность',
    tags: ['Laravel', 'Nuxt.js'],
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/fa0ca532-1f2b-4bc7-9292-49c7ffec007c.jpg',
    span: 'lg:col-span-2',
  },
];

const STACK_ITEMS = ['HTML', 'CSS / SCSS', 'JavaScript', 'Vue.js', 'WordPress', 'PHP', 'WooCommerce', 'Laravel', 'Tilda', 'Symfony', 'Nuxt.js', 'Кастомные темы'];

const SERVICES = [
  { num: '01', title: 'Лендинги', desc: 'Продающие одностраничники под запуск рекламы и сбор заявок. Быстро, чисто, в срок.' },
  { num: '02', title: 'Корпоративные сайты', desc: 'Многостраничные сайты, которые работают на бренд и внушают доверие клиентам.' },
  { num: '03', title: 'Интернет-магазины', desc: 'Полноценный магазин «под ключ»: каталог, фильтры, корзина, оплата, доставка.' },
  { num: '04', title: 'Доработка сайтов', desc: 'Правки вёрстки, новые блоки, ускорение — возьму любой существующий проект.' },
];

/* ─── Custom cursor ─────────────────────────────────────── */
const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div id="cursor" ref={ref} />;
};

/* ─── Header ────────────────────────────────────────────── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#F7F6F3]/95 backdrop-blur-sm border-b border-[#111110]/8' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#top" className="font-display text-sm font-bold tracking-tight text-[#111110]">
          АЗ<span className="text-[#9EF01A]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="line-hover text-sm font-medium text-[#8A8882] hover:text-[#111110] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contacts" className="hidden md:inline-flex items-center gap-2 bg-[#111110] text-[#F7F6F3] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors">
          Обсудить проект <Icon name="ArrowUpRight" size={14} />
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#111110]">
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#F7F6F3] border-t border-[#111110]/10 px-6 py-6 flex flex-col gap-4 fade-in">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-lg font-medium text-[#111110]">{n.label}</a>
          ))}
          <a href="#contacts" className="mt-2 text-center bg-[#111110] text-[#F7F6F3] font-semibold px-5 py-3 rounded-full">Обсудить проект</a>
        </div>
      )}
    </header>
  );
};

/* ─── Hero ──────────────────────────────────────────────── */
const Hero = () => (
  <section id="top" className="min-h-screen flex flex-col justify-between pt-16">
    <div className="max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center py-20">
      <div className="flex items-start justify-between mb-16 gap-6 flex-wrap">
        <p className="font-mono text-xs tracking-[0.2em] text-[#8A8882] uppercase fade-up stagger-1">
          Frontend-разработчик · Фриланс
        </p>
        <div className="flex gap-8 text-right fade-up stagger-2">
          <div>
            <p className="font-display text-3xl font-bold text-[#111110]">50+</p>
            <p className="text-xs text-[#8A8882] mt-0.5">заказов</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-[#111110]">1</p>
            <p className="text-xs text-[#8A8882] mt-0.5">год опыта</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-[#111110]">4</p>
            <p className="text-xs text-[#8A8882] mt-0.5">площадки</p>
          </div>
        </div>
      </div>

      <h1 className="font-display font-black text-[#111110] leading-none tracking-tighter fade-up stagger-2"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}>
        Артём<br />
        <span className="text-[#EEECEA] [-webkit-text-stroke:2px_#111110]">Зубов</span>
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-14 fade-up stagger-3">
        <p className="max-w-sm text-lg text-[#8A8882] leading-relaxed">
          Создаю сайты, которые работают на бизнес —<br />
          от лендингов до интернет-магазинов.
        </p>
        <div className="flex gap-3">
          <a href="#portfolio" className="group inline-flex items-center gap-2 bg-[#9EF01A] text-[#111110] font-bold text-sm px-6 py-3.5 rounded-full hover:scale-105 transition-transform">
            Смотреть работы <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contacts" className="inline-flex items-center gap-2 border border-[#111110]/20 text-[#111110] font-semibold text-sm px-6 py-3.5 rounded-full hover:border-[#111110] transition-colors">
            Написать
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-[#111110]/10 py-5 overflow-hidden">
      <div className="flex overflow-hidden">
        <div className="marquee-track">
          {[...STACK_ITEMS, ...STACK_ITEMS].map((s, i) => (
            <span key={i} className="font-mono text-xs text-[#8A8882] tracking-widest uppercase mx-8 shrink-0">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── About ─────────────────────────────────────────────── */
const About = () => (
  <section id="about" className="bg-[#111110] text-[#F7F6F3] py-24 md:py-36">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-[#8A8882] uppercase mb-8">Обо мне</p>
          <h2 className="font-display font-black leading-tight tracking-tight text-[#F7F6F3]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Год занимаюсь<br />
            веб-разработкой на фрилансе.<br />
            <span className="text-[#9EF01A]">Специализируюсь</span> на<br />
            сайтах и интернет-магазинах.
          </h2>
        </div>
        <div className="lg:max-w-xs">
          <p className="text-[#8A8882] leading-relaxed mb-8">
            Выполнил более 50 заказов — от небольших правок вёрстки до запуска многостраничных проектов «под ключ». Работаю аккуратно и в срок.
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-4">Где я работаю</p>
          <div className="flex flex-wrap gap-2">
            {['Kwork', 'Профи.ру', 'Upwork', 'Постоянные клиенты'].map(p => (
              <span key={p} className="border border-[#333] rounded-full px-4 py-1.5 text-xs font-medium text-[#8A8882]">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-[#222]">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-6">Стек</p>
        <div className="flex flex-wrap gap-3">
          {STACK_ITEMS.map(s => (
            <span key={s} className="bg-[#1C1C1B] border border-[#2A2A28] text-[#8A8882] rounded-lg px-4 py-2 text-sm font-medium hover:border-[#9EF01A] hover:text-[#9EF01A] transition-colors cursor-default">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Portfolio ─────────────────────────────────────────── */
const Portfolio = () => (
  <section id="portfolio" className="py-24 md:py-36">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
        <h2 className="font-display font-black text-[#111110] tracking-tight" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
          Работы
        </h2>
        <p className="text-[#8A8882] text-sm max-w-xs leading-relaxed">
          Отобрал несколько проектов, которые лучше всего отражают подход к работе
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {PROJECTS.map(p => (
          <div key={p.num} className={`group ${p.span} bg-[#EEECEA] rounded-3xl overflow-hidden flex flex-col hover:bg-[#E5E3DF] transition-colors`}>
            <div className="overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#8A8882] uppercase">{p.cat}</p>
                  <h3 className="font-display font-bold text-[#111110] text-xl mt-1">{p.name}</h3>
                </div>
                <span className="font-mono text-xs text-[#8A8882] shrink-0">{p.num}</span>
              </div>
              <p className="text-sm text-[#8A8882] leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="bg-white border border-[#111110]/10 rounded-lg px-3 py-1 text-xs font-medium text-[#111110]">{t}</span>
                ))}
              </div>
              <a href="#contacts" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#111110] group-hover:gap-3 transition-all">
                Подробнее <Icon name="ArrowRight" size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Services ──────────────────────────────────────────── */
const Services = () => (
  <section id="services" className="bg-[#EEECEA] py-24 md:py-36">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="font-display font-black text-[#111110] tracking-tight mb-16" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
        Что делаю
      </h2>
      <div className="divide-y divide-[#111110]/10">
        {SERVICES.map(s => (
          <div key={s.num} className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 hover:pl-2 transition-all duration-300">
            <span className="font-mono text-xs text-[#8A8882] shrink-0 w-8">{s.num}</span>
            <h3 className="font-display font-bold text-[#111110] text-2xl md:text-3xl tracking-tight flex-1">{s.title}</h3>
            <p className="text-[#8A8882] text-sm leading-relaxed sm:max-w-xs">{s.desc}</p>
            <span className="hidden sm:grid place-items-center w-10 h-10 rounded-full border border-[#111110]/20 group-hover:bg-[#9EF01A] group-hover:border-transparent transition-colors shrink-0">
              <Icon name="ArrowRight" size={16} />
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Contacts ──────────────────────────────────────────── */
const Contacts = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handle = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contacts" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display font-black text-[#111110] tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
              Есть задача?<br />
              <span className="text-[#9EF01A]">Давай</span><br />
              обсудим.
            </h2>
            <p className="text-[#8A8882] text-lg leading-relaxed mb-10 max-w-sm">
              Расскажите о проекте — отвечу в течение дня и предложу решение.
            </p>
            <div className="space-y-4">
              <a href="https://t.me/hakuz0r" target="_blank" rel="noreferrer"
                 className="group flex items-center gap-4 border border-[#111110]/12 rounded-2xl px-6 py-4 hover:border-[#111110] transition-colors">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#EEECEA] group-hover:bg-[#9EF01A] transition-colors">
                  <Icon name="Send" size={18} />
                </span>
                <div>
                  <p className="font-semibold text-[#111110] text-sm">Telegram</p>
                  <p className="text-[#8A8882] text-sm font-mono">@hakuz0r</p>
                </div>
                <Icon name="ArrowUpRight" size={16} className="ml-auto text-[#8A8882]" />
              </a>
              <a href="https://wa.me/79000000000" target="_blank" rel="noreferrer"
                 className="group flex items-center gap-4 border border-[#111110]/12 rounded-2xl px-6 py-4 hover:border-[#111110] transition-colors">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#EEECEA] group-hover:bg-[#9EF01A] transition-colors">
                  <Icon name="MessageCircle" size={18} />
                </span>
                <div>
                  <p className="font-semibold text-[#111110] text-sm">WhatsApp</p>
                  <p className="text-[#8A8882] text-sm font-mono">+7 900 000-00-00</p>
                </div>
                <Icon name="ArrowUpRight" size={16} className="ml-auto text-[#8A8882]" />
              </a>
              <a href="mailto:hakuz0r@gmail.com"
                 className="group flex items-center gap-4 border border-[#111110]/12 rounded-2xl px-6 py-4 hover:border-[#111110] transition-colors">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#EEECEA] group-hover:bg-[#9EF01A] transition-colors">
                  <Icon name="Mail" size={18} />
                </span>
                <div>
                  <p className="font-semibold text-[#111110] text-sm">Email</p>
                  <p className="text-[#8A8882] text-sm font-mono">hakuz0r@gmail.com</p>
                </div>
                <Icon name="ArrowUpRight" size={16} className="ml-auto text-[#8A8882]" />
              </a>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 bg-[#EEECEA] rounded-3xl p-12 text-center min-h-80">
              <span className="grid place-items-center w-16 h-16 rounded-full bg-[#9EF01A]">
                <Icon name="Check" size={28} />
              </span>
              <h3 className="font-display font-bold text-[#111110] text-2xl">Отправлено!</h3>
              <p className="text-[#8A8882]">Отвечу в течение дня.</p>
            </div>
          ) : (
            <form onSubmit={handle} className="space-y-4">
              <div>
                <label className="block text-xs font-mono tracking-widest text-[#8A8882] uppercase mb-2">Имя</label>
                <input type="text" required placeholder="Как к вам обращаться"
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-[#EEECEA] border border-transparent rounded-xl px-5 py-4 text-[#111110] placeholder:text-[#8A8882] focus:outline-none focus:border-[#111110] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest text-[#8A8882] uppercase mb-2">Email</label>
                <input type="email" required placeholder="you@mail.com"
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-[#EEECEA] border border-transparent rounded-xl px-5 py-4 text-[#111110] placeholder:text-[#8A8882] focus:outline-none focus:border-[#111110] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest text-[#8A8882] uppercase mb-2">Задача</label>
                <textarea rows={5} required placeholder="Опишите проект — тип сайта, что нужно сделать, сроки"
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-[#EEECEA] border border-transparent rounded-xl px-5 py-4 text-[#111110] placeholder:text-[#8A8882] focus:outline-none focus:border-[#111110] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-[#111110] hover:bg-[#222] text-[#F7F6F3] font-bold py-4 rounded-xl transition-colors">
                Отправить <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ────────────────────────────────────────────── */
const Footer = () => (
  <footer className="border-t border-[#111110]/10 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#top" className="font-display font-black text-sm text-[#111110] tracking-tight">
        АЗ<span className="text-[#9EF01A]">.</span>
      </a>
      <p className="font-mono text-xs text-[#8A8882]">© 2026 Артём Зубов</p>
      <div className="flex gap-2">
        {[
          { href: 'https://t.me/hakuz0r', icon: 'Send' },
          { href: 'https://wa.me/79000000000', icon: 'MessageCircle' },
          { href: 'mailto:hakuz0r@gmail.com', icon: 'Mail' },
        ].map(s => (
          <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
             className="grid place-items-center w-9 h-9 rounded-lg border border-[#111110]/12 hover:border-[#111110] text-[#111110] transition-colors">
            <Icon name={s.icon} size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

/* ─── Page ──────────────────────────────────────────────── */
export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
