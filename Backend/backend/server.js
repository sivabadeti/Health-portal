import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import Patient from "./routes/schema.js";
import loginback from "./routes/loginback.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/login", loginback);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Multer for single file upload (optional)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ---------------------------
// Existing single patient routes
// ---------------------------
app.post("/details", upload.single("file"), async (req, res) => {
  try {
    const { name, age, gender, address, district, number, disease, date } = req.body;
    const filePath = req.file?.path;

    const newPatient = new Patient({
      name,
      age,
      gender,
      address,
      district,
      number,
      disease,
      filePath,
      date: date ? new Date(date) : new Date(),
    });

    await newPatient.save();
    res.status(201).json({ message: "Saved successfully", patient: newPatient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.get("/patients", async (req, res) => {
  try {
    const { district, disease, date } = req.query;
    const filter = {};
    if (district) filter.district = district;
    if (disease) filter.disease = disease;
    if (date) {
      const start = new Date(date);
      const end = new Date(date);
      end.setDate(end.getDate() + 1);
      filter.date = { $gte: start, $lt: end };
    }
    const patients = await Patient.find(filter).sort({ date: -1 });
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching patients" });
  }
});

app.post("/submitAll", async (req, res) => {
  try {
    const patients  = req.body;

    if (!patients || !Array.isArray(patients) || patients.length === 0) {
      return res.status(400).json({ message: "No patients data provided" });
    }

    // Remove _id to avoid duplicate key error
    const patientsToInsert = patients.map(({ _id, ...rest }) => ({
      ...rest,
      date: rest.date ? new Date(rest.date) : new Date(),
    }));

    const savedPatients = await Patient.insertMany(patientsToInsert);

    res.status(201).json({
      message: `${savedPatients.length} patients saved successfully`,
      savedPatients,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save patients" });
  }
});

// Start server
app.listen(4000, () => console.log("🚀 Server running on http://localhost:4000"));