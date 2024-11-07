import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const itemsSnapshot = await getDocs(itemsCollection);
  const items = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
};

export const addItem = async (userId, item) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  return await addDoc(itemsCollection, item);
};
