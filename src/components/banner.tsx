function BannerComponent() {
  return (
    <section>
      <div className="bg-[url('/pexels-thepaintedsquare-583842.jpg')] w-full h-[640px] bg-cover bg-center flex">
        <div className="my-auto pl-12 w-1/3">
          <h1 className="font-bold text-5xl">LOREM IPSUM</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            type="button"
            className="mt-4 w-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            LOREM IPSUM
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerComponent;
