import { useState } from "react";

const Authentication = () => {
  const [Action, setAction] = useState<string>("Register");

  return (
    <div className="h-full border-2 shadow-md flex flex-col items-center justify-center w-[30%] gap-12">
      <h1 className="text-5xl font-extrabold text-slate-800">
        Welcome to <span className="text-purple-800">LikeGram </span>
      </h1>
      <div>
        {Action === "Register" ? (
          <h4 className="text-4xl font-extrabold text-slate-600">
            Register a new <span className="text-purple-800">Account</span>
          </h4>
        ) : (
          <h4 className="text-4xl font-extrabold text-slate-600">
            Login to your <span className="text-purple-800">Account</span>
          </h4>
        )}
      </div>
      <form className="flex flex-col w-[80%] gap-4 ">
        <input
          type="email"
          required
          placeholder="email"
          className="outline-none border-2 shadow-sm font-bold px-4 py-2 rounded-md  focus:border-purple-400"
        />
        {Action === "Register" && (
          <input
            type="text"
            required
            placeholder="username"
            className="outline-none border-2 shadow-sm font-bold px-4 py-2 rounded-md  focus:border-purple-400"
          />
        )}
        <input
          type="password"
          required
          placeholder="password"
          className="outline-none border-2 shadow-sm font-bold px-4 py-2 rounded-md  focus:border-purple-400"
        />
        {Action === "Register" ? (
          <button className="border-2 shadow-md py-3 rounded-md font-bold bg-purple-800 text-white">
            Create New Account
          </button>
        ) : (
          <button className="border-2 shadow-md py-3 rounded-md font-bold bg-purple-800 text-white">
            Continue to Account
          </button>
        )}
      </form>
      <div className="w-full gap-4 items-center flex flex-col ">
        <div className="w-[60%] border-t-2 shadow-md "></div>
        <div className="flex flex-col gap-2 items-center ">
          <p className="text-sm text-gray-600 font-bold ">or continue with </p>
          <button className="border-2 shadow-sm py-3 rounded-md font-bold px-8 border-purple-800 text-purple-800 ">
            Continue With Google
          </button>
        </div>
        {Action === "Register" ? (
          <p className="text-sm text-gray-600 font-semibold">
            Already have an account.{" "}
            <span
              className="text-purple-800 cursor-pointer font-bold text-base"
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </span>{" "}
            to your Account
          </p>
        ) : (
          <p className="text-sm text-gray-600 font-semibold">
            Not have an account.{" "}
            <span
              className="text-purple-800 cursor-pointer font-bold text-base"
              onClick={() => {
                setAction("Register");
              }}
            >
              create
            </span>{" "}
            a new Account
          </p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
