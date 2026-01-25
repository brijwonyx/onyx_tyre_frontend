const HowItWorks = () => {
  const steps = [
    {
      icon: "/",
      title: "Choose the Perfect Tyres",
      desc: "Browse a wide range of top brands, sizes, and trusted reviews. Use our smart filters to find the right match for your car and budget.",
    },
    {
      icon: "/",
      title: "Fast, Free Delivery to You or Your Fitter",
      desc: "We’ll ship your tyres quickly and at no extra charge  straight to your installer or your home. Most orders arrive the next working day.",
    },
    {
      icon: "/",
      title: "We’ll Help You Book a Fitter",
      desc: "Need help with fitting? We’ll connect you with professional, local garages or mobile fitters who’ll get the job done at your convenience.",
    },
  ];
  return (
    <section className="bg-white px-[120px] py-10">
      <h2 className="font-montserrat font-semibold text-5xl tracking-normal text-center mb-20">
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <img src={step.icon} className="h-16" />
            <h3 className="font-montserrat font-semibold text-xl tracking-normal mb-3">
              {step.title}
            </h3>
            <p className="font-openSans font-normal text-base leading-6">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
