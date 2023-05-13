import axios from "axios";

let baseURL = ""

if(process.env.NODE_ENV === "development"){
  baseURL = "http://localhost:3001"
} else {
  baseURL = `${process.env.REACT_APP_BACKEND_URL}`
}

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(baseURL + "/users/signin", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
