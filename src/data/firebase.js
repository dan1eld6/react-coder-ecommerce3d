// Importa las funciones necesarias
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,getDoc, doc,query,where,addDoc } from "firebase/firestore";
import printers from "./printersdb";


// Configuración de Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
    authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: "271117111099",
    appId: import.meta.env.VITE_FIRESTORE_APP_ID
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener productos
async function getPrinters() {
    const productsRef = collection(db, "printers");
    const productsSnapshot = await getDocs(productsRef);
    const productsList = productsSnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() }; })

    console.log(productsSnapshot.docs[0].data());
    console.log(productsSnapshot.docs[0].id);
    console.log("Productos obtenidos desde Firestore:", productsList);

    return productsList;
}


//func. obtener producto por id
async function getPrintersById(idParam) {
    const productRef = doc(db, "printers", idParam);
    const productSnapshot = await getDoc(productRef);
    return { id: productSnapshot.id, ...productSnapshot.data() };
}


//func. productos por categoría
async function getPrintersByCategory(categoryId) {
    const productsRef = collection(db, "printers");
    const q = query(productsRef, where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() }; });

}


//func. compra del usuario
async function createOrder(orderData) {
    const ordersRef = collection(db, "orders");
    const newOrderRef = await addDoc(ordersRef, orderData);

    console.log("pedido creado")
    return newOrderRef.id;
}

//subir base de ddtos
async function uploadInitialData() {
    for (const printer of printers) {
        await addDoc(collection(db, "printers"), printer);
    }console.log("Base de datos inicial subida");

}

export default app;
export { db, getPrinters, getPrintersById , getPrintersByCategory , createOrder, uploadInitialData };
