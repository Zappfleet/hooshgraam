import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'تولید محتوا با AI',
      description: 'کپشن، هشتگ و ایده پست را با هوش مصنوعی در چند ثانیه بسازید'
    },
    {
      icon: '🎨',
      title: 'ساخت تصویر و ویدیو',
      description: 'تصاویر حرفه‌ای و ریلز جذاب با استفاده از AI تولید کنید'
    },
    {
      icon: '📅',
      title: 'زمان‌بندی هوشمند',
      description: 'در بهترین زمان‌ها به صورت اتوماتیک پست بگذارید'
    },
    {
      icon: '📊',
      title: 'آنالیز پیشرفته',
      description: 'عملکرد پیج را با داشبورد تحلیلی رصد کنید'
    },
    {
      icon: '💬',
      title: 'پاسخ خودکار',
      description: 'به کامنت‌ها و پیام‌ها به صورت هوشمند پاسخ دهید'
    },
    {
      icon: '🎯',
      title: 'تحلیل رقبا',
      description: 'استراتژی رقبا را بررسی و از آنها الگو بگیرید'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="section-header text-center">
          <h2>همه چیز برای رشد پیج شما</h2>
          <p>ابزارهای قدرتمند برای مدیریت حرفه‌ای اینستاگرام</p>
        </div>

        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <div className="feature-card card fade-in" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;