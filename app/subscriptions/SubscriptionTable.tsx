import { subscriptionComparison } from "@/data/subscriptions";
import React from "react";

const SubscriptionTable: React.FC = () => {
  return (
    <section id="subscription-table" className="w-full overflow-x-auto">
      <div className="rounded-2xl overflow-hidden border border-white/20">
        <table className="w-full text-left text-muted">
          {/* Header */}
          <thead>
            <tr className="bg-primary text-foreground">
              <th className="p-4">Features</th>
              <th className="p-4 text-center">Basic</th>
              <th className="p-4 text-center">Standard</th>
              <th className="p-4 text-center">Premium</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {subscriptionComparison.map((row, index) => (
              <tr
                key={index}
                className="border-b border-white/20 hover:bg-primary hover:text-foreground transition"
              >
                <td className="p-4 font-medium">{row.feature}</td>
                <td className="p-4 text-center">{row.basic}</td>
                <td className="p-4 text-center">{row.standard}</td>
                <td className="p-4 text-center">{row.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SubscriptionTable;
