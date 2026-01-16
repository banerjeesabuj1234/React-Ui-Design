 
 export default function  RightCardContent({tag , id, color}){
    return (
        
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between ">
                <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold">{id+1}</h2>

            <div>
                    <p  className="text-xl  leading-relaxed text-white mb-14 text-shadow-2xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam dolorem est blanditiis! Delectus, labore.</p>
                
                <div className="flex justify-between">
                    <button style={{backgroundColor:color}} className=" text-white font-medium px-8 py-2  rounded-full">{tag}</button>
                    <button style={{backgroundColor:color}} className=" text-white font-medium px-4 py-2  rounded-full"><i className="ri-arrow-right-line "></i></button>
                </div>
                
             </div>
                

        </div>  
        
    )

 }