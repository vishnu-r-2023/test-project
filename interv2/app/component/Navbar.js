'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const UserNavbar = () => {
  const route = useRouter();
  return (
    <>
    <div className="header">
        <span>User</span>
        <p onClick={()=>route.push("/")}>Home</p>
        <p onClick={()=>route.push("/")}>signOut</p>
    </div>
    </>
  );
};

export default UserNavbar;
