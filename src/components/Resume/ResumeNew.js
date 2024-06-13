import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Praneeth_Reddy_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page,PDFViewer } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
   const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
function onDocumentLoadSuccess(numPages){
    setNumPages(numPages);
  }
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section" style={{height:'100vh'}}>
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* <Row className="resume d-flex justify-content-center">
        <Col md={8}>
          <PDFViewer>         
            <Document file={pdf} className="d-flex justify-content-center resume-doc" loading={ <><h1>hello</h1></>}  >
            <Page size='A4' pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
           
            </Document>
          </PDFViewer>

        </Col>
      </Row> */}
    </Container>
  );
}

export default ResumeNew;
