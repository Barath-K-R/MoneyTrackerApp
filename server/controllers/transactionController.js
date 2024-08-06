import mysqldb from "../config/DbConfig.js";

export const addTransaction=async(req,res)=>{
    console.log('adding')
    const {userid,category_id,note,amount,date}=req.body;
    let query='insert into transactions (userid,category_id,note,amount,date) values (?,?,?,?,?)';

    try {
        const [result]=await mysqldb.query(query,[userid,category_id,note,amount,date]);
        const [expense]=await mysqldb.query('select * from transactions where id=?',[result.insertId])
        console.log(expense)
        res.send(expense[0]);
    } catch (error) {
        console.log(error)
    }
    
}


export const getTimeLineExpenses=async(req,res)=>{
    console.log('getting')
    const {startDate,endDate}=req.body;
    console.log(startDate+' '+endDate);
    let query='select * from transactions where date between ? and ?';

    try {
        const [result]=await mysqldb.query(query,[startDate,endDate]);
        console.log(result)
        res.send(result);
    } catch (error) {
        console.log(error)
    }
    
}