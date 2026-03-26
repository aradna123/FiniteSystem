
import { useState } from "react";

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    { id: 1, title: "Understand Your Needs", description: "We analyze your business requirements deeply." },
    { id: 2, title: "Design Tailored Solutions", description: "We craft solutions that fit your goals." },
    { id: 3, title: "Deliver And Support", description: "We ensure smooth delivery and ongoing support." },
  ];

  return (
    <section className="bg-purple-700 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We Deliver Innovation And Excellence
          </h2>
          <p className="mb-6 text-lg text-purple-100">
            Our IT solutions company offers services that empower businesses and drive things forward. 
            Ideas and excellent service are the hallmarks of our work.
          </p>
          <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-100 transition">
            Start Your Project
          </button>
        </div>

        {/* Right Boxes */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white text-gray-800 rounded-lg shadow p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Dot or Circle */}
                  {activeStep === step.id ? (
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                      {step.id}
                    </div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  )}
                  <h3 className="font-semibold">{step.title}</h3>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() =>
                    setActiveStep(activeStep === step.id ? null : step.id)
                  }
                  className="text-purple-600 font-bold text-xl"
                >
                  {activeStep === step.id ? "-" : "+"}
                </button>
              </div>

              {/* Description */}
              {activeStep === step.id && (
                <p className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;


