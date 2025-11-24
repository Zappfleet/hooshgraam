import SEO from '../components/common/SEO';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import { FAQSchema } from '../components/common/JsonLd';

const PricingPage = () => {
  const pricingFaqs = [
    {
      question: "آیا می‌توانم پلن خود را تغییر دهم؟",
      answer: "بله، در هر زمان می‌توانید پلن خود را ارتقا یا کاهش دهید. تغییرات از دوره بعدی اعمال می‌شود."
    },
    {
      question: "روش پرداخت چگونه است؟",
      answer: "ما از تمام کارت‌های بانکی ایرانی پشتیبانی می‌کنیم. همچنین امکان پرداخت ماهانه، سه‌ماهه و سالانه وجود دارد."
    },
    {
      question: "آیا تخفیف سالانه دارید؟",
      answer: "بله! با پرداخت سالانه 20% تخفیف دریافت می‌کنید. یعنی 2 ماه رایگان!"
    },
  
  ];

  return (
    <>
      <SEO 
        title="قیمت‌گذاری |  هوشگرام - 14 روز رایگان بدون نیاز به کارت بانکی"
        description="پلن مناسب خود را انتخاب کنید. از 199 هزار تومان شروع می‌شود. آزمایش رایگان 14 روزه بدون نیاز به کارت بانکی."
        keywords="قیمت  هوشگرام, پلن اشتراک, قیمت ابزار اینستاگرام, آزمایش رایگان"
        url="/pricing"
      />
      <FAQSchema faqs={pricingFaqs} />

      <div className="pricing-page">
      

        <Pricing />
        
        <section className="pricing-compare section bg-light">
          <div className="container">
            <h2 className="text-center mb-4">مقایسه بسته ها </h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>ویژگی</th>
                    <th>پایه</th>
                    <th>حرفه‌ای</th>
                    <th>کسب‌وکار</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>تعداد اکانت</td>
                    <td>1</td>
                    <td>3</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>تولید کپشن</td>
                    <td>50/ماه</td>
                    <td>نامحدود</td>
                    <td>نامحدود</td>
                  </tr>
                  <tr>
                    <td>تولید تصویر</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>تولید ویدیو</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>تحلیل رقبا</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>API دسترسی</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>پشتیبانی</td>
                    <td>ایمیل</td>
                    <td>اولویت‌دار</td>
                    <td>24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FAQ faqs={pricingFaqs} />
      </div>
    </>
  );
};

export default PricingPage;