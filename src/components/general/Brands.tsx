// import { Separator } from "@/components/ui/separator";

const Brands = () => {
  return (
    <section className="py-8">
      <div className="space-y-6">
        {/* <Separator /> */}
        <p className="text-center text-sm font-medium">Trusted by teams at</p>
        <div className="flex justify-evenly items-center">
          <div className="ml-2 flex items-center">
            <img
              src="/src/assets/protocols/near.svg"
              className="w-8 h-8 mr-1 md:w-12 md:h-12"
            />
            <span className="text-green font-semibold hidden md:block">Near</span>
          </div>

          <div className="ml-2 flex items-center">
            <img
              src="/src/assets/protocols/filecoin.svg"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="text-green font-semibold hidden md:block">Filecoin</span>
          </div>
          <div className="ml-2 flex items-center">
            <img
              src="/src/assets/protocols/polygon.svg"
              className="w-8 h-8 mr-1 md:w-12 md:h-12"
            />
            <span className="text-green font-semibold hidden md:block">Polygon</span>
          </div>
          <div className="ml-2 flex items-center">
            <img
              src="/src/assets/protocols/etheruem.svg"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="text-green font-semibold hidden md:block">Etheruem</span>
          </div>
          <div className="ml-2 flex items-center">
            <img
              src="/src/assets/protocols/base.svg"
              className="w-8 h-8 mr-1 md:w-12 md:h-12"
            />
            <span className="text-green font-semibold hidden md:block">Base</span>
          </div>
        </div>
        {/* <Separator /> */}
      </div>
    </section>
  );
};

export default Brands;
