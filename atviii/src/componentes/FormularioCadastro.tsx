import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const FormularioCadastro: React.FC = () => {
  const [cliente, setCliente] = useState({
    first_name: "",
    nome_social: "",
    sexo: "",
    cpf: "",
    dataEmissao: "",
  });

  const [produto, setProduto] = useState({
    nome: "",
    valor: "",
  });

  const [servico, setServico] = useState({
    nome: "",
    valor: "",
  });

  const adicionarCliente = () => {
    // Lógica para adicionar cliente...
    console.log("Cliente adicionado:", cliente);
    setCliente({
      first_name: "",
      nome_social: "",
      sexo: "",
      cpf: "",
      dataEmissao: "",
    });
  };

  const adicionarProduto = () => {
    // Lógica para adicionar produto...
    console.log("Produto adicionado:", produto);
    setProduto({
      nome: "",
      valor: "",
    });
  };

  const adicionarServico = () => {
    // Lógica para adicionar serviço...
    console.log("Serviço adicionado:", servico);
    setServico({
      nome: "",
      valor: "",
    });
  };

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
                    onClick={adicionarCliente}
                  >
                    Cadastrar Cliente
                  </Button>
                </Box>
              </FormControl>
          </TabPanel>
          <TabPanel>
            {/* Painel de cadastro do produto */}
            <FormControl id="CadastroProduto" className="container">
              <h3>Cadastro Produto: </h3>
              <Grid templateColumns="1fr 1fr" gap={3}>
                <GridItem>
                  <FormLabel>nome do produto</FormLabel>
                  <Input
                    type="text"
                    size="sm"
                    value={produto.nome}
                    onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>valor do produto</FormLabel>
                  <Input
                    placeholder="R$"
                    type="text"
                    size="sm"
                    value={produto.valor}
                    onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
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
                  onClick={adicionarProduto}
                >
                  Cadastrar Produto
                </Button>
              </Box>
            </FormControl>
          </TabPanel>
          <TabPanel>
            {/* Painel de cadastro do serviço */}
            <FormControl id="CadastroServico" className="container">
              <h3>Cadastro Serviço: </h3>
              <Grid templateColumns="1fr 1fr" gap={3}>
                <GridItem>
                  <FormLabel>nome do serviço</FormLabel>
                  <Input
                    type="text"
                    size="sm"
                    value={servico.nome}
                    onChange={(e) => setServico({ ...servico, nome: e.target.value })}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>valor do serviço</FormLabel>
                  <Input
                    placeholder="R$"
                    type="text"
                    size="sm"
                    value={servico.valor}
                    onChange={(e) => setServico({ ...servico, valor: e.target.value })}
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
                  onClick={adicionarServico}
                >
                  Cadastrar Serviço
                </Button>
              </Box>
            </FormControl>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FormularioCadastro;
