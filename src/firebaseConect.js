import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';


 
const firebaseConfig = {
  apiKey: "AIzaSyDrq1YhYLpuMpgeIgyWOui7d1TEP_Ld8vw",
  authDomain: "crud2-dc988.firebaseapp.com",
  projectId: "crud2-dc988",
  storageBucket: "crud2-dc988.appspot.com",
  messagingSenderId: "201817754701",
  appId: "1:201817754701:web:4da20c929075a0de466004"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
 
export { db };