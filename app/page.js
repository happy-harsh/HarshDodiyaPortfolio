"use client"
import Image from "next/image";
import Sidebar from "./components/Sidebar"
import Otherhalf from "./components/Otherhalf"
import Navbar from "./components/Navbar"
export default function Home() {
  return (
    <>
      <main>
      <Sidebar/>
    <Otherhalf/>
    {/* <Navbar/> */}
      </main>
      </>
  );
}
