import './SignUpNdLogin.css'
const Login = ()=> {
    return(
        <div className='main'>
        <div className="login-container">
        <input type="email" className="input-field" placeholder="Email" />
        <input type="password" className="input-field" placeholder="Password" />
        <button className="login-button">Login</button>
      </div>
      </div>
    )
}

export default Login