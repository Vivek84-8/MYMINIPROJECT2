import React, { useState, useEffect } from 'react';
import { addTodo } from '../reducers/actions';
import { useDispatch } from 'react-redux';
import './TodoInput.css';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function BookSlot() {

    const navigate = useNavigate();

    const slotForm = useFormik({
        initialValues: {
            name: '',
            phone: '',
            slot: 0,
            vehicle: '',
            createdAt: new Date()
        },

        onSubmit: async (values) => {
            console.log(values);


            const res = await fetch('http://localhost:5000/slot/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'WellDone!',
                    text: 'Registered Successfully 😎'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong'
                })
            }
        }
    })



    return (

        <div className="col m-2 hero-image   text-center font-weight-bold text-white" >
            <br />

            <h1 className="text-center"> Add Your Details</h1>
            <br />
            <div className="size text-center">
                <form onSubmit={slotForm.handleSubmit}>
                    <label>Enter parking slot</label>
                    <input
                        type="number"
                        id="slot"
                        value={slotForm.values.slot}
                        onChange={slotForm.handleChange}
                        className="col form-control" />
                    <label>Enter Your name</label>
                    <input
                        type="text"
                        id="name"
                        value={slotForm.values.name}
                        onChange={slotForm.handleChange}
                        className="col form-control" />
                    <label>Enter phone number</label>
                    <input
                        type="number"
                        id="phone"
                        value={slotForm.values.phone}
                        onChange={slotForm.handleChange}
                        className="col form-control" />
                        <label>Enter vehicle number</label>
                    <input
                        type="text"
                        id="vehicle"
                        value={slotForm.values.vehicle}
                        onChange={slotForm.handleChange}
                        className="col form-control" />

                    <button type='submit'>Book Slot</button>
                </form>
            </div>
        </div>
    )

}
export default BookSlot;