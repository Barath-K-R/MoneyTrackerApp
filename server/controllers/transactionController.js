import mysqldb from "../config/DbConfig.js";

export const addTransaction = async (req, res) => {
    console.log('Adding transaction');
    console.log(req.body)
    const { userid, category_id, note, amount, date, type } = req.body;
    
    const query = 'INSERT INTO transactions (user_id, category_id, note, amount, date, type) VALUES (?, ?, ?, ?, ?, ?)';

    try {
        const [result] = await mysqldb.query(query, [userid, category_id, note, amount, date, type]);
        
        const [expense] = await mysqldb.query('SELECT * FROM transactions WHERE id = ?', [result.insertId]);
        
        res.status(201).send(expense[0]);
    } catch (error) {
        console.error('Error adding transaction:', error);
        res.status(500).send({ error: 'Failed to add transaction' });
    }
};



export const getTimeLineExpenses=async(req,res)=>{
    console.log(req.body)
    const { startDate, endDate,userId} = req.body;
    console.log(startDate+' '+endDate+' '+userId);
    
    if (!startDate || !endDate) {
        return res.status(400).json({ error: 'Start date and end date are required' });
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    let query=`SELECT t.id,t.user_id,t.category_id,c.name,t.note,t.amount,t.date,t.type
                FROM transactions t
                JOIN categories c ON c.id = t.category_id
                where date between ? and ? and t.user_id=?`

    try {
        const [result]=await mysqldb.query(query,[start,end,userId]);
        console.log(result)
        res.send(result);
    } catch (error) {
        console.log(error)
    }
    
}