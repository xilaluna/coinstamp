import Layout from "@/components/Layout";
import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout heading="Create" description="Create a new stamp">
      <section className="grid grid-cols-2 gap-10">
        <div className="border-color col-span-2 rounded-md border p-5 ">
          <h2 className="heading-color pb-5 text-xl">Carrier Information</h2>
          <div className="grid grid-cols-2 gap-5">
            <label className="block">
              <span>Carrier</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Package Type</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
          </div>
        </div>

        <div className="border-color col-span-2 rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">
            Dimensions &amp; Weight
          </h2>
          <div className="grid grid-cols-12 gap-5">
            <label className="col-span-4 block">
              <span>Length</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="col-span-4 block">
              <span>Width</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="col-span-4 block">
              <span>Height</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>

            <label className="col-span-6 block">
              <span>Pounds</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="col-span-6 block">
              <span>Ounces</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
          </div>
        </div>

        <div className="border-color rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">From</h2>
          <div className="grid gap-5">
            <label className="block">
              <span>Country</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Name</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Address</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>

            <label className="block">
              <span>Apt/Suite</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>City</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>State</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Zip</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Phone</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
          </div>
        </div>

        <div className="border-color rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">To</h2>
          <div className="grid gap-5">
            <label className="block">
              <span>Country</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Name</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Address</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>

            <label className="block">
              <span>Apt/Suite</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>City</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>State</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Zip</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Phone</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
          </div>
        </div>

        <div className="border-color col-span-2 rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">Submit</h2>
          <div className="grid gap-5">
            <label className="block">
              <span>Country</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
            <label className="block">
              <span>Name</span>
              <input
                type="text"
                className="border-color mt-1 block w-full rounded-md"
              />
            </label>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Create;
