'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const UserNavbar = () => {
  const route = useRouter();
  return (
    <>
    <div className="header">
        <span>User</span>
      <nav>
        <p onClick={()=>route.push("/")}>User Home</p>
        <p onClick={()=>route.push("/")}>Logout Page</p>
      </nav>
    </div>
    </>
  );
};

export default UserNavbar;
