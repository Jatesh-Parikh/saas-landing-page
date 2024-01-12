import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly p-5">
      <div className="flex flex-col md:flex-row gap-6 md:px-10">
        <div className="w-full md:w-2/3 p-5">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/video-3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col border p-5 rounded-xl md:w-2/5">
          <div className="text-4xl md:text-5xl flex justify-center text-center bg-gradient-to-l from-yellow-300 to-blue-500 bg-clip-text font-bold text-transparent">
            Fully Customizable eCommerce
          </div>

          <div className="md:px-10 max-md:space-y-6 flex flex-col justify-center items-center">
            <div className="flex text-lg pt-10 gap-4">
              <Image
                src="/images/icon-store.png"
                alt="feature-1"
                width={70}
                height={70}
              />
              <div>
                Choose from a variety of store templates to get started. And
                customize your store to fit your brand.
              </div>
            </div>
            <div>
              <div className="text-lg flex items-center gap-4">
                <Image
                  src="/images/icon-product.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Add unlimited product and variations. And manage inventory
                  with ease.
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg flex items-center gap-4">
                <Image
                  src="/images/icon-analytics.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Gain valuable insights into your customers and products with
                  our analytics tools.
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg flex items-center gap-4">
                <Image
                  src="/images/icon-shield.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Best in class security to protect your data and your
                  customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
