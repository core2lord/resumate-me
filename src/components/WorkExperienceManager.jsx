import React, { useState } from 'react';
import WorkExperienceSection from './resumeSections/WorkExperienceSection';

const WorkExperienceManager = () => {
  const [workExperiences, setWorkExperiences] = useState([
    { id: 1, data: {} }
  ]);

  const addExperience = () => {
    const newId = workExperiences.length > 0 ? Math.max(...workExperiences.map(we => we.id)) + 1 : 1;
    setWorkExperiences([...workExperiences, { id: newId, data: {} }]);
  };

  const removeExperience = (idToRemove) => {
    if (workExperiences.length > 1) {
      setWorkExperiences(workExperiences.filter(we => we.id !== idToRemove));
    }
  };

  const updateExperienceData = (id, newData) => {
    setWorkExperiences(
      workExperiences.map(we => (we.id === id ? { ...we, data: newData } : we))
    );
  };

  return (
    <div>
      {workExperiences.map((we, index) => (
        <WorkExperienceSection
          key={we.id}
          id={we.id}
          formData={we.data}
          setFormData={(newData) => updateExperienceData(we.id, newData)}
          experienceNumber={index + 1}
          isRemovable={workExperiences.length > 1}
          isAddable={true}
          onclickAdd={addExperience}
          onclickRemove={() => removeExperience(we.id)}
        />
      ))}
    </div>
  );
};

export default WorkExperienceManager;