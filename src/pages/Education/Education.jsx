import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import eduImg from "../../img/edu.png";
import "./education.css";
import eduAccordion from "./eduList";

const Education = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 edu-header">
                    <hr />
                    <h2><span className="style-word">Educational</span> Qualifications</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 edu-img-section">
                    <img src={eduImg} alt="" />
                </div>

                <div className="col-md-6 col-lg-6 col-sm-12 edu-content-section">
                {eduAccordion.map((values)=>{
                        return(
                            <Accordion className="Accordion">
                                <AccordionSummary 
                                    expandIcon={<ExpandMoreIcon className="ExpandMoreIcon"/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="AccordionSummary"
                            >
                                <Typography  className="Typography heading">{values.heading}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="AccordionDetails">
                                        <Typography className="Typography"> {values.content} </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                </div>
            </div>
        </>
    );
}

export default Education