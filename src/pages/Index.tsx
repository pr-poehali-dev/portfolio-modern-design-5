import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Стек', href: '#stack' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contacts' },
];

const STATS = [
  { value: '1', label: 'год на фрилансе' },
  { value: '50+', label: 'выполненных заказов' },
  { value: '4', label: 'площадки и постоянные клиенты' },
];

const STACK = [
  { tag: '// frontend', title: 'Frontend', items: ['HTML', 'CSS / SCSS', 'JavaScript', 'Vue.js'] },
  { tag: '// cms & backend', title: 'CMS & Backend', items: ['WordPress', 'PHP', 'Laravel', 'Symfony', 'Tilda'] },
  { tag: '// e-commerce', title: 'E-commerce и инструменты', items: ['WooCommerce', 'Кастомные темы', 'Nuxt.js'] },
];

const PROJECTS = [
  {
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/722ddacb-18c5-43fb-aef4-8bf76639ff63.jpg',
    cat: 'Интернет-магазин', name: 'ChargerOne', url: 'chargerone.ru',
    tags: ['WordPress', 'WooCommerce', 'Кастомная тема'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/48680e25-39f6-4203-9f6c-f5d18552027f.jpg',
    cat: 'Ветклиника', name: 'EVC · Ветеринарная клиника', url: 'evc.ru',
    tags: ['WordPress', 'Многостраничный', 'Кастомная тема'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/a132036d-7b8d-4468-9087-d198e98994e6.jpg',
    cat: 'Лендинг · Автосервис', name: 'Диагностика АКПП', url: 'akpp-service.ru',
    tags: ['Tilda', 'Лендинг', 'Анимации'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/files/fa0ca532-1f2b-4bc7-9292-49c7ffec007c.jpg',
    cat: 'Корпоративный сайт', name: 'Formatta · Консалтинг', url: 'formatta.ru',
    tags: ['Laravel', 'Корпоративный', 'Кастомная тема'],
  },
];

const SERVICES = [
  { icon: 'LayoutTemplate', title: 'Лендинги', desc: 'Продающие одностраничники под запуск рекламы и сбор заявок.' },
  { icon: 'Globe', title: 'Корпоративные сайты', desc: 'Многостраничные сайты, которые внушают доверие и работают на бренд.' },
  { icon: 'ShoppingCart', title: 'Интернет-магазины', desc: 'Каталог, корзина, оплата — магазины «под ключ» на WooCommerce.' },
  { icon: 'Wrench', title: 'Доработка сайтов', desc: 'Правки вёрстки, новый функционал и ускорение существующих проектов.' },
];

const ADVANTAGES = [
  { icon: 'Clock', title: 'В срок', desc: 'Соблюдаю дедлайны и держу вас в курсе по каждому этапу.' },
  { icon: 'Code2', title: 'Чистый код', desc: 'Аккуратная вёрстка, которую удобно поддерживать дальше.' },
  { icon: 'Smartphone', title: 'Адаптив', desc: 'Сайт одинаково хорошо смотрится на телефоне и десктопе.' },
  { icon: 'MessageSquare', title: 'На связи', desc: 'Отвечаю быстро и говорю простым языком, без сложных терминов.' },
];

const REVIEWS = [
  { name: 'Дмитрий К.', role: 'ChargerOne', text: 'Артём собрал магазин под ключ и помог с интеграциями. Всё чётко, в срок, рекомендую.' },
  { name: 'Ольга М.', role: 'Ветклиника EVC', text: 'Сделал красивый и удобный сайт. Заявок стало заметно больше, клиенты хвалят дизайн.' },
  { name: 'Сергей П.', role: 'Автосервис', text: 'Быстро доработал лендинг и поднял конверсию. Приятно работать с человеком, который вникает.' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-3 inset-x-0 z-50 px-4">
      <div className="container">
        <div className="flex items-center justify-between gap-4 bg-white/90 backdrop-blur-md border border-slate-200/70 rounded-2xl shadow-[0_10px_40px_-15px_rgba(16,31,60,0.25)] pl-5 pr-3 py-2.5">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-navy text-white font-display font-bold text-sm">АЗ</span>
            <span className="font-display font-bold text-navy text-[15px] tracking-tight">Артём Зубов</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[15px] font-medium text-slate-600 hover:text-navy transition-colors">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-semibold">
              <button className="px-3 py-1.5 rounded-md bg-navy text-white">RU</button>
              <button className="px-3 py-1.5 rounded-md text-slate-500">EN</button>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-navy">
              <Icon name={open ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 bg-white border border-slate-200 rounded-2xl shadow-lg p-4 flex flex-col gap-1 animate-fade-in">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100">{n.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

const SectionTitle = ({ num, children, light = false }: { num: string; children: string; light?: boolean }) => (
  <div className="flex items-center gap-5">
    <span className="font-mono text-sm text-brand">{num}</span>
    <h2 className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight ${light ? 'text-white' : 'text-navy'}`}>{children}</h2>
    <span className={`hidden sm:block flex-1 h-px ${light ? 'bg-white/15' : 'bg-slate-200'}`} />
  </div>
);

const Hero = () => (
  <section id="top" className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-navy" />
            <span className="font-mono text-xs tracking-[0.2em] text-brand uppercase">Frontend-разработчик · Фриланс</span>
          </div>
          <h1 className="font-display font-black text-navy leading-[0.95] text-6xl sm:text-7xl md:text-8xl tracking-tight">
            Зубов<br />Артём
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-slate-500 max-w-md leading-relaxed">
            Создаю и дорабатываю сайты, которые работают на бизнес — от лендингов до интернет-магазинов.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#portfolio" className="group inline-flex items-center gap-3 bg-navy text-white font-semibold px-7 py-4 rounded-xl hover:bg-navy-light transition-colors">
              Смотреть портфолио
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacts" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-navy font-semibold px-7 py-4 rounded-xl hover:border-navy transition-colors">
              Связаться
            </a>
          </div>
        </div>
        <div className="relative animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(16,31,60,0.5)]">
            <img src="https://cdn.poehali.dev/projects/0d1b8ee1-ad5c-4375-90b1-bbdebd5cdb0f/bucket/414e2441-beda-4a42-8ba2-00bcba6dba83.png" alt="Артём Зубов" className="w-full h-[460px] sm:h-[560px] object-cover object-top" />
          </div>
          <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg">
            <p className="font-mono text-[11px] text-slate-400 uppercase tracking-wide">Локация</p>
            <p className="font-display font-bold text-navy text-sm">Россия · удалённо</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-navy-deep text-white">
    <div className="container">
      <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {STATS.map((s) => (
          <div key={s.label} className="py-12 sm:py-16 sm:px-10 first:sm:pl-0">
            <p className="font-display font-extrabold text-6xl md:text-7xl text-slate-300">{s.value}</p>
            <p className="mt-3 text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <SectionTitle num="01">Обо мне</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-14">
        <h3 className="font-display font-bold text-navy text-3xl md:text-[40px] leading-tight tracking-tight">
          Год занимаюсь веб-разработкой на фрилансе. Специализируюсь на доработке сайтов и создании интернет-магазинов.
        </h3>
        <div>
          <p className="text-lg text-slate-500 leading-relaxed">
            За это время выполнил более 50 заказов — от небольших правок вёрстки до запуска многостраничных сайтов и интернет-магазинов «под ключ». Работаю аккуратно, в срок и так, чтобы результат было удобно поддерживать дальше.
          </p>
          <p className="mt-8 font-mono text-xs tracking-[0.2em] text-slate-400 uppercase">Где я работаю</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {['Kwork', 'Профи.ру', 'Upwork', 'Постоянные клиенты'].map((p) => (
              <span key={p} className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-navy shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />{p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stack = () => (
  <section id="stack" className="py-20 md:py-28 bg-white">
    <div className="container">
      <SectionTitle num="02">Стек технологий</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {STACK.map((s) => (
          <div key={s.title} className="bg-slate-50/70 border border-slate-200 rounded-2xl p-7 hover-lift">
            <p className="font-mono text-sm text-brand">{s.tag}</p>
            <h3 className="font-display font-bold text-navy text-xl mt-3">{s.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {s.items.map((i) => (
                <span key={i} className="bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm font-medium text-navy">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-20 md:py-28">
    <div className="container">
      <SectionTitle num="03">Портфолио</SectionTitle>
      <div className="grid md:grid-cols-2 gap-7 mt-14">
        {PROJECTS.map((p) => (
          <div key={p.name} className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover-lift shadow-sm">
            <div className="overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-60 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7">
              <p className="font-mono text-xs tracking-[0.15em] text-brand uppercase">{p.cat}</p>
              <h3 className="font-display font-bold text-navy text-2xl mt-3">{p.name}</h3>
              <p className="font-mono text-sm text-slate-400 mt-1.5 flex items-center gap-1">{p.url} <Icon name="ArrowUpRight" size={14} /></p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-navy">{t}</span>
                ))}
              </div>
              <a href="#contacts" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy group-hover:text-brand transition-colors">
                Открыть сайт <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-white">
    <div className="container">
      <SectionTitle num="04">Услуги</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {SERVICES.map((s) => (
          <div key={s.title} className="bg-slate-50/70 border border-slate-200 rounded-2xl p-7 hover-lift">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-navy text-white">
              <Icon name={s.icon} size={22} />
            </span>
            <h3 className="font-display font-bold text-navy text-lg mt-5">{s.title}</h3>
            <p className="mt-2 text-slate-500 leading-relaxed text-[15px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Advantages = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <SectionTitle num="05">Преимущества</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {ADVANTAGES.map((a) => (
          <div key={a.title} className="flex gap-4">
            <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-brand/10 text-brand">
              <Icon name={a.icon} size={20} />
            </span>
            <div>
              <h3 className="font-display font-bold text-navy text-lg">{a.title}</h3>
              <p className="mt-1.5 text-slate-500 leading-relaxed text-[15px]">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container">
      <SectionTitle num="06">Отзывы</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {REVIEWS.map((r) => (
          <div key={r.name} className="bg-slate-50/70 border border-slate-200 rounded-2xl p-7 hover-lift">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" size={16} fallback="Star" />)}
            </div>
            <p className="mt-5 text-navy leading-relaxed">«{r.text}»</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-navy text-white font-display font-bold text-sm">{r.name[0]}</span>
              <div>
                <p className="font-display font-bold text-navy text-sm">{r.name}</p>
                <p className="text-slate-400 text-sm">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contacts = () => (
  <section id="contacts" className="bg-navy-deep text-white py-20 md:py-28">
    <div className="container">
      <SectionTitle num="07" light>Контакты</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-14">
        <div>
          <h3 className="font-display font-bold text-3xl md:text-[40px] leading-tight">
            Расскажите о задаче — <span className="text-slate-400">отвечу в течение дня.</span>
          </h3>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed max-w-md">
            Доработка, новый сайт или интернет-магазин — напишите удобным способом, обсудим детали и сроки.
          </p>
          <div className="mt-9 space-y-4">
            <a href="https://t.me/hakuz0r" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-5 py-4 transition-colors">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/10"><Icon name="Send" size={20} /></span>
              <div><p className="text-slate-400 text-sm">Telegram</p><p className="font-display font-bold">@hakuz0r</p></div>
            </a>
            <a href="https://wa.me/79000000000" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-5 py-4 transition-colors">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/10"><Icon name="MessageCircle" size={20} /></span>
              <div><p className="text-slate-400 text-sm">WhatsApp</p><p className="font-display font-bold">+7 900 000-00-00</p></div>
            </a>
            <a href="mailto:hakuz0r@gmail.com" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-5 py-4 transition-colors">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/10"><Icon name="Mail" size={20} /></span>
              <div><p className="text-slate-400 text-sm">Email</p><p className="font-display font-bold">hakuz0r@gmail.com</p></div>
            </a>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-9">
          <label className="block">
            <span className="font-semibold">Имя</span>
            <input type="text" placeholder="Как к вам обращаться" className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand transition-colors" />
          </label>
          <label className="block mt-5">
            <span className="font-semibold">Email</span>
            <input type="email" placeholder="you@mail.com" className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand transition-colors" />
          </label>
          <label className="block mt-5">
            <span className="font-semibold">Сообщение</span>
            <textarea rows={4} placeholder="Опишите задачу в двух словах" className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand transition-colors resize-none" />
          </label>
          <button type="submit" className="group mt-7 w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-blue-600 font-bold py-4 rounded-xl transition-colors">
            Отправить заявку <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy text-white py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/10 font-display font-bold text-sm">АЗ</span>
        <span className="font-display font-bold">Артём Зубов</span>
      </div>
      <p className="text-slate-400 text-sm">© 2026 · Веб-разработка и дизайн</p>
      <div className="flex items-center gap-3">
        <a href="https://t.me/hakuz0r" className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Icon name="Send" size={16} /></a>
        <a href="https://wa.me/79000000000" className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Icon name="MessageCircle" size={16} /></a>
        <a href="mailto:hakuz0r@gmail.com" className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Icon name="Mail" size={16} /></a>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-slate-50 selection:bg-navy selection:text-white">
    <Header />
    <main>
      <Hero />
      <Stats />
      <About />
      <Stack />
      <Portfolio />
      <Services />
      <Advantages />
      <Reviews />
      <Contacts />
    </main>
    <Footer />
  </div>
);

export default Index;
