import './login.css'
import { Link } from 'react-router-dom';

function Login() {    
    
    return (
      <>
         <div className="w-full min-h-screen flex items-center justify-center loginpage">
            <div className="w-[31%] h-auto py-7 px-10 logincard">
                <div className="w-full h-auto">                    
                    <p className="text-sm text-black font-bold mb-2">Sign in with your social account</p>                    
                </div>
                <div className="w-full h-auto flex items-center gap-2">
                    <div className="w-1/2 h-auto">
                        <button className="w-full h-8 p-4 outline-none bg-blue-800 border-[1px] border-gray-400  text-white flex items-center justify-center gap-x-10 hover:bg-blue-900 ease-out duration-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
                        Facebook
                        </button>
                    </div>
                    <div className="w-1/2 h-auto">
                        <button className="w-full h-8 p-4 outline-none bg-transparent border-[1px] border-gray-400 text-black flex items-center justify-center gap-x-10 hover:bg-gray-200 ease-out duration-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft" viewBox="0 0 16 16"><path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/></svg>
                        Microsoft
                        </button>
                    </div>
                </div>
                <div className="w-full h-auto flex items-center gap-x-1 my-5 mb-2">
                    <div className="w-4/5 h-[1.5px] bg-gray-400 rounded-md"></div>
                        <p className="text-sm text-black font-bold px-2"><strong>OR</strong></p>
                    <div className="w-2/4 h-[1.5px] bg-gray-400 rounded-md"></div>
                </div>
                <div className="w-full h-auto">                    
                    <p className="text-sm text-black font-bold mb-2">Sign in with your email address</p>
                </div>
                <div>
                    <label htmlFor="emailaddress" className="block text-xs text-black font-bold mb-1">Email Address</label>
                    <input type="text" id="emailaddress" className="w-full h-8 p-4 outline-none bg-transparent border-[1px] border-gray-300 text-black text-xs" placeholder="Email Address"/>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-x-2">
                        <label htmlFor="password" className="block text-xs text-black font-bold">Password</label>                        
                        <Link className="text-blue-500 text-xs font-medium hover:underline ease-out duration-500">Forgot Password?</Link>
                    </div>
                    <input type="password" id="password" className="w-full h-8 p-4 outline-none bg-transparent border-[1px] border-gray-300 text-black text-xs mb-2" placeholder="Password"/>                                                                                            
                </div>                                

                <button className="w-20 h-8 outline-none bg-blue-600 text-sm text-white font-medium mb-2">
                    <Link to="/formulario">Sign In</Link>
                </button>

                <div className="flex items-left gap-x-1">
                    <p className="text-black text-xs font-bold">Don't have an account?</p>
                    <Link className="text-blue-500 text-xs font-medium hover:underline ease-out duration-500">Sign up now</Link>
                </div>
            </div>    
        </div>
      </>
    )
  }
  
  export default Login