
import WorkSheet from './WorkSheet';
import AddWorkForm from './AddWorkForm';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const Employee = () => {

    const {user} = useAuth();
    const AxiosSecure = useAxiosSecure(); 
    const [works, setWorks] = useState([]);

    // handle form submit
    // const handleWorkSubmit = async (data) =>{
    // console.log("Data from child:", data);
    //     // work data from addworkFrom
    //    const workData = {
    //     task: data.task,
    //     workHour: data.workHour,
    //     date: data.date,
    //     name: user?.displayName,
    //     email: user?.email,
    //    }
    //    console.log('work data', workData)
    // //    worker info
    // //    const worker = {
    // //     name: user?.displayName,
    // //     email: user?.email,
    // //    }
    // //    console.log(worker)

    //    const AddWorkData = {
    //     workData,
    //     // worker
    //    }
    //    console.table(AddWorkData)

    // // Add new work to state and sort by date descending
    // setWorks(prev =>{
    //     const update = [workData,...(prev|| [])].sort((a, b) => new Date(b.date) - new Date(a.date));
    //     return update;
    // })
    

    // //    save work in DB
    // try{
    //     // post req
    //     await AxiosSecure.post(`/addWorks/${user.email}`,AddWorkData)
        
    //     Swal.fire("Work Add Successfuly!");
    // }catch (err){
    //     console.log(err)
    // }
    // }
    const handleWorkSubmit = async (data)=>{

        const AddWorkData = {
        task:data.task,
        workHour:data.workHour,
        date:data.date,
        name:user.displayName,
        email:user.email
        }
        console.log('addWork', AddWorkData)
    try{

        const res = await AxiosSecure.post("/addWorks", AddWorkData);

        if(res.data.insertedId){

        Swal.fire("Work Added Successfully");

        const works = await AxiosSecure.get(
            `/works/${user.email}`
        );

        setWorks(works.data);
        }

    }catch(err){

        console.log(err);

    }

    }


//   useEffect(()=>{
//         AxiosSecure.get(`/works/${user.email}`)
//         .then(res =>{
//             setWorks(res.data)
//             })
//         .catch(err => console.log(err));
//     },[AxiosSecure])
    useEffect(()=>{

    if(user?.email){

    AxiosSecure
    .get(`/works/${user.email}`)
    .then(res => setWorks(res.data))
    .catch(err => console.log(err));

    }

    },[user]);

    
    
   
    return (
        <div className=' gap-1  ml-5 mt-7'>
            <AddWorkForm onSubmit={handleWorkSubmit}></AddWorkForm>
            <WorkSheet works={works}></WorkSheet>
        </div>
    );
};

export default Employee;