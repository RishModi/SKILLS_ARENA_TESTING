import { ArrowUpRight, MapPin, CalendarDays, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'
import matches from '../data/matches'

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-dot"></span>
            THE FUTURE OF LIVE SPORTS
          </div>

          <h1>
            The Game Deserves
            <br />
            A <span>Better View.</span>
          </h1>

          <p className="hero-description">
            Don't just book a ticket. Experience the stadium before
            you arrive. Explore every section, discover your perfect
            seat, and see the game from your perspective.
          </p>

          <div className="hero-buttons">
            <a href="#upcoming-matches" className="primary-btn">
              Explore Matches <ArrowUpRight size={19} />
            </a>

            <a href="#upcoming-matches" className="secondary-btn">
              Discover 3D Experience
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>360°</h3>
              <p>Seat Perspective</p>
            </div>

            <div>
              <h3>3D</h3>
              <p>Stadium Experience</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Immersive Booking</p>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / EXPERIENCE THE GAME DIFFERENTLY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="matches-section" id="upcoming-matches">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">DON'T MISS THE ACTION</span>
            <h2>Upcoming Matches<span>.</span></h2>
            <p>Find your next unforgettable stadium experience.</p>
          </div>

          <Link to="/events" className="view-all-btn">
            View All Matches <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="match-grid">
          {matches.map((match) => (
            <article className="match-card" key={match.id}>
              <div className="match-top">
                <span className="match-tournament">{match.tournament}</span>
                <span className="match-status">{match.status}</span>
              </div>

              <div className="teams">
                <div className="team">
                  <div className="team-logo">{match.teams[0]}</div>
                  <span>{match.teamNames[0]}</span>
                </div>

                <span className="versus">VS</span>

                <div className="team">
                  <div className="team-logo">{match.teams[1]}</div>
                  <span>{match.teamNames[1]}</span>
                </div>
              </div>

              <div className="match-details">
                <span><CalendarDays size={15} /> {match.date} · {match.time}</span>
                <span><MapPin size={15} /> {match.venue}</span>
              </div>

              <div className="match-footer">
                <div>
                  <small>Starting from</small>
                  <h3>₹{match.price.toLocaleString('en-IN')}</h3>
                </div>

                <Link to={`/match/${match.id}`} className="book-btn">
                  <Ticket size={16} /> Book Seats
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home