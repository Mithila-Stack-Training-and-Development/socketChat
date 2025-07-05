import React, { useEffect ,useState} from 'react'
import { IoSearch } from "react-icons/io5";
import User from './User.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { getOtherUsersThunk, getUserProfileThunk, logoutUserThunk } from '../../store/slice/user/userThunk.js';

const UserSidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch=useDispatch();
  const [users, setUsers] = useState([]);
  const { otherUsers, userProfile } = useSelector((state) => state.userReducer);

  useEffect(()=>{
 (async () => {
    dispatch(getUserProfileThunk());
    dispatch(getOtherUsersThunk());  
    })();  
  },[])

  // console.log("other",otherUsers)
  // console.log(userProfile)
  const handlelogout=async()=>{
 dispatch(logoutUserThunk());
  }

  useEffect(() => {
    if (!searchValue) {
      setUsers(otherUsers);
    } else {
      setUsers(
        otherUsers.filter((user) => {
          return (
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.fullName
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          );
        })
      );
    }
  }, [searchValue, otherUsers]);
  return (
    <div className='min-w-[20rem] h-screen flex flex-col border-r border-white/10 cursor-pointer'>
        <h1 className='bg-black text-[#5754E8] py-3 m-2 text-4xl text-center rounded-2xl font-semibold'>SocketTalk </h1>
       <div className='px-3.5'>
       <label className="input">  
  <input type="search"  onChange={(e) => setSearchValue(e.target.value)} required placeholder="Search" />
  <IoSearch />
    </label>
       </div>
       <div className='h-full overflow-y-auto px-3 space-y-2'>
        {users?.map((userDetails)=>{
       return <User key={userDetails?._id} userDetails={userDetails} />;
        })}
      </div>
       <div className='h-[5rem] flex justify-evenly gap-3 p-4 items-center'>
       <div className="avatar avatar-online ">
  <div className="w-16 px-3 text-white rounded-full flex-row gap-2 items-center">
    <img src={userProfile?.avatar} />
  </div>
  
</div>
<h1>{userProfile?.username}</h1>
<button className="btn btn-info" onClick={handlelogout}>Log Out</button>
       </div>
    </div>
  )
}

export default UserSidebar