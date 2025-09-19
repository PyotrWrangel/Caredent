import { useState } from "react";

function Header() {

  const [form, setForm] = useState(false);

  function handleClick() {
    setForm(true);
  }

    return (
        <>
        <header className="bg-blue-100">
  <nav className="mx-auto flex max-w-[calc(100vw-10cm)] px-[5cm] items-center justify-between p-6 lg:px-8 text-white" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="flex items-center -m-1.5 p-1.5 pb-4">   {/* rendo a un contenitore flex */}
        <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        <span className="ml-2 text-white text-self-logo font-semibold">CareDent</span>
      </a>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <a href="#" className="text-xl font-semibold text-white">Home</a>
      <a href="#" className="text-xl font-semibold text-white">About us</a>
      <a href="#" className="text-xl font-semibold text-white">Out Services</a>
      <a href="#" className="text-xl font-semibold text-white">Specialist</a>
      <a href="#" className="text-xl font-semibold text-white">Insurance</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end  ">
      <button onClick={handleClick} type="button" className="text-xl font-semibold text-white border border-solid border-white rounded-full py-3 px-8">Contact us</button>
      {form && (
        <form className="mt-4">
          <label for="email"> Enter email: </label>
            <input type="email" name="email"></input>
          <label for="password">Enter password: </label>
        
          <input type="password" name="password"></input>
          <button type="submit" name="login"></button>
        </form>
      )}
    </div>
  </nav>
  </header>
        </>
    )
}

export default Header;