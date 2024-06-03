// // import React, { useContext, useEffect, useState } from 'react'
// // import '../style/navbar.css'
// // import { Link} from 'react-router-dom'
// // import {AuthContext} from '../context/AuthContext.js'

// // export const Navbar = () => {
// //   const{state,LOGOUT}=useContext(AuthContext)
// //   const [showProfile, setShowProfile] = useState(false);


// //   const handleShowProfile=()=>{
// //     setShowProfile((prevalue=>!prevalue))
// //   }

 
     

// //   useEffect(() => {
// //     if (showProfile) {
// //       setTimeout(() => {
// //         setShowProfile(false);
// //       }, 3000);
// //     }
// //     return () => clearTimeout(showProfile);
// //   }, [showProfile]);

// //   return (
// //     <div className='navbar-main'>
// //         <div>
// //           <Link to={'/'} ><img className='w-h100' src='https://www.logoground.com/uploads12/dv12y2023510712023-12-194852706K%20Diamond.jpg' /></Link>
// //         </div>
// //         <div>
// //         <div >
// //           <Link to={'/rules'}>Rules & Regulation</Link>
// //         </div>
        
// //           <div >
// //             <Link to={'/live-bids'}>Live Bids</Link>
// //           </div>
// //         </div>

// //         <div>
// //           <div>
// //             <Link to={'/notification'}><i class="fa-solid fa-bell"></i></Link>
// //           </div>
// //           <div>
// //             <Link to={'/add-cart'}><i class="fa-solid fa-cart-shopping"></i></Link>
// //           </div>
          
// //           {/* <div>
// //             <Link to={'/register'}>
// //             <i class="fa-solid fa-user"></i></Link>
// //           </div> */}

// // <div className="text-xl text-slate-600 pr-4 md:pr-2" onClick={handleShowProfile} >
// //             <div className="text-3xl cursor-pointer ">
// //             {state?.user?.firstname ? (<p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl  font-bold text-center white-200">{state.user.firstname.slice(0,1).toUpperCase()}</p>) : ( <p><i class="fa-regular fa-circle-user"></i></p>)}
// //             </div>
// //             {showProfile && (
// //               <div  className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
// //                 {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && <Link to={'new-product'} className="whitespace-nowrap cursor-pointer">New Product</Link>}
                
                
// //                 {state?.user?.firstname? <p><p>{state?.user?.firstname.toUpperCase()}</p><button onClick={()=>LOGOUT()}>LOGOUT</button><p></p></p>:<Link to={'login'} className="whitespace-nowrap cursor-pointer">Login</Link>}
// //               </div>
// //             )}
// //           </div>

// //         </div>
// //       </div>
// //   )
// // }

 
// import React, { useContext, useEffect, useState } from 'react';
// import '../style/navbar.css';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext.js';

// export const Navbar = () => {
//   const { state, LOGOUT } = useContext(AuthContext);
//   const [showProfile, setShowProfile] = useState(false);

//   const handleShowProfile = () => {
//     setShowProfile((prevValue) => !prevValue);
//   };

//   useEffect(() => {
//     if (showProfile) {
//       const timer = setTimeout(() => {
//         setShowProfile(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showProfile]);

//   return (
//     <div className='navbar-main'>
//       <div>
//         <Link to={'/'}><img className='w-h100' src='https://www.logoground.com/uploads12/dv12y2023510712023-12-194852706K%20Diamond.jpg' /></Link>
//       </div>
//       <div>
//         <div>
//           <Link to={'/rules'}>Rules & Regulation</Link>
//         </div>
//         <div>
//           <Link to={'/live-bids'}>Live Bids</Link>
//         </div>
//       </div>
//       <div>
//         <div>
//           <Link to={'/notification'}><i className="fa-solid fa-bell"></i></Link>
//         </div>
//         <div>
//           <Link to={'/add-cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
//         </div>
//         <div className="text-xl text-slate-100 text-slate-600 pr-4 md:pr-2" onClick={handleShowProfile}>
//           <div className=" cursor-pointer">
//             {state?.user?.firstname ? (
//               <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center white-200">
//                 {state.user.firstname.slice(0, 1).toUpperCase()}
//               </p>
//             ) : (
//               <p>
//                 {/* <i className="fa-regular fa-circle-user"></i> */}
//                 <i class="fa-solid fa-user"></i>
//               </p>
//             )}
//           </div>
//           {showProfile && (
//             <div className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
//               {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && <Link to={'/new-product'} className="whitespace-nowrap cursor-pointer">New Product</Link>}
//               {state?.user?.firstname ? (
//                 <p>
//                   <p>{state?.user?.firstname.toUpperCase()}</p>
//                   <button onClick={() => LOGOUT()}>LOGOUT</button>
//                 </p>
//               ) : (
//                 <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };











import React, { useContext, useEffect, useState } from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

export const Navbar = () => {
  const { state, LOGOUT } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (showProfile) {
      const timer = setTimeout(() => {
        setShowProfile(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showProfile]);

  return (
    <div className='navbar-main'>
      <div>
        <Link to={'/'}><img className='w-h100' src='https://www.logoground.com/uploads12/dv12y2023510712023-12-194852706K%20Diamond.jpg' /></Link>
      </div>
      <div>
        <div>
          <Link to={'/rules'}>Rules & Regulation</Link>
        </div>
        <div>
          <Link to={'/live-bids'}>Live Bids</Link>
        </div>
      </div>
      <div>
        <div>
          <Link to={'/notification'}><i className="fa-solid fa-bell"></i></Link>
        </div>
        <div>
          <Link to={'/add-cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
        <div className="text-xl text-slate-100 pr-4 md:pr-2" onClick={handleShowProfile}>
          <div className="cursor-pointer">
            {state?.user?.firstname ? (
              <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center">
                {state.user.firstname.slice(0, 1).toUpperCase()}
              </p>
            ) : (
              <p>
                <i className="fa-solid fa-user"></i>
              </p>
            )}
          </div>
          {showProfile && (
            <div className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
              {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && (
                <Link to={'/new-product'} className="whitespace-nowrap cursor-pointer">New Product</Link>
              )}
              {state?.user?.firstname ? (
                <p>
                  <p>{state?.user?.firstname.toUpperCase()}</p>
                  <button onClick={() => LOGOUT()}>LOGOUT</button>
                </p>
              ) : (
                <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
