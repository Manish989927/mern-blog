import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import { Alert, Label, Spinner, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { useDispatch,useSelector } from "react-redux";
import { signInSuccess, signInStart, signInFailure } from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null); // Fixed: Set initial value to null
  // const [loading, setLoading] = useState(false);
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // Fixed: Return early with correct error message
      return dispatch(signInFailure('Please fill all the field'));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success==false){
        //setLoading(false);
        dispatch(signInFailure(data.message));
      }

      // console.log(formData);
      //setLoading(false);
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="font-semibold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Manish's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo blog website where you can share your thoughts and
            ideas with the world. you can sign in with your email and password
            or with Google.
          </p>
        </div>

        {/* right side div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading...</span>
                  </>
                ):(
                  'Sign In'
                )
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <p className="">
              Do not have an account?{" "}
              <Link to="/sign-up" className="text-purple-500">
                Sign Up
              </Link>
            </p>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='red'>
              {errorMessage} {/* Fixed: Display the error message */}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
