import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import LoadingSpinner from '../Common/LoadingSpinner';
import Footer from '../Common/Footer';

function Viewuser() {
  let {changemenu} = useContext(mainContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for users
    setLoading(true);
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'React', email: '20000', password: '1 month' }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>

<Header/>
    
    <div className='flex  bg-[#F5F7FF]'>
      <Sidebar/>
      
      <div className={` ${changemenu==true ? 'w-[95%]':'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

        <h1 className='text-[25px] font-[500] mb-[10px]'>
        Welcome To Admin Panel
        </h1>
        <div className=''>
        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
          {loading ? (
            <LoadingSpinner message="Loading users..." />
          ) : (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-2">S.no</th>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Password</th>
                  <th className="text-left p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.password}</td>
                    <td className='text-center p-2'>
                      <button className='bg-green-500 text-white px-5 mr-5 py-1 rounded'>Edit</button>
                      <button className='bg-red-400 text-white px-5 py-1 rounded'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        </div>
      <Footer/>
      </div>
    </div>

    </div>
  )
}

export default Viewuser