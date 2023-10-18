import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
    active?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UsersPage = async () => {

    const res = await fetch('http://localhost:3000/api/users', {next: {revalidate: 60}})

    const users: User[] = await res.json()

    console.log(users)

  return (
    <>
        <h1 className='text-lg'>List of users</h1>

        <div className="overflow-x-auto my-5">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                { users.map(user => (
                     <tr key={user.id}>
                        <th>{ user.id }</th>
                        <td>{ user.name }</td>
                        <td>{ user.email }</td>
                        <td></td>
                    </tr>
                )) }
               
              
                </tbody>
            </table>
</div>

    </>
  )
}

export default UsersPage