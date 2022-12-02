
export default function Navbar() {
  return(
    <nav class="flex flex-col justify-between text-center py-4 px-6 bg-gray-900 text-white w-full ">
      <div>
        <a href="/about" class="text-lg no-underline hover:text-green-500 ml-2 mr-2">About Me</a>
        <a href="/portfolio" class="text-lg no-underline hover:text-green-500  ml-2 mr-2">Portfolio</a>
        <a href="/resume" class="text-lg no-underline hover:text-green-500  ml-2 mr-2">Resume</a>
        <a href="/contact" class="text-lg no-underline hover:text-green-500 ml-2 mr-2">Contact</a>
      </div>
    </nav>
      )

}

