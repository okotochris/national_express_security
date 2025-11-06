"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import Header from "../component/header";

// Define a type for goods
interface Good {
  id: number;
  trackingnumber: string;
  sendername: string;
  receivername: string;
  destination: string;
  location: string;
}

// Define a type for the form data
interface FormData {
  senderName: string;
  receiverName: string;
  trackingNumber: string;
  description: string;
  weight: string;
  destination: string;
}

export default function AdminDashboard() {
  const [goods, setGoods] = useState<Good[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    senderName: "",
    receiverName: "",
    trackingNumber: "",
    description: "",
    weight: "",
    destination: "",
  });

  // Fetch goods from backend
  const fetchGoods = async (): Promise<void> => {
    const res = await fetch("http://localhost:3000/api/goods");
    const data = await res.json();
    setGoods(data);
    console.log(data);
  };

  useEffect(() => {
    fetchGoods();
  }, []);

  // Register goods & generate receipt
  const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log(formData);

    const res = await fetch("http://localhost:3000/api/register-goods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Receipt-${formData.trackingNumber}.pdf`;
      a.click();

      setShowForm(false);
      fetchGoods();
    }
  };

  // Update location
  const handleLocationUpdate = async (id: number): Promise<void> => {
    const newLocation = prompt("Enter new location:");
    if (!newLocation) return;

    await fetch(`http://localhost:3000/api/goods/location?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: newLocation }),
    });

    fetchGoods();
  };

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📋 Admin Dashboard</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Register Goods
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">Register Goods</h2>
              <form onSubmit={handleRegister} className="grid gap-3">
                {Object.keys(formData).map((key) => (
                  <input
                    key={key}
                    name={key}
                    placeholder={key.replace(/([A-Z])/g, " $1")}
                    className="border p-2 rounded"
                    onChange={handleInputChange}
                    value={formData[key as keyof typeof formData]}
                  />
                ))}
                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Save & Generate Receipt
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Goods Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Tracking Number</th>
                <th className="p-3">Sender</th>
                <th className="p-3">Receiver</th>
                <th className="p-3">Destination</th>
                <th className="p-3">Location</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {goods.map((g) => (
                <tr key={g.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{g.trackingnumber}</td>
                  <td className="p-3">{g.sendername}</td>
                  <td className="p-3">{g.receivername}</td>
                  <td className="p-3">{g.destination}</td>
                  <td className="p-3">{g.location}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleLocationUpdate(g.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Update Location
                    </button>
                  </td>
                </tr>
              ))}
              {goods.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No goods registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
