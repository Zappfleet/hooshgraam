import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className="container   ">
        <div className="footer-grid   ">
          <div className="footer-col  ">
            <div className="logo ">
              <span className="logo-icon "><img src='/logo.png' ></img></span>
              <span className="logo-text"> هوشگرام</span>
            </div>
            <p>ابزار هوشمند مدیریت و اتوماسیون اینستاگرام با قدرت AI</p>
            <div className="social-links ">
              <a href="https://instagram.com/hooshgraam" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="https://t.me/hooshgraam" target="_blank" rel="noopener noreferrer">📱</a>
              <a href="https://linkedin.com/company/hooshgraam" target="_blank" rel="noopener noreferrer">💼</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>محصول</h4>
            <ul>
              <li><Link to="/features">ویژگی‌ها</Link></li>
              <li><Link to="/pricing">قیمت‌گذاری</Link></li>
             {/* <li><Link to="/demo">مشاهده دمو</Link></li>*/}
             {/* <li><Link to="/roadmap">نقشه راه</Link></li>*/}
            </ul>
          </div>

          <div className="footer-col ">
            <h4>منابع</h4>
            <ul>
              <li><Link to="/blog">وبلاگ</Link></li>
              {/*<li><Link to="/guides">راهنماها</Link></li>*/}
             {/* <li><Link to="/api-docs">مستندات API</Link></li>*/}
              {/*  <li><Link to="/support">پشتیبانی</Link></li>*/}
            </ul>
          </div>

          <div className="footer-col">
            <h4>شرکت</h4>
            <ul>
              <li><Link to="/about">درباره ما</Link></li>
              <li><Link to="/contact">تماس با ما</Link></li>
               {/*<li><Link to="/careers">فرصت‌های شغلی</Link></li>*/}
              {/*<li><Link to="/privacy">حریم خصوصی</Link></li>*/}
              {/*<li><Link to="/terms">شرایط استفاده</Link></li>*/}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024  هوشگرام. تمامی حقوق محفوظ است.</p>
          <p>ساخته شده با ❤️ در ایران</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;