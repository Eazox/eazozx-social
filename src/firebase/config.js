import firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyBWfv5ZLJ87oToJzxxEsRkQrrjfbgfgQ8I',
  authDomain: 'eazox-249723.firebaseapp.com',
  databaseURL: 'https://eazox-249723.firebaseio.com',
  projectId: 'eazox-249723',
  storageBucket: 'eazox-249723.appspot.com',
  messagingSenderId: '700705092853',
  appId: '1:700705092853:web:73cf723b21a7b468bdc1bc',
  measurementId: 'G-HQ99MM9BHZ'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export { firebase }
