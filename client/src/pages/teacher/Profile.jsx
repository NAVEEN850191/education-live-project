import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. John Smith",
    email: "john.smith@college.edu",
    phone: "+91 9876543210",
    department: "Computer Science",
    qualification: "Ph.D. in Computer Science",
    experience: "10 Years",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Profile
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="Teacher"
              className="w-36 h-36 rounded-full border-4 border-indigo-500 object-cover"
            />

            <h2 className="text-2xl font-bold mt-4">
              {profile.name}
            </h2>

            <p className="text-gray-500">
              {profile.department}
            </p>

            <div className="mt-6 w-full space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Experience</span>
                <span>{profile.experience}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Qualification</span>
                <span>{profile.qualification}</span>
              </div>
            </div>
          </div>

          {/* Edit Profile */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Edit Profile
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5"
            >
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleChange}
                placeholder="Department"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="qualification"
                value={profile.qualification}
                onChange={handleChange}
                placeholder="Qualification"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                placeholder="Experience"
                className="border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>

        {/* Teaching Statistics */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-500">Courses</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              5
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-500">Students</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              180
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-500">Assignments</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              24
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;