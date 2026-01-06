import { Helmet } from "react-helmet-async";

const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do SoundsBridge hearing aids come with a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SoundsBridge offers a no-risk free hearing aid trial so you can experience better hearing before making a decision."
        }
      },
      {
        "@type": "Question",
        "name": "Where is SoundsBridge located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SoundsBridge is located in Kadavanthara, Ernakulam, Kerala, and serves customers across Kerala."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a consultation before using a hearing aid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, professional consultation helps determine the right hearing aid based on your hearing condition and lifestyle."
        }
      },
      {
        "@type": "Question",
        "name": "Are SoundsBridge hearing aids suitable for seniors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SoundsBridge provides hearing aids designed for seniors, offering comfort, clarity, and easy usage."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
