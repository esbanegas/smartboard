import React, { useState, useMemo, Suspense } from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

import styled from 'styled-components';

import { TextField, DefaultButton } from '@fluentui/react';
// import { TableControl } from '../../Controls';

import { useAlert } from 'react-alert'

import withState from '../../Store/withState';

const TableControl = React.lazy(() => import('../../Controls/TableControl'));

const AttendanceControlStyled = styled.div`

`;

// const data = [{
//     identity: '0512199601283',
//     email: 'sbanegas3196@gmail.com',
//     name: 'Erlin Samir',
//     lastName: "Banegas Hernández",
// }]

const AttendanceControl = () => {
    // const [items] = useState(data);

    const alert = useAlert();

    const handleStudentSearch = (value) => {

    }

    const NameCol = styled.div`
        color: red;
    `;

    const dataTest = useMemo(() => {
        const dataFor = [];

        for (let i = 0; i <= 3000; i++) {
            dataFor.push({
                firstName: 'Erlin',
                secondName: 'Samir',
                surName: 'Banegas',
                secondSurName: 'Hernández',
                age: 28,
                email: 'sbanegas3196@gmail.com',
                sex: 'M',
                direction: 'La Ceiba',
                nationality: 'Hondureño',
                music: 'Aqui estoy'
            });
        }

        return dataFor;
    }, [])

    return (
        <AttendanceControlStyled>
            Attendance Control

            <DefaultButton primary onClick={() => { alert.success("Success") }} />
            <DefaultButton primary onClick={() => { alert.info("Info") }} />
            <DefaultButton primary onClick={() => { alert.error("Error") }} />

            <Suspense fallback={<div style={{color: '#ffffff', height: '100%', background: 'red', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                Loading...
            </div>}>
                <TableControl
                    columns={[
                        {
                            fieldName: 'firstName',
                            label: 'Primer Nombre',
                            width: 160,
                        },
                        {
                            fieldName: 'secondName',
                            label: 'Segundo Nombre',
                            // onRenderCell: row => <TextField value={row.secondName} />
                        },
                        {
                            fieldName: 'surName',
                            label: 'Primer Apellido',
                        },
                        {
                            fieldName: 'secondSurName',
                            label: 'Segundo Apellido',
                        },
                        {
                            fieldName: 'age',
                            label: 'Edad',
                        },
                        {
                            fieldName: 'email',
                            label: 'Correo Electrónico',
                        },
                        {
                            fieldName: 'sex',
                            label: 'Sexo',
                        },
                        {
                            fieldName: 'direction',
                            label: 'Dirección',
                        },
                        {
                            fieldName: 'nationality',
                            label: 'Nacionalidad',
                        },
                        {
                            fieldName: 'music',
                            label: 'Música',
                        },
                    ]}

                    data={dataTest}
                    rowConfig={{
                        uniqueKey: 'name',
                        // onClick: row => { debugger }
                    }}

                    currentPage={0}
                    totalPages={10}
                    basePageLink={10}
                />
            </Suspense>

        </AttendanceControlStyled>
    )
}

export default AttendanceControl;