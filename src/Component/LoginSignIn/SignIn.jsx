import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext';

const SignIn = () => {
  const { createUser, setUser, updateUserProfile, googleSignin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Plant Care | Sign In`;
  }, []);

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast('Logging successfully');
        navigate(location?.state || '/');
      })
      .catch((error) => {
        toast.error('Error Found: ' + error.code);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photoURL.value;

    createUser(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(result.user);
            toast('Logging successfully');
            navigate(location?.state || '/');
          })
          .catch((error) => {
            toast.error('Error Found: ' + error.code);
          });
      })
      .catch((error) => {
        toast.error('Error Found: ' + error.code);
      });
  };

  return (
    <div className="card bg-white dark:bg-gray-900 my-5 mx-auto w-full mt-3 max-w-sm shrink-0 shadow-2xl dark:shadow-gray-700 rounded-lg">
      <div className="card-body">
        <h1 className="text-5xl text-center font-bold text-gray-900 dark:text-white">Sign in</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            className="input border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md p-2 w-full"
            placeholder="Name"
          />

          <label className="label text-gray-700 dark:text-gray-300 mt-4">Email</label>
          <input
            type="email"
            name="email"
            className="input border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md p-2 w-full"
            placeholder="Email"
          />

          <label className="label text-gray-700 dark:text-gray-300 mt-4">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            className="input border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md p-2 w-full"
            placeholder="Photo URL"
          />

          <label className="label text-gray-700 dark:text-gray-300 mt-4">Password</label>
          <label className="input validator w-full">
            <input
              name="password"
              type="password"
              width='full'
              required
              placeholder="Password"
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              className="border w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md p-2 w-full"
            />
          </label>

          <p className="validator-hint hidden text-gray-600 dark:text-gray-400">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>

          <button className="btn btn-neutral mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 transition duration-300">
            Sign In
          </button>

          <p className="px-6 text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?{' '}
            <Link
              to="/loginSignInPage"
              className="underline hover:text-white hover:bg-blue-600 hover:rounded-sm transition duration-300"
            >
              Login
            </Link>{' '}
          </p>

          <div className="divider dark:border-gray-600">OR</div>

          <button
            onClick={handleGoogle}
            className="btn bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2 w-full py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
