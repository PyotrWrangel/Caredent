import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "./components/Main";
import Form from "./components/Form";

function Homepage() {

      //generazione del form login

  const [form, setForm] = useState(false);

    return (
        <>
      <div className={` fixed inset-0 transition-opacity duration-500 items-center justify-center m-auto ${form ? "opacity-100 bg-black bg-opacity-20 z-50" : "opacity-0 pointer-events-none"}`}>
      {form && <Form onClose={() => setForm(false)} />}
      </div>

        <Header onOpen={() => setForm(true)}></Header>
        <Main></Main>
        <Footer></Footer>
        </>

    )

}

export default Homepage;