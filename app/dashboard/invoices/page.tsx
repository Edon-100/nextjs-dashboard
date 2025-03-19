import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "@/app/lib/data";

export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <p>
      Invoices Page
      {/* {numberOfInvoices}
      {numberOfCustomers}
      {totalPaidInvoices}
      {totalPendingInvoices} */}
    </p>
  );
}
