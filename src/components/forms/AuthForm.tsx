'use client'

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoTwitter } from "react-icons/io";

const AuthForm: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 space-y-6">

                <div className="flex justify-center">
                    <IoLogoTwitter className="w-12 h-12 fill-blue-500" />
                </div>

  
                <h2 className="text-center text-2xl font-bold text-gray-900">
                    Sign in to Twitter
                </h2>

                {/* Sign in with Google */}
                <button
                    className="flex items-center text-black justify-center w-full border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition"
                >
                    <FcGoogle className="mr-2 text-xl" />
                    Sign in with Google
                </button>

            </div>
        </div>
    )
}

export default AuthForm
