import React from 'react'

const Vehicles = ({ vehicles }) => {
    if (!vehicles) return <div />

    return (
        vehicles.map((vehicle, ndx) => {
            if (vehicle.fields.title)
                return (
                    <div className="col-lg-4 col-sm-12" key={ndx}>
                        <div
                            id="carouselExample1"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExample1"
                                    data-slide-to="0"
                                    className="active custom-ind"
                                ></li>
                                <li data-target="#carouselExample1" data-slide-to="1"></li>
                                <li data-target="#carouselExample1" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                {
                                    vehicle.fields.images ?
                                        vehicle.fields.images.map((image, idx) => {
                                            return (
                                                <a href={vehicle.sys.id} key={idx}>
                                                    <div className={idx == 0 ? 'carousel-item active' : 'carousel-item'} key={idx}>
                                                        <img
                                                            src={image.fields.file.url}
                                                            className="d-block w-100"
                                                            alt="..."
                                                        />
                                                        <div className="carousel-caption d-none d-md-block">
                                                            <div className="log">LOG 00{idx + 1}</div>
                                                            <img className="bookmark" src="assets/bookmark@2x.png" />
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        }) : <div />
                                }
                            </div>
                        </div>
                        <div className="row test-row">
                            <div className="col">
                                <button className="upcoming">UPCOMING</button>
                                <a href={vehicle.sys.id}><span className="lable">{<span>&nbsp;&nbsp;</span>} {vehicle.fields.modelYear}{<span>&nbsp;&nbsp;</span>}|{<span>&nbsp;&nbsp;</span>}</span>
                                    <span className="lable">{vehicle.fields.title}</span></a>
                                <img className="bidimage" src="assets/online-bidding_10@3x.png" />
                                <div>
                                    <p className="label-black">1979 Porsche 930</p>
                                    <p className="price">${vehicle.fields.minPrice} - ${vehicle.fields.maxPrice} | Without Reserve</p>
                                </div>
                            </div>
                        </div >
                    </div >
                )
            return <></>
        })
    )
}

export default Vehicles;