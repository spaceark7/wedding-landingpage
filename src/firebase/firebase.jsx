import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  query,
  collection,
  where,
  serverTimestamp,
  onSnapshot,
  orderBy,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

// Auth Section
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user

    return user.providerData[0]
    // const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    // const docs = await getDocs(q)
    // if (docs.docs.length === 0) {
    //   await addDoc(collection(db, 'users'), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: 'google',
    //     email: user.email,
    //   })
    // }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const Logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

//  DB Section
const getComments = (callback) => {
  try {
    return onSnapshot(
      query(collection(db, 'wedding-comments'), orderBy('createdAt', 'desc')),
      (querySnapshot) => {
        const comments = querySnapshot.docs.map((doc) => ({
          id: doc.id,

          ...doc.data(),
          createdAt: format(doc.data().createdAt.toDate(), 'PPPP | p', {
            locale: id,
          }),
        }))
        callback(comments)
      }
    )

    // const comments = []

    // const q = query(collection(db, 'comments'))
    // q.forEach((doc) => {
    //   comments.push({ ...doc.data(), id: doc.id })
    // })
    // return comments
  } catch (err) {
    console.log('from err: ', err)
    alert(err.message)
  }
}

const sendComment = async (comment, user) => {
  try {
    await addDoc(collection(db, 'wedding-comments'), {
      createdAt: serverTimestamp(),
      content: comment,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      likes: 0,
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

export { signInWithGoogle, Logout, db, sendComment, getComments }
