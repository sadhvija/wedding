import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');

  const handleAccordionToggle = (id) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <>
      <div className="faq-title">FAQ</div>
      <div className="accordion-container">
        <div className="accordion" id="accordionExample">
          {[...Array(10)].map((_, index) => {
            const collapseId = `collapse${index + 1}`;
            const headingId = `heading${index + 1}`;
            return (
              <div className="accordion-item" key={collapseId}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${activeAccordion === collapseId ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => handleAccordionToggle(collapseId)}
                    aria-expanded={activeAccordion === collapseId}
                    aria-controls={collapseId}
                  >
                    Accordion Item {index + 1}
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${activeAccordion === collapseId ? 'show' : ''}`}
                  aria-labelledby={headingId}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    This is the content for Accordion Item {index + 1}.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
