import db from '../src/firebase-config.js';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

class FireBaseAdapter {
    constructor() {
        this.db = db;
    }

    async globalGetCountries() {
        const querySnapshot = await getDocs(collection(this.db, "countries"));
        return querySnapshot.docs.map(doc => doc.data());
    }

    async globalInsertCountry(data) {
        await addDoc(collection(this.db, "countries"), data);
    }

    async globalDeleteCountry(countryName) {
        const querySnapshot = await getDocs(query(collection(this.db, "countries"), where("name", "==", countryName)));
        querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(this.db, "countries", document.id));
        });
    }
}

export default FireBaseAdapter;
