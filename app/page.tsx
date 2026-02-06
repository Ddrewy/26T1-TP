import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div 
      style={{
        color: 'var(--foreground)',
      }}
      className="w-screen h-screen transition-colors duration-300"
    >
      <p className="pt-[40vh] flex justify-center font-mono text-xl">
        Hi, welcome to my simple portfolio website! 
      </p>
      <p className="flex justify-center font-mono pb-3 text-xl">
        Enjoy your stay as long as you want, have fun!
      </p>
      <div className="flex justify-center">
        <Link 
          href="/about" 
          className="hover:opacity-80 text-xl"
          style={{
            border: '1px solid transparent',
            borderRadius: '3rem',
            padding: '4px',
            paddingRight:'6px',
            paddingLeft:'6px',
            backgroundColor: 'var(--link-color)',
            color:'var(--background)',
            transition: 'all 0.3s ease',
          }}
        >
          About Me
        </Link>
      </div>
    </div>
  );
}
