import React from 'react';
import InputWithPopover from "../Inputs";
import Accordion from 'react-bootstrap/Accordion';

const PersonalDetailsSection = ({ formData, setFormData }) => {
    return (
        <Accordion defaultActiveKey="0" className="">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personal Portfolios</Accordion.Header>
                <Accordion.Body>
                    <div className="container p-1">
                        <div className="row">
                            <div className="col-12 col-sm-8">
                                <InputWithPopover
                                    labelDisplayText="URL Address"
                                    inputType="text"
                                    inputId="inputUrl"
                                    inputPlaceholder="ex. https://linkedin.com/in/<myProfileLink>"
                                    infoPopupHeader="The URL to access a public portfolio page"
                                    infoPopupPlacement="left"
                                    infoPopupBody="Linkedin would be a great example for an employer to get some more details about someone if they are interested"
                                    inputValue={formData.portfolioUrl}
                                    inputEventOnChange={(e)=>{setFormData({...formData, portfolioUrl: e.target.value})}}
                                />
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default PersonalDetailsSection;