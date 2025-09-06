import React from "react";
import { FormTextarea } from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';
import LexicalTextEditor from "./RichTextEditor";

const ProfessionalSummarySection = ({ formData, setFormData }) => {
    return (
        <Accordion tabIndex={"-1"} defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <h2 className="accordion-header">
                    <Accordion.Button tabIndex={"-1"}>Professional Summary</Accordion.Button>
                </h2>
                <Accordion.Body>
                    <LexicalTextEditor />
                    <FormTextarea
                        textareaName="summary"
                        textareaId="inputSummary"
                        textareaPlaceholder="Write a brief summary of your professional background, skills, and career goals."
                        infoPopupHeader="Professional Summary"
                        infoPopupPlacement="left"
                        infoPopupBody="This section should provide a concise overview of your professional background, highlighting key skills, experiences, and career aspirations. Aim for 2-5 sentences that capture your unique value proposition."
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ProfessionalSummarySection;