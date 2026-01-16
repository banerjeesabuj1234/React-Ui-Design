import LeftText from "./LeftText";
import RightText from "./RightText";

 
 export default function Page1Content({Users}){
    return(
        <div className="px-18 pb-16 pt-6 h-[90vh] flex gap-10 items-center">
            <LeftText />
            <RightText Users={Users} />
          
        </div>
    )
 }