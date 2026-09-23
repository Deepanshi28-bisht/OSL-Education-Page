const PrimaryButton = ({classname,children }) => {
  return  (
  <button className={`group py-3 px-6 flex items-center justify-center gap-2 border border-[var(--color-sky)] text-[var(--color-sky)] text-base font-normal leading-[120%] rounded-3xl group-hover:border-2 ${classname}`}>
    <span>{children}</span>
    <i className="fa-solid fa-arrow-right transition-transform duration-300 ease-out group-hover:translate-x-1"></i>
  </button>
  )
};

export default PrimaryButton;
