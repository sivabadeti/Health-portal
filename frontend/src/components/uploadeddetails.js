import { useEffect, useState } from "react";

export default function UploadedDetails() {
  const [patients, setPatients] = useState([]);

  // Submit all patients
  const submitall = async (e) => {
    e.preventDefault(); 
    try {
      const res = await fetch("http://localhost:4000/submitAll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patients),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        setPatients([]); // clear frontend list
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting all data");
    }
  };

  // Fetch patients from backend
  useEffect(() => {
    fetch("http://localhost:4000/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Uploaded Patient Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {patients.map((patient) => (
          <div
            key={patient._id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200"
          >
            <p><strong>Name :</strong> {patient.name}</p>
            <p><strong>Age :</strong> {patient.age}</p>
            <p><strong>Gender :</strong> {patient.gender}</p>
            <p><strong>Disease :</strong> {patient.disease}</p>
            <p><strong>District :</strong> {patient.district}</p>
            <p><strong>Number :</strong> {patient.number}</p>
            <p><strong>Address :</strong> {patient.address}</p>
            <p>
              <strong>Prescription :</strong> {patient.filePath ? "Uploaded" : "Not uploaded"}
            </p>
            <p><strong>Date :</strong> {patient.date}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          onClick={submitall}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-colors text-white font-bold rounded-xl text-sm sm:text-base md:text-lg shadow-md shadow-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          Submit All
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}