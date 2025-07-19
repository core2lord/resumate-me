import React, { useState } from "react";
import CertificationSection from "./CertificationSection";
import EducationSection from "./EducationSection";
import PersonalDetailsSection from "./PersonalDetailsSection";
import ProfessionalSummarySection from "./ProfessionalSummarySection";
import ProjectDetailsSection from "./ProjectDetailsSection";
import WorkExperienceSection from "./WorkExperienceSection";


const NewForm = () => {
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

    const [page, setPage] = useState(0);
    const FormTitles = ["Summary", "Personal Details", "Work Experience", "Project Details", "Education", "Certifications"];

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

    function openNav() {
        let sidebar = document.getElementById("sidebar");
        let viewport = document.getElementById("viewport");
        let closeBtn = document.getElementById("closeBtn");
        if (sidebar.style.width === "0px") {
            sidebar.style.width = "250px";
            sidebar.style.left = "280px";
            closeBtn.style.left = "250px";
            viewport.style.paddingLeft = "300px";
        } else {
            sidebar.style.width = "0px";
            sidebar.style.left = "0px";
            closeBtn.style.left = "0px";
            viewport.style.paddingLeft = "40px";
        }
    }

    // This function will return the component to be displayed based on the current page
    const PageDisplay = () => {
        if (page === 0) {
            return <ProfessionalSummarySection formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <PersonalDetailsSection />
        } else if (page === 2) {
            return <WorkExperienceSection />
        } else if (page === 3) {
            return <ProjectDetailsSection />
        } else if (page === 4) {
            return <EducationSection />
        } else if (page === 5) {
            return <CertificationSection />
        }
    };

    // This function will remove the 'active' class from all buttons and add it to the button with the specified id
    // This is used to highlight the currently active section in the sidebar navigation
    function setButtonActive(id) {
        const buttons = document.querySelectorAll('.nav button');
        buttons.forEach((button) => {
            button.classList.remove('active');
        });
        const activeButton = document.getElementById(id);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    return (

        <div id="viewport">

            <div id="sidebar">

                <header >
                    <div id="closeBtn"><button type="button" aria-label="Close" onClick={() => { openNav() }}>&#9776;</button></div>

                    <div className="row flex-nowrap justify-content-between align-items-center p-2">
                        <div className="col p-2 my-1">
                            <a href="/">Resumate.me</a>
                        </div>
                        <div className="col-auto d-flex align-self-start">
                        </div>
                    </div>
                </header>
                <nav className="nav d-flex text-nowrap flex-column py-3">
                    <button type="button" id="nav-summary" className="nav-link btn align-self-start active" onClick={() => { setButtonActive("nav-summary"); setPage(0); }} >Summary</button>
                    <button type="button" id="nav-personalDetails" className="nav-link btn align-self-start" onClick={() => { setButtonActive("nav-personalDetails"); setPage(1); }}>Personal Details</button>
                    <button type="button" id="nav-workExperience" className="nav-link btn align-self-start" onClick={() => { setPage(2); setButtonActive("nav-workExperience"); }}>Work Experience</button>
                    <button type="button" id="nav-projectDetails" className="nav-link btn align-self-start" onClick={() => { setPage(3); setButtonActive("nav-projectDetails"); }}>Project Details</button>
                    <button type="button" id="nav-education" className="nav-link btn align-self-start" onClick={() => { setPage(4); setButtonActive("nav-education"); }}>Education</button>
                    <button type="button" id="nav-certifications" className="nav-link btn align-self-start" onClick={() => { setPage(5); setButtonActive("nav-certifications"); }}>Certifications</button>
                </nav>
            </div>
            <div id="content">
                <div className="container-md p-4">
                    <h3>{FormTitles[page]}</h3>
                    <div className="row">
                        <div className="flex rounded bg-white p-4 shadow">
                            <ProfessionalSummarySection formData={formData} setFormData={setFormData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewForm;