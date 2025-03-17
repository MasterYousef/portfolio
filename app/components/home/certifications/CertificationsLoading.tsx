import TitleLoading from "../../utility/TitleLoading";

function CertificationsLoading() {
  return (
    <div className="animate-pulse">
      <TitleLoading />
      <section className="flex flex-wrap h-full justify-center w-full">
        <i className="w-[90%] md:w-[80%] lg:w-[70%] rounded h-80 bg-gray-300 mx-5 my-7" />
        <i className="w-[90%] md:w-[80%] lg:w-[70%] rounded h-80 bg-gray-300 mx-5 my-7" />
        <i className="w-[90%] md:w-[80%] lg:w-[70%] rounded h-80 bg-gray-300 mx-5 my-7" />
      </section>
    </div>
  );
}

export default CertificationsLoading;
