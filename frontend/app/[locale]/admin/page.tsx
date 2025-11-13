"use client";

import { useEffect, useState, FormEvent } from "react";
import Header from "../component/header";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
const server = process.env.NEXT_PUBLIC_API_URL

// Define a type for goods
interface Good {
  id: number;
  trackingnumber: string;
  sendername: string;
  receivername: string;
  destination: string;
  location: string;
  status: string;
  arrivetime: string;
  image: string
}

// Define a type for the form data
interface FormData {
  senderName: string;
  receiverName: string;
  trackingNumber: string;
  description: string;
  arriveTime: string;
  destination: string;
  status: string;
  image: File | null;
}

export default function AdminDashboard() {
  const router = useRouter()
  const [goods, setGoods] = useState<Good[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStatusId, setEditingStatusId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    senderName: "",
    receiverName: "",
    trackingNumber: generateTrackingCode(),
    description: "",
    arriveTime: "",
    destination: "",
    status: "1",
    image: null,
  });
  useEffect(() => {
    const store = localStorage.getItem("user")
    if (!store) {
      router.push('/en/login')
    }
  })
  // Fetch goods from backend
  const fetchGoods = async (): Promise<void> => {
    const res = await fetch(`${server}/api/goods`);
    const data = await res.json();
    setGoods(data);
  };

  useEffect(() => {
    fetchGoods();
  }, []);

  // Register goods & generate receipt
  const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    const res = await fetch(`${server}/api/register-goods`, {
      method: "POST",
      body: form, // ✅ don't set Content-Type manually
    });

    if (res.ok) {
      setShowForm(false);
      fetchGoods();
    } else {
      console.error("Upload failed");
    }
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  };

  // Update location
  const handleLocationUpdate = async (id: number, newLocation: string): Promise<void> => {

    await fetch(`${server}/api/goods/location?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: newLocation }),
    });

    fetchGoods();
  };
  const handleDelete = async (id: number) => {
    setIsDeleting(true)
    try {
      const res = await fetch(`${server}/api/delete?id=${id}`, { method: "DELETE" });

      if (res.ok) {
        // Remove the deleted item from the state
        setGoods((prev) => prev.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }finally{
      setIsDeleting(false)
    }
  };
  const handleStatus = async (id: number, status: string) => {
    try {
      const res = await fetch(`${server}/api/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (res.ok) {
        // Update state locally
        setGoods((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status } : item
          )
        );
        console.log("Status updated successfully");
      } else {
        console.error("Failed to update status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    } finally {
      setEditingStatusId(null); // close dropdown after update
    }
  };
  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function generateTrackingCode(): string {
    const prefix = "NESU";
    let digits = "";

    for (let i = 0; i < 7; i++) {
      digits += Math.floor(Math.random() * 10); // generates a random digit 0-9
    }

    return prefix + digits;
  }
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
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
               <div className="h-9"></div>
              <h2 className="text-xl font-bold mb-4">Register Goods</h2>

              <form onSubmit={handleRegister} className="grid gap-3">
                {Object.keys(formData).map((key) => {
                  // Skip status and image for dynamic text inputs
                  if (key === "status" || key === "image") return null;

                  return (
                    <input
                      key={key}
                      name={key}
                      placeholder={key.replace(/([A-Z])/g, " $1")}
                      className="border p-2 rounded"
                      onChange={handleInputChange}
                      value={formData[key as keyof FormData] as string} // safe type cast
                    />
                  );
                })}

                {/* Status Dropdown */}
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="border p-2 rounded"
                >
                  <option value="1">Ordered</option>
                  <option value="2">In Transit</option>
                  <option value="3">At Port</option>
                  <option value="4">Delivered</option>
                </select>

                {/* File Input for Image */}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="border p-2 rounded"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFormData((prev) => ({ ...prev, image: file }));
                    }
                  }}
                />

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    {isLoading ? "Uploading..." : "Save & Generate Receipt"}
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
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
                <th className="p-3">Status</th>
                <th className="p-3">Arrive Time</th>
                <th className="p-3">Image</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {goods.map((g) => (
                <tr key={g.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{g.trackingnumber}</td>
                  <td className="p-3">{g.sendername}</td>
                  <td className="p-3">{g.receivername}</td>
                  <td className="p-3" >{g.destination}</td>
                  <td
                    className="p-3"
                    contentEditable
                    suppressContentEditableWarning={true}
                    onBlur={(e) => handleLocationUpdate(g.id, e.currentTarget.textContent || "")}
                  >
                    {g.location}
                  </td>
                  <td
                    className="p-3 cursor-pointer"
                    onClick={() => setEditingStatusId(g.id)}
                  >
                    {editingStatusId === g.id ? (
                      <select
                        className="border p-1 rounded"
                        value={g.status}
                        autoFocus
                        onChange={(e) => handleStatus(g.id, e.target.value)}
                        onBlur={() => setEditingStatusId(null)} // close when user clicks away
                      >
                        <option value="1">Ordered</option>
                        <option value="2">In Transit</option>
                        <option value="3">At Port</option>
                        <option value="4">Delivered</option>
                      </select>
                    ) : (
                      <>
                        {g.status === "1"
                          ? "Ordered"
                          : g.status === "2"
                            ? "In Transit"
                            : g.status === "3"
                              ? "At Port"
                              : g.status === "4"
                                ? "Delivered"
                                : "Unknown"}
                      </>
                    )}
                  </td>


                  <td className="p-3">{g.arrivetime}</td>
                  <td className="p-3"><img src={g.image} height="50x" width="50px"/></td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(g.id)}
                      className="text-blue-600 hover:underline"
                    >
                      {isDeleting ? "Deleting...." : <Trash2 />}
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
