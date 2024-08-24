import { CheckCheckIcon, CirclePlus } from "lucide-react";
import { useEffect } from "react";

const Modal_confirm = ({ isOpen, SetIsOpen }) => {
  useEffect(() => {
    console.log("====================================");
    console.log(isOpen);
    console.log("====================================");
  }, [isOpen]);
  return (
    <div className={isOpen ? "backdrop open" : "backdrop"}>
      <div className="content">
        <p className="text">L'employé a bien été ajouté.</p>
        <div className="validBtn" onClick={() => SetIsOpen(false)}>
          <p>Ok</p>
          <CheckCheckIcon stroke="white" size={22} className="close__btn" />
        </div>
      </div>
    </div>
  );
};
export default Modal_confirm;
