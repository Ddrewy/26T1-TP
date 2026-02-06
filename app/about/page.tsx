import React from 'react'
import Link from "next/link";

function About() {
  return (
    <div> <Link href="/" className=''>Home</Link>
      <div 
        style={{
          color: 'var(--foreground)',
        }}
        className="w-screen h-screen transition-colors duration-300 flex flex-col items-center justify-center"
      >
        <p className="font-mono text-2xl">About Me!</p>
        <p className='font-mono text-xl'>Hiiiii!! My name is Deandrew, a second year computer science student </p>
      </div>
    </div>
  )
}

export default About