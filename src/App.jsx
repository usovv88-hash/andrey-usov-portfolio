import { useEffect, useState } from "react";

const projects = [
  {
    slug: "steps", title: "По следам повседневности", year: "2023 — н. в.",
    meta: "Walking art, карты, фотография, текст", image: "card-steps.webp", label: "ONGOING WALKING ART",
    intro: "Проект представляет собой исследование повседневности как последовательности ситуаций, в которых сосуществуют фиксируемое и ускользающее, случайность и выбор.",
    paragraphs: [
      "Используя прогулку как основной метод, я трансформирую обыденное действие в акт наблюдения, свидетельства и фиксации времени. В перемещениях переплетаются случайные события, фразы и личные решения, фиксируя, как человек соотносится с местом, памятью и происходящим вокруг.",
      "Территория здесь не нейтральное пространство, а набор исторических, социальных и повседневных наслоений. Каждое действие — от шага до взгляда — становится формой присутствия и способом зафиксировать себя внутри происходящего.",
    ], note: "На данный момент совершено 204 прогулки",
  },
  {
    slug: "next", title: "Всегда придёт следующий", year: "2026",
    meta: "Перформанс, walking art, видео, текст", image: "card-next.webp", label: "САЙТ-СПЕЦИФИЧНЫЙ ПЕРФОРМАНС · 13:20:00",
    intro: "Работа создана для фестиваля «76», посвящённого одноимённому автобусному маршруту и предлагавшего художникам взаимодействовать с ним.",
    paragraphs: [
      "Я отказался от поездки на автобусе №76 и прошёл весь его маршрут пешком, сохраняя логику пассажира. В течение двух дней я последовательно двигался от одной остановки к другой.",
      "На каждой остановке я занимал место ожидающего и ждал появления автобуса, снимая, как он входит в кадр и выходит из него. После того как автобус отъезжал от остановки, я продолжал путь пешком.",
      "Перформанс длился 13 часов 20 минут и охватил 49 остановок. Из общего времени 8 часов 42 минуты заняло ожидание и 4 часа 38 минут — движение. Автобус перестал быть транспортом и стал сигналом, разрешающим двигаться дальше. Текстовые таблички фиксируют время, случайные реплики и ситуации, возникавшие на остановках и во время переходов.",
    ], note: "49 остановок · 2 дня · 13 часов 20 минут",
  },
  {
    slug: "straight", title: "Прямоходящее", year: "2026", meta: "Видео, 00:10:15; книга художника",
    image: "card-straight.webp", label: "ВИДЕО · КНИГА ХУДОЖНИКА",
    intro: "Работа исследует прямую линию как условие движения и как невозможность удержать маршрут в реальном пространстве.",
    paragraphs: ["Прямая существует как намерение, но город, тело и рельеф постоянно вносят в неё поправки. Камера фиксирует не достижение точки, а напряжение между выбранным направлением и множеством возникающих препятствий."],
    note: "Видео 00:10:15",
  },
  {
    slug: "states", title: "4 состояния", year: "2025", meta: "Двухканальное видео, 00:43:37; совместно с Д. Ступаковой",
    image: "card-states.webp", label: "ДВУХКАНАЛЬНОЕ ВИДЕО",
    intro: "Две камеры удерживают одно движение в разных состояниях: присутствии, удалении, ожидании и возвращении.",
    paragraphs: ["Совместная работа с Дарьей Ступаковой строится на несовпадении взглядов и длительностей. Пространство между двумя видеоканалами становится самостоятельной частью произведения."],
    note: "00:43:37",
  },
  {
    slug: "wolf", title: "Волчья тропа", year: "2026", meta: "Видеоинсталляция, объект, walking art",
    image: "card-wolf.webp", label: "ВИДЕОИНСТАЛЛЯЦИЯ · ОБЪЕКТ",
    intro: "Маршрут вдоль Красненькой реки снят с высоты около пятнадцати сантиметров — из точки зрения тела, которое движется почти у самой земли.",
    paragraphs: [
      "Камера iPhone 15 Pro становится низким наблюдателем, а прогулка — способом примерить нечеловеческую оптику. Десять PLA-жетонов отмечают пройденный путь и превращают движение в материальный счёт.",
      "Видео и объект «нора» образуют единую инсталляцию: изображение не иллюстрирует маршрут, а продолжает его внутри выставочного пространства.",
    ], note: "10 PLA-жетонов",
  },
  {
    slug: "fragments", title: "Обломки", year: "2025", meta: "Инсталляция, архив",
    image: "card-fragments.webp", label: "ИНСТАЛЛЯЦИЯ · АРХИВ",
    intro: "Архив здесь собран не как доказательство целого, а как форма существования того, что уже распалось.",
    paragraphs: ["Фотографии, записи и найденные фрагменты сохраняются в переносной системе хранения. Зритель встречается не с восстановленной историей, а с порядком, который временно удерживает её остатки вместе."],
    note: "Переносной архив",
  },
  {
    slug: "sleep", title: "8 часов сна", year: "2025", meta: "Перформанс с соучастием Д. Ступаковой, Т. Сюзева, П. Волкоморова",
    image: "card-sleep.webp", label: "ПЕРФОРМАНС",
    intro: "Сон вынесен в публичное пространство как длительное действие, одновременно уязвимое и недоступное наблюдателю.",
    paragraphs: ["Восемь часов становятся не хронометражем события, а его материалом. Соучастники удерживают границу между повседневной необходимостью и выставочным жестом."],
    note: "8 часов",
  },
  {
    slug: "scoop", title: "Черпать досуха", year: "2024", meta: "Сайт-специфичный перформанс, walking art, объект, artist book",
    image: "card-scoop.webp", label: "САЙТ-СПЕЦИФИЧНЫЙ ПЕРФОРМАНС",
    intro: "Рандомайзер определял, к какой воде я должен подойти — Красненькой реке или Лиговскому каналу — и должен ли я зачерпнуть воду.",
    paragraphs: [
      "Зачерпывая воду из Красненькой, я символически спасал город. Возвращая воду из Лиговского канала в реку, наоборот, участвовал в его затоплении. Отказ от действия не был нейтрален: бездействие превращалось в молчаливое согласие.",
      "Ведро одновременно было инструментом перформанса, объектом и носителем документации. Работа создана для Красненькой антибиеннале и опирается на предложенную ею тему катастрофического наводнения.",
    ], note: "24.08.2024 · 6:23:04 · 17,9 км",
  },
];

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

function useHash() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const update = () => { setHash(window.location.hash || "#/"); window.scrollTo({ top: 0, behavior: "instant" }); };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return hash;
}

function Header({ light = false }) {
  return <header className={`site-header ${light ? "site-header--light" : ""}`}>
    <a className="brand" href="#/">ANDREY USOV</a>
    <nav aria-label="Главная навигация"><a href="#works">WORKS</a><a href="#/about">ABOUT</a><a href="#/cv">CV</a><a href="mailto:andy.usov.art@gmail.com">CONTACT</a></nav>
  </header>;
}

function Home() {
  return <>
    <section className="hero">
      <Header />
      <img className="hero__image" src={asset("hero.webp")} alt="Мост над рекой в вечернем свете" />
      <div className="hero__veil" />
      <div className="hero__content"><p className="eyebrow">BASED IN SAINT PETERSBURG</p><h1>ANDREY<br />USOV</h1><p className="hero__subtitle">Contemporary artist working with walking art,<br className="desktop-only" /> performance and video</p></div>
      <a className="hero__scroll" href="#works" aria-label="К проектам">↓</a>
    </section>
    <main id="works" className="works">
      <div className="section-heading"><p className="kicker">SELECTED WORKS</p><p className="section-heading__aside">2023—2026<br />SAINT PETERSBURG</p></div>
      <div className="project-grid">{projects.map((project, index) =>
        <a className="project-card" href={`#/work/${project.slug}`} key={project.slug}>
          <div className="project-card__image-wrap"><img src={asset(project.image)} alt="" loading={index > 1 ? "lazy" : "eager"} /><span className="project-card__index">{String(index + 1).padStart(2, "0")}</span></div>
          <div className="project-card__text"><h2>{project.title}</h2><p>{project.year} · {project.meta}</p><span>Открыть проект <span aria-hidden="true">→</span></span></div>
        </a>)}</div>
    </main><Footer />
  </>;
}

function WorkPage({ project }) {
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <div className="paper-page"><Header light /><main className="work-page">
    <a className="back" href="#/">← Все проекты</a>
    <div className="work-hero"><p className="kicker">{project.label}</p><h1>{project.title}</h1><p className="work-hero__meta">{project.year} · {project.meta}</p></div>
    <figure className="work-cover"><img src={asset(project.image)} alt={`Документация проекта «${project.title}»`} /><figcaption>{project.note}</figcaption></figure>
    <section className="work-description"><p className="kicker">О ПРОЕКТЕ</p><div className="work-description__copy"><p className="lead">{project.intro}</p>{project.paragraphs.map((p) => <p key={p}>{p}</p>)}<p className="work-note">{project.note}</p></div></section>
    <section className="work-end"><p>NEXT PROJECT</p><a href={`#/work/${next.slug}`}>{next.title} →</a></section>
  </main><Footer /></div>;
}

function About({ cv = false }) {
  return <div className="paper-page info-page"><Header light /><main><a className="back" href="#/">← На главную</a><p className="kicker">{cv ? "CV" : "ABOUT"}</p>
    {cv ? <><h1>Андрей Усов</h1><div className="cv-grid"><p>Современный художник<br />Санкт-Петербург</p><p>Walking art<br />Перформанс<br />Видео<br />Инсталляция<br />Текст и документация</p><p>Избранные проекты<br />2023—2026</p></div></>
      : <><h1>Андрей Усов — современный художник из Санкт-Петербурга.</h1><div className="about-copy"><p>Я работаю с прогулкой, перформансом, видео и документацией, исследуя повседневность, движение и телесное присутствие в городской и природной среде.</p><p>Используя прогулку как основной метод, я превращаю обыденные маршруты в форму наблюдения, свидетельства и фиксации времени.</p></div></>}
  </main><Footer /></div>;
}

function NotFound() { return <div className="not-found"><p>404</p><h1>Страница ещё не готова</h1><a href="#/">← Вернуться к проектам</a></div>; }
function Footer() { return <footer className="footer"><p>© {new Date().getFullYear()} ANDREY USOV</p><div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://t.me/" target="_blank" rel="noreferrer">TELEGRAM</a></div></footer>; }

export function App() {
  const hash = useHash();
  if (hash === "#/about") return <About />;
  if (hash === "#/cv") return <About cv />;
  if (hash.startsWith("#/work/")) return <WorkPage project={projects.find((p) => p.slug === hash.split("/")[2])} />;
  return <Home />;
}
