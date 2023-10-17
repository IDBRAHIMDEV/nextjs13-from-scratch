'use client';

import React from 'react'
import Course from './CourseType'

interface Props {
    course: Course
}
const CourseCard = ({course}: Props) => {


  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl" key={course.id}>
                    <figure><img src={course.image} alt={course.title} /></figure>
                    <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p>{course.body}</p>
                    <div className="card-actions justify-end">
                        <button onClick={ () => console.log('salam') } className="btn btn-outline btn-primary">Read More...</button>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default CourseCard