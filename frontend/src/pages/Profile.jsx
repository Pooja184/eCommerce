import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import profileImage from "../assets/blank_profile.webp"; // Default profile image
import Title from "../components/Title";

const Profile = () => {
  const { navigate, token, backendUrl, setToken } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [profileImg, setProfileImg] = useState(profileImage);

  const getUserData = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/user/profile", {
        headers: { token },
      });
      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    setProfileImg(savedImage);
  }
    getUserData();
  }, [token]);

  const handleOrdersRedirect = () => {
    navigate("/orders");
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
      localStorage.setItem("profileImage", reader.result); // Save to localStorage
    };
    reader.readAsDataURL(file);
  }
};


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profileImage")
    setToken(null);
    navigate("/login");
  };

  if (!user) return <p className="text-center mt-16 text-gray-600">Loading profile...</p>;

  return (
    <div className="min-h-screen  flex flex-col items-center  px-4 py-10">
      <div className="text-2xl ">
        
              <Title text1={"MY"} text2={"PROFILE"} />
            </div>
      <div className="bg-white shadow-xl rounded-lg max-w-3xl w-full p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          {/* Profile image */}
          <div className="flex flex-col items-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 object-cover border border-gray-300"
            />
            <label className="mt-4 text-sm text-blue-600 cursor-pointer hover:underline">
              <input type="file" accept="image/*" hidden onChange={handleImageChange} />
              Change Photo
            </label>
          </div>

          {/* User info */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600 mb-1"><strong>Phone:</strong> +91 9876543210</p>
            <p className="text-gray-600"><strong>Address:</strong> Mumbai, India</p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={handleOrdersRedirect}
                className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
              >
                My Orders
              </button>
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 px-5 py-2 rounded hover:bg-red-100 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
