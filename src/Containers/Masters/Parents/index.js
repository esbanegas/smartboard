import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommandBarControl, TableControl, ReadExcelFile } from '../../../Controls'
import { columnsParentsTable } from './setting';
import { IconButton } from '@fluentui/react';

import { restClient } from '../../../Services/restClient';
import { utils } from '../../../utils';
import { ParentForm } from './components/ParentForm';
import { useTranslate } from 'react-translate';
import { useAlert } from 'react-alert';

const ParentsStyled = styled.div`

`;

const Parents = () => {
    const [parents, setParents] = useState([]);
    const [filteredParents, setFilteredParents] = useState([]);
    const [selectedParent, setSelectedParent] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const translate = useTranslate('data');
    const alert = useAlert();

    useEffect(() => {
        fetchParents();
    }, []);

    const fetchParents = async () => {
        const response = await restClient.httpGet('parents', {
            queryInfo: {
                pageIndex: 0,
                pageSize: 10
            },
        });

        if (utils.evaluateArray(response.items)) {
            setParents(response.items);

            return;
        }

        setParents([]);
    }

    const onDissmis = () => {
        setIsOpen(false);
        setSelectedParent({});
    }

    const handleEditClick = row => {
        setSelectedParent(row);
        setIsOpen(true);
    }

    const handleDeleteClick = async row => {
        const response = await restClient.httpDelete('parents', {
            parentId: row.parentId,
        })

        if (response.message === 'Success') {
            alert.success(translate('Record successfully deleted'))

            fetchParents();
        }
    }

    const handleSearch = data => {
        setFilteredParents(data.length > 0 ? data : null);
    }

    const handleGetData = data => {
    }

    return (
        <ParentsStyled>
            <CommandBarControl items={[
                {
                    text: 'add',
                    iconName: 'add',
                    onClick: () => setIsOpen(true),
                }
            ]} />

            <ReadExcelFile schema={
                {
                    'Identidad': {
                        prop: 'identity',
                        type: Number,
                    },

                    'Nombres': {
                        prop: 'names',
                        type: String,
                    },

                    'Apellidos': {
                        prop: 'lastName',
                        type: String,
                    },

                    'Correo Electronico': {
                        prop: 'email',
                        type: String,
                    },

                    'Direccion': {
                        prop: 'address',
                        type: String,
                    },

                    'Telefono': {
                        prop: 'phone',
                        type: Number,
                    },

                    'Estado': {
                        prop: 'status',
                        type: String,
                    },
                }}

                getData={handleGetData}
            />


            <TableControl
                data={parents}
                columns={columnsParentsTable(handleEditClick, handleDeleteClick)}
                onSearch={handleSearch} />

            {isOpen && (
                <ParentForm
                    onRefresh={fetchParents}
                    selectedParent={selectedParent}
                    onDissmis={onDissmis}
                />
            )}
        </ParentsStyled>
    )
}


export default Parents;