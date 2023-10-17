import React from 'react'

interface Props {
    params: {id: number, name: string}
}

const TestPage = (props: Props) => {
  return (
    <div>test page id: { props.params.id }, name: { props.params.name } </div>
  )
}

export default TestPage