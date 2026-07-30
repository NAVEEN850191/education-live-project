import { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@college.com",
    phone: "+91 9876543210",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    darkMode: false,
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handlePreferenceChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      password.newPassword &&
      password.newPassword !== password.confirmPassword
    ) {
      alert("New password and Confirm password do not match!");
      return;
    }

    console.log("Profile:", profile);
    console.log("Password:", password);
    console.log("Preferences:", preferences);

    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Settings
        </h1>

        <form
          onSubmit={handleSave}
          className="space-y-8"
        >
          {/* Profile Settings */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Profile Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Full Name"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="Email"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                placeholder="Phone Number"
                className="border rounded-lg px-4 py-3 md:col-span-2"
              />
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Change Password
            </h2>

            <div className="space-y-4">
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={password.currentPassword}
                onChange={handlePasswordChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={password.newPassword}
                onChange={handlePasswordChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Preferences
            </h2>

            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span>Email Notifications</span>

                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={preferences.emailNotifications}
                  onChange={handlePreferenceChange}
                  className="w-5 h-5"
                />
              </label>

              <label className="flex items-center justify-between">
                <span>Dark Mode</span>

                <input
                  type="checkbox"
                  name="darkMode"
                  checked={preferences.darkMode}
                  onChange={handlePreferenceChange}
                  className="w-5 h-5"
                />
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;