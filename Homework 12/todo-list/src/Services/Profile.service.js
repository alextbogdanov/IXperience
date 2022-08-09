import { collection, setDoc, doc, getDoc, deleteDoc } from "firebase/firestore";

import { db } from "../Firebase/Firebase";

import Profile from "../Models/Profile";

class ProfileService {
    constructor() {
        this.collection = 'profiles';
    }

    async readProfile(user) {
		const docRef = doc(db, this.collection, user.uid);
		
		const docSnapshot = await getDoc(docRef);

		if(docSnapshot.exists()) {
			return Profile.fromFirebase(docSnapshot);
		}
    }

	async saveProfile(profile) {
		const docRef = doc(db, this.collection, profile.id);
		await setDoc(docRef, profile.toJson());
		return profile;
	}
}

const profileService = new ProfileService();

export default profileService;