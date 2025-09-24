import { useState } from "react";
import Toast from "./toast";

export default function Upload() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState(null);
  const [disease, setDisease] = useState("");
  const [date, setDate] = useState("");
   const [toast, setToast] = useState(null);
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);
      formData.append("gender", gender);
      formData.append("address", address);
      formData.append("district", district);
      formData.append("number", number);
      formData.append("disease", disease);
      formData.append("file", file);
      formData.append("date", date);

      const res = await fetch("http://localhost:4000/details", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

     if (res.ok) {
      setToast({ message: data.message, type: "success" });
      setName(""); setAge(""); setGender("");
        setAddress(""); setDistrict(""); setNumber("");
        setDisease(""); setFile(null);
        setDate("")
    } else {
      setToast({ message: data.message || "Error submitting form", type: "error" });
    }

    // auto hide toast after 3s
    setTimeout(() => setToast(null), 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-2xl">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Health Declaration Form
        </h1>

        {/* Section Heading */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          Patient Information
        </h3>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              min="1"
              max="120"
              required
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Gender
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="accent-green-600"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="accent-green-600"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  className="accent-green-600"
                  checked={gender === "others"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <span>Others</span>
              </label>
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              pattern="[0-9]{10}"
              value={number}
              required
              onChange={(e) => setNumber(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Disease */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Disease
            </label>
            <input
              type="text"
              placeholder="Enter the Disease name"
              value={disease}
              required
              onChange={(e) => setDisease(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Prescription */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Prescription
            </label>
            <input
              type="file"
              name="file"
              required
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-gray-600 
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700
                file:cursor-pointer"
            />
          </div>

          {/* Date*/}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              placeholder="Enter the Disease name"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>



          {/* District */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              District
            </label>
            <select
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            >
              <option value="">Select district</option>
              <option>Thiruvananthapuram</option>
              <option>Kollam</option>
              <option>Pathanamthitta</option>
              <option>Alappuzha</option>
              <option>Kottayam</option>
              <option>Idukki</option>
              <option>Ernakulam</option>
              <option>Thrissur</option>
              <option>Palakkad</option>
              <option>Malappuram</option>
              <option>Kozhikode</option>
              <option>Wayanad</option>
              <option>Kannur</option>
              <option>Kasaragod</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Enter the address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
              {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </div>
    </div>
  );
}
