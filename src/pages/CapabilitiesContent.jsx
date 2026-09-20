import Heading5 from "../components/Typography/Heading5"
import ParagraphSm from "../components/Typography/ParagraphSm"

const CapabilitiesContent = ({ heading, description, className = "" }) => {
  return (
    <div className={`w-full max-w-[550px] pb-8 border-b border-[var(--text-black)] ${className}`}>
      <div className="flex flex-col gap-2 items-start w-full max-w-[500px]">
        <Heading5>
          {heading}
        </Heading5>
        <ParagraphSm>
          {description}
        </ParagraphSm>
      </div>
    </div>
  )
}

export default CapabilitiesContent;