const PrimaryButton = ({classname }) => {
  return  (
  <button className={`py-3 px-6 flex items-center justify-center gap-2 border border-[var(--color-sky)] text-[var(--color-sky)] text-base font-normal leading-[120%] rounded-3xl ${classname}`}>
    <span>Read More</span>
    <i className="fa-solid fa-arrow-right"></i>
  </button>
  )
};

export default PrimaryButton;
