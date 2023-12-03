import React from "react";
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
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { clientes } from "../data/clientesData";

const ListaCliente: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="container">
      <h3>Clientes: </h3>
      <Accordion allowToggle>
        {clientes.map((cliente, index) => (
          <AccordionItem key={index}>
            <h6>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  {cliente.nome} / {cliente.nomeSocial} | Gênero: {cliente.sexo}{" "}
                  | CPF: {cliente.getCpf.getValor}
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
                    <>
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
                          <ModalHeader>Editar Cliente</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <FormControl
                              id="CadastroCliente"
                              className="container"
                            >
                              <FormLabel>nome</FormLabel>
                              <Input
                                id="first_name"
                                type="text"
                                size="sm"
                                value={cliente.nome}
                              />
                              <FormLabel>nome social</FormLabel>
                              <Input
                                id="last_name"
                                type="text"
                                size="sm"
                                value={cliente.nomeSocial}
                              />
                              <FormLabel>cpf</FormLabel>
                              <Input
                                id="cpf"
                                type="number"
                                placeholder="Somente números"
                                size="sm"
                                value={cliente.getCpf.getValor}
                              />
                              <FormLabel>data de emissão</FormLabel>
                              <Input
                                id="dataEmissao"
                                type="date"
                                textColor={"gray"}
                                size="sm"
                              />
                              <FormLabel>gênero</FormLabel>
                              <Input
                                id="sexo"
                                type="text"
                                size="sm"
                                value={cliente.sexo}
                              />
                              <FormLabel>telefone</FormLabel>
                              <Input
                                id="telefone"
                                type="text"
                                placeholder="DDD-Número"
                                size="sm"
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
                              Cadastrar Cliente
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </>
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
};

export default ListaCliente;
