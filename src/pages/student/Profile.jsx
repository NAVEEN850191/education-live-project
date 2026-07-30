import { useState } from "react";
import Layout from "../../components/Layout";
import "./Profile.css";

function Profile() {

  const [profile, setProfile] = useState({
    name: "Naveen",
    email: "naveen@gmail.com",
    phone: "9876543210",
    usn: "1MS22CS101",
    department: "Computer Science",
    year: "3rd Year",
    photo:
      "https://via.placeholder.com/150"
  });

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  return (
    <Layout>

      <h1 className="page-title">
        Student Profile
      </h1>

      <div className="profile-card">

        <div className="profile-image-section">

          <img
            src={profile.photo}
            alt="Profile"
            className="profile-image"
          />

          <button className="upload-btn">
            Change Photo
          </button>

        </div>

        <div className="profile-form">

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <input
            type="text"
            name="usn"
            value={profile.usn}
            onChange={handleChange}
            placeholder="USN"
          />

          <input
            type="text"
            name="department"
            value={profile.department}
            onChange={handleChange}
            placeholder="Department"
          />

          <input
            type="text"
            name="year"
            value={profile.year}
            onChange={handleChange}
            placeholder="Year"
          />

          <button className="save-btn">
            Save Profile
          </button>

        </div>

      </div>

    </Layout>
  );
}

export default Profile;