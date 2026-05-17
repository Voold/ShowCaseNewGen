import { Outlet } from 'react-router-dom';
import ProjectsHeader from './ProjectsHeader/ProjectsHeader';

export default function ProjectsGallery() {
  return (
    <>
      <ProjectsHeader />
      <Outlet />
    </>
  );
}