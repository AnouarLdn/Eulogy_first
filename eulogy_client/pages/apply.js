import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Apply = () => {
  const [handle, setHandle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!category) return toast.error('Please select a category');
    toast('You have registered successfully');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setCategory('');
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
            <h1 className="text-2xl font-bold text-center">
              Join the Eulogy revolution
            </h1>
            <p className="text-center">Create your Eulogy</p>
            <form className="flex flex-col gap-5">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow-md border-4 px-3 py-2 rounded-md focus:outline-none mt-5"
                type="text"
                placeholder="Firstname"
                required
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow-md border-4 px-3 py-2 rounded-md focus:outline-none"
                type="text"
                placeholder="Lastname"
                required
              />
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
              <h2 className="text-sm text-center font-bold">Account type</h2>
              <span className="flex">
                <label className="flex flex-row">
                  <input
                    type="checkbox"
                    value="Me"
                    checked={category === 'Me'}
                    onChange={handleCategoryChange}
                  ></input>
                  <p className="m-2 flex justify-around">Me</p>
                </label>
                <label className="flex flex-row">
                  <input
                    type="checkbox"
                    value="Loved one"
                    checked={category === 'Loved one'}
                    onChange={handleCategoryChange}
                  ></input>
                  <p className="m-2 flex justify-around">Loved one</p>
                </label>
              </span>
              <button
                onClick={submitForm}
                className="bg-yellow-400 border-2 px-4 py-4 rounded-2xl shadow-2xl font cursor-pointer"
              >
                Register
              </button>
            </form>
          </div>
          <h4 className="flex justify-center {' '}">
            Already have an account? <Link href="/login">Login</Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Apply;
