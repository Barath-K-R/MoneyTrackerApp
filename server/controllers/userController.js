import mysqldb from "../config/DbConfig.js";

export const signUp=async(req,res)=>{
    const {username,email,password}=req.body;
    let query='insert into users (username,email,password) values (?,?,?)'
    try {
        const [result]=await mysqldb.query(query,[username,email,password]);
        console.log(result)
        const [user]=await mysqldb.query('select * from users where id=?',[result.insertId])
        res.send(user[0]);
    } catch (error) {
        console.log(error)
    }
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    let query='select * from users where email=?'
    try {
        const [result]=await mysqldb.query(query,[email]);
        const user=result[0];
        console.log(user)
        if(!user)
            res.status(401).send('user not found');
        else{   
            if(user.password===password)
                res.send('user successfully authenticated');
            else
            res.status(401).send('password not matched')
        }
    } catch (error) {
        console.log(error)
    }
}
