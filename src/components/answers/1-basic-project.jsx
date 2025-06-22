// sm, md, lg, xl, 2xl

export function SidebarClass1() {
    return (
        <>
            <div className="flex">

                <div className="bg-purple-200 ease-out transition-all duration-400 h-screen w-0 md:w-96 ">SideBar</div>
                <div className="bg-blue-200 w-full h-screen">Content</div>
            </div>

              <div className='h-screen bg-pink-300 text-black dark:bg-black dark:text-white'>
    <h1>Hello</h1>
    <button className='w-20 h-20 bg-cyan-400'
     onClick={() => {
      document.querySelector("html").classList.toggle("dark")
    }}>Toggle theme</button>
  </div>
    {/* <SidebarClass1/> */}
 </>
    )
} 