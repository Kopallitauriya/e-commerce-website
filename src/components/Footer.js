import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin,BsInstagram,BsYoutube,BsGithub} from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center' id='footer1'>
            <div classsName='col-5 '>
              <div className='footer-top-data d-flex gap-30 align-items-center '>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white '>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div class="input-group ">
                <input type="text"
                  class="form-control py-1"
                  placeholder="Your E-mail Address"
                  aria-label="Your E-mail Address"
                  aria-describedby="basic-addon2" />
                <span class="input-group-text p-2"
                  id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4 fs-8'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno: 277 Near Vill chopal,<br />
                  Sonipat ,Haryana<br />
                  pincode:131103
                </address>
                <a href='tel=+91 5698478965' className='mt-4 d-block mb-1  text-white'>
                  91 5698478965
                  </a>

                  <a href='mailto:kopallitauriya55@gamil.com' className='mt-4 d-block mb-3 text-white '>
                 kopallitauriya55@gmail.com
                  </a>
                  <div className='social_icons d-flex align-items-center gap-30 '>
                    <a  className=' text-white' href='#'>
                      <BsLinkedin  className='text-white fs-4'/>
                    </a>
                    <a  className=' text-white' href='#'>
                      <BsYoutube  className='text-white fs-4'/>
                    </a>
                    <a className=' text-white'  href='#'>
                      <BsGithub className='text-white fs-4' />
                    </a>
                    <a  className=' text-white' href='#'>
                      <BsInstagram className='text-white fs-4' />
                    </a>
                  </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4  fs-8'>Information</h4>
              <div className='footer-links d-flex flex-column' >
                <Link to="/" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="/" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="/" className='text-white py-2 mb-1'>Shipping POlicy</Link>
                <Link to="/" className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to="/" className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4 fs-8'>Accounts</h4>
              <div className='footer-links d-flex flex-column' >
                <Link to="/" className='text-white py-2 mb-1'>About Us</Link>
                <Link to="/" className='text-white py-2 mb-1'>FAQ</Link>
                <Link to="/" className='text-white py-2 mb-1'>Contact</Link>

              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4 fs-8'>Quick Links </h4>
              <div className='footer-links d-flex flex-column' >
                <Link to="/" className='text-white py-2 mb-1'>Laptops</Link>
                <Link to="/" className='text-white py-2 mb-1'>Headphones</Link>
                <Link to="/" className='text-white py-2 mb-1'>Tablets</Link>
                <Link to="/" className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <footer className='py-4'>
        <div className='contaier.xxl'>
          <div className='row'>
            <div classsName='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy;{new Date().getFullYear()}:Powered by Developer's corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )

}

export default Footer;
