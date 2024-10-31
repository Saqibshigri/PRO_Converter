import { useState } from "react";
import { FaFileWord } from "react-icons/fa";
import axios from 'axios'
const Home = () => {
    const [convert, setConvert] = useState("")
  const submitHandle = async (e)=>{
       e.preventDefault();
       if(!selectfile)
       {
         setConvert("Please select file");
         return
       }
       const formData = new FormData();
       formData.append("file" , selectfile);
      try {
        const response = await axios.post("http://localhost:3000/convertfile", formData,{
          responseType: 'blob'
         })
        
         const url = window.createObjectURL(new Blob([Response.data]))
          const link = document.createElement("a ")
        } catch (error) {
          console.log(error);
          
      }
    }
  
    const [selectfile, setSelectfile] = useState( null)
     const handleChange = (e)=>{
      setSelectfile(e.target.files[0])      
    }
  return (
 <>
 
 <div className="max-w-screen-2xl mx-auto container px-6 md:px-40">
    <div className="flex h-screen items-center justify-center">
        <div className="border-2 border-dashed px-4 py-2 md:px-8 md:py-6 shadow-lg border-indigo-400 rounded">
            <h1 className="text-3xl font-bold mb-4 text-center">Word to pdf</h1>
            <p className="text-sm text-center mb-5"> Easily convert Word Document into pdf</p>
       
       <div className="flex flex-col items-center space-y-4">
       <label className="w-full items-center justify-center px-4 bg-gray-100 py-6 text-gray-700 rounded-lg shadow-lg cursor-pointer border-blue-50 hover:bg-blue-300 duration-300"  htmlFor="FileInput"><FaFileWord /> <span className="text-3xl font-bold mr-2" > {selectfile?selectfile.name:"Choose File"} </span>
       </label>
        <input onChange={handleChange} type="file" id="FileInput" className="hidden" accept=".doc,.docx" />
        <button onClick={submitHandle} disabled={!selectfile} className="text-white bg-blue-500 disabled:bg-gray-400 font-bold p-3 transition-all ease-in-out  hover:scale-125 duration-300px-4 py-2 rounded-lg">Convert File</button>
       </div>
    </div>
 </div>
 </div>
 </>  )
}

export default Home