import React from "react";
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
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";


const ListaServico: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="container">
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={4}>
          <h3>Serviços: </h3>
        </GridItem>
        <GridItem colSpan={1}></GridItem>
      </Grid>
      <Accordion allowToggle>
        {servicos.map((servico, index) => (
          <AccordionItem key={index}>
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
                  <Button
                    onClick={onOpen}
                    bg="#35b3fc"
                    textColor="white"
                    width="10rem"
                  >
                    Editar
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Editar Serviço</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <FormControl id="CadastroCliente" className="container">
                          <FormLabel>nome</FormLabel>
                          <Input
                            id="first_name"
                            type="text"
                            size="sm"
                            value={servico.nome}
                          />
                          <FormLabel>preço</FormLabel>
                          <Input
                            id="last_name"
                            type="text"
                            size="sm"
                            value={servico.preco}
                          />
                        </FormControl>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                        <Button
                          bg="#1cff14"
                          textColor="white"
                          width="200px"
                          onClick={onClose}
                        >
                          Cadastrar Serviço
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
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
};

export default ListaServico;
