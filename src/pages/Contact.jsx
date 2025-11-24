import { useState } from 'react';
import SEO from '../components/common/SEO';
import { logEvent } from '../utils/analytics';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Track form submission
    logEvent('Contact', 'form_submit', formData.subject);
    
    // اینجا باید به backend ارسال بشه
    console.log('Form submitted:', formData);
    
    setStatus('پیام شما با موفقیت ارسال شد! به زودی پاسخ خواهیم داد.');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="تماس با ما |  هوشگرام - پشتیبانی 24/7"
        description="با تیم پشتیبانی  هوشگرام در تماس باشید. ما آماده‌ایم تا به سوالات شما پاسخ دهیم."
        keywords="تماس با  هوشگرام, پشتیبانی, ارتباط با ما"
        url="/contact"
      />

      <div className="contact-page">
            <div className="text-center">
              <h1>با ما در تماس باشید</h1>
              <p className="hero-subtitle">
                سوالی دارید؟ ما اینجا هستیم تا کمک کنیم
              </p>
            </div>
    

        <section className="contact-content section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>راه‌های ارتباطی</h2>
                <p>می‌توانید از طریق راه‌های زیر با ما در ارتباط باشید:</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div className="method-content">
                      <h3>ایمیل</h3>
                      <p>hooshgraam@gmail.com</p>
                      <small>پاسخگویی در کمتر از 24 ساعت</small>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📱</div>
                    <div className="method-content">
                      <h3>تلگرام</h3>
                      <p>@hooshgraam_support</p>
                      <small>پشتیبانی سریع</small>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📞</div>
                    <div className="method-content">
                      <h3>تلفن</h3>
                      <p>09373500821</p>
                      <small>شنبه تا پنج‌شنبه، 9 صبح تا 6 عصر</small>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">📍</div>
                    <div className="method-content">
                      <h3>آدرس</h3>
                      <p>شیراز- پارک فناوری - تخت جمشید - 3009  </p>
                      <small>مراجعه با هماهنگی قبلی</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <h2>فرم تماس</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">نام و نام خانوادگی *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">ایمیل *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">موضوع *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="support">پشتیبانی فنی</option>
                      <option value="sales">سوالات فروش</option>
                      <option value="feature">درخواست ویژگی</option>
                      <option value="bug">گزارش باگ</option>
                      <option value="other">سایر موارد</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">پیام *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="پیام خود را بنویسید..."
                    ></textarea>
                  </div>

                  {status && (
                    <div className="form-status success">
                      {status}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%' }}>
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;