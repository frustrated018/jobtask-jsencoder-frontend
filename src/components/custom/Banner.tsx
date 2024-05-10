import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="overflow-hidden  hidden lg:grid lg:grid-cols-2 lg:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
              Book Your Perfect Stay with Us
            </h2>

            <p className="text-muted-foreground text-sm md:text-base text-balance md:mt-4 md:block">
              Discover luxury hotels, cozy bed and breakfasts, and everything in
              between. Find the ideal accommodation for your next getaway.
            </p>

            <div className="mt-4 md:mt-8">
              <Link href="#" className={buttonVariants({ size: "lg" })}>
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt="banner"
          width={760}
          height={456}
          src="https://source.unsplash.com/people-sitting-near-seashore-viewing-sea-under-orange-and-blue-skies-EmVKKf3wUZQ"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <section className="overflow-hidden bg-[url(https://source.unsplash.com/people-sitting-near-seashore-viewing-sea-under-orange-and-blue-skies-EmVKKf3wUZQ)] bg-cover bg-center bg-no-repeat lg:hidden">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              Book Your Perfect Stay with Us
            </h2>

            <p className="text-balance text-white/90 mt-4 md:text-lg md:leading-relaxed text-sm">
              Discover luxury hotels, cozy bed and breakfasts, and everything in
              between. Find the ideal accommodation for your next getaway.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link href="#" className={buttonVariants({ size: "lg" })}>
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
