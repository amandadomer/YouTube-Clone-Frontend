import { useState } from "react";


const ApiKey = () => {
    const [apiKey] = useState('AIzaSyAAiHVRecDLjPkaI_CCi4FLoosrYz3F33M');

return(
    <div>
        <p>{`${apiKey}`}</p>
    </div>
    )
}

export default ApiKey