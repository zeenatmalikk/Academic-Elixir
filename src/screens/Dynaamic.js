import React , { useEffect , useState }from 'react'
import axios from "axios"
const Dynaamic = () => {

const [data, setData] = useState()

    useEffect(() => {
    
        axios.get(`http://localhost:5000/`)
        .then((response)=>  { 
            
    setData(response.data.data)

    })
        .catch((err)=>{ console.log("err" , err) })
       
    }, [])

    console.log("valuefqedifqeqfhq" , data);


    return (
        <div>
            {  data?  data.map((item)=> <h1>{item.name}</h1>) :"no data"}
        </div>
    )
}
 
export default Dynaamic
