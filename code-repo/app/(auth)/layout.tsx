export default function({children} : {
    children : React.ReactNode
}) {
    return (
        <div className="bg-black-500">
            <div className="p-1 font-mono bg-black-400 border-b text-center text-bold">
                Login now to get 20% off
            </div>
            {children}
        </div>
        
    )
}