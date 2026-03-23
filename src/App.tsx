import { Routes, Route} from "react-router-dom";

import Catalog from "./pages/Catalog/Catalog.tsx"
import ProjectGallery from "./components/ProjectsGallery/ProjectsGallery.tsx"
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid.tsx";

function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Catalog />}>

        { /* Вот эту всю красоту надо будет нормально переделать, это вообще что за херобора */}
        <Route path="/" element = {<ProjectGallery/>} >
          <Route path=":tabNumber?" element = {<ProjectsGrid/>} />
        </Route>
        <Route path="/inProgress" element = {<ProjectGallery/>}>
          <Route path=":tabNumber?" element = {<ProjectsGrid/>} />
        </Route>
        <Route path="/completed" element = {<ProjectGallery/>} >
          <Route path=":tabNumber?" element = {<ProjectsGrid/>}/>
        </Route>

      </Route>
    </Routes>
  )
}

export default App
