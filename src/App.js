import React, { useEffect, useState } from 'react';
import Delete from './app/component/Delete';

function App() {

  const [detail, setDetail] = useState([])
  const [next, setNext] = useState(1)
  const [back, setBack] = useState(-1)

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=" + next).then((show) => {
      show.json().then((resp) => {
        setDetail(resp.data);
      })
    })
  }, [next, back])

  const nextButton = () => {
    setNext(next + 1);
  }

  const backButton = () => {
    setNext(next - 1);

  }


  return (
    <>
      <div className='app'>
        <table border={1} style={{ borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Email</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Avatar</td>
              <td>action</td>
            </tr>
            {
              detail.map((item, i) =>
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <img src={item.avatar} alt={'item.avatar'} style={{ width: "50px", height: "50px" }} />
                  </td>
                  <td><Delete id={i} /></td>
                </tr>
              )
            }
          </tbody>
        </table><br /> <br />

        <button onClick={backButton}>backbutton</button>
        <button onClick={nextButton}>nextbutton</button>

      </div>
      {/* <Post></Post> */}


    </>
  );
}

export default App;
