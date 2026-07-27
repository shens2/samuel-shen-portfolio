import selfie from '../assets/images/Selfie.jpg'
import logoTheGuarantors from '../assets/images/TG.png'
import logoMicrosoft from '../assets/images/Microsoft.png'
import logoGoogle from '../assets/images/Google.png'
import logoUW from '../assets/images/UW.png'

function TimelineEntry({
  logo,
  org,
  role,
  start,
  end,
  description,
}: {
  logo: string
  org: string
  role?: string
  start: string
  end?: string
  description?: string
}) {
  return (
    <div className="row row--split timeline-entry">
      <div className="timeline-info">
        <div className="timeline-header">
          <div className="timeline-logo">
            <img src={logo} alt="" />
          </div>
          <div className="timeline-heading">
            <h3>{org}</h3>
            {role && <p className="feature-meta">{role}</p>}
            <p className="timeline-dates">{end ? `${start} → ${end}` : start}</p>
          </div>
        </div>
      </div>
      {description && <p className="feature-desc">{description}</p>}
    </div>
  )
}

function About() {
  return (
    <main className="content">
      <section className="origin-story">
        <div className="origin-photo">
          <img src={selfie} alt="Samuel Shen" />
        </div>
        <div className="origin-text">
          <h1>How I got here</h1>
          <div className="narrative-text">
            <p>
              I first heard the term “UX” while doing completely unrelated digital marketing work
              at Blink, a local usability testing company. Something about it stuck with me, so I
              put myself through school to actually learn the discipline.
            </p>
            <p>
              That led to the MS HCDE program at the University of Washington, and from there, an
              internship at Google. I spent the next decade designing for big tech — first at
              Google, then eight years at Microsoft — building my skills and a deep appreciation
              for craftsmanship along the way.
            </p>
            <p>Now I'm looking to step outside that comfort zone and see what's next.</p>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="section-header">
          <h2>Timeline</h2>
          <a
            className="feature-link"
            href="https://www.linkedin.com/in/shensamuel/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn↗
          </a>
        </div>
        <div className="timeline">
          <TimelineEntry
            logo={logoTheGuarantors}
            org="theGuarantors"
            role="Lead Product Designer"
            start="Oct 2025"
            end="May 2026"
            description="Led product design across the full landlord portal — reworking core workflows, navigation, and laying the foundational design system for long-term scalability."
          />
          <TimelineEntry
            logo={logoMicrosoft}
            org="Microsoft"
            role="Product Designer"
            start="May 2017"
            end="Oct 2025"
            description="Designed AI-powered and search experiences across Word, Excel, PowerPoint, and Copilot — including PowerPoint's Narrative Builder and unified search across Mac, iOS, and Windows."
          />
          <TimelineEntry
            logo={logoGoogle}
            org="Google"
            role="UX Design Intern"
            start="Jun 2016"
            end="Sep 2016"
            description="Designed the post-purchase experience for Product Listing Ads on the Google Shopping team."
          />
          <TimelineEntry
            logo={logoUW}
            org="University of Washington"
            start="2015"
            end="2017"
            description="Master of Science, Human-Centered Design &amp; Engineering"
          />
          <TimelineEntry
            logo={logoUW}
            org="University of Washington"
            start="2010"
            end="2012"
            description="Bachelor of Arts, Communication"
          />
        </div>
      </section>
    </main>
  )
}

export default About
