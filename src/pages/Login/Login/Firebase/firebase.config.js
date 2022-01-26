const firebaseConfig = {
    // apiKey: "AIzaSyBsga2sBYnlXVKphng8I1WXqykQbFQQwgc",
    // authDomain: "intern-1-travel-agency-client.firebaseapp.com",
    // projectId: "intern-1-travel-agency-client",
    // storageBucket: "intern-1-travel-agency-client.appspot.com",
    // messagingSenderId: "600597736681",
    // appId: "1:600597736681:web:50fb2c0bc25b15bede1478"

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,


  };


  export default firebaseConfig