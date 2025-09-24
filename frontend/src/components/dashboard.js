import React, { useState, useEffect } from "react";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [filters, setFilters] = useState({
    district: "",
    disease: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);

  // Kerala districts
  const districts = [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasaragod",
  ];

  // Fetch patients from backend
  const fetchPatients = async () => {
    setLoading(true);
    try {
      let url = "http://localhost:4000/patients";
      const params = new URLSearchParams();

      // Add ONLY the filter that is filled
      if (filters.district) params.append("district", filters.district);
      if (filters.disease) params.append("disease", filters.disease);
      if (filters.date) params.append("date", filters.date);

      if (params.toString()) {
        url += "?" + params.toString();
      }

      const res = await fetch(url);
      const data = await res.json();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all on mount
  useEffect(() => {
    fetchPatients();
  }, []);

  // Handle change in inputs
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Clear filters
  const handleClear = () => {
    setFilters({ district: "", disease: "", date: "" });
    fetchPatients();
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Patients Records
      </h2>

      {/* 🔎 Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        {/* District */}
        <select
          name="district"
          value={filters.district}
          onChange={handleChange}
          className="border rounded-lg p-2 w-full md:w-1/3"
        >
          <option value="">Filter by District</option>
          {districts.map((dist) => (
            <option key={dist} value={dist}>
              {dist}
            </option>
          ))}
        </select>

        {/* Disease */}
        <input
          type="text"
          name="disease"
          placeholder="Enter Disease name"
          value={filters.disease}
          onChange={handleChange}
          className="border rounded-lg p-2 w-full md:w-1/3"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="border rounded-lg p-2 w-full md:w-1/3"
        />

        {/* Buttons */}
        <button
          onClick={fetchPatients}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
        >
          Clear
        </button>
      </div>

      {/* 📋 Patients Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <table className="w-full border border-gray-300 text-center">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">District</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Disease</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? (
                patients.map((patient, idx) => (
                  <tr key={idx} className="border">
                    <td className="p-2 border">{patient.name}</td>
                    <td className="p-2 border">{patient.age}</td>
                    <td className="p-2 border">{patient.address}</td>
                    <td className="p-2 border">{patient.district}</td>
                    <td className="p-2 border">{patient.number}</td>
                    <td className="p-2 border">{patient.disease}</td>
                    <td className="p-2 border">
                      {patient.date
                        ? new Date(patient.date).toLocaleDateString()
                        : ""}
                    </td>
                    <td className="p-2 border">
                      {patient.date
                        ? new Date(patient.date).toLocaleTimeString()
                        : ""}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-4 text-gray-500">
                    No patients found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PatientsList;