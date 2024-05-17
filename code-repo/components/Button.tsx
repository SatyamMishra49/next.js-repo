"use client"
export function Button() {
    function handler() {
        console.log("clicked")
    }
    return <div>
        <button onClick={ handler } type="button" className="mt-8 w-full text-white bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    </div>
}