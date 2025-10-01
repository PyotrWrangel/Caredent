import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Form({ onClose }) {

  const[formData, setFormData] = useState ({
    email: "",
    password: "",
  });

  const[message, setMessage] = useState ("");

  function handlechange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    fetch ('http://localhost/CaredentBackEnd/BackEnd/querys/login.php', {
      method: 'POST',
      body: fd,
      credentials: "include"
    })
    .then((data) => data.json())
    .then(data => {
      console.log(data.response);
      if(data.response == 1) {
      navigate('dashboard')
      } else {
        console.log("dati errati!");
      }
        })

 .catch(err => console.error("errore fetch login", err))
    }



  return (
    <>
        <div className="rounded-full modal-box flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[600px] md:w-[500px] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h2>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="login.php">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handlechange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handlechange}
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline text-blue-500 "
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>{" "}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              <button onClick={onClose} className="mt-4 text-red-500 underline">Chiudi</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Form;


    // .then(res => res.text())
    // .then(txt => {
    //   console.log("Risposta: " ,txt);
    //   try {
    //     const data = JSON.parse(txt);
    //     console.log(data);
    //   } catch (err) {
    //     console.error("errore di parsing" , err);
     //   }
    //  });