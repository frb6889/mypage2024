import React from 'react';
import { ArrowLeftIcon } from "lucide-react";

const ReturnButton = ({ handleBack,iconColor,borderColor,bgColor }) => {
  return (
    <header
      className={`flex justify-between items-center m-2 mt-12 ml-12 p-4 ${borderColor} ${bgColor}`}
      style={{
        position: 'fixed',
        zIndex: 1000,
        borderRadius: '50%',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
      }}
    >
      <ArrowLeftIcon
        width={20}
        height={20}
        className={`${iconColor}`}
        onClick={handleBack}
      />
    </header>
  );
};

export default ReturnButton;
