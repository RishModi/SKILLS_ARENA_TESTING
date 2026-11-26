import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Search,
  MapPin,
  CalendarDays,
  Ticket,
  ArrowUpRight,
  SlidersHorizontal,
} from 'lucide-react'

import matches from '../data/matches'

function Events() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All Matches')

  const filters = ['All Matches', 'International', 'IPL']

  const filteredMatches = matches.filter((match) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      match.teamNames.join(' ').toLowerCase().includes(searchText) ||
      match.tournament.toLowerCase().includes(searchText) ||
      match.venue.toLowerCase().includes(searchText)

    const matchesFilter =
      activeFilter === 'All Matches' ||
      match.tournament.toLowerCase().includes(activeFilter.toLowerCase())

    return matchesSearch && matchesFilter
  })

  return (
    <main className="events-page">
      <section className="events-heading">
        <div className="events-eyebrow">
          <span className="live-dot"></span>
          YOUR NEXT EXPERIENCE STARTS HERE
        </div>

        <h1>
          Discover the <span>Action.</span>
        </h1>

        <p>
          Find upcoming matches, explore stadiums and discover
          your perfect seat.
        </p>
      </section>

      <section className="events-controls">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search teams, tournaments or venues..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filter-label">
          <SlidersHorizontal size={17} />
          FILTER EVENTS
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? 'filter-btn selected'
                  : 'filter-btn'
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="events-results">
        <div className="results-heading">
          <div>
            <span className="section-eyebrow">THE UPCOMING LINEUP</span>
            <h2>Featured Matches<span>.</span></h2>
          </div>

          <span className="results-count">
            {filteredMatches.length} EVENTS FOUND
          </span>
        </div>

        {filteredMatches.length > 0 ? (
          <div className="match-grid">
            {filteredMatches.map((match) => (
              <article className="match-card" key={match.id}>
                <div className="match-top">
                  <span className="match-tournament">
                    {match.tournament}
                  </span>

                  <span className="match-status">
                    {match.status}
                  </span>
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
                  <span>
                    <CalendarDays size={15} />
                    {match.date} · {match.time}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {match.venue}
                  </span>
                </div>

                <div className="match-footer">
                  <div>
                    <small>Starting from</small>
                    <h3>₹{match.price.toLocaleString('en-IN')}</h3>
                  </div>

                  <Link
                    to={`/match/${match.id}`}
                    className="book-btn"
                  >
                    <Ticket size={16} />
                    Book Seats
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={35} />
            <h3>No matches found</h3>
            <p>Try another search or select a different category.</p>

            <button
              className="primary-btn"
              onClick={() => {
                setSearch('')
                setActiveFilter('All Matches')
              }}
            >
              Clear Filters <ArrowUpRight size={17} />
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Events