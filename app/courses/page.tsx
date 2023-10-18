import React from 'react'
// import Course from './CourseInterface'
import Course from './CourseType'
import CourseCard from './CourseCard'

const CoursesPage = async () => {

    const res = await fetch('http://localhost:3001/courses')
    const courses: Course[] = await res.json()

  return (
    <>
        <h1>List of courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center">
            { courses.map(course => (
                <CourseCard key={course.id} course={course} />
            )) }
        </div>
    </>
  )
}

export default CoursesPage