import { GripHorizontal, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function FAQList() {
  const [faqs, setFaqs] = useState([
    { question: "", answer: "" },
  ]);

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    const updated = faqs.filter((_, i) => i !== index);
    setFaqs(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-3 border-b border-[#E4E4E7] pb-4">
        <h2 className="font-openSans text-base font-medium  ">
            FAQ List
          </h2>

        <button
          onClick={addFaq}
          className="bg-black text-white text-sm px-2 py-1 rounded-md flex items-center gap-2 shadow-[0_0_0_1px_#18181B,0_1px_2px_0px_#00000066,0_0.75px_0px_0px_#FFFFFF33_inset]"
        >
          <Plus size={15}/> Add Faq
        </button>
      </div>

      {/* FAQ items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex gap-3 items-center bg-gray-50"
          >
            {/* Drag icon */}
            <div className="mt-3 text-gray-400 cursor-move">
              <GripHorizontal size={16}/>
            </div>

            {/* Inputs */}
            <div className="flex-1 space-y-2">
              
              <input
                type="text"
                placeholder="Question"
                value={faq.question}
                onChange={(e) =>
                  handleChange(index, "question", e.target.value)
                }
                className="w-full border rounded-md p-2 text-sm"
              />

              <input
                type="text"
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) =>
                  handleChange(index, "answer", e.target.value)
                }
                className="w-full border rounded-md p-2 text-sm"
              />

            </div>

            {/* Delete icon */}
            <button
              onClick={() => removeFaq(index)}
              className="text-red-500 hover:text-red-700 mt-2"
            >
              <Trash2 size={16}/>
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
