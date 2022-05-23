const pool = require("../model/db");

const getAllEmployees =  async (req, res) => {
    try {
        const Todo = await pool.query("SELECT * FROM projekt.register");
        if(Todo.rows)
        {
          res.json(Todo.rows);
        }
    } catch (err) {
        res.status(400).json(err.message);
    }
}

const createNewEmployee = async (req, res) => {
    try {
        const { firstName,lastName,indexNumber,email,password } = req.body;

        if (!firstName || !lastName || !email || !password)  {
            return res.status(400).json({ 'message': 'First, last names,index,email and password are required.' });
        }

        const newTodo = await pool.query(
            "INSERT INTO projekt.register (firstName,lastName,indexNumber,email,password) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [firstName,lastName,indexNumber,email,password]
        );

        res.status(201).json(newTodo.rows);
    }catch (err) {
        res.status(400).json(err.message);
    }
}

const updateEmployee = async (req, res) => {
    try {
        const { firstName,lastName,indexNumber,email,password } = req.body;

        if (!firstName || !lastName || !indexNumber || !email || !password)  {
            return res.status(400).json({ 'message': 'First, last names,email and password are required.' });
        }

        const newTodo = await pool.query(
            "UPDATE projekt.register SET firstName = $1, lastName= $2, indexNumber=$3 ,email=$4, password=$5 WHERE email = $4 RETURNING *",
            [firstName,lastName,indexNumber,email,password]
        );
        
        res.status(201).json(newTodo.rows);
    }catch (err) {
        res.status(400).json(err.message);
    }
}

const deleteEmployee = (req, res) => {
    try {
        const { firstName,lastName,email,password } = req.body;

        if (!firstName || !lastName || !email || !password)  {
            return res.status(400).json({ 'message': 'First, last names,index,email and password are required.' });
        }

        pool.query("DELETE FROM projekt.register WHERE email=$1",[email], function (err, result) {
            if (err) throw err;
            res.status(201).json("Number of records deleted: " + result.affectedRows);
        });

    }catch (err) {
        res.status(400).json(err.message);
    }
}

const getEmployee = async (req, res) => {
    try {
        const Todo = await pool.query("SELECT * FROM projekt.register WHERE email=$1",[req.params.id]);

        if(Todo.rows)
        {
          res.json(Todo.rows);
        }

    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}