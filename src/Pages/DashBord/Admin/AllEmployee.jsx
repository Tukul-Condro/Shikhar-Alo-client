import { Button, Spinner, Typography, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useState } from 'react';
import useUsers from '../../../Hooks/useUsers';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const TABLE_HEAD = ["Name", "Designation","",""];

const AllEmployee = () => {

    const {users , loading} = useUsers();
    const axiosSecure = useAxiosSecure();

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [firedUsers, setFiredUsers] = useState([]);
  
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  }  

  const handleCloseModal = () => {
    setSelectedUser(null);
    setOpenModal(false);
  };
  const handleFireUser = async () => {
    try {
      if (!selectedUser) return;

      // Call backend to mark user as fired
      await axiosSecure.patch(`/users/fire/${selectedUser._id}`, { fired: true });

      // Update local state to replace FIRE button with Fired
      setFiredUsers((prev) => [...prev, selectedUser._id]);

      handleCloseModal();
    } catch (err) {
      console.error("Failed to fire user:", err);
    }
  };

    if(loading){
        return <div className='text-center'>
            <Spinner></Spinner>
        </div>
    }

    return (
      <div className="w-full overflow-hidden px-5 mt-5">
        <Typography variant='h2' className='text-center font-medium text-gray-700'>All Employee</Typography>
        <Typography variant='h4' className='text-center font-medium text-gray-700'>Total Employee are : {users.length}</Typography>
      <table className="w-full mt-8 text-center">
        <thead className="w-full min-w-max table-auto text-left">
          <tr className="text-center">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography className="leading-none text-gray-700 font-medium text-2xl">{head}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="group text-sm text-gray-700 dark:text-white">
          {users.map(({ _id, name, designation, fired }, index) => (
            <tr
              key={index}
              className="border-b font-medium even:bg-surface-light dark:even:bg-surface-dark"
            >
              <td className="p-3">{name}</td>
              <td className="p-3">{designation}</td>
              <td className="space-x-5">
                <Button className="text-green-400 h-9" disabled={fired}>Make HR</Button>
                {fired || firedUsers.includes(_id) ? (
                  <Typography color="red" className="font-medium">Fired</Typography>
                ) : (
                  <Button
                    className="text-red-500 h-9"
                    onClick={() => handleOpenModal({ _id, name })}
                  >
                    FIRE
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    {/* Confirmation Modal */}
      <Dialog open={openModal} handler={handleCloseModal}>
        <DialogHeader>Confirm Fire</DialogHeader>
        <DialogBody divider>
          Are you sure you want to fire <b>{selectedUser?.name}</b>?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="gradient" color="red" onClick={handleFireUser}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>     
    </div>
    );
};

export default AllEmployee;