/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { clientes } from "../data/clientesData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
  Stack,
  Button,

} from "@chakra-ui/react";

type props = {};

export default class ListaCliente extends Component<props> {
  render() {
    return (
      <Box className="container">
        <h3>Clientes: </h3>
        <Accordion allowToggle>
          {clientes.map((cliente, index) => (
            <AccordionItem>
              <h6>
                <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                  <Box as="span" flex="1" textAlign="left">
                    {cliente.nome} / {cliente.nomeSocial} | Gênero:{" "}
                    {cliente.sexo} | CPF: {cliente.getCpf.getValor}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h6>
              <AccordionPanel pb={2}>
                <Grid templateColumns="repeat(5, 1fr)" gap={1}>
                  <GridItem colSpan={4}>
                    <h5>Produtos Consumidos:</h5>
                    <Box paddingLeft={"20px"}>
                      {cliente.getProdutosConsumidos.map((produto, index) => (
                        <li key={index}>{produto.nome}</li>
                      ))}
                    </Box>
                    <h5>Serviços Consumidos:</h5>
                    <Box paddingLeft={"20px"}>
                      {cliente.getServicosConsumidos.map((servico, index) => (
                        <li key={index}>{servico.nome}</li>
                      ))}
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Stack direction="column" spacing={4} align="center">
                      <Button bg="#35b3fc" textColor="white" width="10rem">
                        Editar
                      </Button>
                      <Button bg="#fa1119" textColor="white" width="10rem">
                        Deletar
                      </Button>
                      <Button bg="#1cff14" textColor="white" width="10rem">
                        Adicionar Produto
                      </Button>
                      <Button bg="#1cff14" textColor="white" width="10rem">
                        Adicionar Servico
                      </Button>
                    </Stack>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    );
  }
}
