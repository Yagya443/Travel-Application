import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const loginMutation = useMutation({
        mutationFn: async ({ email, password }) => {
            const response = await axios.post(
                `${import.meta.env.VITE_RENDER_URL}`,
                {
                    email,
                    password,
                },
            );
            return response.data;
        },

        onSuccess: (data) => {
            localStorage.setItem("token", data.token);

            navigate("/dashboard");
        },

        onError: (error) => {
            console.log(error);
        },
    });

    const handleSubmit = () => {
        loginMutation.mutate({
            email: formData.email,
            password: formData.password,
        });
    };

    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
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
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
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
                        <div className="flex items-center gap-4 rounded-lg ">
                            <input
                                type={showPassword ? "text" : "password"}
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
                            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                {showPassword ? (
                                    <FaEye size={30} />
                                ) : (
                                    <FaEyeSlash size={30} />
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200 cursor-pointer"
                    >
                        {loginMutation.isPending ? "Logging in..." : "Login"}
                    </button>
                </div>

                <div className="text-center mt-2 text-sm text-gray-600">
                    Do you have an account?
                    <Link
                        to="/signup"
                        className="ml-1 text-purple-600 font-semibold hover:text-purple-800"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
