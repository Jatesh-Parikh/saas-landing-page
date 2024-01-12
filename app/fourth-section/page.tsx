const FourthSection = () => {
  return (
    <div className="md:py-10">
      <div className="text-center md:text-6xl text-3xl bg-gradient-to-r from-blue-800 to-purple-300 bg-clip-text text-transparent px-5 pb-10 font-bold">
        <span className="whitespace-nowrap">Content Management System.</span>
        <br />
        Made Simple.
        <div className="md:pt-10 p-10">
          <video className="mx-auto rounded-xl md:w-2/3" autoPlay muted loop>
            <source src="/content/video-4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
