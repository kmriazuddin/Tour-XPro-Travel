import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import usePackage from "../../../Hooks/usePackage";
import Package from "../OurPackage/Package";

const TravelSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [packages] = usePackage();

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center m-auto">
                        {
                            packages.map(item =>
                                <Package key={item._id} items={item} className="">
                                </Package>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <img src="https://images.pexels.com/photos/13703327/pexels-photo-13703327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelSection;