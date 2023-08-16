import React from "react";
import Image from "next/image";

type CheckBoxProps = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBox = ({ checked, setChecked }: CheckBoxProps) => {
  return (
    <div onClick={() => setChecked(!checked)}>
      <Image
        src={`/icon/${checked ? "checkBox_checked" : "checkBox_empty"}.svg`}
        width={24}
        height={24}
        alt={""}
      />
    </div>
  );
};

export default CheckBox;
