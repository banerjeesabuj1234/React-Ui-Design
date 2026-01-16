import RightCardContent from "./RightCardContent";

 
 export default function RightCard({img, tag, intro, id, color}){
    return(
        <div className="h-full w-80 rounded-4xl  overflow-hidden relative shrink-0">
            <img className="h-full w-full object-cover" src={img} alt="" />
            
            <RightCardContent tag={tag} id={id} intro={intro} color={color} />
        </div>
    )
 }