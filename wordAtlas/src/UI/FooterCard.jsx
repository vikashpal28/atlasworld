export const FooterCard = ({info}) =>{
    return(
        <>
        <section className="flex flex-col">
                <p className="text-white">{info.title}</p>
                <p className="text-gray-600 pt-2">{info.content}</p>
        </section>
        </>
    )
}