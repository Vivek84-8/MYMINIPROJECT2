import React from 'react';
import './TodoInput.css';
import toast from 'react-hot-toast';


function TodoItem({ slot, refresh }) {

	// console.log(slot);


	const deleteSlot = async (id) => {
		const res = await fetch('http://localhost:5000/slot/delete/'+id, {
			method: 'DELETE'
		});

		console.log(res.status);

		if(res.status === 200){
			toast.success('Slot Successfully Removed');
			refresh();
		}

	}

	return (
		<div className="col-md-3">
			{slot.name ?
				<div className="col mx-auto  border border-dark m-3 bg-light hero-image-booked">
					<div className="p-2 text-white text-center">
						<strong>This slot is booked</strong></div>
					<div className="p-1 text-white text-center">
						<strong> Parking Slot No.#{slot.slot}</strong></div>
					<div className="p-2 text-white text-center">
						<h4><strong>{slot.name}</strong></h4>
					</div>
					<div className="p-2 text-white text-center">
						<h4> <strong>{slot.phone}</strong></h4>
					</div>
					<div className="text-center">
						<button
							onClick={() => { deleteSlot(slot._id) }} className="btn btn-danger border border-white m-2"> <strong>Leave </strong></button>
					</div>
				</div> :
				<div className="col m-3 bg-dark   hero-image-empty">
					<div className="p-2 text-center ">
						<strong> Parking Slot No. #{slot.id}</strong></div>
					<label className="text-center"><strong>Enter Your name</strong></label>
					<input
						type="text"
						className="col form-control" readOnly />
					<label className="text-center" ><strong>Enter phone number</strong></label>
					<input
						type="number"
						className="col form-control" readOnly />
					<div className="text-center">
						<button
							onClick={() => {


							}}

							className="btn btn-dark border border-white m-2"><strong> Book</strong> </button>
					</div>
				</div>}




		</div>

	)
}
export default TodoItem;