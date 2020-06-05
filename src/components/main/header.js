import React from "react"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md custom-nav-change">
      <a href="#" className="navbar-brand">Brand </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        style={{ background: "#000" }}
      >
        <i className="fa fa-bars" style={{ color: "#fff" }}></i>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav width57">
          <div className="nav-item dropdown headerlink">
            <a
              href="#"
              className="nav-link dropdown-toggle headerlink"
              data-toggle="dropdown"
            >AUCTIONS</a
            >
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Inbox</a>
              <a href="#" className="dropdown-item">Sent</a>
              <a href="#" className="dropdown-item">Drafts</a>
            </div>
          </div>
          <a href="#" className="nav-item nav-link headerlink">PRIVATE SALES</a>
          <a href="#" className="nav-item nav-link headerlink">VEHICLES</a>
          <a href="#" className="nav-item nav-link headerlink">CONSIGMENT</a>
          <a href="#" className="nav-item nav-link headerlink">REGISTER TO BID</a>
        </div>
        <form className="form-inline">
          <div className="input-group">
            <input
              style={{ width: "320px" }}
              type="text"
              className="form-control"
              placeholder="Search Vehicles"
            />
            <div className="input-group-append">
              <img src="assets/search@3x.png" className="searchimg" />
            </div>
          </div>
        </form>
        <div className="navbar-nav a-i-center">
          <img
            className="flag"
            src="https://pellcenter.org/wp-content/uploads/2019/02/1200px-Flag_of_the_United_States.png"
          />
          <a href="#" className="headerlink"> LOGIN / ACCOUNTS</a>
        </div>
      </div>
    </nav>
    <div className="conatiner-fluid bttnrow">
      <button className="headercat">SALE TYPE</button>
      <button className="headercat">MAKE</button>
      <button className="headercat">MODEL</button>
      <button className="headercat">ESTIMATED RANGE</button>
      <button className="headercat">CATEGORY</button>
    </div>
  </header>
)

export default Header
