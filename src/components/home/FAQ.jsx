import { useState } from 'react';
import './FAQ.css';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">
        <div className="section-header text-center">
          <h2>سوالات متداول</h2>
          <p>پاسخ سوالات رایج درباره  هوشگرام</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer text-center">
          <p>سوال دیگری دارید؟</p>
          <a href="/contact" className="btn btn-secondary">تماس با پشتیبانی</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;