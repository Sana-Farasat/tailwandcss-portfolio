export default function ProjectEmbed() {
  return (
    <main>
      <section>
        <div className="w-full max-w-4xl h-96  overflow-auto border border-gray-300 rounded-lg">
          <iframe
            src="https://static-resume-builder-topaz.vercel.app/" //Vercel project URL
            title="Vercel Project"
            width="100%"
            height="400"
            style={{ border: "none" }}
            className="layout-responsive"
            // className="w-[90] h-300 sm:w-[100%] h-[400]"
          />
        </div>
      </section>
    </main>
  );
}
