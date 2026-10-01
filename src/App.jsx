import { useEffect, useState } from "react";

const projects = [
  {
    slug: "steps", title: "По следам повседневности", year: "2023 — н. в.",
    meta: "Walking art, карты, фотографии, текст, видео, аудио", image: "card-steps-large.webp",
    label: "ПРОДОЛЖАЮЩИЙСЯ ПРОЕКТ · WALKING ART",
    intro: "Проект исследует повседневность как последовательность ситуаций, где фиксируемое сосуществует с ускользающим, а случайность — с выбором.",
    paragraphs: [
      "Прогулка становится основным методом: обыденное действие превращается в наблюдение, свидетельство и фиксацию времени. В перемещениях переплетаются случайные события, фразы и личные решения. Они показывают, как человек соотносится с местом, памятью и происходящим вокруг.",
      "Территория здесь не нейтральное пространство, а набор исторических, социальных и повседневных наслоений. Каждое действие — от шага до взгляда — становится формой присутствия и способом зафиксировать себя внутри происходящего.",
    ],
    note: "На данный момент совершено 211 прогулок",
    caption: "Фрагмент архива проекта «По следам повседневности»",
  },
  {
    slug: "next", title: "Всегда придёт следующий", year: "2026",
    meta: "Сайт-специфичный перформанс, walking art, видео, текст", image: "card-next.webp",
    label: "САЙТ-СПЕЦИФИЧНЫЙ ПЕРФОРМАНС · 13:20:00",
    intro: "Работа создана для фестиваля «76», посвящённого одноимённому автобусному маршруту. Художникам предлагалось вступить с ним во взаимодействие.",
    paragraphs: [
      "Я отказался от поездки на автобусе № 76 и прошёл весь его маршрут пешком, сохраняя логику пассажира. В течение двух дней я последовательно двигался от одной остановки к другой.",
      "На каждой остановке я занимал место ожидающего и ждал появления автобуса, снимая его вход в кадр и выход из него. После отправления автобуса я продолжал путь пешком.",
      "Перформанс длился 13 часов 20 минут и охватил 49 остановок. Ожидание заняло 8 часов 42 минуты, движение — 4 часа 38 минут. Автобус перестал быть транспортом и стал сигналом, разрешающим двигаться дальше. Текстовые таблички фиксируют время, случайные реплики и ситуации, возникавшие на остановках и во время переходов.",
    ],
    note: "49 остановок · 2 дня · 13 часов 20 минут",
    caption: "Показ проекта на фестивале «76», Санкт-Петербург, 2026",
  },
  {
    slug: "straight", title: "Прямоходящее", year: "2026",
    meta: "Видео, 00:10:15; книга художника", image: "card-straight.webp", label: "ВИДЕО · КНИГА ХУДОЖНИКА",
    intro: "Работа исследует прямую линию как условие движения и невозможность удержать маршрут в реальном пространстве.",
    paragraphs: ["Прямая существует как намерение, но город, тело и рельеф постоянно вносят в неё поправки. Камера фиксирует не достижение точки, а напряжение между выбранным направлением и множеством возникающих препятствий."],
    note: "Видео, 00:10:15 · книга художника",
    caption: "Кадр из видео «Прямоходящее», 2026",
    gallery: [
      { image: "card-straight.webp", caption: "Видео «Прямоходящее», 00:10:15" },
      { image: "straight-installation.webp", caption: "Видеоинсталляция. Экспозиция проекта, 2026" },
      { image: "straight-book-1.webp", caption: "Книга художника «Прямоходящее»" },
      { image: "straight-book-2.webp", caption: "Разворот книги художника" },
    ],
  },
  {
    slug: "states", title: "4 состояния", year: "2025",
    meta: "Двухканальное видео, 00:43:37; совместно с Д. Ступаковой", image: "card-states.webp", label: "ДВУХКАНАЛЬНОЕ ВИДЕО",
    intro: "Две камеры удерживают одно движение в разных состояниях: присутствии, удалении, ожидании и возвращении.",
    paragraphs: ["Совместная работа с Дарьей Ступаковой строится на несовпадении взглядов и длительностей. Пространство между двумя видеоканалами становится самостоятельной частью произведения."],
    note: "Двухканальное видео, 00:43:37 · совместно с Д. Ступаковой",
    caption: "Кадры из двухканального видео «4 состояния»",
  },
  {
    slug: "wolf", title: "Волчья тропа", year: "2026",
    meta: "Видеоинсталляция, объект, walking art", image: "card-wolf.webp", label: "ВИДЕОИНСТАЛЛЯЦИЯ · ОБЪЕКТ",
    intro: "Маршрут вдоль Красненькой реки снят с высоты взгляда животного. Изображение фиксирует траву, воду, бетонные конструкции и узкие проходы почти у самой земли.",
    paragraphs: [
      "Прогулка становится способом примерить нечеловеческую оптику. В движение встраиваются зимние кадры ледяной воды и пара, меняющие время и состояние маршрута.",
      "Видео и объект «нора» образуют единую инсталляцию: изображение не иллюстрирует маршрут, а продолжает его внутри выставочного пространства.",
    ],
    note: "Видеоинсталляция · хронометраж будет добавлен",
    caption: "Зрители во время просмотра. Красненькая антибиеннале, Санкт-Петербург, 2026",
  },
  {
    slug: "fragments", title: "Обломки", year: "2025", meta: "Инсталляция, архив",
    image: "card-fragments.webp", label: "ИНСТАЛЛЯЦИЯ · АРХИВ",
    intro: "Архив собран не как доказательство целого, а как форма существования того, что уже распалось.",
    paragraphs: ["Фотографии, записи и найденные фрагменты сохраняются в переносной системе хранения. Зритель встречается не с восстановленной историей, а с порядком, который временно удерживает её остатки вместе."],
    note: "Переносной архив", caption: "Экспозиция. ЦТИ «Фабрика», Москва, 2025",
  },
  {
    slug: "sleep", title: "8 часов сна", year: "2025",
    meta: "Перформанс; совместно с Д. Ступаковой, Т. Сюзевой и П. Волкоморовым", image: "card-sleep.webp", label: "ПЕРФОРМАНС",
    intro: "Сон вынесен в публичное пространство как длительное действие, одновременно уязвимое и недоступное наблюдателю.",
    paragraphs: ["Восемь часов становятся не только хронометражем события, но и его материалом. Соучастники удерживают границу между повседневной необходимостью и выставочным жестом."],
    note: "Перформанс · совместно с Д. Ступаковой, Т. Сюзевой и П. Волкоморовым",
    caption: "Документация перформанса «8 часов сна», 2025",
  },
  {
    slug: "scoop", title: "Черпать досуха", year: "2024",
    meta: "Сайт-специфичный перформанс, walking art, объект, книга художника", image: "card-scoop.webp", label: "САЙТ-СПЕЦИФИЧНЫЙ ПЕРФОРМАНС",
    intro: "Рандомайзер определял, к какой воде я должен подойти — Красненькой реке или Лиговскому каналу — и нужно ли зачерпнуть воду.",
    paragraphs: [
      "Зачерпывая воду из Красненькой, я символически спасал город. Возвращая воду из Лиговского канала в реку, наоборот, участвовал в его затоплении. Отказ от действия не был нейтрален: бездействие превращалось в молчаливое согласие.",
      "Ведро одновременно было инструментом перформанса, объектом и носителем документации. Работа создана для Красненькой антибиеннале и опирается на предложенную ею тему катастрофического наводнения.",
    ],
    note: "24.08.2024 · 6:23:04 · 17,9 км",
    caption: "Документация перформанса «Черпать досуха», 2024",
  },
];

const exhibitions = [
  { year: "2026", items: [
    "«Пейзаж и память» — Зверевский центр свободного искусства, Москва. Куратор: Станислав Шурипа",
    "«Красненькая антибиеннале. Волка ноги кормят» — Санкт-Петербург. Куратор: Екатерина Васильева",
    "Фестиваль виртуальных Побегов «Связь» — VRChat",
    "«76»: фестиваль перформативного искусства — Санкт-Петербург. Курирование: «Уход в пустошь»",
    "«Рыночные отношения. Кузнечный» — Санкт-Петербург. Кураторы: Елизавета Иванова, Константин Козлов, Егор Лебедев",
    "«Практики свободы / Тайник» — Санкт-Петербург. Кураторы: Константин Козлов, Егор Лебедев",
    "«Жердёла» — Пушкинская-10, Санкт-Петербург",
    "«Практики свободы / НИИ 68» — НИИ Паразит, Санкт-Петербург. Куратор: Константин Козлов",
  ] },
  { year: "2025", items: [
    "«Тропы. Альтернативное краеведение» — БКЦ Нота, Санкт-Петербург. Куратор: Ксения Макаренко",
    "«Красненькая биеннале. Ремонт в голове» — Санкт-Петербург. Куратор: Екатерина Васильева",
    "«Неравнодушная природа» — ЦТИ «Фабрика», Москва. Куратор: Станислав Шурипа",
    "«Редкие вихри» — Нулевая комната, Самара. Куратор: Илья Борзунов",
  ] },
  { year: "2024", items: [
    "Ярмарка-хэппенинг «Разворот» — Дом архитектора, Воронеж",
    "Самоорганизация «ФотоСинтез» — Санкт-Петербург",
    "«Красненькая антибиеннале. Р.И.М.» — Санкт-Петербург. Куратор: Екатерина Васильева",
    "«Нарвская застава: фиксация / фикция» — «Прографика», Санкт-Петербург. Куратор: Екатерина Васильева",
  ] },
  { year: "2023—2022", items: [
    "«Самиздал» — Библиотека им. Гоголя, Санкт-Петербург. Куратор: Михаил Курганов",
    "The Borders — Батуми, Грузия, Particles Art Project",
    "«Вечное возвращение» — Wall-online.ru",
    "«Красненькая биеннале» — Санкт-Петербург. Куратор: Екатерина Васильева",
    "«Незнакомое / родное» — Библиотека им. Гоголя, Санкт-Петербург. Куратор: Михаил Курганов",
    "«Новые смыслы» — ДК Газа, Room and Wall, Санкт-Петербург. Куратор: Екатерина Васильева",
    "«Красненькая антибиеннале» — «Прографика», Санкт-Петербург. Куратор: Екатерина Васильева",
  ] },
];

const programs = [
  "2026 · «Лесное 11», резиденция, Московская область",
  "2026 · «Twin Плёс», резиденция, Ивановская область",
  "2026 · «Эдем после изгнания человека», лаборатория, БКЦ Нота, Санкт-Петербург",
  "2026 · «Зимняя школа ИСИ. Грамматика множеств», интенсив, Белые Аллеи, Москва",
  "2025 · «Тропы. Лаборатория доккино», БКЦ Нота, Санкт-Петербург",
  "2025 · «Летняя школа ИСИ. Эстетика в XXI веке», Белые Аллеи, Москва",
  "2025 · «Зимняя школа ИСИ. Странный реализм?», Белые Аллеи, Москва",
  "2024 · «Прожито / Нарисовано», Библиотека книжной графики, Санкт-Петербург",
  "2024 · «Нарвская застава», исследовательская лаборатория под руководством Екатерины Васильевой, Санкт-Петербург",
  "2023 · «Охта: точки внимания», Библиотека им. Гоголя, Санкт-Петербург",
  "2022 · «Мастерская CHEMART», Art & Science, Университет ИТМО, Санкт-Петербург",
];

const education = [
  "2024—2026 · Институт современного искусства Иосифа Бакштейна, «Новые художественные стратегии»",
  "2025 · Авторский курс Ильи Шипиловских, «Летняя школа современного искусства»",
  "2024 · Авторский курс Дмитрия Лукьянова, «Свет в арт-фотографии»",
  "2023 · Университет ИТМО, «Креативное программирование: использование кода в искусстве»",
  "2022—2023 · Авторские курсы Екатерины Васильевой, «Школа Walking Art на стыке антиискусства, философии и site-specific art»",
  "2022 · Школа интерпретации современного искусства «Пайдейя»",
  "2021 · Школа Родченко, «Still life в полевых условиях»",
  "2011—2014 · Технологический институт, инженерное образование",
];

const collectives = [
  "2026—н. в. · NoNameForNow",
  "2026—н. в. · iK / Walking art group 100 km",
  "2025—н. в. · ПОСТОРОННИЕ НЕНОРМАЛЬНЫЕ",
];

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

function typograph(text) {
  return text.replace(/(^|\s)([А-Яа-яЁёA-Za-z]{1,2})\s+/g, "$1$2\u00a0");
}

function useHash() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const update = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return hash;
}

function Header({ light = false }) {
  return <header className={`site-header ${light ? "site-header--light" : ""}`}>
    <a className="brand" href="#/">ANDREY USOV</a>
    <nav aria-label="Главная навигация"><a href="#works">WORKS</a><a href="#/about">ABOUT</a><a href="#/cv">CV</a><a href="mailto:i@andyusov.ru">CONTACT</a></nav>
  </header>;
}

function ProjectCard({ project, index }) {
  return <a className="project-card" href={`#/work/${project.slug}`}>
    <div className="project-card__image-wrap"><img src={asset(project.image)} alt="" loading={index > 1 ? "lazy" : "eager"} /><span className="project-card__index">{String(index + 1).padStart(2, "0")}</span></div>
    <div className="project-card__text"><h2>{project.title}</h2><p>{typograph(`${project.year} · ${project.meta}`)}</p><span>Открыть проект <span aria-hidden="true">→</span></span></div>
  </a>;
}

function ProjectBrowser() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const activeIndex = projects.findIndex((project) => project.slug === activeSlug);
  const active = projects[activeIndex];
  return <>
    <div className="project-browser">
      <div className="project-browser__list" role="tablist" aria-label="Выбор проекта">
        {projects.map((project, index) => <button type="button" role="tab" aria-selected={project.slug === activeSlug} className={project.slug === activeSlug ? "is-active" : ""} onClick={() => setActiveSlug(project.slug)} onMouseEnter={() => setActiveSlug(project.slug)} onFocus={() => setActiveSlug(project.slug)} key={project.slug}><span>{String(index + 1).padStart(2, "0")}</span>{project.title}</button>)}
      </div>
      <a className="project-browser__preview" href={`#/work/${active.slug}`} key={active.slug}>
        <div className="project-browser__media"><img src={asset(active.image)} alt={`Документация проекта «${active.title}»`} /><span className="project-browser__index">{String(activeIndex + 1).padStart(2, "0")}</span></div>
        <div className="project-browser__caption"><div><h2>{active.title}</h2><p>{typograph(`${active.year} · ${active.meta}`)}</p></div><span>Открыть проект →</span></div>
      </a>
    </div>
    <div className="project-grid project-grid--mobile">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
  </>;
}

function Home() {
  return <><section className="hero"><Header /><img className="hero__image" src={asset("hero.webp")} alt="Мост над рекой в вечернем свете" /><div className="hero__veil" /><div className="hero__content"><p className="eyebrow">BASED IN SAINT PETERSBURG</p><h1>ANDREY<br />USOV</h1><p className="hero__subtitle">Contemporary artist working with walking art,<br className="desktop-only" /> performance and video</p></div><a className="hero__scroll" href="#works" aria-label="К проектам">↓</a></section><main id="works" className="works"><div className="section-heading"><p className="kicker">SELECTED WORKS</p><p className="section-heading__aside">2023—2026<br />SAINT PETERSBURG</p></div><ProjectBrowser /></main><Footer /></>;
}

function WorkMedia({ project }) {
  const media = project.gallery || [{ image: project.image, caption: project.caption }];
  const [active, setActive] = useState(0);
  const item = media[active];
  return <figure className={`work-cover ${media.length > 1 ? "work-cover--gallery" : ""}`}>
    <div className="work-cover__frame"><img src={asset(item.image)} alt={`${item.caption}. Проект «${project.title}»`} />{media.length > 1 && <><button className="gallery-arrow gallery-arrow--prev" type="button" aria-label="Предыдущее изображение" onClick={() => setActive((active - 1 + media.length) % media.length)}>←</button><button className="gallery-arrow gallery-arrow--next" type="button" aria-label="Следующее изображение" onClick={() => setActive((active + 1) % media.length)}>→</button></>}</div>
    <div className="work-cover__caption-row"><figcaption>{typograph(item.caption || project.caption)}</figcaption>{media.length > 1 && <div className="gallery-dots" aria-label="Изображения проекта">{media.map((_, index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Изображение ${index + 1}`} key={index}>{String(index + 1).padStart(2, "0")}</button>)}</div>}</div>
  </figure>;
}

function WorkPage({ project }) {
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <div className="paper-page"><Header light /><main className="work-page"><a className="back" href="#/">← Все проекты</a><div className="work-hero"><p className="kicker">{project.label}</p><h1>{project.title}</h1><p className="work-hero__meta">{typograph(`${project.year} · ${project.meta}`)}</p></div><WorkMedia project={project} /><section className="work-description"><p className="kicker">О ПРОЕКТЕ</p><div className="work-description__copy"><p className="lead">{typograph(project.intro)}</p>{project.paragraphs.map((paragraph) => <p key={paragraph}>{typograph(paragraph)}</p>)}<p className="work-note">{typograph(project.note)}</p></div></section><section className="work-end"><p>NEXT PROJECT</p><a href={`#/work/${next.slug}`}>{next.title} →</a></section></main><Footer /></div>;
}

function About() {
  return <div className="paper-page info-page"><Header light /><main><a className="back" href="#/">← На главную</a><p className="kicker">ABOUT</p><h1>Андрей Усов — современный художник из Санкт-Петербурга.</h1><div className="about-copy"><p>{typograph("Я работаю с прогулкой, перформансом, видео и документацией, исследуя повседневность, движение и телесное присутствие в городской и природной среде.")}</p><p>{typograph("Используя прогулку как основной метод, я превращаю обыденные маршруты в форму наблюдения, свидетельства и фиксации времени.")}</p></div></main><Footer /></div>;
}

function CVSection({ title, children }) {
  return <section className="cv-section"><p className="kicker">{title}</p><div>{children}</div></section>;
}

function CV() {
  return <div className="paper-page info-page cv-page"><Header light /><main><a className="back" href="#/">← На главную</a><div className="cv-title"><p className="kicker">CV</p><h1>Андрей<br />Усов</h1></div>
    <section className="cv-intro"><img src={asset("cv-portrait.webp")} alt="Андрей Усов" /><div><p className="cv-lead">{typograph("Современный художник. Родился в Сибири, живёт и работает в Санкт-Петербурге.")}</p><p>{typograph("В своей практике работает с прогулкой, перформансом, видео и документацией, исследуя повседневность через движение, телесное присутствие, длительность и фиксацию.")}</p><div className="cv-contacts"><a href="mailto:i@andyusov.ru">i@andyusov.ru</a><a href="https://t.me/usovandrey" target="_blank" rel="noreferrer">Telegram</a><a href="https://www.instagram.com/i.andyusov/" target="_blank" rel="noreferrer">Instagram</a></div><p className="cv-updated">CV обновлено в сентябре 2026 года</p></div></section>
    <CVSection title="ИЗБРАННЫЕ ВЫСТАВКИ"><div className="cv-years">{exhibitions.map((group) => <div key={group.year}><h2>{group.year}</h2><ul>{group.items.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></div>)}</div></CVSection>
    <CVSection title="ЛАБОРАТОРИИ И РЕЗИДЕНЦИИ"><ul className="cv-list">{programs.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></CVSection>
    <CVSection title="ОБРАЗОВАНИЕ"><ul className="cv-list">{education.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></CVSection>
    <CVSection title="ОБЪЕДИНЕНИЯ"><ul className="cv-list">{collectives.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></CVSection>
  </main><Footer /></div>;
}

function NotFound() { return <div className="not-found"><p>404</p><h1>Страница ещё не готова</h1><a href="#/">← Вернуться к проектам</a></div>; }
function Footer() { return <footer className="footer"><p>© {new Date().getFullYear()} ANDREY USOV</p><div><a href="https://www.instagram.com/i.andyusov/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://t.me/usovandrey" target="_blank" rel="noreferrer">TELEGRAM</a></div></footer>; }

export function App() {
  const hash = useHash();
  if (hash === "#/about") return <About />;
  if (hash === "#/cv") return <CV />;
  if (hash.startsWith("#/work/")) return <WorkPage project={projects.find((project) => project.slug === hash.split("/")[2])} />;
  return <Home />;
}
