import React, { useEffect, useState } from 'react'



function App() {

  const [users, setUser] = useState([])
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2").then((result) => {
      result.json().then((resp) => {
        console.log('ds ', resp)
        setUser(resp.data)
      })
    })
  }, [])

  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Email</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Avatar</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img src={item.avatar} alt={'${item.first_name} Avatar'} style={{ width: '50px', height: '50px' }} />

                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
export default App;