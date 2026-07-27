import { useRef, useState } from 'react'
import landlordPortalVideo from '../assets/videos/landlord-portal.mp4'
import narrativeBuilderVideo from '../assets/videos/narrative-builder.mp4'
import templatePicker from '../assets/images/template-picker.gif'
import addTopic from '../assets/images/add-topic.png'
import landlordPortalPoster from '../assets/images/landlord-portal-poster.jpg'
import narrativeBuilderPoster from '../assets/images/narrative-builder-poster.jpg'
import searchOverview from '../assets/images/search-overview.png'
import searchDropdown1 from '../assets/images/search-dropdown-1.png'
import searchDropdown2 from '../assets/images/search-dropdown-2.png'
import iosSearch1 from '../assets/images/ios-search-1.png'
import iosSearch2 from '../assets/images/ios-search-2.png'
import iosSearch3 from '../assets/images/ios-search-3.png'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function ClickToPlayVideo({
  src,
  poster,
  alt,
  aspectRatio,
}: {
  src: string
  poster: string
  alt: string
  aspectRatio: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  return (
    <div className="click-to-play">
      <div className="video-frame" style={{ aspectRatio }}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          controls={started}
          playsInline
          aria-label={alt}
        />
      </div>
      {!started && (
        <button
          type="button"
          className="play-button"
          aria-label={`Play ${alt}`}
          onClick={() => {
            setStarted(true)
            videoRef.current?.play()
          }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  )
}

function Home() {
  return (
    <main className="content">
      <section className="intro">
        <h1>👋 I’m Samuel Shen</h1>
        <p className="intro-text">
          A product designer with 8 years at Microsoft and time at theGuarantors shaping fintech
          products. I’m passionate about creating intuitive, meaningful experiences, simplifying
          complex problems, and embracing AI as part of the design process — currently open to
          new opportunities.
        </p>
      </section>

      <section className="feature">
        <div className="row row--split">
          <div className="feature-text">
            <h2>Landlord Portal</h2>
            <p className="feature-meta">theGuarantors&nbsp;&nbsp;·&nbsp;&nbsp;2026</p>
          </div>
          <p className="feature-desc">
            Leading product design across the full landlord portal — driving design strategy and
            decisions to hit company OKRs, reworking core workflows, navigation, and laying the
            foundational design system for long-term scalability
          </p>
        </div>
        <div className="row">
          <div className="card card--pad-0">
            <div className="video-frame" style={{ aspectRatio: '1972 / 1392' }}>
              <video
                src={landlordPortalVideo}
                poster={landlordPortalPoster}
                style={{ objectPosition: 'top' }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="row row--split">
          <div className="feature-text">
            <h2>Narrative Builder</h2>
            <p className="feature-meta">Microsoft&nbsp;&nbsp;·&nbsp;&nbsp;2024 - 2025</p>
          </div>
          <div className="feature-aside">
            <p className="feature-desc">
              PowerPoint's flagship genAI feature turning a simple prompt into a full
              presentation. I designed the 0 → 1 experience and launched the MVP as part of the
              Copilot Wave 2 announcement
            </p>
            <a
              className="feature-link"
              href="https://www.youtube.com/watch?t=960&v=3YiB2OvK6sY&feature=youtu.be"
              target="_blank"
              rel="noreferrer"
            >
              Ignite 2024↗
            </a>
            <Stat value="+400%" label="WAU 6 months after the MVP launch" />
          </div>
        </div>
        <div className="row">
          <div className="card card--pad-0">
            <ClickToPlayVideo
              src={narrativeBuilderVideo}
              poster={narrativeBuilderPoster}
              alt="Narrative Builder MVP announcement"
              aspectRatio="2554 / 1438"
            />
          </div>
        </div>
        <div className="row row--gap">
          <div className="card card--pad-32">
            <img className="shadowed" src={templatePicker} alt="Narrative Builder template picker" />
          </div>
          <div className="card card--pad-32">
            <img src={addTopic} alt="Adding a topic to Narrative Builder" />
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="row row--split">
          <div className="feature-text">
            <h2>Universal Search for MacOS</h2>
            <p className="feature-meta">Microsoft&nbsp;&nbsp;·&nbsp;&nbsp;2023</p>
          </div>
          <div className="feature-aside feature-aside--center">
            <p className="feature-desc">
              Designed and launched the unified search experience across Word, Excel, and
              PowerPoint for Mac — driving up to 2850% increase in command search engagement and
              21% growth in document search usage
            </p>
            <div className="stat-group">
              <Stat value="+2850%" label="Command search engagement" />
              <Stat value="+21%" label="In-doc search usage" />
            </div>
          </div>
        </div>
        <div className="stack">
          <div className="card card--pad-32">
            <img src={searchOverview} alt="Universal search overview across Office apps" />
          </div>
          <div className="row row--gap row--fixed-height">
            <div className="card card--pad-32 card--center">
              <img src={searchDropdown1} alt="Universal search dropdown result" />
            </div>
            <div className="card card--pad-32 card--center">
              <img src={searchDropdown2} alt="Universal search dropdown detail" />
            </div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="row row--split">
          <div className="feature-text">
            <h2>Redefining search UX on Office iOS</h2>
            <p className="feature-meta">Microsoft&nbsp;&nbsp;·&nbsp;&nbsp;2023</p>
          </div>
          <p className="feature-desc">
            Redesigned and unified the search experience across Word, Excel, and PowerPoint on
            iOS — consolidating fragmented entry points into one discoverable system, and
            re-imagining In-document search, Define, and Smart Lookup with modern interactions
            and a lightweight mobile-first approach
          </p>
        </div>
        <div className="row">
          <div className="card card--pad-32 card--phones">
            <img src={iosSearch1} alt="Office iOS in-document search" />
            <img src={iosSearch2} alt="Office iOS search building experience" />
            <img src={iosSearch3} alt="Office iOS smart lookup" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
