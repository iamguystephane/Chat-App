"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EyeIcon,
  ViewOffIcon,
  Message01Icon,
  LockPasswordIcon,
  UserIcon,
  Mail01Icon,
  UserCircleIcon,
} from "hugeicons-react";
import Link from "next/link";
import Image from "next/image";
import googleLogo from "../assets/images/google-logo.png";
import appleLogo from "../assets/images/apple-logo.png";

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.firstName) errorMessages.firstName = "First name is required";
    if (!formData.lastName) errorMessages.lastName = "Last name is required";
    if (!formData.username) errorMessages.username = "Username is required";
    if (!formData.email) errorMessages.email = "Email is required";
    if (!formData.password) errorMessages.password = "Password is required";
    if (!formData.confirmPassword)
      errorMessages.confirmPassword = "Please confirm your password";
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      errorMessages.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errorMessages).length === 0) {
      //send signup request to the server
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
      <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-400/15 rounded-full blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Message01Icon size={28} className="text-white" />
            </div>
            <span className="text-3xl font-bold tracking-tight">Chatty</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Start your
            <br />
            <span className="text-purple-200">journey today</span>
          </h1>

          <p className="text-lg text-purple-100 max-w-sm leading-relaxed">
            Join millions of users who trust Chatty for secure, private
            conversations with the people who matter most.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-3xl font-bold">10M+</p>
              <p className="text-purple-200 text-sm">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">150+</p>
              <p className="text-purple-200 text-sm">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-purple-200 text-sm">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white overflow-y-auto">
        <div className="w-full max-w-lg">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Message01Icon size={22} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Chatty</span>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create your account
            </h2>
            <p className="text-gray-500">Fill in your details to get started</p>
          </div>

          {/* Social Login */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
              <Image src={googleLogo} alt="Google" width={20} height={20} />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
              <Image src={appleLogo} alt="Apple" width={20} height={20} />
              <span className="text-sm font-medium text-gray-700">Apple</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">
                or sign up with email
              </span>
            </div>
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-4">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <UserIcon size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    onChange={handleOnChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.firstName ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm`}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <UserIcon size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    onChange={handleOnChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.lastName ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm`}
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <UserCircleIcon size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="johndoe"
                  onChange={handleOnChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.username ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm`}
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-xs text-red-500">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail01Icon size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  onChange={handleOnChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <LockPasswordIcon size={16} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create password"
                    onChange={handleOnChange}
                    className={`w-full pl-10 pr-10 py-3 bg-gray-50 border ${errors.password ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ?
                      <ViewOffIcon size={16} />
                    : <EyeIcon size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <LockPasswordIcon size={16} className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    onChange={handleOnChange}
                    className={`w-full pl-10 pr-10 py-3 bg-gray-50 border ${errors.confirmPassword ? "border-red-400" : "border-gray-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ?
                      <ViewOffIcon size={16} />
                    : <EyeIcon size={16} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  href=""
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href=""
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/"
              className="font-semibold text-violet-600 hover:text-violet-700 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
