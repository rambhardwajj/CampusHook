// Navbar.js
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Contact', href: '#' }, 
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/10117931/pexels-photo-10117931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover' }} className="bg-white text-white mb-10">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8  bg-gray-50" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 ">
              
              <button  style={{fontFamily: 'Audiowide',fontSize:"2em" }} className="font-xxl text-black">Campus<span className=' text-purple-500'>hook</span>  </button>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-black">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="rounded-md bg-purple-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <button > Log in  </button>  <span aria-hidden="true">&rarr; </span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          {/* ... (rest of your dialog code) */}
        </Dialog>
      </header>

      {/* Your other content goes here */}
    </div>
  );
};

export default Navbar;
