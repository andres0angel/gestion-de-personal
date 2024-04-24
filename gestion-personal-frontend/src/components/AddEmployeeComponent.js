import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, phone, email };

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response) => {
                console.log(response.data);
                navigate("/empleados")
            }).catch(error => {
                console.log(error);
            })
        }else{
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate("/empleados")
            }).catch(error => {
                console.log(error);
            })
        }

        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setPhone(response.data.phone);
            setEmail(response.data.email);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const tittle = () => {
        if(id){
            return <h2 className='text-center'>Actualizar empleado</h2>
        }else{
            return <h2 className='text-center'>Agregar empleado</h2>
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>{tittle()}</h2>
                        <div className='card-body'>
                            <form>
                            <div className='form-group mb-2'>
                                    <label className='form-label'>Nombre</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su nombre'
                                        name='nombre'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Apellido</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su apellido'
                                        name='apellido'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Celular</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su numero de celular'
                                        name='celular'
                                        className='form-control'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su email'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Guardar</button>
                                &nbsp;&nbsp;
                                <Link to="/empleados" className='btn btn-danger'>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent
