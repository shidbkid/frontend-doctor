"use client";

import { useState } from "react";
import Modal from "./Modal";

type Certification = {
  id: number;
  name: string;
  date: string;
  description: string;
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications: Certification[] = [
    {
      id: 1,
      name: "Certified Robotics Engineer",
      date: "2023-05-15",
      description: "A certification in robotics engineering fundamentals.",
    },
    {
      id: 2,
      name: "Cardiothoracic Surgery Specialist",
      date: "2023-06-20",
      description: "An advanced certification in cardiothoracic surgery.",
    },
    {
      id: 3,
      name: "Neurosurgery Fundamentals",
      date: "2023-08-10",
      description: "Basic neurosurgery techniques certification.",
    },
    {
      id: 4,
      name: "General Surgery Basics",
      date: "2023-09-12",
      description: "Foundational certification in general surgery.",
    },
  ];

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-hospitalBlue text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
              <p className="text-sm text-white/80">Date: {cert.date}</p>
            </div>
            <div className="mt-auto">
              <button
                onClick={() => openModal(cert)}
                className="w-full px-4 py-2 text-sm font-medium bg-white text-hospitalBlue rounded-md hover:bg-gray-200 transition"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCert && (
          <div>
            <h3 className="text-xl font-bold text-hospitalBlue mb-4">{selectedCert.name}</h3>
            <p className="text-sm text-gray-600 mb-4">Date: {selectedCert.date}</p>
            <p className="mb-6">{selectedCert.description}</p>
            <button
              className="px-4 py-2 bg-hospitalBlue text-white rounded-md hover:bg-blue-600"
              onClick={() => alert("Downloading Certificate...")}
            >
              Download Certificate
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
