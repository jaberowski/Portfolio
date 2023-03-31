import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Section({ children, id, setCurrentSection, className, ...props }) {
  const { ref, inView, entry } = useInView({ threshold: 0.55 });
  useEffect(() => {
    if (inView) {
      setCurrentSection(id);
    }
  }, [inView]);

  return (
    <section id={id} {...props} ref={ref} className={className}>
      {children}
    </section>
  );
}

export default Section;
