
const Paragraph = ({ children, classname }) => {
  return <p className={`w-full max-w-[750px] text-center text-base font-normal leading-[180%] text-[var(--bg-color)] ${classname}`}>{children}</p>;
};

export default Paragraph;
