import { useState } from "react";

const UploadNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Basics",
      course: "Computer Science",
      fileName: "react-basics.pdf",
      uploadedOn: "30 Jul 2026",
    },
    {
      id: 2,
      title: "Calculus Notes",
      course: "Mathematics",
      fileName: "calculus.pdf",
      uploadedOn: "29 Jul 2026",
    },
  ]);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    fileName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const uploadNote = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.course.trim() ||
      !formData.fileName.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newNote = {
      id: Date.now(),
      ...formData,
      uploadedOn: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);

    setFormData({
      title: "",
      course: "",
      fileName: "",
    });
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Upload Notes
        </h1>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 border rounded-lg px-4 py-3"
          />
        </div>

        {/* Upload Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Upload New Notes
          </h2>

          <form
            onSubmit={uploadNote}
            className="grid md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              name="title"
              placeholder="Notes Title"
              value={formData.title}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="fileName"
              placeholder="File Name (e.g. react.pdf)"
              value={formData.fileName}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="md:col-span-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Upload Notes
            </button>
          </form>
        </div>

        {/* Notes Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">File</th>
                <th className="p-4 text-left">Uploaded On</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredNotes.map((note) => (
                <tr
                  key={note.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{note.title}</td>
                  <td className="p-4">{note.course}</td>
                  <td className="p-4 text-indigo-600">
                    {note.fileName}
                  </td>
                  <td className="p-4">{note.uploadedOn}</td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredNotes.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No notes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">
            Notes Summary
          </h2>

          <p className="text-gray-700">
            Total Notes:
            <span className="font-bold ml-2">
              {notes.length}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default UploadNotes;