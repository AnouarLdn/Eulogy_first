import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Apply = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = (e) => {
    e.preventDefault();
    toast('Welcome back!');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <section
        className={
          styles.background + ' min-h-screen flex justify-center items-center'
        }
      >
        <div className="main">
          <div className="content border-2 px-4 py-4 rounded-2xl shadow-2xl">
            <h1 className="text-2xl font-bold text-center">Welcome back</h1>
            <p className="text-center p-5">Log in to Eulogy</p>
            <form className="flex flex-col gap-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-md border-4 px-3 py-2 rounded-md focus:outline-none"
                type="email"
                placeholder="email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md border-4 px-3 py-2 rounded-md focus:outline-none"
                type="password"
                placeholder="Password "
                required
              />
              <button
                onClick={userLogin}
                className="bg-yellow-400 border-2 px-4 py-4 rounded-2xl shadow-2xl font cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
          <h4 className="flex justify-center">
            No account?{' '}
            <Link href="/apply" className="text-color white text-bold">
              Sign up
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Apply;
