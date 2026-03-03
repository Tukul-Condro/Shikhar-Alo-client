
import { useState } from 'react';
import EmployeeList from './EmployeeList';
import PayModal from './PayModal';

const HR = () => {

    const [editPay, setEditPay ]= useState(null);

    const handlePayEdit = (payReq) =>{
        setEditPay (payReq);
    }

    

    return (
        <div>

            <EmployeeList onPayEdit ={handlePayEdit}></EmployeeList>
            {
                editPay && (<PayModal payReq ={editPay} onClose={()=> setEditPay(null)}></PayModal>)
            }
        </div>
    );
};

export default HR;