import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id:1 , name: 'Home', path: '/home'},
        {id:2 , name: 'Products', path: '/products'},
        {id:3 , name: 'Orders', path: '/orders'},
        {id:4 , name: 'Contact', path: '/contacts'},
        {id:5 , name: 'About', path: '/about'}
    ]
    return (
        <nav className='bg-fuchsia-900 w-full'>
            <div onClick={()=>setOpen(!open)} className="h-6 text-white w-6 md:hidden">
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
            {/* <div> //both of them means the same as event bubble is working here
            {
                open ? 
                <XMarkIcon onClick={()=>setOpen(!open)} className="h-6 w-6"/>
                : <Bars3Icon onClick={()=>setOpen(!open)} className="h-6 w-6"/>
            }
            </div> */}
           

            <ul className={` bg-fuchsia-900 text-white font-semibold md:flex py-3 w-full justify-end md:static absolute duration-300 ease-in-out ${open ? 'top-6': 'top-[-150px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;