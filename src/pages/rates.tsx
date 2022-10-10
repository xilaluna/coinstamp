import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import testdata from "@/data/testdata";

const Rates: NextPage = () => {
  return (
    <Layout heading="Rates" description="Rates for your postage">
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
