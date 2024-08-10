import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;




// Explanation
// StarWrapper:

// Parameters:

// Component: The React component that will be wrapped by this HOC.
// idName: A string used as an id for the section, useful for navigation and anchoring.
// Return Value:

// The StarWrapper returns a new functional component (the HOC) that renders the passed Component within a motion.section.
// motion.section:

// This is a section element enhanced with Framer Motion's animation capabilities.
// variants={staggerContainer()}: Applies the animation variants returned by the staggerContainer() function. This likely defines a staggered animation effect for child elements within the section.
// initial="hidden" whileInView="show": Defines the animation states:
// initial="hidden": The section starts in a hidden state.
// whileInView="show": The section animates to a "show" state when it comes into view.
// viewport={{ once: true, amount: 0.25 }}: Controls how the animation is triggered:
// once: true: The animation triggers only once when the section enters the viewport.
// amount: 0.25: The animation starts when 25% of the section is visible in the viewport.
// Styling:

// ${styles.padding}: Adds padding to the section, sourced from a styles object that presumably holds common style classes.
// max-w-7xl mx-auto: Sets the maximum width of the section to 7xl and centers it horizontally with mx-auto.
// relative z-0: Ensures that the section is positioned relative to other elements and sets its z-index to 0, controlling its stacking order.
// <span className="hash-span" id={idName}>:

// This span element acts as an anchor for navigation, allowing users to scroll directly to this section. The id attribute is set to idName, enabling link-based navigation (e.g., #about).
// The &nbsp; (non-breaking space) ensures that the span has some content, though it won’t be visible.
// <Component />:

// The Component passed to the HOC is rendered inside the motion.section, inheriting the animations and styles.