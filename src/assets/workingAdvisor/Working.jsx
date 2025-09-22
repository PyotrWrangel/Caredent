function Working ({ title }) {
    return(
        <>
        <div className="p-4 inline-block w-auto text-2xl border border-red-600 bg-white mt-[40px]">
            <p className="font-bold">{title || "Sezione in lavorazione."}</p>
            <p className="font-bold">{"Ci scusiamo per il disagio"}</p>

        </div>
        </>
    )
}

export default Working;

