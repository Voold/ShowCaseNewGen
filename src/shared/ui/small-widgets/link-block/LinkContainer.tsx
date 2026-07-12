import styles from "./LinkContainer.module.css";
import {LinkBlock} from "@/shared/ui/small-widgets/link-block/LinkBlock.tsx";

interface LinkBlockProps {
  links: {
    title: string;
    link: string;
    service: string;
  }[]
}

export const LinkContainer = ({links} : LinkBlockProps) => {
  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <LinkBlock key={index} title={link.title} service={link.service} link={link.link} />
      ))}
    </div>
  );
};