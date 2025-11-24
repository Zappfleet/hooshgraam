import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'اتصال اکانت',
      description: 'اکانت اینستاگرام خود را در چند کلیک به  هوشگرام متصل کنید',
      icon: '🔗'
    },
    {
      number: '2',
      title: 'تولید محتوا',
      description: 'با کمک هوش مصنوعی، محتوای باکیفیت برای یک هفته بسازید',
      icon: '✨'
    },
    {
      number: '3',
      title: 'زمان‌بندی',
      description: 'زمان انتشار پست‌ها را تنظیم کنید یا به سیستم بسپارید',
      icon: '⏰'
    },
    {
      number: '4',
      title: 'رشد و موفقیت',
      description: 'آرام بنشینید و شاهد رشد ارگانیک پیج خود باشید',
      icon: '🚀'
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-header text-center">
          <h2>چطور کار می‌کند؟</h2>
          <p>فقط 4 گام تا اتوماسیون کامل پیج شما</p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;