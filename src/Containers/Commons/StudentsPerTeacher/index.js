import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableControl } from '../../../Controls';

const CommonStudentsPerTeacherStyled = styled.div``;

export const CommonStudentsPerTeacher = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <CommonStudentsPerTeacherStyled>
            <TableControl
                data={students}
                columns={[
                    {
                        label: 'identity',
                        fieldName: 'identity'
                    },
                    {
                        label: 'firstName',
                        fieldName: 'firstName'
                    },
                    {
                        label: 'email',
                        fieldName: 'email'
                    },
                    {
                        label: 'address',
                        fieldName: 'address'
                    },
                    {
                        label: 'phone',
                        fieldName: 'phone'
                    },
                    {
                        label: 'status',
                        fieldName: 'status'
                    },
                ]} />
        </CommonStudentsPerTeacherStyled>
    )
}