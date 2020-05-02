import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Persona, PersonaPresence, PersonaSize } from '@fluentui/react';

import image from './test.png';
import { TabsControl } from '../../Controls';

const TeacherProfileStyled = styled.div`
    /* background: red; */
    display: grid;

    .profile {
        display: grid;
        justify-content: center;

        /* background: blue; */
        width: 100%;
        height: 100%;
    }
`;

const TeacherProfile = () => {
    const teacherProfile = {
        name: 'Erlin',
        lastName: 'Banegas',
        profession: 'Software Engineer'
    }

    const examplePersona = {
        imageUrl: image,
        imageInitials: `${teacherProfile.name.charAt(0)}${teacherProfile.lastName.charAt(0)}`,
        text: `${teacherProfile.name} ${teacherProfile.lastName}`,
        secondaryText: teacherProfile.profession,
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
    }

    return (
        <TeacherProfileStyled>
            <h1>Teacher Profile</h1>

            

            <div className="profile">
                <Persona
                    {...examplePersona}
                    size={PersonaSize.size120}
                    presence={PersonaPresence.away}
                    // hidePersonaDetails={!renderDetails}
                    imageAlt="Annie Lindqvist, status is away"
                />
            </div>

        </TeacherProfileStyled>
    )
}


export default TeacherProfile;