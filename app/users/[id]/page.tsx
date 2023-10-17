import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const UserShow = ({params}: Props) => {

    if(params.id > 100) {
        return notFound()
    }

  return (
    <>
        <h1>User show { params.id }</h1>
    </>
  )
}

export default UserShow