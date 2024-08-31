import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded"
            alt="Sandeep Khandewale"
            src="//media.licdn.com/dms/image/v2/D4D03AQEnLCtGNo6qsw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662979107389?e=2147483647&v=beta&t=cLqZSK0KqztWYpotcdYIKD1cXz6VBR5d1QTgnvSkZsY"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sandeep Suresh Khandewale
            </h1>
            <p className="mb-8 leading-relaxed">
              Hello there! Thanks for visiting my Github site. I am an
              experienced Software Engineer. I use ReactJS, TailWindCSS for
              developing front-ends for websites.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link to={"/showcase"}>Showcase</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
