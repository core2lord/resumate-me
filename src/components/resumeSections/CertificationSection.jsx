import { useState } from "react";
import React from "react";
import FormInput from "../Inputs";
import { FormTextarea } from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const Certifications = ({ formData, setFormData }) => {
    const [showExpiredDate, setShowExpiredDate] = useState(false);

    const handleShowExpiredDate = (e) => {
        setShowExpiredDate(e.target.checked);
    }
    return <Accordion defaultActiveKey="0" className="">
        <Accordion.Item eventKey="0">
            <h2 className="accordion-header">
                <Accordion.Button tabIndex={"-1"}>Certifications</Accordion.Button>
            </h2>
            <Accordion.Body>
                <div className="container p-1">
                    <div className="row justify-content-end  ">
                        <div className="col-auto py-1 border border-dark border-1 rounded-3">
                            <Form.Check
                                type='checkbox'
                                id='hasExpiredDate'
                                label='Expires?'
                                onChange={handleShowExpiredDate}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <FormInput
                                labelDisplayText="Obtained"
                                inputType="date"
                                inputId="inputStartedDate"
                                infoPopupHeader="The date you started at this company."
                                infoPopupPlacement="right"
                                infoPopupBody="This should be the date you began your employment at this company."
                                inputValue={formData.certStartDate}
                                inputEventOnChange={(e) => { setFormData({ ...formData, certStartDate: e.target.value }) }} />
                        </div>
                        <div className="col-6 d-inline">
                            {showExpiredDate &&
                                <FormInput
                                    labelDisplayText="Expires"
                                    inputType="date"
                                    inputId="inputEndedDate"
                                    infoPopupHeader="Enter the expiration date of this certification"
                                    infoPopupPlacement="left"
                                    infoPopupBody=""
                                    inputValue={formData.certEndDate}
                                    inputEventOnChange={(e) => { setFormData({ ...formData, certEndDate: e.target.value }) }} />
                            }
                        </div>
                        <div className="col-6">
                            <FormInput
                                labelDisplayText="Company Name"
                                inputType="text"
                                inputId="inputCompanyName"
                                infoPopupHeader="Enter the name of the company you worked for"
                                infoPopupPlacement="top"
                                infoPopupBody="This should be the full name of the company, e.g., 'Tech Solutions Inc.'"
                                inputValue={formData.email}
                                inputEventOnChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
                        </div>
                        <div className="col-md-6">
                            <FormInput
                                labelDisplayText="Location"
                                inputType="text"
                                inputId="inputLocation"
                                infoPopupHeader="Enter your current location"
                                infoPopupPlacement="bottom"
                                infoPopupBody="This can be something like your city and country, e.g., 'San Francisco, USA'."
                                inputValue={formData.location}
                                inputEventOnChange={(e) => { setFormData({ ...formData, location: e.target.value }) }} />
                        </div>
                        <div className="col-md-12">
                            <FormTextarea
                                labelDisplayText="Description"
                                inputType="text"
                                inputId="inputLocation"
                                infoPopupHeader="Enter your current location"
                                infoPopupPlacement="bottom"
                                infoPopupBody="This can be something like your city and country, e.g., 'San Francisco, USA'."
                                inputValue={formData.location}
                                inputEventOnChange={(e) => { setFormData({ ...formData, location: e.target.value }) }} />
                        </div>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>;
};

export default Certifications;