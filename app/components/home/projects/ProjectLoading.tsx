import TitleLoading from "../../utility/TitleLoading";

function ProjectLoading() {
  return (
    <div className="animate-pulse">
      <TitleLoading />
      <section className="flex flex-wrap h-full justify-center w-full">
        <i className="w-[90%] md:w-[358px] rounded h-96 bg-gray-300 mx-5 my-7" />
        <i className="hidden md:block w-[90%] md:w-[358px] rounded h-96 bg-gray-300 mx-5 my-7" />
        <i className="hidden lg:block w-[90%] md:w-[358px] rounded h-96 bg-gray-300 mx-5 my-7" />
      </section>
    </div>
  );
}

export default ProjectLoading;
