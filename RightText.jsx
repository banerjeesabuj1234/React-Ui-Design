import RightCard from "./RightCard";

 
 export default function RightText({Users}){
    return (
        <div id="Right" className="h-full flex flex-nowrap gap-10 w-2/3 p-6 rounded-4xl overflow-x-auto ">
            {/* <RightCard />
            <RightCard />
            <RightCard /> */}

            {Users.map(function(elem, idx){
                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
            })}
        </div>
    )
 }