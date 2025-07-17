'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const SignOutNavbar = () => {
  const route = useRouter();
  return (
    <>
    <div className="header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>User</span>
        <p onClick={()=>route.push("/")}>User Home</p>
        <p onClick={()=>route.push("/login")}>Login Page</p>
    </div>
    </>
  );
};

export default SignOutNavbar;
