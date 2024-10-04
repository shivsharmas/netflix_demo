import React, { useState } from "react";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSignup= ()=>{
    setLogin(!isLogin)
  }
  return (
    <div>
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
          alt="background image"
        />
      </div>

      {/* Form create */}
      <form className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-between absolute bg-black opacity-90">
        <h1 className="text-3xl text-white mb-3 font-bold">{isLogin ? "Login" : "Signup"}</h1>
        <div className="flex flex-col">
        {
          !isLogin && (<input
          value={fullName} onChange={(e)=> setFullName(e.target.value)}
            type="text"
            placeholder="FullName"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />)
        }
          
          <input
          value={email} onChange={(e)=> setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
          value={password} onChange={(e)=> setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button className="text-white bold-medium bg-red-700 p-2 mt-4">{isLogin?"Login":"Signup"}</button>
          <p className="text-white mt-2">{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={handlerSignup} className="text-blue-900 cursor-pointer">{isLogin ?" Signup":" Login"}</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
