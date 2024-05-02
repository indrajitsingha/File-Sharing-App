
import constantsValues from "../_utils/Constants"
const Banner = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center h-[90vh]">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        <span className="text-primary"> Upload Save</span> and Easlily share and <span className="text-primary">Download</span> your Files One Place
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        {constantsValues.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-hovercolor focus:outline-none focus:ring  sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-hovercolor focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner