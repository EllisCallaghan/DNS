"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setUpProviders();
  },[])

  return (
    <nav className='flex justify-between flex-row w-full bg-[#070E27] font-primary
    px-24 py-[25px] items-center md:px-12'>
      <Link href='/' className='flex gap-2 flex-center'>
        
        <p className='logo_text'>DNS TOOL</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='flex '>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='font-primary font-[500] text-[16px] leading-[26.4px] bg-[#162044] border border-none 
                  px-[16px] py-[16px] rounded-[8px]'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      
    </nav>
  );
};

export default Nav;