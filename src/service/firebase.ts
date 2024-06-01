import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const firebasePostData = async (valueTitle: string, userCredentials: any) => {
    const value = collection(db, valueTitle)
    await addDoc(value, userCredentials)
}

export const firebaseGetData = async (valueTitle: string) => {
    const value = collection(db, valueTitle)
    const res = await getDocs(value)
    const users = res.docs.map(e => ({ ...e.data(), id: e.id }))
    return users;
}