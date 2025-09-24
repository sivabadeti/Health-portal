import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert(data.message);
        setEmail("")
        setPassword("")
        navigate("/Home");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("something wrong in try");
    }
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center justify-center px-4">

      {/* image */}
      <div className="mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
        <img 
          src="/loginpagepic.png" 
          alt="Img not found"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* login box */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm sm:max-w-md">
        <h1 className="font-bold text-3xl mb-6 text-center text-gray-800">Login</h1>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-black text-black"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-black text-black"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-200"
          >
            Log in
          </button>
        </form>

        <div className="flex justify-center">
          <Link 
            to="" 
            className="text-blue-500 hover:underline mt-6 inline-block text-sm"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
