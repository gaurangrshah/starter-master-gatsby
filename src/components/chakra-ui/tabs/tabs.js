import React from "react"
import {
  Tabs as CHTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/core"

export const Tabs = ({ list = [], panels }) => {
  return (
    <CHTabs>
      <TabList>
        {list?.map((item, i) => (
          <Tab key={i} children={item} />
        ))}
      </TabList>

      <TabPanels>
        {panels?.map((panel, i) => (
          <TabPanel key={i} children={panel} />
        ))}
      </TabPanels>
    </CHTabs>
  )
}
