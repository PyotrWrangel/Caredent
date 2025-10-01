import { useState } from "react";



function Register() {

    //use state per il form
    const[formData, setFormData] = useState({
        nome: "",
        cognome: "",
        data_nascita: "",
        luogo_nascita: "",
        username: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState ("");

    function handleChange(e) {
        //prendiamo il nome del campo e il valore al suo interno
        const { name, value } = e.target;
        setFormData({
            ...formData,   // dentro questo nuovo form data prendo i valori già esistenti
            [name]: value,  //aggiorno dentro questo nuovo oggetto solo quello che e cambiato in questo momento
        });
    }

    function handleRegister(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        fetch ('http://localhost/CaredentBackEnd/BackEnd/querys/register.php', {
          method : 'POST',
          body: fd,
        })
        .then((response) => response.json())
        .then(data => {
          console.log("Risposta JSON: ", data.response);
          if (data.response === 0 ) {
            setMessage("❌ email già esistente");
          } else if (data.response === 2) {
            setMessage("❌ Errore nel Database")
          } else {
            setMessage("✅ Registrazione completata!");
          }
        }) 
          .catch(err => console.error("errore fetch registrazione", err));

          setFormData({
                 nome: "",
        cognome: "",
        data_nascita: "",
        luogo_nascita: "",
        username: "",
        email: "",
        password: "",
          })
        }

    return (
        <>
                <div className="mt-[150px] rounded-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[600px] md:w-[500px] lg:py-0">
         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create your free account
              </h2>
              <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="register.php">
                <div>
                  <label
                    htmlFor="nome"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="name"
                    value={formData.nome}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                 required/>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="cognome"
                    id="Lastname"
                    value={formData.cognome}
                    onChange={handleChange}
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                 <div>
                  <label
                    htmlFor="birthDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Birth date
                  </label>
                  <input
                    type="text"
                    name="data_nascita"
                    id="dataNascita"
                    value={formData.data_nascita}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                 <div>
                  <label
                    htmlFor="birth_place"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Birth Place
                  </label>
                  <input
                    type="text"
                    name="luogo_nascita"
                    id="luogoNascita"
                    value={formData.luogo_nascita}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                 <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                 <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
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
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign up
                </button>
                  {message && <p className="border-1 border-red-400 text-white rounded-md mt-4 text-center p-2">{message}</p>}
              </form>
              <p className="text-white">Or continue with</p>
              <div className="sm:gap-4 flex items-center justify-center grid grid-cols-2">
              <button type="click" className="border border-gray-500/75 rounded-md p-[8px] bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300">Google</button>
              <button type="button" className="border border-gray-500/75 rounded-md p-[8px] bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300">Microsoft</button>
              </div>
            </div>
            </div>

            </div>
        </>
    )
}

export default Register;