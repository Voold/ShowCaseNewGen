import { Outlet, useParams } from "react-router-dom";
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader.tsx";

import styles from "./ProjectsGallery.module.css"

export default function ProjectsGallery () {

  let { tabNumber } = useParams();

    return (
        <>
            <ProjectsHeader/>
            <Outlet /> 
        </>
    );
};
