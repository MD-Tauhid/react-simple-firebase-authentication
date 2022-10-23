import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error("error: ", error);
      })
  };

  const handleGitSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setUser(user);
    })
    .catch(error => {
      console.error('error: ', error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <div>
          <button onClick={handleGoogleSignIn}>Sign in with google</button>
          <button onClick={handleGitSignIn}>Sign in with github</button>
        </div>
      }
      {user.uid && <div>
        <h2>User Name: {user.displayName}</h2>
        <p>User email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
