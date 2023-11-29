import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import usePackage from "../../../Hooks/usePackage";
import Package from "../OurPackage/Package";
import Overview from "../OurPackage/Overview";
import MeetOurGuide from "../OurPackage/MeetOurGuide";
import useGuide from "../../../Hooks/useGuide";

const TravelSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [packages] = usePackage();
    const [guides] = useGuide();

    return (
        <div className="mt-20">
            <SectionTitle subHeading={'Travel Guide Section'} heading={'DEALS & OFFER'}></SectionTitle>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Guides</Tab>
                </TabList>
                <TabPanel>
                    <Overview></Overview>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center m-auto">
                        {
                            packages.map(item =>
                                <Package key={item._id} items={item} className="">
                                </Package>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center m-auto">
                        {
                            guides.map(guide =>
                                <MeetOurGuide key={guide._id} guideCo={guide} className="">
                                </MeetOurGuide>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelSection;