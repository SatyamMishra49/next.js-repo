"use client"
export function ButtonSignup() {
    function handlers() {
        console.log("clicked")
    }
    return <div>
        <button onClick={ handlers } type="button" className="mt-8 w-full text-white bg-lime-700 focus:ring-4 focus:ring-rose-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Sign up</button>
    </div>
}