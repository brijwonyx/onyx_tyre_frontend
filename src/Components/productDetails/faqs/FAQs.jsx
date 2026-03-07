import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "What PSI is recommended for Michelin Defender LTX M/S?",
    answer:
      "The ideal PSI depends on your vehicle, load, and driving conditions...",
  },
  {
    question: "How often should Michelin Defender LTX M/S be rotated?",
    answer: "Rotate every 5,000–7,500 miles for even wear.",
  },
  {
    question: "What vehicles are Michelin Defender LTX M/S best suited for?",
    answer: "They are designed for SUVs, crossovers, and light trucks.",
  },
];

const FAQs = () => {
  return (
    <div className="flex gap-12 mt-20">

      {/* LEFT */}
      <div className="w-[500px] flex-shrink-0 border-t border-[#404040] ">
        <h2 className="text-2xl font-semibold mb-3 border-t-2 border-[#27509B] w-fit font-montserrat pt-[34px]">FAQs</h2>

        <p className="text-black text-lg font-openSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex flex-col border-t border-black">
        {faqData.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>

    </div>
  );
};

export default FAQs;
