'use client'
import { useRouter } from "next/navigation"
const HomePage = ()=>{
    const router = useRouter();
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <button onClick={()=>router.push("/login")}>LOGIN TO THE PAGE</button>
        </div>
    )
}
export default HomePage;