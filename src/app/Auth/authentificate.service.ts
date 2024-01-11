import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, doc, getDoc, getFirestore, setDoc, collectionData, query, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import {  AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL, deleteObject} from 'firebase/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {

  constructor(
    public ngFireAuth:  AngularFireAuth,
    public firestore: AngularFirestore,
    public router: Router,
    public storage: AngularFireStorage,
  ) { }

  async registerUser(user:User){
      return await this.ngFireAuth.createUserWithEmailAndPassword(user.email,user. password);
  }

  async login(user:User){
    return await this.ngFireAuth.signInWithEmailAndPassword(user.email,user.password);
  }

  reset(email:string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  async signOut(){
    // return await this.ngFireAuth.signOut();
    getAuth().signOut();
    localStorage.removeItem('user');
  }

  getCollection(path: string, collectionQueyr?: any){
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQueyr), {idField: 'id'})
  }

  getUser(): Observable<any[]>{
    return this.firestore.collection('users').valueChanges();
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser;
  }

  async updateUser() {
    const user = await this.ngFireAuth.currentUser;
    
  }
 //================ base de donnee firebase===========================

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  addDocument(path: string, data: any){
    return addDoc(collection(getFirestore(), path), data);
  }

  updateDocument(path: string, data: any){
    return updateDoc(doc(getFirestore(), path), data);
  }

  deleteDocument(path: string){
    return deleteDoc(doc(getFirestore(), path));
  }

  routerlink(url: string) {
    return this.router.navigateByUrl(url);
  }

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getFromLocalStorage(key: string) {
    const item = localStorage.getItem(key);
  
    if (item !== null) {
      return JSON.parse(item);
    }
    return null; // ou lancez une erreur, selon votre logique métier
  }

  getAuth() {
    return getAuth();
  }

  async uploadImage(path: string, data_url: any){
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() =>{
      return getDownloadURL(ref(getStorage(), path))
    })
  }

  async getFilePath(url: string) {
    return ref(getStorage(), url).fullPath;
  }

  deleteFile(path: string){
    return deleteObject(ref(getStorage(), path));
  }

  
}
