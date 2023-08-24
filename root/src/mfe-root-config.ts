import { registerApplication, start } from "single-spa";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa os estilos CSS do Bootstrap
import 'bootstrap'; // Importa os componentes JavaScript do Bootstrap

import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
