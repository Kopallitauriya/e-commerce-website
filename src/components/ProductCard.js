import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom"
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <div className={`${location.pathname == "/store" ? `gr-${grid}` : 'col-3'}`}>
            <Link to='/product/:id ' className='product-card positon-relative '>
                <div className='p-2'>
                    <div className='wishlist-icon position-right'>
                        <Link to='' >
                            <img src='images/wish.svg' alt='wishlist' />
                        </Link>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link to=''>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </Link>

                            <Link to=''>
                                <img src='images/view.svg' alt='view' />
                            </Link>

                            <Link to=''>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </Link>


                        </div>
                    </div>



                    <div className='product-image '>
                        <img src='images/watch.jpg' className='img-fluid '  alt='product image' />
                        <img src='images/images.jpeg' className='img-fluid' alt='product image' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='prodect-title'>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            value={4}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
                            ;lrkykt34j ktj  2oikr   lqex    qllwrgmlermfkwrgjfmerlkfkwfkrmctkrf
                            rgkneqrkjckjeqrmflkmlkcf,rqlf,;lqw,fcklmeqrkjgkqcermflk,lf;ghutbguyhtbgjcji3iuhf
                            bhebhrh
                        </p>
                        <p className='price' >$100.00</p>
                    </div>




                </div>
            </Link>
        </div >
    )
}

export default ProductCard
