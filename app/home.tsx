"use client";

import React, { useState } from "react";
import Image from "next/image";
import image2 from './image2.png'

const Home: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Both fields are required.");
            return;
        }

        setError(null);
        console.log("Logging in:", { username, password });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={image2} // Ensure this image file is in the public/images folder
                    alt="Background"
                    layout="fill" // Makes the image behave like a background
                    objectFit="cover" // Ensures the image covers the entire viewport
                    quality={100} // Optional: Adjust image quality (default is 75)
                    priority // Ensures it's loaded as early as possible
                />
            </div>

            {/* Login form */}
            <div className="w-full max-w-md p-8 bg-white bg-opacity-90 shadow-md rounded-md">
                <h1 className="mb-6 text-2xl font-semibold text-center text-gray-700">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;