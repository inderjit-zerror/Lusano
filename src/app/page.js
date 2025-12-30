import CanvasComp from "./components/CanvasComp";
import Nav from "./components/common/Nav";
import PageIntro from "./components/common/PageIntro";

export default function Home() {
  return (
   <>
    <div className="w-full min-h-screen relative ">
      <PageIntro />
      <CanvasComp />
      <Nav/>
      
    </div>
   </>
  );
}
