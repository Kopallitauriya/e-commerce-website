import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Singleblog = () => {
    return (
        <>
            <Meta title={'Dynamic Blog Name'} />
            <BreadCrumb title='Dynamic Blog Name' />

            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>



                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to='/blogs' className='d-flex align-items-center gap-10
                                '><BsArrowLeft className='fs-4'/>
                                Go back to blogs
                                </Link>
                                <h3 className='title' >A Beautiful Sunday Mornind Renaissance</h3>
                                <img src='images/blog-1.jpg' className='img-fluid w-100 my-4' alt="blog" />
                                <p>
                                    Holi  is a popular and significant Hindu festival celebrated as 
                                    the Festival of Colours, Lo ve and Spring. It celebrates
                                     the eternal and divine love of the god Radha and Krishna.
                                      Additionally, the day also signifies the triumph of good over evil,
                                       as it commemorates the victory of Vishnu as Narasimha
                                       Narayana over Hiranyakashipu. Holi is originated and is
                                        predominantly celebrated in the Indian subcontinent but has also
                                         spread to other regions of Asia and parts of the Western world 
                                         through the Indian diaspora

                                    
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleblog
