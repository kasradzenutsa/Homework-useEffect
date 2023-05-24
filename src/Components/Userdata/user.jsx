import React, { useEffect, useState } from "react"
import "./style.css"

const Userdata  = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="costumer-container">
        {users.length > 0 && (
         <table className="costumer-data">
            <h2 className="costumer-title"> All Costumers</h2>
            <tr>
                <th> Costumer Name</th>
                <th> Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Street</th>
            </tr>
            {users.map(user => (
                      <tr key={user.id} >
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.company.name}
                        </td>
                        <td>
                            {user.phone}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            {user.address.street}
                        </td>

                      </tr>
                    ))}
         </table>
                )}
    </div>
  );
}
export default Userdata
