export default function DrawerSection({ id, variant, heading, children }) {
  if (variant === "dark") {
    return (
      <section
        id={id}
        className="text-white bg-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20"
      >
        <div className="flex flex-col gap-6 lg:flex-row h-fit xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-col w-full lg:w-1/2">
            <h2
              className="text-4xl md:text-7xl 2xl:text-8xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">{children}</div>
        </div>
      </section>
    );
  } else if (variant === "light") {
    return (
      <section
        id={id}
        className="h-fit bg-white text-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20"
      >
        <div className="flex flex-col gap-6 lg:flex-row h-fit xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-col w-full lg:w-1/2">
            <h2
              className="text-4xl md:text-7xl 2xl:text-8xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">{children}</div>
        </div>
      </section>
    );
  }
}
