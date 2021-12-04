const Cards = (props) => {
    return (
        <div className="max-w-xl mx-auto rounded-2xl bg-white mt-8 px-10 py-5">
            <div className="max-w-lg mx-auto">
                <h3 className="font-bold text-2xl mb-2 text-center text-colorHeading">{props.title}</h3>
                <p className="text-colorParagraph text-[15px] text-center mb-5 px-5">
                    {props.desc}
                </p>
            </div>
            {props.children}
        </div>
    )
}

export default Cards