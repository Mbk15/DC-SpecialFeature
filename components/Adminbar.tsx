import React, { useEffect, useState } from "react";
import { Tablist, Pane, Tab, Paragraph } from "evergreen-ui";
import AdminContent from "../components/AdminContent";
import SpecialFeaturePage from "./SpecialFeaturePage";
import FeatureCard from "../components/FeatureCard";

interface Iprops {}
interface Istate {}

const Adminbar: React.FC<Iprops> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<Istate>(0);
  const [tabs] = React.useState([
    { title: "Special Features", comp: <AdminContent /> },
    { title: "Admin Picks", comp: <SpecialFeaturePage /> },
    { title: "Events", comp: "Coming Soon !" },
  ]);

  return (
    <>
      <Pane display="flex" marginTop={16} width="80%" height={240}>
        <Tablist
          marginBottom={16}
          marginLeft={16}
          flexBasis={240}
          marginRight={24}
        >
          {tabs.map((tab: any, index: any) => (
            <Tab
              fontSize={20}
              key={index}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab.title}`}
            >
              {tab.title}
            </Tab>
          ))}
        </Tablist>
        <Pane padding={16} background="green200" flex="1">
          {tabs.map((tab, index) => (
            <Pane
              key={index}
              id={`panel-${index}`}
              role="tabpanel"
              aria-labelledby={tab}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? "block" : "none"}
            >
              {tab.comp}
            </Pane>
          ))}
        </Pane>
      </Pane>

      <FeatureCard />
    </>
  );
};

export default Adminbar;
