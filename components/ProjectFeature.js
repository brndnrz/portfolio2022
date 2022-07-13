import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectFeature.module.css";
import { BsArrowUpRightCircle } from "react-icons/bs";
Link;
const ProjectFeature = ({ project }) => {
  return (
    <Link href={`/${project.id}`}>
      <div className={styles.wrap}>
        <Image
          src={`${project.featureIMG}`}
          layout="fill"
          className={styles.img}
          alt={project.title}
        />
        <h3 className={styles.h3}>{project.title}</h3>
        <BsArrowUpRightCircle className={styles.icon} />
      </div>
    </Link>
  );
};

export default ProjectFeature;
