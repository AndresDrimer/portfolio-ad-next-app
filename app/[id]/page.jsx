import Image from "next/image";
import data from "../../data";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function artistwebsite({ params }) {
  const id = parseInt(params.id, 10) || 0;
  const totalProjects = data.projects.length;
  const nextId = (id + 1) % totalProjects;

  const createTechDetail = data.projects[id].techDetail.map((it) => {
    return (
      <p className="text-gray-600 py-2 flex items-center" key={it}>
        <RiRadioButtonFill className="pr-1" />
        {it}
      </p>
    );
  });

  return (
    <div className="w-full">
      <div className="w-screen relative h-[20vh] lg:h-[30vh] ">
        <div className="relative top-0 left-0 w-full h-[180px] lg:h-[220px] bg-black/80 z-10" />

        <div className="absolute top-[120px] lg:top-[140px] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex items-center ">
          <div className="mr-auto">
            <h2 className="py-2 text-2xl sm:text-3xl lg:text-5xl">{data.projects[id].title}</h2>
            <h3 className="lg:text-3xl">{data.projects[id].tech}</h3>
          </div>
          <Link href={`/${nextId}`} className="pr-4 pt-2"><div className="relative w-8 h-8 lg:w-16 lg:h-16 transition-all duration-300 ease-in-out">
            <svg
              fill="#ffffff"
              height="100%"
              width="100%"
              preserveAspectRatio="none"
              version="1.1"
              id="XMLID_287_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              className="absolute inset-0"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="next">
                  {" "}
                  <g>
                    {" "}
                    <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg></div>
          </Link>
        </div>
      </div>

      <div className="w-screen max-width-[1240px] flex justify-center ">
        <Image
          src={data.projects[id].imageInside}
          alt="work img"
          width="1240"
          height="300"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#22c4c7] py-4">
            Overview
          </p>

          <p className="pr-4">{data.projects[id].description}</p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href={data.projects[id].externalUrl} target="_blank" role="link" aria-label="go to project">
              Visit
            </a>
          </button>
          <button className="px-8 py-2 mt-4 ">
            <a href={data.projects[id].gitHubUrl} target="_blank" role="link" aria-label="go to code">
              Code
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {createTechDetail}
            </div>
          </div>
        </div>

        <Link href="/#projects" className="flex items-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="gray"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="#0F0F0F"></path> </g></svg>
          <p className="cursor-pointer underline">Back</p>
        </Link>
      </div>
    </div>
  );
}
