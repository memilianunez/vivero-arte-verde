import {
    doc,
    getDoc,
    collection,
    getDocs,
    query,
    where,
    getFirestore,
} from "firebase/firestore";    

export const getProduct = (id) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                const db = getFirestore();
                const itemRef = doc(db, "items", id);

                getDoc(itemRef)
                    .then((doc) => {

                        if (doc.exists()) {
                            resolve({
                                id: doc.id,
                                ...doc.data(),
                            });
                        } else {
                            resolve(null);
                        };
                    })
                    .catch((err) => {
                            reject(err);
                    })
            }, 1000);
        });
    };

    export const getProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
        
            setTimeout(() => {
                const db = getFirestore();
                const productsCollection = categoryId
                ? query(collection(db, "items"), where('category', "==", categoryId))
                    : collection(db, "items");
                
                getDocs(productsCollection)
                    .then((snapshot) => {
                        const itemFromSnapshot = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        resolve(itemFromSnapshot);
                    })
                    .catch((err) => {
                        reject(err);
                    })
                
            }, 1000);
        });
    };