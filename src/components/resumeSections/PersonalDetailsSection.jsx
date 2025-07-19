import React from 'react';
import InputWithPopover from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';

const PersonalDetailsSection = ({ formData, setFormData }) => {
    return (
        <Accordion defaultActiveKey="0" className="">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personal Details</Accordion.Header>
                <Accordion.Body>
                    <div className="container p-1">
                        <div className="row">
                            <div className="col-12 col-sm-8">
                                <InputWithPopover
                                    labelDisplayText="Full Name"
                                    inputType="text"
                                    inputId="inputFullName"
                                    infoPopupHeader="Enter your full name"
                                    infoPopupPlacement="bottom"
                                    infoPopupBody="This should include your first name, middle name (if any), and last name."
                                    inputValue={formData.name}
                                    inputEventOnChange={(e)=>{setFormData({...formData, name: e.target.value})}}
                                />
                            </div>
                            <div className="col-12 col-sm-4">
                                <InputWithPopover
                                    labelDisplayText="Title"
                                    inputType="text"
                                    inputId="inputTitle"
                                    infoPopupHeader="Enter your lastest profession"
                                    infoPopupPlacement="bottom"
                                    infoPopupBody="This should be your current or most recent job title, e.g., 'Software Engineer', 'Data Scientist', etc."
                                    inputValue={formData.title}
                                    inputEventOnChange={(e)=>{setFormData({...formData, title: e.target.value})}}

                                />                </div>
                            <div className="col-12">
                                <InputWithPopover
                                    labelDisplayText="Contact Email"
                                    inputType="text"
                                    inputId="inputEmail"
                                    infoPopupHeader="Enter a valid email address"
                                    infoPopupPlacement="bottom"
                                    infoPopupBody="This should be a professional email address where you can be reached."
                                    inputValue={formData.email}
                                    inputEventOnChange={(e)=>{setFormData({...formData, email: e.target.value})}}

                                />                </div>
                            <div className="col-md-12">
                                <InputWithPopover
                                    labelDisplayText="Location"
                                    inputType="text"
                                    inputId="inputLocation"
                                    infoPopupHeader="Enter your current location"
                                    infoPopupPlacement="bottom"
                                    infoPopupBody="This can be something like your city and country, e.g., 'San Francisco, USA'."
                                    inputValue={formData.location}
                                    inputEventOnChange={(e)=>{setFormData({...formData, location: e.target.value})}}

                                />                </div>

                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default PersonalDetailsSection;