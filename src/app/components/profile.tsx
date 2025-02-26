import Link from "next/link";
import React from "react";
import Image from "next/image";
interface ProfileConfig{
    name: string,
    bio: string,
    image: string,
}
const config : ProfileConfig= {
    name : "Masttf",
    bio : "Acmer",
    image : "/avatar.jpg",
}
export default function Profile() {
  return (
    <>
        
        <div className="card-base">
            <Link aria-label="Go to About Page" href="/about"
            className="rounded-xl active:scale-95 w-64 h-64" >
                
                <Image src={config.image} alt="Profile Image of the Author" className="w-64 h-64 " width={0}
                height={0} />
            </Link>
            
        </div>
    </>
  );
}