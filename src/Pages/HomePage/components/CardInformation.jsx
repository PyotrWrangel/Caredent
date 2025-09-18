function CardInformation({ title, type, description }) {
    return (
        <>
<article className="xl:w-60 h-60 mt-18 rounded-xl bg-white shadow w-full max-w-sm p-5 space-y-4">
    <h3 className="font-bold text-left text-2xl text-blue-900">{title}</h3>
  <p className="text-sm text-left font-medium text-gray-600">{type}</p>
  <p className="text-sm text-left text-gray-500 pt-15">{description}</p>
</article>
    </>
    )
}

export default CardInformation;