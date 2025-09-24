export default function Toast({ message, type = "success", onClose }) {
  return (
    <div
      className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } animate-slide-in`}
    >
      <p>{message}</p>
      <button
        onClick={onClose}
        className="ml-3 text-white font-bold focus:outline-none"
      >
        ✖
      </button>
    </div>
  );
}
