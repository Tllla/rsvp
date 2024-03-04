import Image from "next/image";
import LandingPage from "./(landing)/LandingPage";
import { ThemeProvider } from "@/components/ThemeProvider";
import ImageCouples from "@/components/ImageCouples";

export default function Home() {
  return (
   <>
        
         <div className="flex place-content-center">
         <div className=" flex min-h-screen flex-col items-center pb-10 w-[500px]">
           
           <ImageCouples />
            <LandingPage />

            </div>   
         </div>
     
        <div className="absolute top-6 right-6">
        <ThemeProvider />
        </div>

   </>
           

  );
}
