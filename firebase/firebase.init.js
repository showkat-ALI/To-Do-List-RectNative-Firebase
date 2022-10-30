import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth } from "firebase/auth";

const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
  // const auth = getAuth(app);
};

export default initializeAuthentication;
