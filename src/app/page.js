"use client";
import { useState } from "react";
import CanvasComp from "./components/CanvasComp";
import Nav from "./components/common/Nav";
import PageIntro from "./components/common/PageIntro";
import NavBox from "./components/common/NavBox";
import TextHeader from "./components/common/TextHeader";

export default function Home() {

  const [CName, SetCName] = useState('')

  return (
   <>
    <div className="w-full min-h-screen relative ">

      <NavBox />
      <PageIntro CName={CName} />
      <CanvasComp SetCName={SetCName} />
      <Nav/> 
      <TextHeader />
    </div>
   </>
  );
}
