import "./StudentLogin.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function StudentLogin() { 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Student Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

        <p>  Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  )
}

export default StudentLogin;