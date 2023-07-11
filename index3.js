//firebase
//firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD3PmQwBxjfkUTrQzgSCJrki3ZKXf3D_xg",
    authDomain: "login-signup-7ff44.firebaseapp.com",
    projectId: "login-signup-7ff44",
    storageBucket: "login-signup-7ff44.appspot.com",
    messagingSenderId: "26129023367",
    appId: "1:26129023367:web:41237dc374e08b64005322",
    measurementId: "G-55DHTJMQ53"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
var logout = () => {

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.email
            var name = uid.substring(0, uid.lastIndexOf("@"));
            console.log(name)
            // console.log(name);
            // document.getElementById("btn111").style.display="none"
            // document.getElementById("sign2").style.display="none"
            // document.getElementById("btn111").style.display="none"
            document.getElementById("logout").style.display = "block"
            // document.getElementById("btn3").style.display="none" 
            document.getElementById("logout").style.color = "red"
            document.getElementById("logout").style.color = "red"
            // document.getElementById("blog").style.marginleft ="360px"
            // document.getElementById("blog").style.marginRight ="160px"
            // document.getElementById("blog2").style.marginLeft ="10px"

            document.getElementById("logout").style.display = "block";
            document.getElementById("login").style.display = "none";
            document.getElementById("sign").style.display = "none";
            document.getElementById("logout123").style.display = "flex";
            var logout12 = document.getElementById("weboutlog").innerHTML = `<i class="fas fa-user"></i>   logout`
            var logout12 = document.getElementById("weboutlog").style.display = "block";
            document.getElementById("logout123").innerHTML = `<i class="fa-solid fa-user"></i> <p style="visibility:hidden;">f</p>${name}`

            // <i class="fa-solid fa-user"></i> <p style = "color:rgb(92, 255, 141);;">d</p> 
            // document.getElementById("sign-up1").style.display = "none"
            // ...
        } else {
            // User is signed  
            console.log("not work")
            // ...
        }
    });

}
logout()








var logout12 = document.getElementById("weboutlog");
logout12.addEventListener("click", () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        var prop = prompt("Do you really wnat to sign out replay in box Yes or No")
        if (prop === "yes") {
            window.location.href = "./index.html"
        } else {
            console.log("You are are not sined out!");
        }
    }).catch((error) => {
        // An error happened.
        alert("you are alresdy loged in!")
    });
})









// firebase
// firebase
