// "use client";
// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useRouter } from 'next/navigation'

// function Login() {
//   const { user, signIn } = useAuth();
//   const [name, setName] = useState("");
//   const [uid, setUid] = useState("");
//   const [response, setresponse] = useState("");
//    const router = useRouter()
 

//   function handlesubmit(e) {
//     e.preventDefault();
//     const configuration = {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         uid: uid,
//       }),
//     };
//     fetch("http://127.0.0.1:3000/users/register", configuration).then((res) => {
//       if (res.ok) {
//         res.json().then((data) => {
//           console.log(data);
//           localStorage.setItem("user", JSON.stringify(data)); // Store user data
          

//       if (data.role === "client") {
//         router.push('/application/clientdashboard');
//       } else if (data.role === "admin") {
//         router.push('/application/admin');
//       } else if (data.rolee === "photographer") {
//         router.push('/application/photographerdashboard');
//       } else {
//         router.push('/');
//       }
    
//         });
      
//       } else {
//         res.json().then((error) => setresponse(error.errors));
//       }
//     });
//     e.target.reset();
//   }
//   return (
//     <div>
//       <div className="md:h-screen font-[sans-serif] p-4">
//         <div className="flex flex-col justify-center items-center  bg-white h-full">
//           <div className="grid md:grid-cols-2 items-center gap-y-8 max-w-7xl w-full shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] rounded-xl relative overflow-hidden">
//             <div className="max-md:order-1 p-4 bg-gray-50 h-full">
//               <img
//                 src="https://readymadeui.com/signin-image.webp"
//                 className="max-w-[90%] w-full h-full object-contain block mx-auto"
//                 alt="login-image"
//               />
//             </div>

//             <div className="flex items-center p-6 max-w-md w-full h-full mx-auto">
//               <form className="w-full" onSubmit={handlesubmit}>
//                 <div className="lg:mb-12 mb-8">
//                   <h3 className="text-blue-500 lg:text-3xl text-2xl font-extrabold max-md:text-center">
//                     LogIn to account
//                   </h3>
//                 </div>

//                 <div>
//                   <label className="text-gray-800 text-sm font-semibold block mb-2">
//                     Full Name
//                   </label>
//                   <div className="relative flex items-center">
//                     <input
//                       name="name"
//                       type="text"
//                       required
//                       className="w-full bg-transparent text-sm text-gray-800 border-2 focus:border-blue-500 pl-4 pr-12 py-3.5 outline-none rounded-xl"
//                       placeholder="Enter name"
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="#bbb"
//                       stroke="#bbb"
//                       className="w-[18px] h-[18px] absolute right-4"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         cx="10"
//                         cy="7"
//                         r="6"
//                         data-original="#000000"
//                       ></circle>
//                       <path
//                         d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
//                         data-original="#000000"
//                       ></path>
//                     </svg>
//                   </div>

//                   <label className="text-gray-800 text-sm font-semibold block mb-2">
//                     UID
//                   </label>
//                   <div className="relative flex items-center">
//                     <input
//                       name="name"
//                       type="text"
//                       required
//                       className="w-full bg-transparent text-sm text-gray-800 border-2 focus:border-blue-500 pl-4 pr-12 py-3.5 outline-none rounded-xl"
//                       placeholder="Enter UID"
//                       onChange={(e) => setUid(e.target.value)}
//                     />
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="#bbb"
//                       stroke="#bbb"
//                       className="w-[18px] h-[18px] absolute right-4"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         cx="10"
//                         cy="7"
//                         r="6"
//                         data-original="#000000"
//                       ></circle>
//                       <path
//                         d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
//                         data-original="#000000"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <button
//                     type="submit"
//                     className="w-full shadow-xl py-3 px-4 text-base tracking-wide rounded-xl bg-blue-500 hover:bg-blue-600 text-white border focus:outline-none transition-all"
//                   >
//                     Log In
//                   </button>
//                   <label className="text-gray-800 text-sm font-semibold block mb-2 mt-2 text-center">
//                     Or
//                   </label>
//                   <button
//                     type="button"
//                     onClick={signIn}
//                     className="px-4 py-2.5 w-full mt-6 mb-6 flex items-center justify-center rounded-md text-gray-800 text-sm tracking-wider border-none outline-none bg-gray-100 hover:bg-gray-200"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="22px"
//                       fill="#fff"
//                       className="inline shrink-0 mr-3"
//                       viewBox="0 0 512 512"
//                     >
//                       <path
//                         fill="#fbbd00"
//                         d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
//                         data-original="#fbbd00"
//                       />
//                       <path
//                         fill="#0f9d58"
//                         d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
//                         data-original="#0f9d58"
//                       />
//                       <path
//                         fill="#31aa52"
//                         d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
//                         data-original="#31aa52"
//                       />
//                       <path
//                         fill="#3c79e6"
//                         d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
//                         data-original="#3c79e6"
//                       />
//                       <path
//                         fill="#cf2d48"
//                         d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
//                         data-original="#cf2d48"
//                       />
//                       <path
//                         fill="#eb4132"
//                         d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
//                         data-original="#eb4132"
//                       />
//                     </svg>
//                     Continue with Google
//                   </button>
//                   {/* <p className="text-gray-800 text-sm mt-4 text-center">
//                     Dont have an account?{" "}
//                     <a
//                       href=""
//                       className="text-blue-500 font-semibold hover:underline ml-1"
//                     >
//                       SignUp here
//                     </a>
//                   </p> */}

//                   <div className="flex items-center justify-center gap-4 lg:mt-12 mt-8">
//                     <div className="w-3 h-3 shrink-0 rounded-full bg-blue-600 cursor-pointer"></div>
//                     <div className="w-3 h-3 shrink-0 rounded-full bg-gray-300 cursor-pointer"></div>
//                     <div className="w-3 h-3 shrink-0 rounded-full bg-gray-300 cursor-pointer"></div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400 max-sm:hidden"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation';

function Login() {
  const { user, signIn } = useAuth();
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    const configuration = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        uid: uid,
      }),
    };
    
    fetch("/api/users/register", configuration)
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));

            if (data.role === "client") {
              router.push('/application/clientdashboard');
            } else if (data.role === "admin") {
              router.push('/application/admin');
            } else if (data.role === "photographer") {
              router.push('/application/photographerdashboard');
            } else {
              router.push('/');
            }
          });
        } else {
          return res.json().then((error) => {
            setResponse(error.errors);
            setIsLoading(false);
          });
        }
      })
      .catch(err => {
        console.error("Login error:", err);
        setResponse("Connection error. Please try again.");
        setIsLoading(false);
      });
      
    e.target.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row">
        {/* Left side image - hidden on mobile, shown on md and up */}
        <div className="hidden md:block md:w-1/2 bg-indigo-50 relative">
          <div className="absolute inset-0 bg-blue-500 opacity-10 pattern-dots"></div>
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="object-cover w-full h-full p-6"
            alt="login visual"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-indigo-900/30 to-transparent text-white">
            <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-sm opacity-90">Sign in to continue your journey with us.</p>
          </div>
        </div>

        {/* Login form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-blue-600 text-3xl font-bold">Log In</h3>
            <p className="text-gray-500 mt-2">Please enter your credentials to continue</p>
          </div>

          {response && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {response}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700 text-sm font-medium block mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium block mb-2">
                UID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1 .257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  name="uid"
                  type="text"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                  placeholder="Enter your UID"
                  onChange={(e) => setUid(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 px-4 text-white font-medium rounded-lg ${
                isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg shadow-blue-600/30`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Log In"
              )}
            </button>

            <div className="flex items-center justify-center my-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <p className="mx-4 text-sm text-gray-500">Or</p>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button
              type="button"
              onClick={signIn}
              className="w-full flex items-center justify-center py-3.5 px-4 text-gray-700 font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="mr-3"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;