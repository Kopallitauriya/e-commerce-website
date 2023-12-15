import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className='row'>
                        <div className="col-6 py-5.5 "><p className="text-white mb-0 px-4 align-items-center" >Free shipping over $100 and free returns</p></div>
                        <div className="col-6">
                            <p className='text-white px-5'>
                                Hotline :<a className='text-white' href="tel:+1800937484">+1800937484</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white mb-2' to="/" >Shopzi</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div class="input-group ">
                                <input type="text"
                                    class="form-control py-2"
                                    placeholder="Search product here"
                                    aria-label="Search product here"
                                    aria-describedby="basic-addon2" />
                                <span class="input-group-text"
                                    id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>

                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center 
                        justify-content-between'>
                                <div id='headeritems1'>
                                    <Link to="/compare-product" className="d-flex align-items-center gap-10 text-color text-white">
                                        <img src="images/compare.svg" alt="compare" />
                                        <p className="mb-0 fs-8 " >Compare<br />Products</p>
                                    </Link>
                                </div>

                                <div id='headeritems2'>
                                    <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/wishlist.svg" alt="wishlist" />
                                        <p className='mb-0 fs-8'>
                                            Favourite <br />wishlist
                                        </p>
                                    </Link>
                                </div>

                                <div id='headeritem3'>
                                    <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/user.svg" alt="user" />
                                        <p className='mb-0 fs-9'>
                                            Log in <br /> Account
                                        </p>
                                    </Link>
                                </div>

                                <div id='headeritems4'>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/cart.svg" alt="cart" />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0 fs-8'>$500</p>
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='images/menu.svg' alt=" " />
                                            <span className='d-inline-block' >Shop Categories</span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to="/" >Home</NavLink>
                                        <NavLink to="/product" >Our Store</NavLink>
                                        <NavLink to="/blogs" >Blog</NavLink>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;
