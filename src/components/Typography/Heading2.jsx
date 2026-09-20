const Heading2 = ({ children, classname = "" }) => {
    return (
        <h2
            className={`w-full max-w-[750px] text-[32px] text-center lg:text-[56px] font-normal leading-[130%] text-[var(--bg-color)] ${classname}`}
        >
            {children}
        </h2>
    );
};

export default Heading2;
