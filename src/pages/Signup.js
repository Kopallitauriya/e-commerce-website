import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"

const Signup = () => {
    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title='Sign Up' />
            <div className='login-wrapper py-3 home-wrapper-2'>
               <div className='container-xxl'>
               <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Signup</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type="text"
                                        name='firstname'
                                        placeholder='First name'
                                        className="form-control" />
                                </div>

                                <div>
                                    <input type="text"
                                        name='secondname'
                                        placeholder='Second name'
                                        className="form-control" />
                                </div>

                                <div className='mt-1' >
                                    <input type="password"
                                        name='password'
                                        placeholder='Password'
                                        className="form-control" />
                                </div>


                                <div className='mt-1' >
                                    <input type="tel"
                                        name='mobile'
                                        placeholder='Mobile Number'
                                        className="form-control" />
                                </div>

                                <div >

                                    <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center m-2'>
                                        <button className='button border-0' >Signup</button>
                                        
                                    </div>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default Signup
