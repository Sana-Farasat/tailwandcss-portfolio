export default function ProjectEmbed3() {
  return (
    <main>
      <div className="flex justify-center ">
        <div className="w-full max-w-4xl h-96 overflow-auto border border-gray-300 rounded-lg">
          <iframe
            src="https://shareable-resume-builder-three.vercel.app//" // Vercel project URL
            title="Vercel Project"
            width="100%"
            height="400"
            style={{ border: "none" }}
            className="layout-responsive"
          />
        </div>
      </div>
    </main>
  );
}
