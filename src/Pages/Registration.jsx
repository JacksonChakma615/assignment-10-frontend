import { useContext, useState } from "react";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/loginnBanner.jpg";
import { AuthContex } from "../Router/AuthProvider";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, setUser, user, updateUserProfile } =
    useContext(AuthContex);

  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const minLength = 6;

    if (!uppercase.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!lowercase.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (password.length < minLength) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password, photo };
    // console.log(user);
    if (!validatePassword(password)) {
      return;
    }
    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          toast.success("Registration successful");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error("Registration failed. Please try again.");
        setPasswordError({ ...error, login: err.code });
      });
  };

  return (
    <div className="mt-20">
      <div
        className="min-h-screen bg-gray-900 flex items-center justify-center py-10"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border-2 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-sm w-full">
          <h3 className="text-white font-bold text-center text-xl mb-5">
            Registration Form
          </h3>
          <form onSubmit={handleRegister}>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Email"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Upload Your Profile
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your imgbb Photo"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a Password"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            <div className=" mt-5 ">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Registration
              </button>
            </div>
          </form>
          <p className="text-center font-bold my-3 text-white">
            if You have Already Account? Please
            <Link className="text-green-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
