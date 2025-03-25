import clsx from "clsx";
import { useEffect } from "react";
import Text from "@ui/Text";
import { triggerHaptics } from "@utils/hardware";
import { type Medal } from "../../types";
import commonCss from "../Collections.module.scss";
import css from "./Medals.module.scss";

type MedalsProps = {
  medals?: Medal[];
};

const Medals = ({ medals }: MedalsProps) => {
  // eslint-disable-next-line no-console
  console.log(medals);

  useEffect(() => {
    triggerHaptics();
  }, []);

  return (
    <div className={clsx(commonCss.root, css.root)}>
      <Text />
    </div>
  );
};

export default Medals;
