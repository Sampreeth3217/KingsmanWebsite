import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {  
    const firebaseConfig = {
        apiKey: "AIzaSyBWgaaWBp5EySLfeTP8SUJ9iEVB-9mewMI",
        authDomain: "helloworld-a3b23.firebaseapp.com",
        databaseURL: "https://helloworld-a3b23-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "helloworld-a3b23",
        storageBucket: "helloworld-a3b23.appspot.com",
        messagingSenderId: "543478462583",
        appId: "1:543478462583:web:d4b02f4cb2c41af46fee72"
    };

    const app = initializeApp(firebaseConfig);
        return getDatabase(app);
    }

export default StartFirebase;
