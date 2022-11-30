import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Navbar() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>About Me</Tab>
        <Tab>Portfolio</Tab>
        <Tab>Contact</Tab>
        <Tab>Resume</Tab>
      </TabList>
    </Tabs>
  );
}
