import React,{useState} from 'react'
import './login.css'
import { Button, Spinner } from 'react-bootstrap'
import img1 from './img1.jpg' 
export default function Login(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const [token,setToken]=useState;
  const handlechange = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "number") {
      setNumber(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const url1 = 'http://146.190.10.219:5000/api/auth/createuser';
  const requestBody = {
    name:name,
    email: email,
    password: password,
    photo:img1
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  };
  const submit = (e) => {
    props.loaderHandler(true);
fetch(url1, options)
  .then(response => response.json())
  .then(data => {
    console.log('Response data:', data);
    if(data.error){
      alert(data.error);
    }
    else{
    props.loginHandler(data.authtoken);
    alert("User created successfully");} 
  })
  .catch(error => {
    console.error('Error:', error);
  });

  };


  const url2='http://146.190.10.219:5000/api/auth/login'
  const requestBody2 = {
    email: email,
    password: password,
  };
  const options2 = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody2)
  };
  const login = (e) => {
    props.loaderHandler(true);
    fetch(url2, options2)
      .then(response => response.json())
      .then(data => {

        console.log('Response data:', data);
        if(data.error){
          alert(data.error);
        }
        else{
          props.loginHandler(data.authtoken);
          alert("User logged in successfully");
        }
        
      })
      .catch(error => {
        console.error('Error:', error);
        alert
      });
    
      };
  return (
    <>
    <div className="section">
    {props.login ? <p >Already logged in--
      {props.token}</p> :<div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3">
              <span style={props.mode==="dark"?{color:"white"}:{color:"black"}}>Log In </span>
              <span style={props.mode==="dark"?{color:"white"}:{color:"black"}}>Sign Up</span>
            </h6>
            <input
              className="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            <label htmlFor="reg-log" />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-style"
                          placeholder="Email"
                          value={email}
                          onChange={handlechange}
                          name='email'
                        />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Password"
                          value={password}
                          onChange={handlechange}
                          name='password'
                        />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <Button
                        
                        className="btn mt-4"
                        onClick={login}
                      >
                        {
                          props.loader?<Spinner size="sm"></Spinner>:<>Login</>
                        }
                      </Button>
                      <p className="mb-0 mt-4 text-center">
                        <a href="/" className="link">
                          Forgot your password?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-3 pb-3">Sign Up</h4>



                      <div className="form-group">
                        <input
                          type="text"
                          className="form-style"
                          placeholder="Full Name"
                          value={name}
                          onChange={handlechange}
                          name='name'
                        />
                        <i className="input-icon uil uil-user" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="tel"
                          className="form-style"
                          placeholder="Phone Number"
                        />
                        <i className="input-icon uil uil-phone" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          className="form-style"
                          placeholder="Email"
                          value={email}
                          onChange={handlechange}
                          name='email'
                        />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Password"
                          value={password}
                          onChange={handlechange}
                          name='password'
                        />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <Button
                        // href="https://www.web-leb.com/code"
                        className="btn mt-4"
                        onClick={submit}
                      >
                        {
                          props.loader?<Spinner size="sm"></Spinner>:<>Register</>
                        }
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
  </div>
</>

  )
}
