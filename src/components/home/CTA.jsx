import { Link } from 'react-router-dom';
import { trackCTAClick } from '../../utils/analytics';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>آماده برای شروع هستید؟</h2>
          
          </div>

          <div className="cta-actions">
            <Link 
              to="/signup" 
              className="btn btn-primary btn-large"
              onClick={() => trackCTAClick('شروع رایگان', 'CTA Bottom')}
            >
               شروع کنید  
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-secondary btn-large"
            >
              تماس با فروش
            </Link>
          </div>

          <div className="cta-trust">
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>  پرداخت ریالی</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>آموزش رایگان </span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>پشتیبانی 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-bg">
        <div className="cta-pattern"></div>
      </div>
    </section>
  );
};

export default CTA;