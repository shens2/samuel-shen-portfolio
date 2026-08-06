import googlePlayBadge from '../assets/images/google-play-badge.png'
import dosetteIcon from '../assets/images/dosette-icon.png'
import dosetteGallery from '../assets/images/dosette-gallery.png'
import pianoScreenshot from '../assets/images/piano-screenshot.png'

function SideProjects() {
  return (
    <main className="content">
      <section className="intro">
        <h1>🌙 5-9</h1>
        <p className="intro-text">
          A few things I build in my spare time, when I'm not doing my 9-5.
        </p>
      </section>

      <section className="feature">
        <div className="row row--split">
          <div className="feature-text">
            <div className="project-heading">
              <img className="project-icon" src={dosetteIcon} alt="" />
              <h2>Dosette</h2>
            </div>
            <p className="feature-meta status--deployed">Published</p>
          </div>
          <div className="feature-desc">
            <p>
              I designed and developed Dosette, a pill reminder app that makes it easy to stay on
              top of medications. It supports notification quick actions, one-tap logging,
              adherence history, and fast medication entry, in light or dark.
            </p>
            <p>
              I beta tested it for two weeks with 21 people, which turned out to be the easy
              part. Because Dosette is a health app, Google required the account to be verified
              as an organization, so I applied for a D-U-N-S number and went through full
              business verification just to be allowed to publish.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.dosette.app"
              target="_blank"
              rel="noreferrer"
            >
              <img className="store-badge" src={googlePlayBadge} alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="card card--pad-32">
            <img
              src={dosetteGallery}
              alt="Dosette app screens showing dose reminders, notification actions, one-tap logging, adherence tracking, quick medication entry, and light/dark themes"
            />
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="row row--split">
          <div className="feature-text">
            <h2>Piano App</h2>
            <p className="feature-meta status--deployed">Deployed</p>
          </div>
          <div className="feature-desc">
            <p>
              A browser-based piano you can play with your computer keyboard, spanning multiple
              octaves with adjustable volume. It also supports recording and playing back
              whatever you've played.
            </p>
            <a
              className="feature-link"
              href="https://shens2.github.io/pianoapp/"
              target="_blank"
              rel="noreferrer"
            >
              Try it↗
            </a>
          </div>
        </div>
        <div className="row">
          <div className="card card--pad-32">
            <img
              src={pianoScreenshot}
              alt="Piano app screenshot showing the virtual keyboard with keyboard-key mappings, volume and octave controls, and recording buttons"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SideProjects
