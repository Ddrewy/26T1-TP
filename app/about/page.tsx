import React from 'react'
import Link from "next/link";

function About() {
  return (
    <div> 
      <Link href="/" className='flex pl-5 pt-2 text-md'>←Home</Link>
      <div 
        style={{
          color: 'var(--foreground)',
        }}
        className="w-screen h-screen transition-colors duration-300 flex flex-col items-center justify-center"
      >
        <p className="font-mono text-2xl">About Me!</p>
        <p className='font-mono text-xl'>Hiiiii!! My name is Deandrew, a second year computer science student.</p>
        <p className='font-mono text-xl'>I'm currently trying to get internship—ig atp I'm cooked—</p>
        <p className='font-mono text-xl'>Apart from that, I like to learn something new and making projects</p>
        
        <p className='font-mono text-xl -ml-78'><br/>• Pronouns: He/Him</p>
        <p className='font-mono text-xl'>• Languages: C, Js/Ts, React, Mips, Tailwind</p>
        <p className='font-mono text-xl -ml-18'>• Hobbies: bed rotting & reading books</p>
      </div>

    </div>
  )
}

export default About