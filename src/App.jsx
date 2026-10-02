import { useEffect, useState } from "react";
import projects from "./content/projects.json";
import about from "./content/about.json";
import cv from "./content/cv.json";
import statement from "./content/statement.json";

const asset = (name) => {
  const filename = name.replace(/^\/?assets\//, "");
  return `${import.meta.env.BASE_URL}assets/${filename}`;
};

function typograph(text) {
  return text
    .replace(/(\d)\s*[—–-]\s*(?=\d|н\.\s*в\.)/g, "$1\u00a0—\u00a0")
    .replace(/(^|\s)([А-Яа-яЁёA-Za-z]{1,2}|без|для|над|под|при|про|как|или|вне)\s+/gi, "$1$2\u00a0");
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
    <nav aria-label="Главная навигация"><a href="#works">WORKS</a><a href="#/about">ABOUT</a><a href="#/statement">STATEMENT</a><a href="#/cv">CV</a><a href="mailto:i@andyusov.ru">CONTACT</a></nav>
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
  return <div className="paper-page info-page about-page"><Header light /><main><a className="back" href="#/">← На главную</a><p className="kicker">ABOUT</p><h1>{typograph(about.title)}</h1><div className="about-copy">{about.paragraphs.map((paragraph) => <p key={paragraph}>{typograph(paragraph)}</p>)}</div></main><Footer /></div>;
}

function Statement() {
  return <div className="paper-page info-page statement-page"><Header light /><main><a className="back" href="#/">← На главную</a><p className="kicker">ARTIST STATEMENT</p><h1>{typograph(statement.title)}</h1><div className="statement-copy">{statement.paragraphs.map((paragraph, index) => <p className={index === 0 ? "lead" : ""} key={paragraph}>{typograph(paragraph)}</p>)}</div></main><Footer /></div>;
}

function CVSection({ title, children }) {
  return <section className="cv-section"><p className="kicker">{title}</p><div>{children}</div></section>;
}

function CV() {
  return <div className="paper-page info-page cv-page"><Header light /><main><a className="back" href="#/">← На главную</a><div className="cv-title"><p className="kicker">CV</p><h1>{cv.firstName}<br />{cv.lastName}</h1></div>
    <section className="cv-intro"><img src={asset(cv.portrait)} alt={`${cv.firstName} ${cv.lastName}`} /><div><p className="cv-lead">{typograph(cv.lead)}</p><p>{typograph(cv.body)}</p><div className="cv-contacts"><a href={`mailto:${cv.contacts.email}`}>{cv.contacts.email}</a><a href={cv.contacts.telegram} target="_blank" rel="noreferrer">Telegram</a><a href={cv.contacts.instagram} target="_blank" rel="noreferrer">Instagram</a></div><p className="cv-updated">{cv.updated}</p></div></section>
    <CVSection title="ИЗБРАННЫЕ ВЫСТАВКИ"><div className="cv-years">{cv.exhibitions.map((group) => <div key={group.year}><h2>{typograph(group.year)}</h2><ul>{group.items.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></div>)}</div></CVSection>
    <CVSection title="ЛАБОРАТОРИИ И РЕЗИДЕНЦИИ"><ul className="cv-list">{cv.programs.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></CVSection>
    <CVSection title="ОБРАЗОВАНИЕ"><ul className="cv-list">{cv.education.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></CVSection>
    <CVSection title="ОБЪЕДИНЕНИЯ"><ul className="cv-list">{cv.collectives.map((item) => <li key={item}>{typograph(item)}</li>)}</ul></CVSection>
  </main><Footer /></div>;
}

function NotFound() { return <div className="not-found"><p>404</p><h1>Страница ещё не готова</h1><a href="#/">← Вернуться к проектам</a></div>; }
function Footer() { return <footer className="footer"><p>© {new Date().getFullYear()} ANDREY USOV</p><div><a href="https://www.instagram.com/i.andyusov/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://t.me/usovandrey" target="_blank" rel="noreferrer">TELEGRAM</a></div></footer>; }

export function App() {
  const hash = useHash();
  if (hash === "#/about") return <About />;
  if (hash === "#/statement") return <Statement />;
  if (hash === "#/cv") return <CV />;
  if (hash.startsWith("#/work/")) return <WorkPage project={projects.find((project) => project.slug === hash.split("/")[2])} />;
  return <Home />;
}
