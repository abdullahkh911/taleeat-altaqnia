import Image from "next/image";

const workflow = [
  ["01", "أرسل احتياجك", "نستقبل وصف المواد أو ملف الأكواد، ثم نجمع التفاصيل اللازمة قبل المراسلة."],
  ["02", "ننسق مع الموردين", "نرسل الطلب إلى الموردين المعتمدين ونجمع إمكانات التوريد وعروض الأسعار."],
  ["03", "اتخذ قرارك بثقة", "نلخص العروض للمراجعة، ثم ندعم الاعتماد والإيصال والفاتورة الرسمية."],
];

const capabilities = [
  "طلبات متعددة المواد ضمن محادثة واحدة",
  "استقبال عروض الأسعار والملفات بصيغة PDF",
  "تنبيهات منظمة للمورد والعميل في الوقت المناسب",
  "ضوابط وصول للأرقام المعتمدة فقط",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="طليعة التقنية، الصفحة الرئيسية">
          <span className="brand-mark">ط</span>
          <span>
            <strong>طليعة التقنية</strong>
            <small>TALEEAT TECH</small>
          </span>
        </a>
        <nav aria-label="التنقل الرئيسي">
          <a href="#solution">الحل</a>
          <a href="#workflow">كيف نعمل</a>
          <a href="#approach">منهجنا</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="eyebrow">أتمتة المشتريات عبر واتساب</p>
          <h1 id="hero-title">طلبات أوضح. قرارات أسرع.</h1>
          <p className="hero-summary">
            تبني طليعة التقنية أدوات عملية تجعل التواصل مع الموردين، مقارنة العروض، واعتماد الطلبات جزءًا من مسار واحد واضح.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#workflow">اكتشف آلية العمل</a>
            <a className="button button-secondary" href="#solution">تعرف على الحل</a>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <Image
            src="/images/hero-procurement.png"
            alt="مسؤول مشتريات يستخدم هاتفه لتنظيم عروض الموردين داخل بيئة عمل صناعية"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="image-caption">من الاحتياج إلى قرار الشراء</div>
        </div>
      </section>

      <section className="statement" id="solution" aria-labelledby="solution-title">
        <div>
          <p className="eyebrow">حل مصمم للتشغيل اليومي</p>
          <h2 id="solution-title">المحادثة تتحول إلى مسار شراء متكامل.</h2>
        </div>
        <p>
          بدل متابعة الطلب في رسائل متفرقة، يجمع النظام المعلومات الناقصة ويعرض ملخصًا كاملًا قبل التواصل مع الموردين.
        </p>
      </section>

      <section className="workflow-section" id="workflow" aria-labelledby="workflow-title">
        <div className="section-heading">
          <p className="eyebrow">مسار واضح لكل طلب</p>
          <h2 id="workflow-title">ثلاث خطوات تبقي الجميع على نفس الصفحة.</h2>
        </div>
        <div className="workflow-grid">
          {workflow.map(([number, title, description]) => (
            <article className="workflow-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-split" id="approach" aria-labelledby="approach-title">
        <div className="feature-image reveal">
          <Image
            src="/images/materials-workflow.png"
            alt="عينات مواد خام ووثائق عروض توريد مرتبة على طاولة عمل"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">وضوح قبل التنفيذ</p>
          <h2 id="approach-title">نحافظ على المراجعة بيد فريقك.</h2>
          <p>
            الأتمتة تنظم الطلب وتتابع الموردين، بينما يبقى قرار الاعتماد والدفع لدى الشخص المخول داخل الشركة.
          </p>
          <ul className="capability-list">
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div>
          <p className="eyebrow">طليعة التقنية</p>
          <h2 id="closing-title">تقنية تخدم قرار الشراء، من أول رسالة إلى الفاتورة.</h2>
        </div>
        <a className="button button-primary" href="#top">العودة للبداية</a>
      </section>

      <footer>
        <span>طليعة التقنية</span>
        <span>حلول عملية لأتمتة المشتريات</span>
      </footer>
    </main>
  );
}
