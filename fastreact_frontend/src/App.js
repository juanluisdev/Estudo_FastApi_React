import axios from "axios";
import {useState, useEffect} from "react";

function App() {

  const [ body, setBody] = useState('')
  
  useEffect ( ()=>{
    axios.get("http://localhost:7777/get_data")
          .then((Response) => {
            const data = Response.data
            setBody(data['body'])
          })
          .catch( (e) => {
          })
  }, [])

  return (
    <div>
      {body}
    </div>
  );
}

export default App;
