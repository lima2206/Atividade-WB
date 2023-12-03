import { Component } from "react";
import { servicos } from "../data/servicoData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

type props = {};

export default class ListaServico extends Component<props> {
  render() {
    return (
      <Box className="container">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={4}>
            <h3>Serviços: </h3>
          </GridItem>
          <GridItem colSpan={1}>
          </GridItem>
        </Grid>
        <Accordion allowToggle>
          {servicos.map((servico) => (
            <AccordionItem>
              <h6>
                <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                  <Box as="span" flex="1" textAlign="left">
                    {servico.getNome} | Valor: R${servico.getPreco}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h6>
              <AccordionPanel pb={2}>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  gap={1}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                >
                  <GridItem colSpan={1}>
                    <Button bg="#35b3fc" textColor="white" width="10rem">
                      Editar
                    </Button>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Button bg="#fa1119" textColor="white" width="10rem">
                      Deletar
                    </Button>
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
