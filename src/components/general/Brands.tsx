// import { Separator } from "@/components/ui/separator";

const Brands = () => {
  return (
    <section className="py-12">
    <div className="space-y-3">
      {/* <Separator /> */}
      <div className="flex justify-evenly items-center">
        <p className="ml-2 flex items-center text-green font-semibold">
          {" "}
          <img src="/p1.svg" className="w-12 h-12" /> Eternity
        </p>

        <p className="ml-2 flex items-center text-green font-semibold">
          {" "}
          <img src="/p3.svg" className="w-16 h-16" />
        </p>
        <p className="ml-2 flex items-center text-green font-semibold">
          {" "}
          <img src="/p4.svg" className="w-9 h-9" /> Gnosis
        </p>
        <p className="ml-2 flex items-center text-green font-semibold">
          {" "}
          <img src="/p5.svg" className="w-8 h-8" /> Celo
        </p>
        <p className="ml-2 flex items-center text-green font-semibold">
          {" "}
          <img src="/p2.svg" className="w-14 h-14" />
        </p>
      </div>
      {/* <Separator /> */}
    </div>
  </section>
  );
};

export default Brands; 