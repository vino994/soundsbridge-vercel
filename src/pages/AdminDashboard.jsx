import { useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchLeads = async (token) => {
    try {
      const res = await api.get("/leads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLeads(res.data);
    } catch {
      localStorage.removeItem("admin_token");
      navigate("/admin/login");
    }
  };

useEffect(() => {
  // 🔥 RESET ANY LEFTOVER MODAL STYLES
  document.body.style.overflow = "auto";
  document.body.style.pointerEvents = "auto";

  return () => {
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
  };
}, []);


  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchLeads(token);
  }, [navigate]);

  const downloadExcel = async () => {
    const token = localStorage.getItem("admin_token");

    try {
      const res = await api.get("/leads/export/excel", {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "leads.xlsx";
      link.click();
    } catch {
      alert("Failed to download Excel");
    }
  };

  const deleteLead = async (id) => {
    const token = localStorage.getItem("admin_token");
    if (!window.confirm("Delete this lead?")) return;

    try {
      await api.delete(`/leads/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLeads(token);
    } catch {
      alert("Failed to delete lead");
    }
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.email?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search)
  );

  const totalPages = Math.ceil(filteredLeads.length / ITEMS_PER_PAGE);
  const paginatedLeads = filteredLeads.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <div className="flex gap-2">
          <button
            onClick={downloadExcel}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Download Excel
          </button>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, email, phone"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="border p-2 mb-4 w-full md:w-1/3 rounded"
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Notes</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLeads.map((l) => (
              <tr key={l._id}>
                <td className="border p-2">{l.name}</td>
                <td className="border p-2">{l.email}</td>
                <td className="border p-2">{l.phone}</td>
                <td className="border p-2">{l.preferredDate}</td>
                <td className="border p-2">{l.notes}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => deleteLead(l._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {paginatedLeads.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
