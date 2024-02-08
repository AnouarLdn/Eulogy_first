import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 flex">
      <link target="_blank" href="/"></link>
      <p>Join Eulogy</p>
      <img src="/images/favicon.ico" className="background-color:pink" />
    </footer>
  );
};

export default Footer;
