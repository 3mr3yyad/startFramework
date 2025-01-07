import { Link, NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav  className="navbar navbar-expand-lg fixed-top py-4">
  <div className="container">
    <Link className="navbar-brand text-white fw-bolder fs-2 text-uppercase" to="">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder text-uppercase mt-3 mt-md-0 px-2 mx-2 pill1 " aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder text-uppercase mt-3 mt-md-0 px-2 mx-2 pill2" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder text-uppercase mt-3 mt-md-0 px-2 mx-2 pill3" to="contact">Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
