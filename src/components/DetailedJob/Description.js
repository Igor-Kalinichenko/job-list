
function Description ({description}) {
    const firstParagraph = description?.slice(0, description?.indexOf('Responsopilities'));

    const responsParagraph = description?.slice(description?.indexOf('Responsopilities:'), description?.indexOf('Compensation & Benefits'));

    const responsHeader = responsParagraph
            ?.slice(responsParagraph.indexOf('Responsopilities'), responsParagraph.indexOf(':'));

    const benefits = description?.slice(description?.indexOf('Compensation & Benefits:'));

    const benefitsHeader = benefits
            ?.slice(benefits.indexOf('Compensation & Benefits'), benefits.indexOf(':'));

    const benefitsParagraph = benefits?.replace('Compensation & Benefits:', '').split('.')
    
    return <>
    <div className="font-sans text-lg text-textColorH2 mt-2">
        <p>{firstParagraph}</p>
        <h3 className="font-bold text-xl text-textColorH2 mt-5 mb-2">{responsHeader}:</h3>
        <p>{responsParagraph?.replace('Responsopilities:', '')}</p>
        <h3 className="font-bold text-xl text-textColorH2 mt-5 mb-2">{benefitsHeader}:</h3>
        <ul>
        {
            benefitsParagraph?.map((el, i) => el.trim().length ? <li key={i} className="list-[square] text-[#384564a1]">
                                                                    <span className="text-textColorH2">{el}</span>
                                                                </li> : '')
        }
        </ul>
    </div>
    </>
}

export default Description;