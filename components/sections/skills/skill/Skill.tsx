'use client';
import React from 'react';
import { ISkills } from '@/models/interfaces';
import Icon from '@/components/icon/Icon';

interface ISkillProps {
  skill: ISkills;
}

const Skill: React.FC<ISkillProps> = ({ skill }) => {
  return (
    <>
      <Icon name={skill.name} />
      {<p>{skill.formattedName}</p>}
    </>
  );
};

export default Skill;
