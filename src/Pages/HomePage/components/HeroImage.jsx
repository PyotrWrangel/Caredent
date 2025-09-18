function HeroImage({ title, description = [] }) {
  return (
    <>
      <div className="lg:w-full grid lg:grid-cols-2">
        <article className="bg-green-600  h-100 py-10 px-5">
          <h2 className="font-bold text-left text-2xl text-white mt-9 mb-9">{title}</h2>
          {/* mapping dentro il componente*/}
          {description.map((desc, index) => (
            // passiamo index che è l'id e desc che è l'array delle descrizioni
            <p key={index} className="text-2xl text-left text-white">{desc}</p>
          ))}   
        </article>
        <img
          src="/images/Specialization.jpg"
          className=" w-300 h-100"
        />
      </div>
    </>
  );
}

export default HeroImage;
