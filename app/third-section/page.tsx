const ThirdSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly p-10">
      <div className="flex flex-col md:flex-row gap-6 md:px-10">
        <div className="w-full md:w-2/3 p-5">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/video-3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col border p-5 rounded-xl md:w-2/5">
          <div className="text-4xl md:text-5xl flex justify-center text-center bg-gradient-to-l from-yellow-300 to-blue-300 bg-clip-text font-bold text-transparent">
            Fully Customizable eCommerce
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
