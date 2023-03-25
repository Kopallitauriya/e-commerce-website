import React from 'react'
import {Link} from "react-router-dom"
const BlogCard = (props) => {
  return (
    <div className={props.columnClass}>
      <div className='blog-card bg-light m-1'>
        <div  className='card-image'>
            <img src='images/blog-1.jpg' className='img-fluid' alt="blog" />
        </div> 
        <div className='blog-content' id='blogcard'>
            <p className='date'>1 Dec, 2022</p>
            <h5 className='title'>
            A Beautiful Sunday Morning Renaissance
            </h5>
            <p className='desc'>
                rbf nen v vjenkevnj  j ng nj n noj nlkgfmvojn orgkro mokbkjb
                efvnejkfvn  kjnve nkjbvne  jndf ensvj  n d d n ndjn fn jkn ndj n.
            </p>
            <Link to='/blogs/:id' className='button'>Read More</Link>
        </div>
      </div>
    </div>

    

    




  )
}

export default BlogCard
