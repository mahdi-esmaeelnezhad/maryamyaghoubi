import { useState } from 'react'
import {
  courses,
  education,
  experience,
  focusAreas,
  highlights,
  languages,
  navItems,
  profile,
  skillGroups,
} from './content'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="header">
        <div className="wrap header-inner">
          <a className="logo" href="#top" onClick={closeMenu}>
            مریم یعقوبی
          </a>
          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="منوی اصلی">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-download" href={profile.resumeHref} download onClick={closeMenu}>
              دانلود رزومه
            </a>
          </nav>
          <a className="btn btn-small header-cta" href={profile.resumeHref} download>
            دانلود رزومه
          </a>
          <button
            className={`menu-btn ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">{profile.location} · {profile.birth}</p>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="hero-lead">{profile.lead}</p>
              <div className="hero-actions">
                <a className="btn" href="#contact">
                  تماس برای همکاری
                </a>
                <a className="btn btn-ghost" href={profile.resumeHref} download>
                  دانلود رزومه PDF
                </a>
              </div>
            </div>
            <aside className="hero-panel">
              <p>حوزه فعالیت</p>
              <ul>
                <li>فروش داخلی و صادراتی محصولات پتروشیمی</li>
                <li>معاملات بورس انرژی و اعتبار اسنادی</li>
                <li>امور گمرکی، حمل و تحویل کالا</li>
                <li>گزارش‌گیری و کار با سامانه‌های بازرگانی</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="stats">
          <div className="wrap stats-grid">
            {highlights.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">درباره من</p>
              <h2>معرفی حرفه‌ای</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="focus-grid">
                {focusAreas.map((item) => (
                  <article className="card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">سابقه کاری</p>
              <h2>تجربه شغلی</h2>
            </div>
            <article className="card job">
              <div className="job-top">
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.intro}</p>
                </div>
                <p className="job-date">
                  {experience.period}
                  <small>{experience.place}</small>
                </p>
              </div>
              <ul>
                {experience.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">مهارت‌ها</p>
              <h2>توانمندی‌های کاری</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="education">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">تحصیلات و زبان</p>
              <h2>سوابق تحصیلی</h2>
            </div>
            <div className="edu-grid">
              {education.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <b>{item.period}</b>
                </article>
              ))}
              {languages.map((item) => (
                <article className="card" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.level}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="courses">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">دوره‌ها</p>
              <h2>دوره‌های تخصصی</h2>
            </div>
            <ul className="course-rows">
              {courses.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <span>{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-box">
            <div>
              <p className="eyebrow light">تماس</p>
              <h2>آماده همکاری در حوزه فروش و بازرگانی</h2>
              <p>
                در صورت نیاز به همکاری در فروش داخلی، صادرات و امور بازرگانی
                محصولات پتروشیمی، از طریق تلفن یا ایمیل با من در ارتباط باشید.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-link" href={profile.phoneHref}>
                <small>تلفن</small>
                <span className="ltr">{profile.phone}</span>
              </a>
              <a className="contact-link" href={profile.emailHref}>
                <small>ایمیل</small>
                <span className="ltr">{profile.email}</span>
              </a>
              <a className="contact-link" href={profile.websiteHref} target="_blank" rel="noreferrer">
                <small>سایت</small>
                <span className="ltr">{profile.website}</span>
              </a>
              <a className="btn btn-full" href={profile.resumeHref} download>
                دانلود رزومه PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>مریم یعقوبی · کارشناس فروش و بازرگانی</p>
          <a href="#top">بازگشت به بالا</a>
        </div>
      </footer>
    </div>
  )
}

export default App
