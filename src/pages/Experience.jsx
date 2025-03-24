import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences1 } from "../constants/index.js";
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const index = () => {
  return (
    <Container className="h-[100%] sm:h-screen "  id="experience">
      <Wrapper  >
        <div className="sm:flex sm:h-[70vh]">
        <div className="mt-40" variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center  `}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center `}>
            My Experience.
          </h2>
        </div>
      <div className="overflow-y-scroll">
      <TimelineSection>
          <Timeline>
            {experiences1.map((experience, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences1.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default index;
