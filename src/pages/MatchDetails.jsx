import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react'

import matches from '../data/matches'

function MatchDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const match = matches.find((item) => item.id === Number(id))

  const [selectedCategory, setSelectedCategory] = useState(null)

  if (!match) {
    return (
      <div className="match-not-found">
        <h1>Match not found</h1>
        <Link to="/events">Back to Events</Link>
      </div>
    )
  }

  const ticketCategories = [
    {
      name: 'General Stand',
      description: 'Enjoy the match atmosphere.',
      price: match.price,
      tag: 'STANDARD',
    },
    {
      name: 'Premium Stand',
      description: 'A better view of the action.',
      price: match.price * 2,
      tag: 'POPULAR',
    },
    {
      name: 'VIP Pavilion',
      description: 'Premium seating experience.',
      price: match.price * 4,
      tag: 'EXCLUSIVE',
    },
  ]

  const handleContinue = () => {
    if (!selectedCategory) return

    navigate(`/match/${match.id}/stadium`, {
      state: {
        match,
        category: selectedCategory,
      },
    })
  }

  return (
    <main className="match-details-page">

      <Link to="/events" className="back-link">
        <ArrowLeft size={18} />
        Back to Events
      </Link>

      <section className="match-hero-card">

        <div className="match-hero-top">
          <span className="match-tournament">
            {match.tournament}
          </span>

          <span className="match-status">
            <span className="live-dot"></span>
            {match.status}
          </span>
        </div>

        <div className="match-teams">

          <div className="match-team">
            <div className="match-team-logo">
              {match.teams[0]}
            </div>
            <h2>{match.teamNames[0]}</h2>
          </div>

          <div className="match-vs">
            <span>VS</span>
            <div className="vs-line"></div>
          </div>

          <div className="match-team">
            <div className="match-team-logo">
              {match.teams[1]}
            </div>
            <h2>{match.teamNames[1]}</h2>
          </div>

        </div>

        <div className="match-information">

          <div>
            <CalendarDays size={19} />
            <span>{match.date}</span>
          </div>

          <div>
            <Clock3 size={19} />
            <span>{match.time}</span>
          </div>

          <div>
            <MapPin size={19} />
            <span>{match.venue}</span>
          </div>

        </div>

      </section>

      <section className="ticket-selection-section">

        <div className="ticket-section-heading">
          <div>
            <span className="section-eyebrow">YOUR EXPERIENCE</span>
            <h1>Choose Your Seat.</h1>
            <p>Select a seating category to explore the stadium.</p>
          </div>

          <div className="ticket-heading-icon">
            <Ticket size={28} />
          </div>
        </div>

        <div className="ticket-category-grid">

          {ticketCategories.map((category) => {

            const isSelected =
              selectedCategory?.name === category.name

            return (
              <div
                className={`ticket-category-card ${
                  isSelected ? 'selected-category' : ''
                }`}
                key={category.name}
                onClick={() => setSelectedCategory(category)}
              >

                <span className="category-tag">
                  {category.tag}
                </span>

                {isSelected && (
                  <span className="category-check">
                    <Check size={16} />
                  </span>
                )}

                <h2>{category.name}</h2>

                <p>{category.description}</p>

                <div className="category-price">
                  <span>Starting from</span>
                  <h3>
                    ₹{category.price.toLocaleString('en-IN')}
                  </h3>
                </div>

                <button
                  className="category-select-btn"
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedCategory(category)
                  }}
                >
                  {isSelected ? 'Selected' : 'Select Category'}
                  <ArrowRight size={17} />
                </button>

              </div>
            )
          })}

        </div>

        {selectedCategory && (
          <div className="stadium-continue-panel">

            <div>
              <span className="section-eyebrow">
                YOUR SELECTION
              </span>

              <h3>{selectedCategory.name}</h3>

              <p>
                Starting from ₹
                {selectedCategory.price.toLocaleString('en-IN')}
              </p>
            </div>

            <button
              className="stadium-continue-btn"
              onClick={handleContinue}
            >
              Explore 3D Stadium
              <ArrowRight size={18} />
            </button>

          </div>
        )}

      </section>

      <div className="match-trust-banner">

        <div className="trust-icon">
          <ShieldCheck size={23} />
        </div>

        <div>
          <h3>Your Match. Your Experience.</h3>
          <p>
            Explore your stadium view before choosing your seat.
          </p>
        </div>

        <Sparkles className="trust-sparkle" size={24} />

      </div>

      <p className="demo-disclaimer">
        ARENA is currently a demonstration project. Match fixtures and ticket
        prices are sample data and are not real bookings.
      </p>

    </main>
  )
}

export default MatchDetails