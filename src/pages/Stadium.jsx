import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Ticket,
  Sparkles,
} from 'lucide-react'

import matches from '../data/matches'
import StadiumScene from '../components/stadium/StadiumScene'

function Stadium() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const match = matches.find((item) => item.id === Number(id))
  const category = location.state?.category

  if (!match || !category) {
    return (
      <main className="stadium-page">
        <h1>Stadium experience unavailable</h1>
        <p>Please select a ticket category first.</p>

        <button onClick={() => navigate(`/match/${id}`)}>
          Back to Match
        </button>
      </main>
    )
  }

  return (
    <main className="stadium-page">

      <header className="stadium-header">

        <button
          className="stadium-back-btn"
          onClick={() => navigate(`/match/${id}`)}
        >
          <ArrowLeft size={18} />
          Back to Match
        </button>

        <div className="stadium-title">
          <span className="section-eyebrow">
            ARENA 3D EXPERIENCE
          </span>

          <h1>Explore Your Stadium.</h1>

          <p>
            {match.teamNames[0]} vs {match.teamNames[1]}
          </p>
        </div>

        <div className="stadium-category-badge">
          <Ticket size={17} />
          {category.name}
        </div>

      </header>

      {/* 3D STADIUM VIEWER */}

      <section className="stadium-viewer">

        <div className="stadium-canvas">
          <StadiumScene />
        </div>

        <div className="stadium-viewer-label">
          <Sparkles size={16} />
          INTERACTIVE 3D VIEW
        </div>

      </section>

      {/* SELECTED CATEGORY */}

      <section className="stadium-selection-info">

        <div>
          <span className="section-eyebrow">
            SELECTED CATEGORY
          </span>

          <h2>{category.name}</h2>

          <p>
            Explore the stadium and discover your preferred view.
          </p>
        </div>

        <div className="stadium-price">
          <span>Starting from</span>

          <h2>
            ₹{category.price.toLocaleString('en-IN')}
          </h2>
        </div>

      </section>

    </main>
  )
}

export default Stadium