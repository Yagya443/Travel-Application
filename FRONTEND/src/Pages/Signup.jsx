import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {"Welcome Back!"}
                    </h1>

                    <p className="text-gray-500">
                        {"Login to continue your journey"}
                    </p>
                </div>

                <div className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 ">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                            placeholder="Enter your username"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        />
                    </div>

                    <div className="text-right">
                        <button
                            type="button"
                            className="text-sm text-purple-600 hover:text-purple-800"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200 cursor-pointer"
                    >
                        Sign Up
                    </button>
                </div>

                <div className="text-center mt-2 text-sm text-gray-600">
                    Do you have an account?
                    <Link
                        to="/"
                        className="ml-1 text-purple-600 font-semibold hover:text-purple-800"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
