import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./components/Main";
import Form from "./components/Form";

function Homepage() {

      //generazione del form login

  const [form, setForm] = useState(false);

  function handleForm() {
    setForm(true);
    document.getElementById("form_modal").showModal();
  }

    return (
        <>
      <dialog id="form_modal" className={` fixed inset-0 bg-transparent bg-black bg-opacity-50 transition-opacity duration-500 modal items-center m-auto ${form ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      {form && ( <Form></Form>
      )}
      </dialog>
        <Header handleForm={handleForm}></Header>
        <Main></Main>
        <Footer></Footer>
        </>

    )

}

export default Homepage;