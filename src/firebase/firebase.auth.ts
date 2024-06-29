import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

// create user
const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// login method
const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
// update user information
const updateUser = (profile: { displayName?: string; photoURL?: string }) => {
  if (auth.currentUser) {
    return updateProfile(auth.currentUser, profile);
  }
};

export const userAuth = { createUser, login, updateUser };
