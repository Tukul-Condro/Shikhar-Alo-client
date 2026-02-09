
import WorkSheet from './WorkSheet';
import AddWorkForm from './AddWorkForm';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Employee = () => {

    const {user} = useAuth();
    const AxiosSecure = useAxiosSecure(); 
    const [works, setWorks] = useState([]);

    // handle form submit
    const handleWorkSubmit = async (data) =>{
 console.log("Data from child:", data);
        // work data from addworkFrom
       const workData = {
        task: data.task,
        workHour: data.workHour,
        date: data.date,
       }
       console.log('work data', workData)
    //    worker info
       const worker = {
        name: user?.displayName,
        email: user?.email,
       }
       console.log(worker)

       const AddWorkData = {
        workData,
        worker
       }
       console.table(AddWorkData)

    // Add new work to state and sort by date descending
    setWorks(prev =>{
        const update = [workData,...(prev|| [])].sort((a, b) => new Date(b.date) - new Date(a.date));
        return update;
    })

    //    save work in DB
    try{
        // post req
        await AxiosSecure.post('/addWorks',AddWorkData)
        Swal.fire("Work Add Successfuly!");
    }catch (err){
        console.log(err)
    }
    }

    // Worker info
    
    
   
    return (
        <div className=' gap-1  ml-5 mt-7'>
            <AddWorkForm onSubmit={handleWorkSubmit}></AddWorkForm>
            <WorkSheet works={works}></WorkSheet>
        </div>
    );
};

export default Employee;