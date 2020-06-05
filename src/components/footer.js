import React from "react"

const Footer = () => {
    return (
        <footer className="py-5 text-white" style={{ backgroundColor: "#696969 !important" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="goog">GOODING & COMPANY</p>
                        <p>Auction and Brokerage</p>
                        <p>321-123-123</p>
                        <span
                        ><img
                                className="social"
                                style={{ marginLeft: "-5px" }}
                                src="assets/facebook@2x.png" alt=""
                            />
                            <img className="social" src="assets/twitter@3x.png" alt="" />
                            <img className="social" src="assets/instagram@2x.png" alt="" />
                            <img className="social" src="assets/linkedin@2x.png" alt="" />
                        </span>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-white" href="#">AUCTIONS </a></li>
                            <ul style={{ listStyle: "none" }} className="sub-cat">
                                <li><a className="text-white" href="#">PEBBLE BEACH</a></li>
                                <li><a className="text-white" href="#">AMELIA ISLAND</a></li>
                                <li><a className="text-white" href="#">SCOTTSDALE</a></li>
                                <li><a className="text-white" href="#">PAST AUCTION RESULTS</a></li>
                            </ul>

                            <li><a className="text-white" href="#">PERSONAL SALES</a></li>
                            <li><a className="text-white" href="#">VEHICLES</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-white" href="#">CONSIGNMENT</a></li>
                            <li><a className="text-white" href="#">REGISTER TO BID</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-white" href="#">ABOUT US</a></li>
                            <ul style={{ listStyle: "none" }} className="sub-cat">
                                <li><a className="text-white" href="#">MEDIA</a></li>
                                <li><a className="text-white" href="#">CAREERS</a></li>
                            </ul>
                            <li><a className="text-white" href="#">CONTACT US</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-white" href="#">COLLECTIONS & ESTATES</a></li>
                            <li><a className="text-white" href="#">ORDER A CATALOG</a></li>
                            <li><a className="text-white" href="#">FAQ’S</a></li>
                            <li><a className="text-white" href="#">Terms & Conditions</a></li>
                            <li><a className="text-white" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <p className="goog">SIGN UP FOR UPDATES</p>
                        <input
                            type="email"
                            className="form-control footer-form"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email address"
                        />
                        <button type="button" className="btn btn-outline-light mt-3 signup">
                            Sign Up
            </button>
                    </div>


                </div>
                <p className="copyright">
                    ©2019 by Gooding & Company Inc. All Rights Reserved. MMXIX
          </p>
            </div>
        </footer>
    )
}

export default Footer
