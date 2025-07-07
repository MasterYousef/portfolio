function Footer() {
  return (
    <footer className=" bg-zinc-900 flex  md:flex-row flex-col justify-between text-white p-5 w-full">
      <p className="text-xl font-bold mb-5 md:mb-0">
        &copy; 2024 YOUSEF MOSTAFA
      </p>
      <div className="icons text-white flex justify-between text-4xl w-auto ">
        <div>
          <a target="_blank" href="mailto:imayosefgo@gmail.com">
            <i className="fa-solid fa-envelope "></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Yousef-Mostafa/pfbid02j2j6RMdMZ6fcLnLJFhgARLcfhCgsaeK6DW1qdiNSMNuRnT38ERxPewRgjzgXqBTvl"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://wa.me/+201158122005">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yousef-mostafa-4263b5243/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/MasterYousef">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
