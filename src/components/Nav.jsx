
export default function Navbar() {
  return(
    <nav className="flex justify-center mr-auto text-center py-4 px-6 text-white w-full ">
      <div>
        <a href="/about" className="text-lg no-underline hover:text-teal-500 mx-2">About Me</a>
        <a href="/portfolio" className="text-lg no-underline hover:text-teal-500 mx-2">Portfolio</a>
        <a href="/resume" className="text-lg no-underline hover:text-teal-500 mx-2">Resume</a>
        <a href="/contact" className="text-lg no-underline hover:text-teal-500 mx-2">Contact</a>
      </div>
    </nav>
      )

}

