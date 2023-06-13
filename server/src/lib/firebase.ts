import * as admin from 'firebase-admin';
import credentials from "./credentials.json";

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(JSON.stringify(credentials))),
});

export { admin };