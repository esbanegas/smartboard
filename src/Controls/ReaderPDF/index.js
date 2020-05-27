import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from "react-pdf";

import styled from 'styled-components';

import test from './test.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReaderPDFStyled = styled.div``;

const ReaderPDFControl = () => {
    const [numPages, setNumPages] = useState(null);

    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const changePage = offset => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    const previousPage = () => {
        changePage(-1);
    }

    const nextPage = () => {
        changePage(1);
    }

    return (
        <ReaderPDFStyled>
            <Document
                file={test}
                onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} />
            </Document>

            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
        </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
        </button>
            </div>
        </ReaderPDFStyled>
    )
}


export default ReaderPDFControl;