'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const SignOutNavbar = () => {
  const route = useRouter();
  return (
    <>
    <div className="header">
        <span>User</span>
      <nav>
        <p onClick={()=>route.push("/")}>User Home</p>
        <p onClick={()=>route.push("/login")}>Login Page</p>
      </nav>
    </div>
    </>
  );
};

export default SignOutNavbar;
