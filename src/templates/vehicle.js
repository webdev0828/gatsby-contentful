import React, { useEffect, useState } from 'react'
import Layout from '../components/detail/layout'
import Content from '../components/detail/content'

export default (prop) => {
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        setVehicle(prop.pageContext.vehicle)
    }, [])

    if (vehicle)
        document.getElementsByClassName('masthead')[0].style.backgroundImage = "url('https:" + vehicle.fields.featureImage.fields.file.url + "')";

    return (
        <Layout>
            <Content>
                <div className="container-fluid extra-padding">
                    <div className="mb-2" style={{ display: 'flex' }}>
                        <img src="assets/short.svg" alt="" />
                        <p className="mb-0 ml-2 mr-2 font-weight-bold fs24">Lot 023</p>
                        <img src="assets/short-right.svg" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <h1>{vehicle ? vehicle.fields.title : ''}</h1>
                            <p className="font-barlow">2019 | SCOTTSDALE</p>
                            <p>Just two owener in the past three decades. <br /> Coachwork by Scaglietti</p>
                            <div className="bar-line mb-3"></div>
                            <p className="font-weight-bold">SOLD $9,905,000</p>
                            <p className="mb-0">Estimate</p>
                            <p className="font-weight-bold">${vehicle ? vehicle.fields.minPrice : '0'} - ${vehicle ? vehicle.fields.maxPrice : '0'} | Without Reserve</p>
                            <p className="button">MAKE AN OFFER</p>
                            <p className="mb-0">Chassis</p>
                            <p className="font-weight-bold">1055 GT</p>
                            <p className="mb-0">Engine</p>
                            <p className="font-weight-bold">1055 GT</p>
                        </div>
                        <div className="col-md">
                            <p className="font-weight-bold mb-0">Car Highlights</p>
                            <p>{vehicle ? vehicle.fields.description.content[0].content[0].value : ''}</p>

                            <p className="font-weight-bold mb-0">Technical Specs</p>
                            <p>2,953 CC tipo 128D SOHC Alloy V-12 Engine <br />
                                Three Weber 36 DCL/3 Carburetors <br />
                                    240 BHP at 7,000 RPM <br />
                                    4-Speed Manual Gearbox <br />
                                        4-Wheel Hydraulic Finned-Aluminum Drum Brakes <br />
                                            Front Independent Suspension with Coil Springs and Houdaille Shock <br />
                                            Rear Live Axle with Semi-Elliptical Leaf Springs and Houdaille Shock</p>
                            <p className="font-weight-bold mb-0"> <img className="mr-1" src="assets/align-left.svg" alt="" /> SRA Note</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut commodi alias praesentium voluptates
                            laudantium architecto eligendi quasi autem iste totam hic quidem, eum voluptatibus, quas aperiam, numquam
						obcaecati unde sit!</p>
                        </div>
                    </div>
                </div>
            </Content>
            <Content>
                <div className="carousel-inner" style={{ display: "flex" }}>
                    {
                        vehicle ?
                            vehicle.fields.images.map((image, idx) => {
                                console.log(vehicle)
                                return (
                                    <div className="carousel-images" style={{ paddingRight: "10px" }} key={idx}>
                                        <img
                                            src={image.fields.file.url}
                                            className="d-block"
                                            alt="..." style={{ width: "1080px", height: "600px" }}
                                        />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 00{idx + 1}</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                )
                            }) : <div />
                    }
                </div>
            </Content>
            <Content>
                <div className="container-fluid" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="accordion-container mb-4">
                                <button className="accordion font-weight-bold">Provenance</button>
                                <div className="panel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion font-weight-bold">Race Highlights</button>
                                <div className="panel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion font-weight-bold">Exhibition Highlights</button>
                                <div className="panel">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis, inventore, laboriosam eaque enim
                            ea velit eius veritatis ducimus error voluptates impedit dignissimos. Exercitationem quas ab placeat
						tempore, animi facilis.</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis, inventore, laboriosam eaque enim
                            ea velit eius veritatis ducimus error voluptates impedit dignissimos. Exercitationem quas ab placeat
						tempore, animi facilis.</p>
                            <p className="text-center font-weight-bold" style={{ color: "#1c5bae" }}>READ MORE +</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h3>REGISTER TO BID</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita sed tempora veniam a vel
						blanditiis quaerat obcaecati tenetur,</p>
                            <div className="button">MAKE AN OFFER</div>
                            <hr />
                            <p>Exclusive Insuarance Sponsor</p>
                            <h3>LOGO</h3>
                        </div>
                    </div>
                </div>
            </Content>
            <Content>
                <p className="font-weight-bold font-barlow related-vehicle-text" style={{ marginTop: '-10rem', paddingLeft: '10px' }}>RELATED VEHICLES</p>
                <div className="container-fluid">
                    <div className="row area1">
                        <div className="col-sm-4">
                            <div id="carouselExample1" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators extra" style={{ top: "233px" }}>
                                    <li data-target="#carouselExample1" data-slide-to="0" className="active custom-ind"></li>
                                    <li data-target="#carouselExample1" data-slide-to="1"></li>
                                    <li data-target="#carouselExample1" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row test-row">
                                <div className="col">
                                    <button className="upcoming">UPCOMING</button><span className="lable">{<span>&nbsp;&nbsp;</span>} 2019 {<span>&nbsp;&nbsp;</span>} | {<span>&nbsp;&nbsp;</span>}</span>
                                    <span className="lable">SCOTTSDALE</span>
                                    <img className="bidimage" src="assets/online-bidding_10@3x.png" />
                                    <div>
                                        <p className="label-black">1979 Porsche 930</p>
                                        <p className="price">$3000 - $4000 | Without Reserve</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="carouselExample2" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExample2" data-slide-to="0" className="active custom-ind"></li>
                                    <li data-target="#carouselExample2" data-slide-to="1"></li>
                                    <li data-target="#carouselExample2" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/car_10@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row test-row">
                                <div className="col">
                                    <button className="upcoming">UPCOMING</button><span className="lable">{<span>&nbsp;&nbsp;</span>} 2019 {<span>&nbsp;&nbsp;</span>} |</span> {<span>&nbsp;&nbsp;</span>}
                                    <span className="lable">SCOTTSDALE</span>
                                    <img className="bidimage" src="assets/online-bidding_10@3x.png" />
                                    <div>
                                        <p className="label-black">1979 Porsche 930</p>
                                        <p className="price">$3000 - $4000 | Without Reserve</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="carouselExample3" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExample3" data-slide-to="0" className="active custom-ind"></li>
                                    <li data-target="#carouselExample3" data-slide-to="1"></li>
                                    <li data-target="#carouselExample3" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/car_11@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/car@2x.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="log">LOG 001</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row test-row">
                                <div className="col">
                                    <button className="upcoming">UPCOMING</button><span className="lable">{<span>&nbsp;&nbsp;</span>} 2019 {<span>&nbsp;&nbsp;</span>} |</span> {<span>&nbsp;&nbsp;</span>}
                                    <span className="lable">SCOTTSDALE</span>
                                    <img className="bidimage" src="assets/online-bidding_10@3x.png" />
                                    <div>
                                        <p className="label-black">1979 Porsche 930</p>
                                        <p className="price">$3000 - $4000 | Without Reserve</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

