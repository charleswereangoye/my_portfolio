import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../lib/projects";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Flask", "PostgreSQL", "REST APIs"];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export function PortfolioHome() {
  return (
    <div className="portfolio-home">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING STUDENT <span className="eyebrow-divider">/</span> FULL-STACK DEVELOPER</div>
          <h1 id="hero-title">Building useful things,<br /><span>from interface to API.</span></h1>
          <p className="hero-intro">I&apos;m Charles Were Angoye — a software engineering student who enjoys turning thoughtful ideas into practical, end-to-end web experiences.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
            <a className="button button-quiet" href="#contact">Get in touch <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-footnote"><span>BUILDING FOR THE WEB</span><span className="footnote-line" /><span>FULL-STACK FOCUS</span></div>
        </div>

        <div className="portrait-panel">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-frame">
            <Image src="/my_photo.jpg" alt="Portrait of Charles Were Angoye" fill priority sizes="(max-width: 760px) 75vw, 34vw" className="portrait-image" />
          </div>
          <div className="portrait-caption"><span>CHARLES WERE ANGOYE</span><span>PORTFOLIO / 2026</span></div>
          <div className="portrait-index" aria-hidden="true">C.</div>
        </div>
      </section>

      <section className="intro-strip" aria-label="What I do">
        <p className="section-kicker">01 / THE APPROACH</p>
        <p className="intro-statement">Curious by nature. <span>Full-stack by practice.</span> I care about the details users see and the systems that make them work.</p>
        <div className="approach-tags"><span>PRODUCT THINKING</span><span>END-TO-END BUILDING</span><span>CONTINUOUS LEARNING</span></div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div><p className="section-kicker">02 / SELECTED PROJECTS</p><h2 id="work-title">A few things I&apos;ve built.</h2></div>
          <Link className="text-link" href="/projects">View all projects <ArrowIcon /></Link>
        </div>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.title} project`}>
                <div className={`project-image-wrap project-image-${index + 1}`}>
                  <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 760px) 100vw, 50vw" className="project-image" />
                  <span className="project-image-arrow"><ArrowIcon /></span>
                </div>
              </Link>
              <div className="project-card-meta"><span>0{index + 1} / 0{projectsData.length}</span><span>{project.category}</span></div>
              <div className="project-card-title"><h3>{project.title}</h3><Link href={`/projects/${project.slug}`} aria-label={`Read case study for ${project.title}`}><ArrowIcon /></Link></div>
              <p className="project-description">{project.shortDesc}</p>
              <div className="tag-list">{project.tools.slice(0, 4).map((tool) => <span key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="about" aria-labelledby="capabilities-title">
        <div className="capabilities-heading"><p className="section-kicker">03 / TOOLKIT</p><h2 id="capabilities-title">Comfortable across<br />the whole stack.</h2></div>
        <div className="capabilities-content">
          <p className="capabilities-copy">From shaping a clean user experience to connecting the data and logic behind it, I like understanding how every layer fits together.</p>
          <div className="skills-list" aria-label="Technical skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          <div className="learning-note"><span className="learning-indicator" /> ALWAYS LEARNING, ALWAYS BUILDING</div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-topline"><p className="section-kicker">04 / LET&apos;S CONNECT</p><span>HAVE A PROJECT OR OPPORTUNITY?</span></div>
        <div className="contact-content"><h2 id="contact-title">Good work starts<br /><span>with a conversation.</span></h2><a className="contact-button" href="mailto:charleswereangoye@gmail.com">Say hello <ArrowIcon /></a></div>
        <div className="contact-bottom"><span>CHARLES WERE ANGOYE</span><div className="social-links"><a href="https://github.com/charleswereangoye" target="_blank" rel="noreferrer">GITHUB <ArrowIcon /></a><a href="https://www.linkedin.com/in/charles-were-angoye-21a661326" target="_blank" rel="noreferrer">LINKEDIN <ArrowIcon /></a></div><span>© 2026</span></div>
      </section>
    </div>
  );
}
