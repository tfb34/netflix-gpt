import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";


const Login = () =>{

    const [isSignForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignForm)
    }

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = ()=>{
        //validate the form data
       
        const message = checkValidateData(email.current.value,password.current.value)
        console.log(message)
        setErrorMessage(message)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="h-100" src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/US-en-20251020-TRIFECTA-perspective_8a45da41-350f-44b7-b1fa-716f96050491_small.jpg" alt="catalog" />
            </div>
            <form className="absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-90" onSubmit={(e)=>{e.preventDefault()}}>
                <h1 className="text-3xl py-4 font-bold">{isSignForm? "Sign In": "Sign up"}</h1>
                {
                    !isSignForm && (
                        <input type="text"
                            placeholder="Full name"
                            className="p-4 my-4 w-full bg-gray-700"
                            ref={name}
                        />
                    )
                }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" ref={email} />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" ref={password} />
                <p className="text-red-500 font-bold ">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignForm? "Sign In": "Sign up"}</button>
                <p className="pb-4 cursor-pointer" onClick={toggleSignInForm}>{isSignForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</p>

            </form>
        </div>
    )
}

export default Login;