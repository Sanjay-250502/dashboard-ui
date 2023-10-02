import React from 'react'

function Searchbar() {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center pb-2 mb-4 container mt-2 pe-4">

                <div className="container search-box">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="input-group mb-3">
                                <span className="input-group-text search-icon" id="basic-addon1">
                                    <img src="./search-normal.svg" alt="search logo" /></span>   
                                <input type="text" className="form-control search-bar" placeholder="Search"
                                    aria-label="Username"/>
                            </div>
                        </div>
                    </div>
                </div>


                <button type="button" className="btn border-black position-relative">
                    <img src="./notification-bing.svg" alt="notification-logo" />
                    <span className="position-absolute top-0 start-100 translate-middle badge ">
                        <img src="./yellowcircle.svg" alt="ellipse logo" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Searchbar