import { Ticket, Menu, ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      {/* Brand */}
      <Link to="/" className="nav-logo">
        <div className="logo-icon">
          <Ticket size={22} />
        </div>

        <span>
          ARENA<span className="logo-dot">.</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/events">
          Explore Events
        </NavLink>

        <NavLink to="/events">
          Sports
        </NavLink>

        <NavLink to="/events">
          My Tickets
        </NavLink>

      </div>

      {/* Actions */}
      <div className="nav-actions">

        <button className="signin-btn">
          Sign In
          <ChevronDown size={14} />
        </button>

        <button className="menu-btn" aria-label="Open menu">
          <Menu size={23} />
        </button>

      </div>

    </nav>
  )
}

export default Navbar