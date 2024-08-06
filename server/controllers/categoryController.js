import mysqldb from "../config/DbConfig.js";

export const addCategory=async(req,res)=>{
    console.log('adding')
    const {name,type}=req.body;
    let query='insert into categories (name,type) values (?,?)';

    try {
        const [result]=await mysqldb.query(query,[name,type]);
        const [category]=await mysqldb.query('select * from categories where id=?',[result.insertId])
        console.log(category)
        res.send(category[0]);
    } catch (error) {
        console.log(error)
    }
    
}