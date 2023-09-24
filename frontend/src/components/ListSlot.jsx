import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

const ListSlot = () => {

    const [slotData, setSlotData] = useState([]);

    const fetchSlotData = async () => {
        const res = await fetch('http://localhost:5000/slot/getall');
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setSlotData(data);
    }

    useEffect(() => {
        fetchSlotData();
    }, []);

    const displaySlots = () => {
        return slotData.map(slot => <TodoItem key={slot._id} slot={slot} refresh={fetchSlotData} />)
    }


    return (
        <div>
            <h1 className='text-center'>Slot List</h1>

            <div className="container-fluid">

                <div className="row">
                    {displaySlots()}
                </div>
            </div>

        </div>
    )
}

export default ListSlot