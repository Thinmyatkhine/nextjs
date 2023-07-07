export default function Fruit({item}:any){
    return (
        <div
          className="w-[300px] flex bg-black text-slate-200 py-2 px-3 uppercase rounded"
        >
          {item.name}
        </div>
    )
}