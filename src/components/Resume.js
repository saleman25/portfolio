import React, { useState, Component } from 'react';
import { Document, Page } from 'react-pdf';

class Resume extends Component {


  render() {
  return (
    <div>
      <Document
        file="../resume/resume.pdf"
      >
        <Page pageNumber={1} />
      </Document>
      
    </div>
  );
}

};
export default Resume