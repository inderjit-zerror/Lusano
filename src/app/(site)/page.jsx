"use client";
import CanvasComp from "../../components/CanvasComp";
import OpeningSection from "../../components/common/OpeningSection";
import PageIntro from "../../components/common/PageIntro";
import TextHeader from "../../components/common/TextHeader";
import { useState } from "react";

// import Nav from "../components/common/Nav";
{/* <NavBox /> */}

export default function Home() {

  const [CName, SetCName] = useState('')

  return (
   <>
    <div className="w-full min-h-screen relative ">
      <PageIntro CName={CName} />
      <CanvasComp SetCName={SetCName} />
      {/* <Nav/>  */}
      <TextHeader />
     
    </div>
   </>
  );
}