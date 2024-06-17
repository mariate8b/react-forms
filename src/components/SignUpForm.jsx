
import React from 'react';


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

<input value={username} onChange={(e) => setUsername(e.target.value)} />
   


    export default function SignUpForm() {

        async function handleSubmit(event) {
            event.preventDefault();
            console.log("Hello 👋");
          }
        
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        // Add additional attributes as needed
                        aria-label="Username"
                        required
                    />
                </label>
                <br />
                <label>
                 
                    <input
                        type="password"
                        placeholder="Enter your password"
                        // Add additional attributes as needed
                        aria-label="Password"
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};   
    
    
     

