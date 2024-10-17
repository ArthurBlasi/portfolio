import React from "react";
import "./headerButton.css";    

// Definindo os tipos das propriedades
interface HeaderButtonProps {
  name: string;
  onclick: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({name, onclick }) => {
  return (
    <button className="button-header-container" onClick={onclick}>
      {name}
    </button>
  );
};

export default HeaderButton;
