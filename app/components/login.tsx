"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EyeIcon,
  ViewOffIcon,
  Message01Icon,
  LockPasswordIcon,
  UserIcon,
} from "hugeicons-react";
import Link from "next/link";
import Image from "next/image";
import googleLogo from "../assets/images/google-logo.png";
import appleLogo from "../assets/images/apple-logo.png";

interface FormData {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMessages: FormErrors = {};
    if (!formData.username) errorMessages.username = "Username is required";
    if (!formData.password) errorMessages.password = "Password is required";

    if (Object.keys(errorMessages).length === 0) {
      //send login request to the server
    }
    setErrors(errorMessages);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Message01Icon size={28} className="text-white" />
            </div>
            <span className="text-3xl font-bold tracking-tight">Chatty</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Connect with
            <br />
            <span className="text-purple-200">friends & family</span>
          </h1>

          <p className="text-lg text-purple-100 max-w-md leading-relaxed">
            Experience seamless conversations with end-to-end encryption. Your
            messages, your privacy, your way.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              End-to-end encrypted
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              Voice & Video calls
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              Group chats
            </span>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-10 justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Message01Icon size={22} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Chatty</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-500">Sign in to continue to your account</p>
          </div>

          {/* Social Login */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
              <Image src={googleLogo} alt="Google" width={20} height={20} />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
              <Image src={appleLogo} alt="Apple" width={20} height={20} />
              <span className="text-sm font-medium text-gray-700">Apple</span>
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">
                or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your email or username"
                  onChange={handleOnChange}
                  className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border ${error.username ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                />
              </div>
              {error.username && (
                <p className="mt-2 text-sm text-red-500">{error.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockPasswordIcon size={18} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  className={`w-full pl-11 pr-12 py-3.5 bg-gray-50 border ${error.password ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ?
                    <ViewOffIcon size={18} />
                  : <EyeIcon size={18} />}
                </button>
              </div>
              {error.password && (
                <p className="mt-2 text-sm text-red-500">{error.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href=""
                className="text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-violet-600 hover:text-violet-700 transition-colors"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
