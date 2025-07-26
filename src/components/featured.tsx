import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Ecommerce Website",
      image: "/featured3.png",
      link: "https://market-builder-website.vercel.app",
    },
    {
      title: "IT Blog",
      image: "/featured1.png",
      link: "https://it-blog-jet.vercel.app",
    },
    {
      title: "Country Blog",
      image: "/featured2.png",
      link: "https://country-blog.vercel.app",
    },
  ];

  return (
    <>
      <Head>
        <title>Featured Projects</title>
      </Head>

      <main className="max-w-screen-2xl mx-auto  text-red-700">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white py-12 px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Explore some of my recent front-end projects, built using modern
            tools and best practices.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300"
                data-aos="fade-up"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={400}
                  className="w-full h-48 object-cover hover:scale-105"
                />
                <div className="p-2 bg-gray-700 flex flex-col justify-between h-full">
                  {/* <div> */}
                  <h3 className="text-lg text-white font-semibold   text-center">
                    {project.title} <br />
                    <br />
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-700 text-white py-2 px-12 rounded hover:bg-red-800 transition duration-300"
                    >
                      View
                    </Link>
                  </h3>
                  <br />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <Link href={"/projects"}>
            <div className="flex justify-center">
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out mx-auto">
                View more
              </button>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
