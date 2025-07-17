'use client';
import '@/app/globals.css';
import React from 'react';
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import SessionWrapper from '@/app/component/SessionWrapper'
import UserNavbar from '@/app/component/Navbar';
import SignOutNavbar from '@/app/component/Navbar1';

const Login=()=>{
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    <SessionWrapper>
    return (
      <UserNavbar></UserNavbar>
      <div className="login-container">
        <p>You are signed in as {session.user.name}</p>
        <Image src={session.user.image} alt="User Image" width={50} height={50} />
        <p>Email: {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
    </SessionWrapper>
  }

  return ( 
    <div style={{background:" rgba(255, 6, 6, 0.77)",height: '100vh' }}>
    <SignOutNavbar />
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <div className="login-container">
      <p>Please Sign in</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
    </div>
    </div>
  );
}
export default Login;