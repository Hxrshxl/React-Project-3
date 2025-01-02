import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from '../assets/Logo.svg';
import { Button } from "flowbite-react";
const NavbarSec = () => {
  return (
    <Navbar fluid rounded className='p-[20px] mx-8'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white flex align-right"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='ml-auto'>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link href="#">Community</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        {/* <Button className="bg-[#4CAF4F] text-white text-lg relative -top-2 w-23 h-10 mx-auto ml-5">Register <i class="ri-arrow-right-long-line"></i></Button> */}
        <Button className="bg-[#4CAF4F] text-white text-lg relative -top-2 w-23 h-10 mx-auto">
  Register <span className="ml-2"><i class="ri-arrow-right-long-line"></i></span>
</Button>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarSec