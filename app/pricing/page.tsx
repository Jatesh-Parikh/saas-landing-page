const features = [
  {
    name: "Basic",
    price: "$40/month",
    fees: "3.7% + 30¢ per transaction",
    description:
      "Start selling online with a simple and easy to use platform. Create your first store in minutes..",
  },
  {
    name: "Standard",
    price: "$80/month",
    fees: "2.9% + 30¢ per transaction",
    description:
      "Level up your business with a simple yet powerful eCommerce platform. Get access to all the features you need.",
  },
  {
    name: "Premium",
    price: "$200/month",
    fees: "2.4% + 30¢ per transaction",
    description:
      "For businesses that need more. Get access to all the features you need to grow.",
  },
];

const Pricing = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent md:pb-10">
        Pricing
        <div className="text-2xl text-center md:text-4xl font-bold py-4 md:py-10 px-4">
          Simple and transparent pricing plans for all businesses.
        </div>
      </div>

      <div className="md:flex mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 hover:drop-shadow-md transition-all duration-1000"
          >
            <div className="grid justify-center items-center border gap-4 rounded-xl p-4 w-96 h-96">
              <div className="text-2xl text-black pb-4 font-semibold">
                {feature.name}
              </div>
              <div className="text-2xl text-black">{feature.price}</div>
              <div className="text-xl text-black">{feature.fees}</div>
              <div className="text-xl text-black">{feature.description}</div>
              <div>
                <button className="bg-blue-500 text-white rounded-lg border-2 border-gray-300 px-16 py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
