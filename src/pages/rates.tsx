import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import testdata from "@/data/testdata";

const Rates: NextPage = () => {
  return (
    <Layout heading="Rates" description="Rates for your postage">
      <section className="flex space-x-10">
        <div className="border-color flex w-full flex-col rounded-md border p-5">
          <h2 className="heading-color pb-5 text-lg">From</h2>
          <p>{testdata.from_address.name}</p>
          <p>{testdata.from_address.street1}</p>
          <p>
            {testdata.from_address.city}, {testdata.from_address.state}{" "}
            {testdata.from_address.zip}
          </p>
          <p>{testdata.from_address.country}</p>
        </div>
        <div className="border-color flex w-full flex-col rounded-md border p-5">
          <h2 className="heading-color pb-5 text-lg">To</h2>
          <p>{testdata.to_address.name}</p>
          <p>{testdata.to_address.street1}</p>
          <p>
            {testdata.to_address.city}, {testdata.to_address.state}{" "}
            {testdata.to_address.zip}
          </p>
          <p>{testdata.to_address.country}</p>
        </div>
      </section>
      <section className="border-color flex flex-col items-center justify-center rounded-md border p-5">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-4 text-left">Carrier</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Estimated Transit Time</th>
              <th className="p-4 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
            {testdata.rates.map((item) => (
              <tr key={item.id}>
                <td className="p-4">{item.carrier}</td>
                <td className="p-4">{item.service}</td>
                <td className="p-4">{item.delivery_days} business days</td>
                <td className="p-4">${item.rate}</td>
                <td className="p-4">
                  <Button>Add to Cart</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Rates;
