import React from "react";
import InputWithPopover from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';

const ProjectDetailsSection = () => {
    return <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Personal Details</Accordion.Header>
            <Accordion.Body>
                <div className="container p-1">
                    <div className="row">
                        <div className="col-12 col-sm-8">
                            <InputWithPopover
                                labelName="Full Name"
                                inputType="text"
                                inputId="inputFullName"
                                infoPopupHeader="Enter your full name"
                                infoPopupPlacement="bottom"
                                infoPopupBody="This should include your first name, middle name (if any), and last name."
                            />
                        </div>
                        <div className="col-12 col-sm-4">
                            <InputWithPopover
                                labelName="Title"
                                inputType="text"
                                inputId="inputTitle"
                                infoPopupHeader="Enter your lastest profession"
                                infoPopupPlacement="bottom"
                                infoPopupBody="This should be your current or most recent job title, e.g., 'Software Engineer', 'Data Scientist', etc."
                            />                </div>
                        <div className="col-12">
                            <InputWithPopover
                                labelName="Contact Email"
                                inputType="text"
                                inputId="inputEmail"
                                infoPopupHeader="Enter a valid email address"
                                infoPopupPlacement="bottom"
                                infoPopupBody="This should be a professional email address where you can be reached."
                            />                </div>
                        <div className="col-md-12">
                            <InputWithPopover
                                labelName="Location"
                                inputType="text"
                                inputId="inputLocation"
                                infoPopupHeader="Enter your current location"
                                infoPopupPlacement="bottom"
                                infoPopupBody="This can be something like your city and country, e.g., 'San Francisco, USA'."
                            />                </div>

                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
        ;
};

export default ProjectDetailsSection;