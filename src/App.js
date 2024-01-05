import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      setUser(await auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };
 

  console.log(user);
  return (
    <section>
      <div>
        <div className="buttonContainer" onClick={googleLogin}>
          <img
            src=""
            alt=""
          />
          <button>Google Login</button>
        </div>
        <div className="buttonContainer" >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""
          />
          <button>Facebook Login</button>
        </div>
        <div className="buttonContainer">
          <img
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            alt=""
          />
          <button>Github Login</button>
        </div>
      </div>
      <h1>{user?.email}</h1>
    </section>
    
  );
};

export default App;