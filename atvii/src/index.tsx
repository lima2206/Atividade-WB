import React from "react";
import ReactDOM from "react-dom";
import Roteador from "./componentes/roteador";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider} from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Roteador />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
