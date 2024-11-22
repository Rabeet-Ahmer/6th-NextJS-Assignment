"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="flex flex-col border-b-[1px] border-b-black md:bg-[#F7F7F7] md:border-none">
      <div className="flex items-center justify-center gap-8 md:gap-0 md:justify-between px-6 py-3 md:px-16 md:py-[14px]">
        <div className="min-w-[300px]">
          <Image src={"logo.svg"} alt="logo" width={130.6} height={41} />
        </div>
        <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="md:hidden p-3">
              <Image src={"linkbutton.svg"} alt="link" width={24} height={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:underline">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:underline">
                  Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:underline">
                  Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:underline">
                  Achievments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:underline">
                  About us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:underline">
                  Testimonial
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>

        <div className="hidden md:flex bg-white items-center pl-[10px] gap-x-[32px] font-Roboto text-base">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <Link href={"/"} className="hover:underline">
            Courses
          </Link>
          <Link href={"/"} className="hover:underline">
            Services
          </Link>
          <Link href={"/"} className="hover:underline">
            Achievement
          </Link>
          <Link href={"/"} className="hover:underline">
            About Us
          </Link>
          <Link href={"/"} className="hover:underline">
            Testimonial
          </Link>
          <div className="space-x-4 font-Roboto">
            <button className="border py-2 px-5 border-black rounded-md duration-300 hover:scale-110 hover:bg-emerald-300  ">
              Login
            </button>
            <button className=" py-2 px-5 bg-black text-white rounded-md duration-300 hover:scale-110 hover:bg-emerald-300 hover:text-black">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
