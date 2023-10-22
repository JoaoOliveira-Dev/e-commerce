"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function BarNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sidebar collapsed={isOpen} toggled style={{ borderRadius: "10px" }}>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
              borderRadius: "10px",
            },
          },
        }}
      >
        <MenuItem onClick={toggleSidebar} style={{ borderRadius: "10px" }}>
          {isOpen ? <FaBars /> : <FaTimes />}
        </MenuItem>
        <MenuItem
          component={<Link href="/calendar" />}
          style={{ borderRadius: "10px" }}
        >
          {" "}
          Calendar
        </MenuItem>
        <MenuItem
          component={<Link href="/e-commerce" />}
          style={{ borderRadius: "10px" }}
        >
          {" "}
          E-commerce
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
