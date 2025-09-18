import hero1Image from "../../../assets/puttanaDentale.jpeg";
import Information from "./CardInformation";
import Experts from "./Experts";
import { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
//importiamo il database
import { db } from "../../../firebaseConfig";

//collezione dei dati
import { getDocs, collection } from "firebase/firestore";

function Main() {
  const stats = [
    {
      title: "+10k",
      type: "Patients Treated",
      description:
        "Committed to restoring smiles and improving lives every day.",
    },
    {
      title: "95%",
      type: "Patient Satisaction",
      description:
        "Trusted by out community for compassionate, reliable dental care.",
    },
    {
      title: "+60",
      type: "Expert Dentists",
      description: "A dedicated team of specialists to address all your needs.",
    },
    {
      title: "+50",
      type: "Dental care Plans",
      description: "Our customers have many options",
    },
  ];

  const descriptions = [
    "Trattamento laser",
    "Stanze di trattamento moderne",
    "Ortodonzia invisibile",
    "Scanner intraorale 3D",
    "Visite diagnostiche con intelligenza artificiale",
  ];

  const [experts, setExperts] = useState([]);

  const ExpertCollectionRef = collection(db, "experts");

  //CRUD
  //READ

  useEffect(() => {
    const getExpert = async () => {
      try {
        const data = await getDocs(ExpertCollectionRef);
        // console.log(data);
        setExperts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error(err);
      }
    };

    getExpert();
  }, []);

  return (
    <>
      <section className="section-1 bg-blue-100">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 sm:py-18 lg:py-20">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                Personalized Care for Every Smile
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                Experience expert dental care with modern technology, precision,
                and a gentle touch focused on your.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-blackshadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-7 py-2"
                >
                  Reserve
                </a>
                <a
                  href="#"
                  className="border border-white rounded-full font-semibold text-sm/6 font-semibold text-white px-7 py-2"
                >
                  Services
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
          <div className="section-1-image flex align-center justify-center">
            <img src={hero1Image} className=" rounded-3xl"></img>
          </div>
        </div>
      </section>
      <section className=" bg-indigo-100 -mt-44 relative">
        <div className=" mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {stats.map((item, idx) => (
            <Information
              key={idx}
              title={item.title}
              type={item.type}
              description={item.description}
            ></Information>
          ))}
        </div>
        <div className="flex">
          {experts.map((expert) => (
            <Experts
              key={expert.id}
              imgURL={expert.imgURL}
              name={expert.name}
              yearService={expert.yearService + " Years of experience"}
            ></Experts>
          ))}
        </div>
        <div className="w-full">
          <HeroImage
           title="Specializzazioni"
           description={descriptions}></HeroImage>
        </div>
      </section>
    </>
  );
}

export default Main;
