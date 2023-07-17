export default function TailwindUI() {
    return (
        <main className="w-screen h-screen flex flex-col items-center gap-[5rem]">
            <div className="mt-[5rem]"></div>

            {/* Position: Relative */}
            <div className="w-[50%] border border-black rounded">
                <h3 className="bg-blue-300 text-center">content 1</h3>
                <h3 className="relative bg-indigo-500 text-center">this content is relative</h3>
                <h3 className="bg-pink-300 text-center">content 2</h3>
            </div>

            {/* Position: Absolute */}
            <div className="w-[50%] border border-black rounded">
                <h3 className="bg-blue-300 text-center">content 1</h3>
                <h3 className="absolute top-0 bg-indigo-500 text-center">this content is absolute</h3>
                <h3 className="bg-pink-300 text-center">content 2</h3>
            </div>


            {/* Position: Absolute inside the Relative container */}
            <div className="relative w-[50%] border border-black rounded">
                <h3 className="bg-blue-300 text-center">content 1</h3>
                <h3 className="absolute top-0 bg-indigo-500 text-center">this content is absolute</h3>
                <h3 className="bg-pink-300 text-center">content 2</h3>
            </div>
        </main>
    )
}