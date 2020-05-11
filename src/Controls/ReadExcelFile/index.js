import React from 'react';
import PropTypes from 'prop-types';
import readXlsxFile from 'read-excel-file';
import styled from 'styled-components';
import { Button } from '@fluentui/react';

const ReadExcelFileStyled = styled.div`
    .custom-file-input::-webkit-file-upload-button {
       visibility: hidden;
    }
    .custom-file-input::before {
        content: 'Select some files';
        display: inline-block;
        background: linear-gradient(top, #f9f9f9, #e3e3e3);
        border: 1px solid #999;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
    }

    .custom-file-input:hover::before {
        border-color: black;
    }

    .custom-file-input:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
    }
`;

const ReadExcelFile = ({ schema, getData }) => {

    const handleReadExcel = async event => {
        const file = event.target.files[0];

        readXlsxFile(file).then(rows => {
            const headers = rows[0];

            const items = rows.slice(1, rows.length).map(row => {
                let item = {};

                Object.keys(schema).forEach(key => {
                    const indexCol = headers.findIndex(head => head === key);
                    if (indexCol == -1) {
                        return;
                    }

                    item = {
                        ...item,
                        [schema[key].prop]: row[indexCol],
                    }
                });

                return item;
            });

            getData(items);
        });
    }

    return (
        <ReadExcelFileStyled>
            {/* <Button primary> */}
            <input
                className="custom-file-input"
                type="file"
                onChange={handleReadExcel} />
            {/* </Button> */}
        </ReadExcelFileStyled>
    )
}

ReadExcelFile.propTypes = {
    schema: PropTypes.shape({
        headName: PropTypes.shape({
            prop: PropTypes.string.isRequired,
            type: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.instanceOf(Date),
                PropTypes.array,
                PropTypes.string,
            ]),
        }),
    }),

    getData: PropTypes.func.isRequired,
}

export default ReadExcelFile;