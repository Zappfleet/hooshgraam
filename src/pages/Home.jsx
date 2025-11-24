import SEO from '../components/common/SEO';
import { OrganizationSchema, ProductSchema, FAQSchema } from '../components/common/JsonLd';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import './Home.css';

const Home = () => {
  const faqs = [
    {
      question: "آیا نیاز به دانش فنی برای استفاده از  هوشگرام دارم؟",
      answer: "خیر!  هوشگرام طوری طراحی شده که هر کسی بتواند بدون نیاز به دانش فنی از آن استفاده کند. رابط کاربری ساده و شهودی ما کار با ابزار را برای همه آسان کرده است."
    },
    {
      question: "چطور می‌توانم  هوشگرام را امتحان کنم؟",
      answer: "شما می‌توانید 14 روز به صورت کاملاً رایگان از تمام امکانات  هوشگرام استفاده کنید. نیازی به ثبت کارت بانکی نیست و هر زمان می‌توانید لغو کنید."
    },
    {
      question: "آیا  هوشگرام با قوانین اینستاگرام سازگار است؟",
      answer: "بله، کاملاً. ما تمام محدودیت‌ها و قوانین API رسمی اینستاگرام را رعایت می‌کنیم و امنیت اکانت شما برای ما در اولویت است."
    },
    {
      question: "چند اکانت اینستاگرام می‌توانم مدیریت کنم؟",
      answer: "بسته به پلن انتخابی شما: پلن پایه 1 اکانت، پلن حرفه‌ای 3 اکانت و پلن کسب‌وکار تا 10 اکانت را پشتیبانی می‌کند."
    },
    {
      question: "آیا از محتوای تولید شده با AI می‌توانم استفاده تجاری کنم؟",
      answer: "بله، تمام محتوای تولید شده توسط هوش مصنوعی  هوشگرام کاملاً متعلق به شماست و می‌توانید بدون محدودیت از آن استفاده کنید."
    }
  ];

  return (
    <>
      <SEO 
        title=" هوشگرام - اتوماسیون هوشمند اینستاگرام با AI | تولید محتوا در 5 دقیقه"
        description="با ابزار اتوماسیون اینستاگرام  هوشگرام، محتوای یک هفته را در 5 دقیقه آماده کنید. تولید کپشن، هشتگ و تصویر با هوش مصنوعی. آزمایش رایگان 14 روزه."
        keywords="اتوماسیون اینستاگرام, ابزار مدیریت اینستاگرام, تولید محتوا با AI, ادمین پیج اینستاگرام, هوش مصنوعی اینستاگرام"
        url="/"
      />
      
      <OrganizationSchema />
      <ProductSchema 
        name=" هوشگرام"
        price="199000"
        description="ابزار اتوماسیون و مدیریت هوشمند اینستاگرام با قابلیت تولید محتوا با هوش مصنوعی"
        image="https://hooshgraam.ir/product-image.jpg"
        rating="4.8"
        reviewCount="127"
      />
      <FAQSchema faqs={faqs} />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      <FAQ faqs={faqs} />
       <CTA />
      </main>
    </>
  );
};

export default Home;