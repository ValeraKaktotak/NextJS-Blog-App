// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'nextjs-blog-app-first.firebaseapp.com',
  projectId: 'nextjs-blog-app-first',
  storageBucket: 'nextjs-blog-app-first.appspot.com',
  messagingSenderId: '925135778816',
  appId: '1:925135778816:web:883bf2ea3de8ce049354e5'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
