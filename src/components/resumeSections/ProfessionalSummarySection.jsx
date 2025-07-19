import React from "react";
import { TextareaWithPopover } from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';

const ProfessionalSummarySection = ({ formData, setFormData }) => {
    return (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Professional Summary</Accordion.Header>
                    <Accordion.Body>
                    <TextareaWithPopover
                        labelDisplayText="Professional Summary"
                        textareaName="summary"
                        textareaId="inputSummary"
                        textareaPlaceholder="Write a brief summary of your professional background, skills, and career goals."
                        infoPopupHeader="Professional Summary"
                        infoPopupPlacement="bottom"
                        infoPopupBody="This section should provide a concise overview of your professional background, highlighting key skills, experiences, and career aspirations. Aim for 2-5 sentences that capture your unique value proposition."
                    />
                    </Accordion.Body>
                </Accordion.Item>   
            </Accordion>
    );
};

export default ProfessionalSummarySection;