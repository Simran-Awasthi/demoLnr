import React, { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
const PopupBtn = ({
  className,
  buttonTile,
  popupClassName,
  onClose,
  children,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useClickAway(() => {
    setShowPopup(false);
  });
  const close = () => {
    setShowPopup(false);
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="relative">
      <button
        className={className}
        onClick={() => {
          setShowPopup(true);
        }}
      >
        {buttonTile}
      </button>
      {showPopup && (
        <div
          ref={ref}
          className={`z-[50] p-2 bg-white absolute top-6 -left-4 border border-gray-300 shadow-xl drop-shadow-xl ${popupClassName}`}
        >
          {children(close)}
        </div>
      )}
    </div>
  );
};

export default PopupBtn;
