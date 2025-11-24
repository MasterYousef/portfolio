import TitleLoading from "../../utility/TitleLoading";

function ProjectLoading() {
  return (
    <div className="animate-pulse w-full p-5">
      <TitleLoading />
      <div className="flex lg:flex-row flex-col lg:justify-start items-center">
        <div className="lg:w-[40rem] w-[90%] h-[20rem] lg:h-[30rem] mx-5 flex justify-center items-center rounded-lg bg-gray-300">
          <i className="fa-solid fa-image text-5xl text-gray-500" />
        </div>
        <div className="lg:ms-16 ms-0">
          <p className="w-96 h-5 rounded-full mb-30 my-20 bg-gray-300 "></p>
          <p className="w-96 h-2 rounded-full bg-gray-300 "></p>
          <p className="w-80 h-2 mt-1 rounded-full bg-gray-300 "></p>
          <p className="w-96 h-2 rounded-full mt-20 bg-gray-300 "></p>
          <p className="w-40 h-2 mt-1 rounded-full bg-gray-300 "></p>
          <div className="flex gap-5 mt-32">
            <p className="w-20 h-8  rounded-full bg-gray-300 "></p>
            <p className="w-20 h-8  rounded-full bg-gray-300 "></p>
            <p className="w-20 h-8  rounded-full bg-gray-300 "></p>
            <p className="w-20 h-8  rounded-full bg-gray-300 "></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLoading;
