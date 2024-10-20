import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import data from "../data";

function ContactIcons() {
  
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-6 px-4">
      <a href={data.contact.linkedin} target="_blank" role="link" aria-label="go to lonkedin">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineLinkedin />
        </div>
      </a>
      <a href={data.contact.github} target="_blank" role="link" aria-label="go to github">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineGithub />
        </div>
      </a>
      <a href="mailto:andresdrimer@hotmail.com?subject=Hello Andres!" target="_blank" role="link" aria-label="send mail">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
          <AiOutlineMail />
        </div>
      </a>
      <a href="https://api.whatsapp.com/send?phone=5491164930517" target="_blank" role="link" aria-label="send whatsapp">
      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-in duration-300">
        <AiOutlineWhatsApp />
      </div></a>
    </div>
  );
}

export default ContactIcons;
