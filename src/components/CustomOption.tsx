
export default function CustomOption(Props:{op:Array<string>}){


    return (<>{
        Props.op.map((op:string)=>{
            return <li className="bg-indigo-50"><a href="#">{op}</a></li>
        })
    }</>)
}