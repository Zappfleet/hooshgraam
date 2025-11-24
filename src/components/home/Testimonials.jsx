import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'سارا احمدی',
      role: 'صاحب فروشگاه آنلاین',
      image: '👩',
      text: 'با  هوشگرام زمان تولید محتوام از 5 ساعت به 30 دقیقه رسید! واقعاً شگفت‌انگیزه.',
      rating: 5
    },
    {
      name: 'امیر حسینی',
      role: 'دیجیتال مارکتر',
      image: '👨',
      text: 'بهترین ابزار برای مدیریت چندین پیج. قابلیت AI توش فوق‌العادست و خیلی کمک می‌کنه.',
      rating: 5
    },
    {
      name: 'نیلوفر کریمی',
      role: 'اینفلوئنسر',
      image: '👩‍💼',
      text: 'قبلاً ادمین استخدام می‌کردم، الان با  هوشگرام خودم همه کاراهامو انجام میدم. پول و زمان زیادی صرفه‌جویی شد.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>کاربران درباره ما چه می‌گویند؟</h2>
          <p>داستان موفقیت کاربران  هوشگرام</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card card" key={index}>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;