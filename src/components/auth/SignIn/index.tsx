import React, { useState } from "react";
import SignInScreen from "../../../assets/images/signIn.png";
import { CustomButton, CustomInput } from "../../common";
import Logo from "../../../assets/logo/budgetree.png";
import { Link } from "react-router-dom";
import { userSignIn } from "../../../services/auth/signIn";

interface SignInInterface {
  // Define your interface properties here
}

const SignIn: React.FC<SignInInterface> = () => {
  const [value, setValue] = useState<string>("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await userSignIn(value);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <main className='flex flex-col md:flex-row h-screen'>
      <section className='md:w-[50%] w-full border-2 '>
        <img src={Logo} alt='Logo' className='w-40 py-2 px-2' />
        <div className='flex items-center justify-center'>
          <img src={SignInScreen} alt='SignInScreen' />
        </div>
      </section>
      <section className='md:w-[50%] w-full flex items-center justify-center '>
        <form
          action=''
          onSubmit={submitHandler}
          className='flex flex-col items-center  gap-5 p-10 md:p-40 rounded w-full'
        >
          <img src={Logo} alt='Logo' className='w-40' />
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor=''>Your Email or Phone Number</label>
            <input
              type='text'
              name='Email'
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className='w-full p-2 border-[1px] rounded'
              placeholder='Your Email or Phone Number'
            />
          </div>

          <button
            type='submit'
            className='text-sm rounded py-2 px-6 bg-[#213e97] text-white w-full'
          >
            GET OTP
          </button>
          <span className='text-sm '>
            Don't have an account?{" "}
            <Link to={""} className='text-blue-600 font-semibold'>
              Sign Up
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
