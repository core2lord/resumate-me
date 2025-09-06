import React, { useState } from "react";
import CertificationSection from "./resumeSections/CertificationSection";
import EducationSection from "./resumeSections/EducationSection";
import PersonalDetailsSection from "./resumeSections/PersonalDetailsSection";
import ProfessionalSummarySection from "./resumeSections/ProfessionalSummarySection";
import ProjectDetailsSection from "./resumeSections/ProjectDetailsSection";
import WorkExperienceManager from "./WorkExperienceManager";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const EditResume = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",

        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_desc: "",
        exp2_dur: "",

        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",

        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",
        extra_1: "",
        extra_2: ""
    });

    const [projectNumber, setProjectNumber] = useState(1);
    const [educationNumber, setEducationNumber] = useState(1);
    const [certificationNumber, setCertificationNumber] = useState(1);
    const projectSectionArray = [];
    const educationSectionArray = [];
    const certificationSectionArray = [];

    const handleAddProject = () => {
        setProjectNumber(projectNumber + 1);
    };

    const handleAddEducation = () => {
        setEducationNumber(educationNumber + 1);
    };

    const handleAddCertification = () => {
        setCertificationNumber(certificationNumber + 1);
    };

    const handleRemoveProject = () => {
        if (projectNumber > 1) {
            setProjectNumber(projectNumber - 1);
        }
    };

    const handleRemoveEducation = () => {
        if (educationNumber > 1) {
            setEducationNumber(educationNumber - 1);
        }
    };

    const handleRemoveCertification = () => {
        if (certificationNumber > 1) {
            setCertificationNumber(certificationNumber - 1);
        }
    };

    function TopNavbar() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Resumate.me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Button className="me-auto" variant="link">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    return (
        <div id="viewport">
            {TopNavbar()}
            <div className="container p-4">
                <div id="content">
                    <h2>Edit Resume</h2>
                    <div className="row my-2">
                        <div className="flex flex-md-col rounded bg-body bg-gradient shadow p-0 my-2">
                            <ProfessionalSummarySection formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="flex flex-md-col rounded bg-body bg-gradient border p-0 my-2 shadow">
                            <PersonalDetailsSection formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                    <WorkExperienceManager />
                    <div className="row my-2">
                        <div className="flex flex-md-col rounded bg-body bg-gradient border p-0 my-2 shadow">
                            <ProjectDetailsSection formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="flex flex-md-col rounded bg-body bg-gradient border p-0 my-2 shadow">
                            <EducationSection formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="flex flex-md-col rounded bg-body bg-gradient border p-0 my-2 shadow">
                            <CertificationSection formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditResume;