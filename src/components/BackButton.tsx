import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-[#fa9e1f] hover:underline flex items-center gap-1 font-bold mb-5"
    >
      <FaArrowLeft size={18} />
      Go Back
    </button>
  );
};

export default BackButton;
