import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <>
        <div className="text-center bg-sky-500 p-11">
            <h1 className="text-10">
                Requested page is not Exist !
            </h1>

            <Link href="/">Back to Home</Link>
        </div>
    </>
  )
}

export default NotFoundPage