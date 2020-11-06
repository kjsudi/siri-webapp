import React from "react";
import styles from "./Category.module.css";
import { imageCategories } from "assets/slides";
import i18n from "utils/i18n";
import IconCard from "components/IconCard";
import { ReactComponent as agarbattiIcon } from "assets/icons/categories/agarbatti.svg";
import { ReactComponent as siricafeIcon } from "assets/icons/categories/siricafe.svg";
import { ReactComponent as snacksIcon } from "assets/icons/categories/snacks.svg";
import { ReactComponent as franchiseIcon } from "assets/icons/categories/franchise.svg";
import { ReactComponent as garmentsIcon } from "assets/icons/categories/garments.svg";
import { ReactComponent as kokumIcon } from "assets/icons/categories/kokum.svg";
import { ReactComponent as phenylIcon } from "assets/icons/categories/phenyl.svg";
import { ReactComponent as pushtiIcon } from "assets/icons/categories/pushti.svg";
import { ReactComponent as sirishopIcon } from "assets/icons/categories/sirishop.svg";

const components = {
  agarbattiIcon,
  siricafeIcon,
  snacksIcon,
  franchiseIcon,
  garmentsIcon,
  kokumIcon,
  phenylIcon,
  pushtiIcon,
  sirishopIcon,
};
const compare = (a, b) => {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
};

let sortedImages = imageCategories.sort(compare);

const Categories = () => {
  const categories = i18n.t("Categories", { returnObjects: true });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      {sortedImages.map((image) => {
        let MyComponent = components[`${image.key}Icon`];

        if (categories[image.key] && MyComponent)
          return (
            <IconCard
              propStyles={styles.icon}
              Icon={MyComponent}
              key={image.key}
            >
              <p>{categories[image.key].name}</p>
            </IconCard>
          );
        return null;
      })}
    </div>
  );
};

export default Categories;
