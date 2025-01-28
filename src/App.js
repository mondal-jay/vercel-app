import React, { useState } from "react";
import Modal from "./Modal"; // Import Modal

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>React Modal Example</h1>
      
      {/* Open Modal Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "#007bff")}
      >
        Open Modal
      </button>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Hello, World!"
      >
        <p>This is a beautiful modal with a clean design.</p>
      </Modal>
    </div>
  );
}

export default App;
