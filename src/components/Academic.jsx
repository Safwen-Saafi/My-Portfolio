import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { academic } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const AcademiCard = ({ academi }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={academi.date}
      iconStyle={{ background: academi.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={academi.icon}
            alt={academi.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{academi.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {academi.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {academi.points.map((point, index) => (
          <li
            key={`academi-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Academic = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where did I study
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Academic Career.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {academic.map((academi, index) => (
            <AcademiCard
              key={`academi-${index}`}
              academi={academi}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Academic, "work");