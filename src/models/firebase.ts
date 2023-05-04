import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";

//.envファイルに以下の環境変数を追加してください
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);

export const initializeFirebaseApp = (): FirebaseApp =>
  //三項演算(多分C言語にはない)
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
