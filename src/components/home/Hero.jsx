import { Link } from 'react-router-dom';
import { trackCTAClick } from '../../utils/analytics';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
             ابزار شماره 1 مدیریت  پیج اینستاگرام
              <span className="gradient-text">  ،آسان و ارزان ، </span>
                  مبتنی بر هوش مصنوعی
            </h1>
            <p className="hero-description">
              با قدرت هوش مصنوعی، تولید کپشن، هشتگ، تصویر و ریلز اینستاگرام را اتوماتیک کنید. 
              زمان‌بندی، تعامل، برنامه‌ریزی و تجزیه و تحلیل اینستاگرام در یکجا، در زمان و هزینه صرفه‌جویی کنید 
            </p>
            
            <div className="hero-cta">
              <Link 
                to="/pricing" 
                className="btn btn-primary btn-large"
                onClick={() => trackCTAClick('شروع رایگان 14 روزه', 'Hero')}
              >
                🚀 شروع   
              </Link>
              {/*<Link 
                to="/pricing" 
                className="btn btn-secondary btn-large"
              >
                مشاهده دمو
              </Link>*/}
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">پیج فعال</span>
              </div>
              <div className="stat">
                <span className="stat-number">5,000,000+</span>
                <span className="stat-label">محتوای تولید شده</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.8/5</span>
                <span className="stat-label">رضایت کاربران</span>
              </div>
            </div>

            <div className="hero-trust">
              <p className="trust-text">✨ بدون نیاز به کارت بانکی  بین المللی| پرداخت ریالی   </p>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-mockup">
              {/* اینجا می‌تونی یک تصویر واقعی dashboard بذاری */}
              <div className="mockup-placeholder">
                <div className="mockup-header">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="mockup-content">
                  <div className="content-card">
                    <div className="card-icon">🤖</div>
                    <h3>تولید محتوا هوشمند</h3>
                    <p>با یک کلیک، کپشن | تصویر | ویدیو جذاب و حرفه‌ای بسازید</p>
                  </div>
                  <div className="content-card">
                    <div className="card-icon">📅</div>
                    <h3>زمان‌بندی اتوماتیک</h3>
                    <p>در بهترین زمان‌ها به صورت خودکار پست بذارید</p>
                  </div>
                  <div className="content-card">
                    <div className="card-icon">📊</div>
                    <h3>آنالیز پیشرفته</h3>
                    <p>عملکرد پیج خود را رصد کنید و بهبود دهید</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="floating-badge badge-1">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">10 برابر سریع‌تر</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-icon">💰</span>
              <span className="badge-text">70% صرفه‌جویی</span>
            </div>
            <div className="floating-badge badge-3">
              <span className="badge-icon">🎯</span>
              <span className="badge-text">نتیجه تضمینی</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bg">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
    </section>
  );
};

export default Hero;