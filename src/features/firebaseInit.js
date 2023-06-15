import { initializeApp } from 'firebase/app';
import { doc, getDoc, setDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBe-eXk_6EHwSulsRV1Jvf3EAmGUJ0JxYc",
    authDomain: "somewhere-c1cd1.firebaseapp.com",
    projectId: "somewhere-c1cd1",
    storageBucket: "somewhere-c1cd1.appspot.com",
    messagingSenderId: "1005290364892",
    appId: "1:1005290364892:web:828e5e35333a9156cfb919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

const logOut = () => {
    signOut(auth);
}

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const saveTodos = async (store) => {
    try {
        const { todos, user } = store.getState()
        const jsonizedTodos = JSON.stringify(todos);
        await setDoc(doc(db, "todos", user.uid), {
            todos: jsonizedTodos
        });
      } catch (err) {
        console.log(err);
      }
}

const loadTodos = async (store) => {
    const { user } = store.getState();
    const docRef = doc(db, "todos", user.uid);
    if (!user) {
        return
    }
    try {
      const jsonizedTodos = await getDoc(docRef).data;
      if (jsonizedTodos === null) {
        return []
      }
      return JSON.parse(jsonizedTodos);
    } catch (err) {
      console.log(err);
      return []
    }
}

export {
    auth,
    db,
    googleSignIn,
    logOut,
    saveTodos,
    loadTodos
}
