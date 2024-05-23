import { NavigationMenuDemo } from "@/components/component/navigationbar";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex items-center mt-4">
        <p>Zroid</p>
        <div className="ms-auto">
          <NavigationMenuDemo />
        </div>
      </div>
      <div className="">
        
      </div>
    </>
  );
}
