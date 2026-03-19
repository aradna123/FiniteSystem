import React from "react";

const Diagram = () => {
  return (
    <div className="mt-24">

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our development process</h2>
        </div>

        <div className="flex items-center mt-24">
          <div className="w-full">
            <br />
            <div>
              <p className="text-gray-700 leading-relaxed">
                Our development process is rooted in the principles of agile
                methodology, ensuring flexibility, adaptability, and continuous
                improvement. We work closely with you throughout every stage,
                refining and iterating until the product is perfectly tailored
                to your needs. This collaborative approach extends beyond just
                our team—we actively engage with your clients and stakeholders
                to gather valuable feedback and insights. The result is a
                product that not only meets your expectations but is also
                optimized to drive ROI and deliver long-term value to your
                business.
              </p>
              <br />
              <div className="bg-black p-2 rounded">
                <img
                  src="./assets/our-process.webp"
                  alt="Our Development Process Diagram"
                  className="w-auto h-auto rounded border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagram;
