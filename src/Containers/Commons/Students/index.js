import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommonStudentStyled = styled.div``;

export const CommonStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <CommonStudentStyled>

        </CommonStudentStyled>
    )
}