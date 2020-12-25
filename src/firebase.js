import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6Zsbs7ehCudgx_RUgcc3oJU4daZZenbo",
  authDomain: "fir-integration-c3b89.firebaseapp.com",
    databaseURL:"https://fir-integration-c3b89.firebaseio.com",
    projectId: "fir-integration-c3b89",
    storageBucket: "fir-integration-c3b89.appspot.com",
    messagingSenderId: "204010964494",
    appId: "1:204010964494:web:1a0dd0d08fc7527265de5f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const convertCollectionSnapshsotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    
    return {
      id: doc.id,
      ...doc.data()
    }
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.name.toLowerCase()] = collection;
    return accumulator;
  },{})
};

export default firebase;