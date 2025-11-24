import SEO from '../components/common/SEO';
import { OrganizationSchema } from '../components/common/JsonLd';
import './About.css';

const About = () => {
  return (
    <>
      <SEO 
        title="درباره ما |  هوشگرام - ابزار اتوماسیون اینستاگرام"
        description=" هوشگرام یک ابزار هوشمند برای مدیریت و اتوماسیون اینستاگرام است که با استفاده از هوش مصنوعی به شما کمک می‌کند محتوای باکیفیت تولید کنید."
        keywords="درباره  هوشگرام, تیم  هوشگرام, ماموریت"
        url="/about"
      />
      <OrganizationSchema />

      <div className="about-page">
        <section className="about-hero section">
          <div className="container">
            <div className="text-center">
              <h1>درباره  هوشگرام</h1>
              <p className="hero-subtitle">
                ما با هدف ساده‌سازی مدیریت اینستاگرام و کمک به رشد کسب‌وکارها شروع کردیم
              </p>
            </div>
          </div>
        </section>

        <section className="about-story section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>داستان ما</h2>
                <p>
                  در سال 1401، وقتی دیدیم کسب‌وکارهای کوچک و متوسط ساعت‌ها وقت‌شان را 
                  صرف مدیریت دستی پیج اینستاگرام می‌کنند، تصمیم گرفتیم راه‌حلی پیدا کنیم.
                </p>
                <p>
                  با ترکیب تخصص ما در توسعه نرم‌افزار و قدرت هوش مصنوعی،  هوشگرام متولد شد - 
                  ابزاری که نه تنها زمان را صرفه‌جویی می‌کند، بلکه کیفیت محتوا را هم بهبود می‌دهد.
                </p>
                <p>
                  امروز، بیش از 5000 کسب‌وکار و پیج با اعتماد به  هوشگرام، پیج‌های خود را مدیریت می‌کنند 
                  و به رشد ارگانیک دست یافته‌اند.
                </p>
              </div>
              <div className="story-image">
                  <img src='/logo-white.png'></img>
                
              </div>
            </div>
          </div>
        </section>

        <section className="about-values section bg-light">
          <div className="container">
            <h2 className="text-center mb-4">ارزش‌های ما</h2>
            <div className="values-grid grid grid-3">
              <div className="value-card card">
                <div className="value-icon">🎯</div>
                <h3>تمرکز بر کاربر</h3>
                <p>نیازها و موفقیت کاربران ما در اولویت اول است</p>
              </div>
              <div className="value-card card">
                <div className="value-icon">💡</div>
                <h3>نوآوری</h3>
                <p>همیشه به دنبال راه‌های بهتر و هوشمندتر هستیم</p>
              </div>
              <div className="value-card card">
                <div className="value-icon">🤝</div>
                <h3>شفافیت</h3>
                <p>با صداقت و شفافیت کامل با کاربران رفتار می‌کنیم</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team section">
          <div className="container">
            <h2 className="text-center mb-4">تیم ما</h2>
            <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
              تیمی از متخصصان توسعه نرم‌افزار، هوش مصنوعی و دیجیتال مارکتینگ که برای موفقیت شما تلاش می‌کنند
            </p>
            <div className="team-grid grid grid-3">
              <div className="team-member card">
                <div className="member-avatar">👨‍💻</div>
                <h3>سامان هوشمندی </h3>
                <p className="member-role">بنیانگذار و CEO</p>
                <p> توسعه کسب و کار فناوری و متخصص هوش مصنوعی</p>
              </div>
              <div className="team-member card">
                <div className="member-avatar">👩‍💼</div>
                <h3>فرشید قبادزاده</h3>
                <p className="member-role">مدیر محصول</p>
                <p>متخصص هوش مصنوعی </p>
              </div>
                   <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>مریم عسکری  </h3>
                <p className="member-role">متخصص دیجیتال مارکتینگ و seo</p>
                <p>  کارشناس ارشد بازاریابی دیجیتال </p>
              </div>
              <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>رضا کریمی</h3>
                <p className="member-role">مدیر فناوری AI</p>
                <p>PhD در هوش مصنوعی و یادگیری ماشین</p>
              </div>
              <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>افشین فروزان </h3>
                <p className="member-role">متخصص فناوری AI</p>
                <p> تخصص در هوش مصنوعی و LLMها </p>
              </div>
              <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>مهدی حمزوی </h3>
                <p className="member-role">کارشناس فناوری AI</p>
                <p> تخصص در هوش مصنوعی و اتوماسیون </p>
              </div>
               <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>محمد مطلوع   </h3>
                <p className="member-role">مشاور مدیر عامل  </p>
                <p>  کارشناس ارشد سخت افزار </p>
              </div>
                <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>محمود موسی پور  </h3>
                <p className="member-role">مشاور مدیر عامل  </p>
                <p>  کارشناس ارشد IT </p>
              </div>
                <div className="team-member card">
                <div className="member-avatar">👨‍🔬</div>
                <h3>سهیل مقامی  </h3>
                <p className="member-role">متخصص  مالی</p>
                <p>  کارشناس ارشد مالی </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;