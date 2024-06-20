import { ScaleIcon , ComputerDesktopIcon ,BriefcaseIcon , WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
export default function Features () {
    return (
        
        <div className="bg-white py-24 w-full">
            <h2 className="text-4xl text-center pb-24">فرص تدريبة  في جميع التخصصات</h2>
            <div className="flex flex-wrap justify-center">
                
                    <div className="group border shadow-lg flex w-1/12 m-12 px-48 pt-16 pb-32 rounded-xl flex-col items-center hover:bg-primary-color">
                        <div className="bg-primary-color p-5  border rounded-md shadow-lg group-hover:bg-main-font-color">
                            <ScaleIcon className="text-sm w-16 h-16 text-main-font-color group-hover:text-white"/>
                            
                        </div>
                        <p className="text-4xl text-center font-extrabold mt-12">القانون</p>
                        

                    </div>
                
                
                    <div className="group border shadow-lg flex w-1/12 m-12 px-48 pt-16 pb-32 rounded-xl flex-col items-center hover:bg-primary-color">
                        <div className="bg-primary-color p-5  border rounded-md shadow-lg group-hover:bg-main-font-color">
                            <ComputerDesktopIcon className="text-sm w-16 h-16 text-main-font-color group-hover:text-white"/>
                            
                        </div>
                        <p className="text-4xl text-center font-extrabold mt-12">الحاسب</p>
                        

                    </div>
                

                
                    <div className="group border shadow-lg flex w-1/12 m-12 px-48 pt-16 pb-32 rounded-xl flex-col items-center hover:bg-primary-color">
                        <div className="bg-primary-color p-5  border rounded-md shadow-lg group-hover:bg-main-font-color">
                            <BriefcaseIcon  className="text-sm w-16 h-16 text-main-font-color group-hover:text-white"/>
                            
                        </div>
                        <p className="text-4xl text-center font-extrabold mt-12">ادارة الاعمال</p>
                        

                    </div>
                

                
                    <div className="group border shadow-lg flex w-1/12 m-12 px-48 pt-16 pb-32 rounded-xl flex-col items-center hover:bg-primary-color">
                        <div className="bg-primary-color p-5  border rounded-md shadow-lg group-hover:bg-main-font-color">
                            <WrenchScrewdriverIcon className="text-sm w-16 h-16 text-main-font-color group-hover:text-white"/>
                            
                        </div>
                        <p className="text-4xl text-center font-extrabold mt-12">الهندسة</p>
                        

                    </div>
                
                
            </div>
        </div>

        
           
        
    )
}