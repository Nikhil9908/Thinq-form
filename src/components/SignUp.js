
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './SignUpNdLogin.css';

const Signup = () => {
    const history = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handelInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

const PostData = async (e) => {
      e.preventDefault()

      const {name, email, password} = user
      
    const res = await  fetch("/signUp", {
        method: "Post",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, email, password
        })
    })
    const data = await res.json()

    if(data.status === 400 || !data){
        window.alert("Registration Falied")
        console.log("Registration Falied")
    } else {
        window.alert("Registration Successfull")
        console.log("Registration Successfull")

        history("/signIn")
    }
}


  return (
    <form method='POST' >
    <div className='main'>
      <div className="signup-container">
        <input
          type="text"
          className="input-field"
          value={user.name}
          onChange={handelInputs}
          name="name"
          placeholder="Name"
          autoComplete='off'
        />

        <input
          type="email"
          className="input-field"
          value={user.email}
          onChange={handelInputs}
          name="email"
          placeholder="Email"
          autoComplete='off'
        />

        <input
          type="password"
          className="input-field"
          value={user.password}
          onChange={handelInputs}
          name="password"
          autoComplete='off'
          placeholder="Password"
        />

        <button className="signup-button" onClick={PostData} >Sign Up</button>
      </div>
    </div>
    </form>
  );
};

export default Signup;

// V@mishra123
