import React from "react";
import InputWithPopover from "../Inputs";
import { FormTextarea } from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';
import AddRemoveButtons from "../AddRemoveButtons";

function WorkExperienceSection({ id, formData, setFormData, experienceNumber, isRemovable, isAddable, onclickAdd, onclickRemove  }) {

    const formLayout = (<div className="container p-1">
        <div className="row">
            <div className="col-6">
                <InputWithPopover
                    labelDisplayText="Start Date"
                    inputType="date"
                    inputId="inputStartedDate"
                    infoPopupHeader="The date you started at this company."
                    infoPopupPlacement="right"
                    infoPopupBody="This should be the date you began your employment at this company."
                    inputValue={formData.StartedDate}
                    inputEventOnChange={(e) => { setFormData({ ...formData, startedDate: e.target.value }) }} />
            </div>
            <div className="col-6">
                <InputWithPopover
                    labelDisplayText="Left Date"
                    inputType="date"
                    inputId="inputEndedDate"
                    infoPopupHeader="Enter your lastest profession"
                    infoPopupPlacement="left"
                    infoPopupBody="This should be your current or most recent job title, e.g., 'Software Engineer', 'Data Scientist', etc."
                    inputValue={formData.title}
                    inputEventOnChange={(e) => { setFormData({ ...formData, title: e.target.value }) }} />
            </div>
            <div className="col-6">
                <InputWithPopover
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
                <InputWithPopover
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
    );

    isRemovable = false;
    isAddable = true;

    if (id === 1) {
        isRemovable = false;
        isAddable = true;
    }

    if (id > 1) {
        isRemovable = true;
        isAddable = true;
    }

    if (id >= 10) {
        isRemovable = true;
        isAddable = false;
    }



    return (
        <div className="row mt-4">
            <AddRemoveButtons
             enableAdd={isAddable}
             enableRemove={isRemovable}
             onclickAdd={onclickAdd}
             onclickRemove={onclickRemove}
            />

            <div className="flex flex-md-col rounded bg-body bg-gradient border p-0 my-0 shadow">
                <Accordion defaultActiveKey="0" className="">
                    <Accordion.Item eventKey="0">

                        <h2 className="accordion-header">

                            <Accordion.Button className="" eventKey="0" tabIndex={"-1"}>Experience<span className="position-relative ms-4 m-0 translate-middle-x badge bg-secondary">#{experienceNumber}</span></Accordion.Button>
                        </h2>            <Accordion.Body>
                            <div className="container p-1">
                                <div className="row">
                                    <div className="col-6">
                                        <InputWithPopover
                                            labelDisplayText="Started Date"
                                            inputType="date"
                                            inputId="inputStartedDate"
                                            infoPopupHeader="The date you started at this company."
                                            infoPopupPlacement="right"
                                            infoPopupBody="This should be the date you began your employment at this company."
                                            inputValue={formData.StartedDate}
                                            inputEventOnChange={(e) => { setFormData({ ...formData, startedDate: e.target.value }) }} />
                                    </div>
                                    <div className="col-6">
                                        <InputWithPopover
                                            labelDisplayText="Ended Date"
                                            inputType="date"
                                            inputId="inputEndedDate"
                                            infoPopupHeader="Enter your lastest profession"
                                            infoPopupPlacement="left"
                                            infoPopupBody="This should be your current or most recent job title, e.g., 'Software Engineer', 'Data Scientist', etc."
                                            inputValue={formData.title}
                                            inputEventOnChange={(e) => { setFormData({ ...formData, title: e.target.value }) }} />
                                    </div>
                                    <div className="col-6">
                                        <InputWithPopover
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
                                        <InputWithPopover
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
                </Accordion>
            </div>
        </div>
    );
};

export default WorkExperienceSection;