
const Heading3 = ({ children, classname }) => {
    return (
        <h2 className={`w-full max-w-[750px] text-[26px] lg:text-4xl font-normal leading-[140%] ${classname}`}>{children}</h2>
    )
}

export default Heading3;