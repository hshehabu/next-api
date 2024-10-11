import { useRouter } from "next/router";

export default function Car(){
    const router = useRouter()

    const {id} = router.query

    return (
        <div>
            <h1>Car Details: {id}</h1>
        </div>
    )
 
}