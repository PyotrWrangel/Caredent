function HeroImage({ title, description = [] }) {
  return (
    <>
      <div className="bg-green-600 lg:w-full grid lg:grid-cols-2 mt-[100px]">
        <article className=" xl:w-full   py-16 px-5">
          <h2 className="font-bold text-left text-3xl text-white mb-8">{title}</h2>
          {/* mapping dentro il componente*/}
          {description.map((desc, index) => (
            // passiamo index che è l'id e desc che è l'array delle descrizioni
            <p key={index} className="text-xl text-left text-white mb-3">{desc}</p>
          ))}   
        </article>
         <div className="flex justify-end items-center">
        <img
          src="/images/Specialization.jpg"
          className="flex w-full xl:max-w-[700px] xl:flex-row xl:justify-end h-[400px]"
        />
        </div>
      </div>
    </>
  );
}

export default HeroImage;



// sm: → ≥ 640px
// md: → ≥ 768px
// lg: → ≥ 1024px
// xl: → ≥ 1280px
// 2xl: → ≥ 1536px