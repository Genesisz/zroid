import { NavigationMenuDemo } from "@/components/component/navigationbar";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlayIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const quoteparagraph =
  "For too long, Africa has been an afterthought in the global technology landscape, forced to adapt to solutions designed for different cultures and contexts. At Zroid, we dared to challenge this norm, realizing that Africa needed technologies tailored specifically for her unique needs, aspirations, and rich diversity. With a diverse team of pan-African technologists, from front-end engineers in Western African countries to full-stack developers in Eastern African countries, we are the team to design and build technologies for Mother Africa.";

export default function HomePage() {
  return (
    <>
      <div className="flex items-center mt-4">
        <p>Zroid</p>
        <div className="ms-auto">
          <NavigationMenuDemo />
        </div>
      </div>
      <div className="flex min-h-[80vh] justify-center items-center">
        <div className="me-auto">
          <LeftHero />
          <div className="mt-20">
            <p className="font-light text-lg">
              Trusted by <span className="font-bold">10+</span> companies
            </p>
          </div>
        </div>
        <Image
          src="/hero-zroid.png"
          alt="zroid mirror"
          width={500}
          height={400}
          className="rounded-2xl shadow-2xl"
        />
      </div>
      <QuoteSection />
    </>
  );
}

export function LeftHero() {
  return (
    <div className="me-auto flex flex-col gap-4">
      <h1 className=" leading-10">
        <span className=" uppercase font-semibold">Experience</span>
        <br />
        <span className=" text-5xl font-bold">
          Rare technologies
          <br />
          coupled with
          <br />
          unmatched innovations
        </span>
        <br />
        <span>be the first to experience innovation...</span>
      </h1>
      <div className="flex gap-4">
        <Button>Join Waitlist</Button>
        <Button variant="ghost" className="hover:bg-transparent group">
          How it works
          <div className="relative w-7 h-7 ml-2 flex bg-[#eceefe] justify-center items-center rounded-full transition-transform duration-300 group-hover:translate-x-2">
            <PlayIcon strokeWidth={1} size={14} fill="black" />
          </div>
        </Button>
      </div>
    </div>
  );
}

export function QuoteSection() {
  return (
    <div className="bg-[#0f1213] absolute w-[100vw] min-h-[70vh] left-0 text-white p-12 grid grid-cols-[3fr_1fr]">
      <div className="">
        <h2 className=" text-7xl relative before:content-['\201C'] tracking-wide before:absolute before:-top-8 before:-left-8 after:content-['\201D'] after:absolute">
          We realized that Africa
          <br />
          needed technologies
          <br />
          tailored for her.
        </h2>
        <p className=" w-10/12 text-lg font-light leading-10 mt-4 tracking-widest">
          {quoteparagraph}
        </p>
        <Button
          variant="link"
          className="text-[#ff6600] p-0 group hover:no-underline"
        >
          Read More{" "}
          <ChevronRight className="group-hover:translate-x-2 duration-300 transition-transform" />
        </Button>
      </div>
      <div className="ms-auto relative">
        <svg
          fill="#ff660035"
          version="1.1"
          id="Capa_1"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 349.078 349.078"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M198.779,322.441v-58.245c0-7.903,6.406-14.304,14.304-14.304c28.183,0,43.515-28.904,45.643-85.961h-45.643 c-7.897,0-14.304-6.41-14.304-14.304V26.64c0-7.9,6.406-14.301,14.304-14.301h121.69c7.896,0,14.305,6.408,14.305,14.301v122.988 c0,27.349-2.761,52.446-8.181,74.611c-5.568,22.722-14.115,42.587-25.398,59.049c-11.604,16.917-26.132,30.192-43.155,39.437 c-17.152,9.304-37.09,14.026-59.267,14.026C205.186,336.745,198.779,330.338,198.779,322.441z M14.301,249.887 C6.404,249.887,0,256.293,0,264.185v58.257c0,7.896,6.404,14.298,14.301,14.298c22.166,0,42.114-4.723,59.255-14.026 c17.032-9.244,31.558-22.508,43.161-39.437c11.29-16.462,19.836-36.328,25.404-59.061c5.423-22.165,8.178-47.263,8.178-74.6V26.628 c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404,12.327,0,18.734,0,26.628v122.988c0,7.899,6.404,14.304,14.301,14.304h45.002 C57.201,220.982,42.09,249.887,14.301,249.887z"></path>
            </g>
          </g>
        </svg>
        <div className="absolute bottom-0 w-full">
          <div className=" flex items-center gap-2 relative after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#ff6600] after:-bottom-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="text-black">GC</AvatarFallback>
            </Avatar>
            <div className="text-sm mt-auto">
              <p>Genesis Chukwuma</p>
              <p className="text-[#ff6600]">Founder</p>
            </div>
          </div>
          <p className="mt-4">Zroid</p>
        </div>
      </div>
    </div>
  );
}

export function MirrorCatalog(){
  const zroidMirrors = [
    {"path": "/zroid-mirror-a.png",
      "name": "Hotel Mirrors",
      "description": "From interactive hotel services and local attraction guides to personalized news and entertainment, our smart mirrors offer a customized, convenient experience tailored to each guest. Trust Zroid to redefine luxury hospitality with futuristic solutions that delight and inspire."
    },
    {"path": "/zroid-mirror-bath.png",
      "name": "Bathroom Mirrors",
      "description": "From interactive hotel services and local attraction guides to personalized news and entertainment, our smart mirrors offer a customized, convenient experience tailored to each guest. Trust Zroid to redefine luxury hospitality with futuristic solutions that delight and inspire."
    },
    {"path": "/zroid-mirror-salon.png",
      "name": "Salon Mirrors",
      "description": "From interactive hotel services and local attraction guides to personalized news and entertainment, our smart mirrors offer a customized, convenient experience tailored to each guest. Trust Zroid to redefine luxury hospitality with futuristic solutions that delight and inspire."
    },
  ]
  return(
    <>
      {zroidMirrors.map((zroidMirror, index)=> {
        return (
          <div key={index}>
            
          </div>
        )
      })}
    </>
  )
}
