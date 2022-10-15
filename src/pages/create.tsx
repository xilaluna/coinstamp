import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Button from "@/components/Button";

const Create: NextPage = () => {
  return (
    <Layout heading="Create" description="Create a new stamp">
      <form
        action="/api/stamp"
        method="post"
        className="grid grid-cols-2 gap-10"
      >
        <div className="border-color col-span-2 rounded-md border p-5 ">
          <h2 className="heading-color pb-5 text-xl">Carrier Information</h2>
          <div className="grid grid-cols-2 gap-5">
            <TextInput label="Carrier" />
            <TextInput label="Package Type" />
          </div>
        </div>

        <div className="border-color col-span-2 rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">
            Dimensions &amp; Weight
          </h2>
          <div className="grid grid-cols-12 gap-5">
            <TextInput label="Length" className="col-span-4" />
            <TextInput label="Width" className="col-span-4" />
            <TextInput label="Height" className="col-span-4" />
            <TextInput label="Pounds" className="col-span-6" />
            <TextInput label="Ounces" className="col-span-6" />
          </div>
        </div>

        <div className="border-color rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">From</h2>
          <div className="grid gap-5">
            <TextInput label="Country" />
            <TextInput label="Name" />
            <TextInput label="Address" />
            <TextInput label="Apt/Suite" />
            <TextInput label="City" />
            <TextInput label="State" />
            <TextInput label="Zip" />
            <TextInput label="Phone" />
          </div>
        </div>

        <div className="border-color rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">To</h2>
          <div className="grid gap-5">
            <TextInput label="Country" />
            <TextInput label="Name" />
            <TextInput label="Address" />
            <TextInput label="Apt/Suite" />
            <TextInput label="City" />
            <TextInput label="State" />
            <TextInput label="Zip" />
            <TextInput label="Phone" />
          </div>
        </div>

        <div className="border-color col-span-2 rounded-md border p-5">
          <h2 className="heading-color pb-5 text-xl">Submit</h2>
          <div className="grid gap-5">
            <TextInput label="Country" />
            <TextInput label="Name" />
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Create;

type TextInputProps = {
  label: string;
  className?: string;
};

const TextInput: React.FC<TextInputProps> = ({ label, className }) => {
  return (
    <label className={`${className} block`}>
      <span>{label}</span>
      <input
        type="text"
        className="border-color mt-1 block w-full rounded-md border bg-neutral-800 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </label>
  );
};
