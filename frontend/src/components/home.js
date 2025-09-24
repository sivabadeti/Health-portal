import { Link } from "react-router-dom";
import { useState } from "react"

export default function Home(){

  const[isopen,Setisopen]=useState(false)
return(
    <>
    <div className="h-screen w-full">

     {/* Nav bar for laptops*/}
     <nav>
    <div className="fixed top-0 lg:h-[80px] h-[60px]  w-full flex lg:justify-between justify-start items-center bg-white">
    <button className="lg:hidden md:mx-8 mx-4" onClick={()=>Setisopen(!isopen)}><i class="fa-solid fa-bars"></i></button>
    <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:left-auto">
      <img src="/sdg-kerala-logo.png" alt="not found" className="lg:h-[50px] lg:w-[200px] lg:mx-12 h-[40px] w-[180px]"/>
    </div>
     
    <div className="hidden lg:flex lg:flex-row lg:space-x-24 lg:mx-12 lg:text-gray-800">
     <Link to="/Home" className="text-lg hover:text-black hover:scale-105 hover:cursor-pointer transform duration-300">
        Home <i className="fa-solid fa-house"></i>
     </Link>
     <Link to="/upload" className="text-lg hover:text-black hover:scale-105 hover:cursor-pointer transform duration-300">
        Upload
     </Link>
     <Link to="/aboutus" className="text-lg hover:text-black hover:scale-105 hover:cursor-pointer transform duration-300">
        About us
     </Link>
     <Link to="/logout" className="text-lg hover:text-black hover:scale-105 hover:cursor-pointer transform duration-300">
        Logout <i className="fa-solid fa-right-from-bracket"></i>
     </Link>
    </div>
    </div>  
   </nav>

{/* sidebar for sm and md */}
  <div className="flex justify-center items-center pt-[80px]">
   
    <img src="/homepic.png" alt="not found" className="lg:h-[600px] lg:w-[1000px] md:h-[500px] md:w-[900px]"/>
    <div
            className={`fixed top-[60px] left-0 h-full w-[200px] bg-green-900 transform transition-transform duration-300  ${
            isopen ? 'translate-x-0' : '-translate-x-full' 
          }`}>
      <div className="text-white  font-bold mt-12 flex flex-col justify-start">
         <Link to="/Home" className="p-3">Home <i className="fa-solid fa-house"></i></Link>
         <Link to="/upload" className="p-3">upload</Link>
         <Link to="/aboutus" className="p-3">About us</Link>
         <Link to="" className="p-3"><a href="mailto:sivabadeti2005@gmail.com">Contact us</a></Link>
        <Link to="/logout" className="p-3">Logout <i className="fa-solid fa-right-from-bracket"></i></Link>
      </div>
    </div>
</div>

{/* Upload details and dashboard */}
<div className="w-full bg-white rounded-xl flex flex-col md:flex-row justify-center items-center gap-6 p-6">
  {/* Dashboard Card */}
  <div className="w-full md:w-[400px] h-[300px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center space-y-4">
    <img 
      src="/keraladashboard.svg" 
      alt="not found" 
      className="h-[180px] w-[260px] object-contain"
    />
    <Link 
      to="/dash" 
      className="text-blue-500 font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer hover:underline"
    >
      Dashboard
    </Link>
  </div>

  {/* Uploaded Details Card */}
  <div className="w-full md:w-[400px] h-[300px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center space-y-4">
    <img 
      src="/uploadedimgs.png" 
      alt="not found" 
      className="h-[180px] w-[260px] object-contain"
    />
    <Link 
      to="/Udetails"
      className="text-blue-500 font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer hover:underline"
    >
      Uploaded Details
    </Link>
  </div>
</div>




 {/* Overview */}
<div className="w-auto mx-4 sm:mx-6 md:mx-12 bg-gray-200 rounded-xl flex flex-col items-center px-4 sm:px-6 md:px-9 py-8 space-y-9 mt-8">
  <h1 className="font-bold text-2xl sm:text-3xl text-center p-2 sm:p-4">
    Overview
  </h1>

  <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
    Kerala is widely recognized for its <span className="font-semibold text-green-600">strong public health system</span> 
    and progressive social indicators. Its health initiatives align with 
    <span className="font-semibold text-blue-600"> UN Sustainable Development Goal 3 (Good Health and Well-being)</span>, 
    aiming to ensure <span className="font-semibold text-green-600">healthy lives and promote well-being for all ages</span>.
    <br /><br />
    Key focus areas include <span className="font-semibold text-blue-500">universal health coverage</span>, 
    <span className="font-semibold text-blue-500"> maternal and child health</span>, and 
    <span className="font-semibold text-blue-500"> disease prevention and management</span>. Kerala also emphasizes 
    <span className="font-semibold text-purple-500"> health education, awareness, and equitable access</span> 
    for all citizens, especially vulnerable populations.
    <br /><br />
    The state has achieved <span className="font-semibold text-green-700">high life expectancy</span>, 
    low infant and maternal mortality rates, and extensive vaccination coverage. With 
    <span className="font-semibold text-purple-700"> innovative programs like telemedicine and digital health records</span>, 
    Kerala serves as a model for <span className="font-semibold text-blue-700">sustainable health development</span> 
    in India and globally.
  </p>

  <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
    Kerala is widely recognized for its <span className="font-semibold text-green-600">robust public health system</span> 
    and exemplary social indicators, making it a pioneer in achieving the 
    <span className="font-semibold text-blue-600"> Sustainable Development Goals for Health</span>. The state focuses 
    on ensuring <span className="font-semibold text-green-600">universal access to quality healthcare</span>, 
    emphasizing both <span className="font-semibold text-purple-600">preventive and curative services</span>.
    <br /><br />
    Through a network of <span className="font-semibold text-blue-500">primary health centers, government hospitals, 
    and community health programs</span>, Kerala has been able to provide healthcare services that are accessible and 
    affordable to all citizens, including those in remote and tribal areas.  
    <br /><br />
    A major priority is <span className="font-semibold text-green-700">maternal and child health</span>, with high rates 
    of <span className="font-semibold text-blue-500">institutional deliveries</span> and 
    <span className="font-semibold text-purple-500">skilled birth attendance</span>, contributing to one of the lowest 
    <span className="font-semibold text-green-600">infant and maternal mortality rates</span> in India. 
    <br /><br />
    Kerala emphasizes <span className="font-semibold text-blue-600">health education and awareness campaigns</span>, 
    focusing on <span className="font-semibold text-purple-600">nutrition, hygiene, mental health, and lifestyle diseases</span>. 
    Community health workers, including <span className="font-semibold text-green-600">Asha workers and local health committees</span>, 
    play a vital role in monitoring and supporting health initiatives at the grassroots level.  
    <br /><br />
    Furthermore, Kerala has integrated <span className="font-semibold text-blue-500">technology and innovation</span> 
    into its healthcare system through <span className="font-semibold text-purple-500">telemedicine, digital health records, 
    and data-driven monitoring</span> to improve policy planning and service delivery.  
    <br /><br />
    The results are clear: Kerala boasts <span className="font-semibold text-green-700">high life expectancy</span>, 
    <span className="font-semibold text-blue-700">high literacy-driven health awareness</span>, and extensive vaccination 
    coverage across all age groups. By prioritizing <span className="font-semibold text-purple-700">equitable healthcare, 
    preventive measures, and technological innovation</span>, Kerala has become a global model for 
    <span className="font-semibold text-green-600">sustainable health development</span> and continues to inspire other 
    regions to achieve the <span className="font-semibold text-blue-600">health-related Sustainable Development Goals</span>.
  </p>
</div>


  {/* footer */}
<footer className="bg-gray-800 text-white py-6 mt-12">
  <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left space-y-3 sm:space-y-0">
    
    {/* Left side - copyright */}
    <p className="text-xs sm:text-sm">
      &copy; {new Date().getFullYear()} Kerala SDG Health Portal. All rights reserved.
    </p>

    {/* Center - contact info */}
    <p className="text-xs sm:text-sm">
      Contact: <span className="text-green-400 font-semibold">info@keralasdghealth.org</span> | Phone: <span className="text-green-400 font-semibold">+91 7013419797</span>
    </p>

    {/* Right side - slogan */}
    <p className="text-xs sm:text-sm">
      Promoting <span className="text-green-400 font-semibold">health and well-being</span> for all.
    </p>
  </div>
</footer>


  </div>

  </>
  )
}


