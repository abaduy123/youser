import Image from "next/image"
import {coop_data} from "@/app/lib/coop-details"
import src from "@/public/placeHolder.png" 
import {MapPinIcon} from "@heroicons/react/24/outline"
export default function CoopDetails () {
    
    return (
        
        <div className="bg-primary-color py-24 flex flex-wrap justify-center gap-2 ">
            
            {coop_data.map((co)=>{
                return (
                    <div key={co.coop_opportunity_provider} className="shadow-md border rounded-xl mx-auto bg-white p-6 m-6 w-full sm:w-full md:w-1/2 lg:w-1/3 ">
                        <div className="flex justify-between items-center gap-5">
                            <div className="flex ">
                                <Image src={co.coop_opportunity_provider_logo || src} alt="no image" width={80} height={60} className="border rounded-xl p-1 shadow-md max-h-12"/>
                                <p className="mx-4 font-bold">{co.coop_opportunity_provider}</p>
                                
                            </div>
                            <p className="bg-primary-color text-main-font-color rounded-full p-1 text-center">{co.training_preference}</p>
                             

                        </div>
                        {co.majors.map ((major) => {return(<p key={major} className="font-bold mt-8 inline-block">{`${major},`}</p>)})}
                        <span>...</span>
                        <div className="my-8 flex">
                            <MapPinIcon className="text-sm w-8 h-8 text-main-font-color "/>
                            {co.city.map((city)=>{return (<p key={city} className="mx-1 inline-block">{`${city}`}</p>)})}
                            
                             
                        </div>
                        
                        <a className="bg-main-font-color text-white py-2 px-16 border rounded-md block w-full text-center" href={co.applying_link}>سجل</a>
                        
                    </div>

                )        
    })}
            
        </div>

        
           
        
    )
}