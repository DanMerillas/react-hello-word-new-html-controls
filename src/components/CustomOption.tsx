
export default function CustomOption(Props:{op:Array<string>}){

    return (<>{
        Props.op.map((op:string)=>{
            return <li className="bg-red-800 text-white text-[20px]"><a href="#">{op}</a></li>
        })
    }</>)
}