
// // import { createContext, useEffect, useReducer } from "react";
// // import axios from "axios";

// // export const AuthContext=createContext()

// // const Reducer=(state,action)=>{
// // switch (action.type) {
// //     case "LOGIN":
// //         return{...state,user:action.payload}
// //     case "LOGOUT":
// //         return {...state,user:null}

// //     default:
// //        return state
// // }
// // }
// // const InitailState={user:null}


// // const AuthContextComponent=({children})=>{
// //     const[state,dispatch]= useReducer(Reducer,InitailState)

// //     function LOGIN(data){
// //         dispatch({type:"LOGIN",payload:data})
// //     }

// //     function LOGOUT(){
// //         dispatch({type:"LOGOUT"})
// //     }

// //    async function getuserData(token){
// //         try{
// //             const response=await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/get-current-user`,{token})
// //             // const response={data:{success:true , message:"login suucessfulr",user:{name:"shabaaj",email:"shabaaj@1234"}}}
// //             if(response.data.success){
// //                 LOGIN(response.data.user)   
// //             }
// //         }catch(error){
// //             console.log(error);
           
// //         }
// //     }

// //     useEffect(()=>{
// //         const token=JSON.parse(localStorage.getItem("token"))
// //         if(token){
// //             getuserData(token)
// //         }
// //     },[])
    
// // return(
// //     <AuthContext.Provider value={{state,LOGIN,LOGOUT,dispatch}}> 
// //         {children}
// //     </AuthContext.Provider>
// // )
// // }
// // export default AuthContextComponent








// import { createContext, useEffect, useReducer } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// const Reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, user: action.payload };
//     case "LOGOUT":
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// const InitialState = { user: null };

// const AuthContextComponent = ({ children }) => {
//   const [state, dispatch] = useReducer(Reducer, InitialState);

//   const LOGIN = (data) => {
//     dispatch({ type: "LOGIN", payload: data });
//   };

//   const LOGOUT = () => {
//     dispatch({ type: "LOGOUT" });
//     localStorage.removeItem("token");
//   };

//   const getUserData = async (token) => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/get-current-user`, { token });
//       if (response.data.success) {
//         LOGIN(response.data.user);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     if (token) {
//       getUserData(token);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ state, LOGIN, LOGOUT, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextComponent;


import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const AuthContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const InitialState = { user: null };

const AuthContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const LOGIN = (data) => {
    localStorage.setItem("user", JSON.stringify(data));  // Save user data to localStorage
    dispatch({ type: "LOGIN", payload: data });
  };

  const LOGOUT = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");  // Remove user data from localStorage
    dispatch({ type: "LOGOUT" });
  };

  const getUserData = async (token) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/get-current-user`, { token });
      if (response.data.success) {
        LOGIN(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        getUserData(token);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, LOGIN, LOGOUT, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
