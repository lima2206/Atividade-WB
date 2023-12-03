import { Component } from "react";
import { clientes } from "../data/clientesData";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Telefone from "../modelo/telefone";

type props = {};

export default class FormularioCadastro extends Component<props> {
  adicionarCliente() {
    const first_name = document.getElementById(
      "first_name"
    ) as HTMLInputElement;
    const nome_social = document.getElementById(
      "last_name"
    ) as HTMLInputElement;
    const sexo = document.getElementById("sexo") as HTMLInputElement;
    const cpf_input = document.getElementById("cpf") as HTMLInputElement;
    const dataEmissao_input = document.getElementById(
      "dataEmissao"
    ) as HTMLInputElement;
    const tel_input = document.getElementById("telefone") as HTMLInputElement;

    const cpf = new CPF(cpf_input.value, new Date(dataEmissao_input.value));
    let tels = tel_input.value.split("-");
    const tel = new Telefone(tels[0], tels[1]);
    const cliente = new Cliente(
      first_name.value,
      nome_social.value,
      cpf,
      sexo.value
    );
    cliente.setTelefone([tel]);

    clientes.push(cliente);

    first_name.value = "";
    nome_social.value = "";
    sexo.value = "";
    cpf_input.value = "";
    dataEmissao_input.value = "";

    return console.log("Usuário Cadastrado");
  }

  render() {
    return (
      <Box>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Cliente</Tab>
            <Tab>Produto</Tab>
            <Tab>Serviço</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FormControl id="CadastroCliente" className="container">
                <h3>Cadastro Cliente: </h3>
                <Grid templateColumns="1fr 1fr" gap={3}>
                  <GridItem>
                    <FormLabel>nome</FormLabel>
                    <Input id="first_name" type="text" size="sm" />
                  </GridItem>
                  <GridItem>
                    <FormLabel>nome social</FormLabel>
                    <Input id="last_name" type="text" size="sm" />
                  </GridItem>
                  <GridItem>
                    <FormLabel>cpf</FormLabel>
                    <Input
                      id="cpf"
                      type="number"
                      placeholder="Somente números"
                      size="sm"
                    />
                  </GridItem>
                  <GridItem>
                    <FormLabel>data de emissão</FormLabel>
                    <Input
                      id="dataEmissao"
                      type="date"
                      textColor={"gray"}
                      size="sm"
                    />
                  </GridItem>
                  <GridItem>
                    <FormLabel>gênero</FormLabel>
                    <Input id="sexo" type="text" size="sm" />
                  </GridItem>
                  <GridItem>
                    <FormLabel>telefone</FormLabel>
                    <Input
                      id="telefone"
                      type="text"
                      placeholder="DDD-Número"
                      size="sm"
                    />
                  </GridItem>
                </Grid>
                <Box
                  style={{
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    bg="#1cff14"
                    textColor="white"
                    width="200px"
                    onClick={this.adicionarCliente}
                  >
                    Cadastrar Cliente
                  </Button>
                </Box>
              </FormControl>
            </TabPanel>
            <TabPanel>
              <FormControl id="CadastroProduto" className="container">
                <h3>Cadastro Produto: </h3>
                <Grid templateColumns="1fr 1fr" gap={3}>
                  <GridItem>
                    <FormLabel>nome do produto</FormLabel>
                    <Input type="text" size="sm" />
                  </GridItem>
                  <GridItem>
                    <FormLabel>valor do produto</FormLabel>
                    <Input placeholder="R$" type="text" size="sm" />
                  </GridItem>
                </Grid>
                <Box
                  style={{
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button bg="#1cff14" textColor="white" width="200px">
                    Cadastrar Produto
                  </Button>
                </Box>
              </FormControl>
            </TabPanel>
            <TabPanel>
              <FormControl id="CadastroProduto" className="container">
                <h3>Cadastro Serviço: </h3>
                <Grid templateColumns="1fr 1fr" gap={3}>
                  <GridItem>
                    <FormLabel>nome do serviço</FormLabel>
                    <Input type="text" size="sm" />
                  </GridItem>
                  <GridItem>
                    <FormLabel>valor do serviço</FormLabel>
                    <Input placeholder="R$" type="text" size="sm" />
                  </GridItem>
                </Grid>
                <Box
                  style={{
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button bg="#1cff14" textColor="white" width="200px">
                    Cadastrar Serviço
                  </Button>
                </Box>
              </FormControl>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  }
}
