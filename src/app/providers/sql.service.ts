import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

export interface Etudiant {
  id: number;
  nom:string;
  filiere: string;
  niveau: number;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  private readonly DB_NAME: string = "xline_db";
  private sqlObjet : SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private sqlDB!: SQLiteDBConnection;
  private etudiants: WritableSignal<Etudiant[]> = signal<Etudiant[]>([]);

  constructor() { }

  async initializeDB(){
    this.sqlDB = await this.sqlObjet.createConnection(this.DB_NAME, false, "no-encryption", 1, false);
    await this.sqlDB.open();

    await this.createTable();
    //this.retrieveData();
    return true;
  }

  getEtudiants(){
    return this.etudiants;
  }

  
  async createTable(){
    const schema = `CREATE TABLE IF NOT EXISTS etudiants(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      filiere TEXT,
      niveau INTEGER DEFAULT 1,
      age INTEGER NOT NULL 
    )`;

    this.sqlDB.execute(schema);  
  }

  


}
