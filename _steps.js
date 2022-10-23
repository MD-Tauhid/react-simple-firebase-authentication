/* 
1. visit: console.firebase.google.com
2. create a new fire base project.
3. go to build > authentication > web > getting start
4. Register app with the app/project name
5. Install firebase in your project: npm install firebase
6. Not recomended: create firebase.init.js file and config the file with firebase code;
7. export firebase.init.js file.
8. enable google authentication from build > authentication > google/facebook/...
9. import getAuth from 'firebase/Auth'
10. import googleAuthProvider from firebase/auth.
11. import signInWithPopup(auth, provider) which will give a promise to authenticate from google
12. .then some work after promise & .catch for error catching
13. signInWithPopup will work in a event handler
*/