// src/pages/teacher/UploadNotes.jsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import teacherMenu from "../../constants/teacherMenu";

const UploadNotes = () => {
  const [notes] = useState([
    {
      id: 1,
      title: "React Notes",
      date: "10 Jul 2026",
    },
    {
      id: 2,
      title: "Java Notes",
      date: "15 Jul 2026",
    },
  ]);

  return (
    <Layout menu={teacherMenu}>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-[#5b21b6]">Notes</h1>

        {/* Card Grid Matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between h-44"
            >
              <div>
                <h2 className="text-lg font-bold text-[#5b21b6]">
                  {note.title}
                </h2>
                <p className="text-xs text-gray-400 mt-1">{note.date}</p>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium transition shadow-sm">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UploadNotes;