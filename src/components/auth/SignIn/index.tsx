import React, { useState } from "react";
import SignInScreen from "../../../assets/images/signIn.png";
import { CustomButton, CustomInput } from "../../common";
import Logo from "../../../assets/logo/budgetree.png";
import { Link, useNavigate } from "react-router-dom";
import { userSignIn } from "../../../services/auth/signIn";
import toast from "react-hot-toast";

interface SignInInterface {
  // Define your interface properties here
}

const SignIn: React.FC<SignInInterface> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [isShowOtp, setIsShowOtp] = useState<boolean>(false);

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    const nextSibling: any = e.target.nextElementSibling;
    if (nextSibling && e.target.value) {
      nextSibling.focus();
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!isShowOtp) {
        toast.success("OTP sent successfully");
        setIsShowOtp(true);
      } else {
        if (otp.join("") == "8080") {
          const response: any = await userSignIn(email);
          console.log(response);
          navigate("/integration-dashboard/manage-integration");
          toast.success("User logged in successfully");
        } else {
          toast.error("Invalid OTP");
        }
      }
    } catch (error) {
      toast.error("User not found");
    } finally {
    }
  };

  return (
    <main className='w-screen h-screen px-auto flex items-center justify-center bg-[#f0f4f7]'>
      <section className='flex w-[70%] border-[1px] border-red-500 shadow-xl rounded-xl bg-white'>
        <section className='md:w-[50%] w-full border-2 rounded-l-xl'>
          <img src={Logo} alt='Logo' className='w-40 py-2 px-2 rounded-xl' />
          <div className='flex items-center justify-center'>
            <img src={SignInScreen} alt='SignInScreen' />
          </div>
        </section>
        <section className='md:w-[50%] w-full flex items-center justify-center '>
          <form
            action=''
            onSubmit={submitHandler}
            className='flex flex-col items-center  gap-5 p-10 md:p-20 rounded w-full'
          >
            <img src={Logo} alt='Logo' className='w-40' />
            <p className='text-gray-600 text-[15px] '>
              Sign in to continue to budgetree
            </p>
            <div className='flex flex-col gap-2 w-full'>
              <label
                htmlFor=''
                className='text-[14px] fonnt-500 leading-3 text-gray-700 '
              >
                Your Phone Number
                <span className='text-red-500 font-semibold text-[16px]'>
                  *
                </span>
              </label>
              <input
                type='text'
                name='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='w-full p-2 border-[1px] rounded'
                placeholder='Your Email or Phone Number'
              />
            </div>
            {isShowOtp && (
              <div className='flex  flex-col gap-2 w-full'>
                <label
                  htmlFor=''
                  className='text-[14px] leading-3 text-gray-700 '
                >
                  Enter OTP
                </label>
                <div className='flex  gap-10 px-4'>
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      type='text'
                      required
                      onChange={(e) => handleOtpChange(e, index)}
                      maxLength={1}
                      className='w-12 p-2 border-[1px] rounded text-center'
                      placeholder='0'
                    />
                  ))}
                </div>
              </div>
            )}

            <button
              type='submit'
              className='text-sm rounded py-2 px-6 bg-[#213e97] text-white w-full'
            >
              GET OTP
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default SignIn;
