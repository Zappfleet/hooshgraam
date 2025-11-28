import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
<footer className="footer">
  <div className="container">

    <div className="footer flex justify-between gap-6">

      {/* ستون 1 — لوگو، توضیحات و شبکه‌های اجتماعی */}
      <div className="footer-col ">
        <div className="logo">
          <span className="logo-icon">
            <img src="/images/logo.png" alt="هوشگرام" />
          </span>
          <span className="logo-text">هوشگرام</span>
        </div>
        <p>ابزار هوشمند مدیریت و اتوماسیون اینستاگرام با قدرت AI</p>

        <div className="social-links">
          <a href="https://instagram.com/hooshgraam" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://t.me/hooshgraam" target="_blank" rel="noopener noreferrer">📱</a>
          <a href="https://linkedin.com/company/hooshgraam" target="_blank" rel="noopener noreferrer">💼</a>
        </div>
      </div>

      {/* ستون 2 — لینک‌های صفحات */}
      <div className="footer-col ">
        <h4>محصول و منابع</h4>
        <ul>
          <li><Link to="/features">ویژگی‌ها</Link></li>
          <li><Link to="/pricing">قیمت‌گذاری</Link></li>
          <li><Link to="/blog">وبلاگ</Link></li>
        </ul>
      </div>

      {/* ستون 3 — شرکت + لوگوی مجوز */}
      <div className="footer-col  ">
        <h4>شرکت</h4>
        <ul>
          <li><Link to="/about">درباره ما</Link></li>
          <li><Link to="/contact">تماس با ما</Link></li>
        </ul>

      
      </div>
      <div className="footer-col  ">
          <a
          href="https://qr.mojavez.ir/track/17589148"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block"
        >
          <img
            src="/images/mojavez.png"  // آدرس تصویر مجوز
            alt="مجوز درگاه"
            style={{ height: "50px" }}
          />
        </a>
<a
  target="_blank"
  href="https://trustseal.enamad.ir/?id=678560&Code=SFVmFf4hiEb6F30ljPzXSXKmsDvbtQHP"
>
  <img
    referrerPolicy="origin"
    src="https://trustseal.enamad.ir/logo.aspx?id=678560&Code=SFVmFf4hiEb6F30ljPzXSXKmsDvbtQHP"
    alt=""
    style={{ cursor: "pointer" }}
    code="SFVmFf4hiEb6F30ljPzXSXKmsDvbtQHP"
  />
</a>

      </div>


    </div>

    <div className="footer-bottom mt-6 text-center">
  
      <p>© 2024 هوشگرام. تمامی حقوق محفوظ است.</p>
      <p>ساخته شده با ❤️ در ایران</p>
    </div>

  </div>
</footer>


  );
};

export default Footer;