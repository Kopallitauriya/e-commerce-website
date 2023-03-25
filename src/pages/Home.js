import React from 'react'
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'
const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row py-3'>
            <div className='col-6'>
              <div className='main-banner position-relative p '>
                <img src='images/main-banner-1.jpg'
                  className='img-fluid rounded-3' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link to="/" className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between gap-10 align-items-center'>
                <div className='small-banner position-relative '>
                  <img src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>best sale</h4>
                    <h5>Laptop Max</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>

                  </div>
                </div>

                <div className='small-banner position-relative '>
                  <img src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL </h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>

                  </div>
                </div>

                <div className='small-banner position-relative '>
                  <img src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00  <br /> or $41.62/mo.</p>

                  </div>
                </div>

                <div className='small-banner position-relative '>
                  <img src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00  <br /> or $41.62/mo.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      <section className='home-wrapper-2 py-4'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-12'>
              <div className='services d-flex align-item-center justify-content-between'>
                <div className='d-flex align-items-center gap-15 ' >
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-1'>From all orders over $5</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 ' >
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25%o Off</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 ' >
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 ' >
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>


                <div className='d-flex align-items-center gap-15 ' >
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0 fs-7'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>

                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Cameras</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Smart TV</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/tv.jpg' alt='tv' />
                </div>


                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Speaker</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/speaker.jpg' alt='speaker' />
                </div>

                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Music & Gaming</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>




                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Cameras</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Smart TV</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/tv.jpg' alt='tv' />
                </div>

                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Speaker</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/speaker.jpg' alt='speaker' />
                </div>

                <div className='d-flex gap-20 align-item-center'>
                  <div>
                    <h6 className='pt-4'>Music & Gaming</h6>
                    <p>10 Items</p>

                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>

              </div>
            </div>
          </div>
        </div>


      </section>

      <section className='feature-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Feature Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />


          </div>
        </div>
      </section>


      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row gap-50'>
            <div className='col-3'>
              <div className='famous-card   position-relative'>
                <img id="famous1" src='images/famous11.jpeg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62 for 24 mo.</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div  className='famous-card  bg-white position-relative'>
                <img  src='images/famous4.jpeg' className='img-fluid famous_2' alt='famous' /> 
                <div className='famous-content position-absolute famous2' >
                  <h5>Home Speakers</h5>
                  <h6>Room-Filling sound.</h6>
                  <p>From $699 or $116.58 for 12 mo.</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card   position-relative'>
                
                <img id="famous1" src='images/famous33.webp' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute '>
                  <h5>SMartPhones</h5>
                  <h6>Smartphones 13 Pro.</h6>
                  <p>From $999.00 or $41.62 for 24 mo.</p>
                </div>
              </div>
            </div>
 

          </div>
        </div>
      </section>


      <section className='special-wrapper py-5 home-wrapper-2 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Product</h3>
            </div>

          </div>


          <div className='row'>
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>

        </div>
      </section>

{/* 
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
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section> */}

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>

          </div>
        </div>
      </section>




      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard columnClass="col-3"/>
            <BlogCard columnClass="col-3"/>
            <BlogCard columnClass="col-3"/>
            <BlogCard columnClass="col-3"
            />
          </div>
        </div>
      </section>




    </>
  )
}

export default Home
