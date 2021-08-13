const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "raimondsmysqlimplementation",
  waitForConnections: true,
  connectionLimit: 10,
})
 
class DbStorage {
  constructor(tableName){
    this._table = tableName;

  }

  async getAll() {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`SELECT * FROM ${this._table}`);
    return rows;
  }

  async getById(id) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`SELECT * FROM ${this._table} WHERE id=${id}`);
    return rows;
  }

  async create(newStudentData){
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`INSERT INTO ${this._table} (	first_name, 	last_name, email, gender)  
    VALUES ('${newStudentData.name}', '${newStudentData.surname}', '${newStudentData.email}', '${newStudentData.gender}')`);
    return 'succes';
  }

  async update(updatedItem) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`UPDATE  ${this._table} SET 
    first_name = ${updatedItem.first_name},
    last_name = ${updatedItem.last_name},
    email = ${updatedItem.email},
    gender = ${updatedItem.gender}
    WHERE id=${updatedItem.id}`);
    return 'succes';
  }

  async delete(id) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`DELETE FROM ${this._table} WHERE id=${id}`);
    return 'succes';
  }
}

module.exports = DbStorage;