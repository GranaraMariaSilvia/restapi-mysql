import pool from "../db.js"


export const getEmployees = async (req,res) => {
  try {
    const [rows]= await pool.query('SELECT * FROM empleados')
    res.json(rows)
  } catch (error) {
    res.status(500).json({message:'algo salio mal'})
  }
}


export const getEmployee = async(req,res) =>{
  try {
    const [rows]= await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])

 if(rows.length <= 0) return res.status(404).json({
  message:'Empleado no encontrado'
 })
   res.json(rows[0])
  } catch (error) {
    res.status(500).json({message:'algo salio mal'})
   }
}

export const createEmployees = async (req,res) => {
  try {
    const {nombre,apellido,salario,edad} = req.body
    const [rows]= await pool.query('INSERT INTO empleados (nombre, apellido, salario,edad) VALUES(?,?,?)',
      [nombre,apellido,salario])
     console.log(req.body)
      res.send({
       id: rows.insertId,
       nombre,
       apellido,
       salario,
        edad
      })
  } catch (error) {
    res.status(500).json({message:'algo salio mal'})
    console.log(error)
  }
 }


export const deleteEmployee = async (req,res) =>{
  try {
    const [result]= await pool.query('DELETE FROM empleados WHERE id =?', [req.params.id])
 
  if(result.affectedRows <= 0) return res.status(404).json({message:'Empleado no encontrado'})
 
  res.sendStatus(204)
  } catch (error) {
    res.status(500).json({message:'algo salio mal'})
  }
  
 }




export const updateEmployee = async (req,res) =>{
  const{id}=req.params
  const {nombre,apellido,salario} =req.body
  try {
    const [result] = await pool.query('UPDATE empleados SET nombre=IFNULL(?,nombre), apellido= IFNULL (?,apellido), salario=IFNULL (?,salario) WHERE id=?',
    [nombre,apellido,salario, id] )

    if(result.affectedRows === 0) return res.status(404),json({message:'empleado no encontrado'})

    console.log(result)

   const [rows]= await pool.query('SELECT * FROM empleados WHERE id =?', [id])  // esta consulta es para ver lo q actualice

    res.send(rows[0])
    
  } catch (error) {
    res.status(500).json({message:'algo salio mal'})
  }
 
  
    
   
  
    
  }
 







