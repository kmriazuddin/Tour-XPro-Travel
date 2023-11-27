import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const TravelSection = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="mt-20">
            <SectionTitle subHeading={'Travel Guide Section'} heading={'DEALS & OFFER'}></SectionTitle>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Guides</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelSection;