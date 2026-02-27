
import WorkSheet from './WorkSheet';
import AddWorkForm from './AddWorkForm';
import UpdateWork from './UpdateWork'
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import useWorks from '../../../Hooks/useWorks';

const Employee = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure(); 
    const  [, refetch] = useWorks();
    const [editWork, setEditWork] = useState(null);

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

    // Add new work
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
            const res = await axiosSecure.post("/works", AddWorkData);

            if(res.data.insertedId){
                Swal.fire("Work Added Successfully");
                // const work = await AxiosSecure.get(`/works/${user.email}`);
                // setWorks(works.data);
                refetch();
            }
        }catch(err){
            console.log(err);
        }
        
    }
    // Open edit modal
    const handleEdit = (work)=>{
        setEditWork(work);
    }
    // update work
    const handleUpdate = async (updatedWork) => {
        try {
        const res = await axiosSecure.patch(`/works/${updatedWork._id}`,updatedWork);
             if (res.data.modifiedCount > 0) {
            Swal.fire("Work Updated Successfully");
                refetch(); // ⭐ reload data from server
                setEditWork(null); // close modal
            }
        } catch (err) {
        console.log(err);
        }
    };
    // delete work
    const handleDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/works/${id}`)
                .then( res =>{
                    if(res.data.deletcount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch();
                })               
            }
        });
    };
 
    return (
        <div className=' gap-1  ml-5 mt-7'>
            <AddWorkForm onSubmit={handleWorkSubmit}></AddWorkForm>
            <WorkSheet onEdit={handleEdit} onDelete={handleDelete} ></WorkSheet>
            {
                editWork && ( <UpdateWork work={editWork} onUpdate={handleUpdate} onClose={()=> setEditWork(null)}></UpdateWork>)
            }
        </div>
    );
};

export default Employee;