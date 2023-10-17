import React from 'react'
import CourseProps from '../CourseInterface'

const CourseSlug = (props: CourseProps) => {
    
  return (
    <>
    <h1>courses for view all slugs</h1>
         <p>{props.params.slug}</p>
    </>
  )
}

export default CourseSlug