import { Deluxe } from "./componets/Deluxe"
import "./App.css"
import { generateToken } from "./utils/generateToken"
import { useEffect, useState } from "react"

export function App() {
    const [jwt, setJwt] = useState<any>(null)
    useEffect(() => {
        generateToken().then(setJwt)
    }, [])



    return (
        <div>
            <div> hey hey</div>
            {jwt && <Deluxe jwt={jwt} />}
        </div>
    )
}

export default App
