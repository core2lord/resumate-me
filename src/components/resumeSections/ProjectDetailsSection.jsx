import React from "react";
import InputWithPopover from "../Inputs";
import { FormTextarea } from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';

const ProjectDetailsSection = ({ formData, setFormData }) => {
    return <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <h2 className="accordion-header">
                <Accordion.Button tabIndex={"-1"}>Projects</Accordion.Button>
            </h2> 
                <Accordion.Body>
                <div className="container p-1">
                    <div className="row g-2">
                        <div className="col-12">
                            <InputWithPopover
                                labelDisplayText="Summary \ Name"
                                inputType="text"
                                inputId="inputProjectSummary"
                                inputPlaceholder="ex. ( Database Migration to the cloud )"
                                infoPopupHeader="Project Summary"
                                infoPopupPlacement="right"
                                infoPopupBody="The idea or goal of the project."
                                inputValue={formData.projectSummary}
                                inputEventOnChange={(e) => { setFormData({ ...formData, projectSummary: e.target.value }) }}
                            />
                        </div>
                        <div className="col-12">
                            <FormTextarea
                                labelDisplayText="Description \ Accomplishments"
                                textareaName="ProjectDescription"
                                textareaId="inputProjectDescription"
                                textareaPlaceholder="Mention any accomplishments or challenges you've overcome during the project. May include things such as the duration of the project and any potential solutions or ideas that resulted in a success for the team."
                                infoPopupHeader="Day-to-Day Responsibilities"
                                infoPopupPlacement="left"
                                infoPopupBody="This section should detail your daily activities, including specific tasks, tools used, and any methodologies followed. Aim for a clear and concise description that highlights your contributions."
                                textareaValue={formData.projectDescription}
                            />
                        </div>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
};

export default ProjectDetailsSection;