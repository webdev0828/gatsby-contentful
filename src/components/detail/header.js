import React from "react"

const Header = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container-fluid">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Logo</a><button
                    className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu<i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger font-barlow" href="#">AUCTIONS +</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger font-barlow" href="#">PRIVATE SALES +</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger font-barlow" href="#">VEHICLES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger font-barlow" href="#">CONSIGNMENT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger font-barlow" href="#">REGISTER TO BID</a>
                        </li>
                    </ul>

                    <ul className=" navbar-nav text-white login-container">
                        <li>
                            <img src="assets/white.svg" className="mr-3" alt="" />
                        </li>
                        <li>
                            <img src="assets/flag.svg" className="nav-flag" alt="" />
                        </li>
                        <li className="font-barlow">LOGIN / ACCOUNTS</li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container">
                <div className="top-button-container">
                    <div className="outline-button font-barlow"> <img className="mr-2" src="assets/upload.svg" alt="" /> Share</div>
                    <div className="outline-button font-barlow"><img className="mr-2" src="assets/bookmark.svg" alt="" /> Follow</div>
                </div>
                <div className="back-button">
                    <img src="assets/arrow-left.svg" alt="back" />
                    <p className="font-barlow mb-0 ml-1">BACK</p>
                </div>
                <div className="button cta-button">CONNECT WITH A SPECIALIST</div>
            </div>
        </header >
    </>

)

export default Header
