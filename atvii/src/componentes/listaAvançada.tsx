import { Component } from "react";
import { TabList, Tab, TabPanels, TabPanel, Tabs, Box, SimpleGrid } from "@chakra-ui/react";

type props = {};

export default class ListaAvancada extends Component<props> {
  render() {
    return (
      <Box className="container" >
        <SimpleGrid columns={2}>
        <p>1 - 10 Clientes que mais consumiram Produtos ou Serviços em quantidade</p>
        <p>4 - Serviços ou Produtos mais consumidos por Gênero</p>
        <p>2 - Todos os Clientes por Gênero</p>
        <p>5 - 10 Clientes que menos consumiram Produtos ou Serviços em quantidade</p>
        <p>3 - Serviços ou Produtos mais consumidos</p>
        <p>6 - 5 Clientes que mais consumiram Produtos ou Serviços em valor</p>
        </SimpleGrid>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Tab>4</Tab>
            <Tab>5</Tab>
            <Tab>6</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>1</p>
            </TabPanel>
            <TabPanel>
              <p>2</p>
            </TabPanel>
            <TabPanel>
              <p>3</p>
            </TabPanel>
            <TabPanel>
              <p>4</p>
            </TabPanel>
            <TabPanel>
              <p>5</p>
            </TabPanel>
            <TabPanel>
              <p>6</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  }
}
