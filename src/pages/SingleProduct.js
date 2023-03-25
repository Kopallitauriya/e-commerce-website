import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import Color from '../components/Color'
import ReactStars from "react-rating-stars-component";
// import ReactImageZoom from "react-image-zoom"

const SingleProduct = () => {
    // const props = {width:400, height:500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMQELprhT9CzhhDpYp-kJmlESMwKOzgecjE_nIRPJJBU87Ta4N2yTxOMEARgKaiYyGE15_uG2TxU&usqp=CAU&ec=48665698'};
    const [orderedProduct, setorderedProduct] = useState(true);

    return (
        <>
            <Meta title={'Product Name'} />
            <BreadCrumb title='Product Name' />
            <div className='main-product-wrapper py-5 home-wrapper-2 '>
                <div className='container-xxl '>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image' >
                                <div>
                                    {/* <ReactImageZoom {...props} /> */}
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMQELprhT9CzhhDpYp-kJmlESMwKOzgecjE_nIRPJJBU87Ta4N2yTxOMEARgKaiYyGE15_uG2TxU&usqp=CAU&ec=48665698' alt='' />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_vLjSAec5CEmqwv28ZcJoMHrrG5pyGYDpdr4QrrWqdf8sXKmDf8KO0saUkiQunf64SKcIftteSQ&usqp=CAU&ec=48665698'
                                        alt='' className='imag-fluid' />
                                </div>
                                <div>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2UIFfKkIeby9O28wDNN1obmDZ0Q6xPCdV6OGiKKlrw&usqp=CAU&ec=48665698'
                                        alt='' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0RppLof1V828Y78mvrKNboqutdJAjfAGc-BkEp-ZUSnOIGC77Xi2JIxazdY8nDawFk6uEqRUAx4&usqp=CAU&ec=48665698'
                                        alt='' className='imag-fluid' />
                                </div>
                                <div>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMQELprhT9CzhhDpYp-kJmlESMwKOzgecjE_nIRPJJBU87Ta4N2yTxOMEARgKaiYyGE15_uG2TxU&usqp=CAU&ec=48665698'
                                        alt='' className='imag-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>
                                        Watch for men Bulk 10 Pack Multi Colored For Students
                                    </h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$100</p>
                                    <div className='d-flex align-ites-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mt-2 t-review className="product-heading"'>(20 reviews)</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>

                                </div>

                                <div className='border-bottom py-3'>
                                    <div className='d-flex gap-10 align-items-center  my-2 '>
                                        <h3 className="product-heading">Type:</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center  my-2 '>
                                        <h3 className="product-heading">Brand:</h3>
                                        <p className='product-data'>Havels</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2  '>
                                        <h3 className="product-heading">Category:</h3>
                                        <p className='product-data'>watch , smart watch , mini speakers, smart phones, Computers & Laptops </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center  my-2 '>
                                        <h3 className="product-heading">Tags:</h3>
                                        <p className='product-data '>headphones , laptop , mobile , speaker</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center  my-2 '>
                                        <h3 className="product-heading">Availablity:</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>

                                    <div className='d-flex gap-10 flex-column mt-2 mb-3 '>
                                        <h3 className="product-heading">Size</h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>

                                        </div>
                                    </div>

                                    <div className='d-flexflex-column gap-10 align-items-center  mt-2 mb-3 '>
                                        <h3 className="product-heading">Color</h3>
                                        <Color />
                                    </div>

                                    <div className='d-flex flex-row align-items-center gap-15   mt-2 mb-3 '>
                                        <h3 className="product-heading">Quantity</h3>
                                        <div className=''>
                                            <input className=" form-control" type="number" name='' min={1} max={10} style={{ width: "70px" }} id="" />
                                        </div>

                                        <div className='d-flex align-items-center gap-15 ms-5'>
                                            <button
                                                className='button border-0'
                                                type="submit">Add to Cart
                                            </button>
                                            <button
                                                to='/signup'
                                                className='button signup'>
                                                Buy Now</button>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-center gap-15'>
                                        <div></div>
                                        <div></div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p className=''>
                                    Holi  is a popular and significant Hindu festival celebrated as
                                    the Festival of Colours, Lo ve and Spring. It celebrates
                                    the eternal and divine love of the god Radha and Krishna.
                                    Additionally, the day also signifies the triumph of good over evil,

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='reviews-wraper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 id="review">Reviews</h3>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>

                                    <div  >
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 20 reviews</p>
                                        </div>

                                    </div>


                                    {orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline'
                                                href=''>Write a review</a>
                                        </div>
                                    )}
                                </div>


                                <div className='review-form py-4'>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Name' />
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                className='form-control'
                                                placeholder='Email' />
                                        </div>
                                        <div>
                                            <p className='m-0'>Review</p>
                                            <ReactStars
                                                count={5}
                                                value={0}
                                                size={24}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Review' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>

                                    </form>
                                </div>

                                <div className='reviews mt-3 '>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                    <p className='mt-3'>
                                        Holi  is a popular and significant Hindu festival celebrated as
                                        the Festival of Colours, Lo ve and Spring. It celebrates
                                        the eternal and divine love of the god Radha and Krishna.

                                    </p>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>



                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct
