import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link } from 'react-router-dom';

export const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees()
        }, [])

    const listEmployees = ()=>{
        EmployeeService.getAllEmployees().then(response => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
        listEmployees();
    }).catch(error => {
        console.log(error);
    })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista de empleados</h2>
            &nbsp;
            <Link to="/add-employee" className='btn btn-primary mb-2 d-block mx-auto' style={{width: 'fit-content'}}>Agregar empleado</Link>
            &nbsp;
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Celular</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Actualizar</Link>
                                        <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)}>Eliminar</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent;
