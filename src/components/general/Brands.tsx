// import { Separator } from "@/components/ui/separator";

const Brands = () => {
  return (
    <section className="py-8">
      <div className="space-y-6">
        {/* <Separator /> */}
        <p className="text-center text-sm font-medium">Trusted by teams at</p>
        <div className="flex justify-evenly items-center">
          <p className="ml-2 flex items-center text-green font-semibold">
            {" "}
            <img
              src="/src/assets/protocols/near.svg"
              className="w-12 h-12 mr-1"
            />{" "}
            Near
          </p>

          <p className="ml-2 flex items-center text-green font-semibold">
            {" "}
            <img
              src="/src/assets/protocols/filecoin.svg"
              className="w-12 h-12"
            />{" "}
            Filecoin
          </p>
          <p className="ml-2 flex items-center text-green font-semibold">
            {" "}
            <img
              src="/src/assets/protocols/polygon.svg"
              className="w-12 h-12 mr-1"
            />{" "}
            Polygon
          </p>
          <p className="ml-2 flex items-center text-green font-semibold">
            {" "}
            <img
              src="/src/assets/protocols/etheruem.svg"
              className="w-12 h-12"
            />{" "}
            Etheruem
          </p>
          <p className="ml-2 flex items-center text-green font-semibold">
            {" "}
            <img
              src="/src/assets/protocols/base.svg"
              className="w-12 h-12 mr-1"
            />{" "}
            Base
          </p>
        </div>
        {/* <Separator /> */}
      </div>
    </section>
  );
};

export default Brands;
