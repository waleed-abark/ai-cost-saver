import { Helmet } from 'react-helmet-async';

import { AddInvoice } from 'src/sections/add-invoice/view';

// ----------------------------------------------------------------------

export default function InvoicePage() {
  return (
    <>
      <Helmet>
        <title> Add Invoice | AI Cost Saver </title>
      </Helmet>

      <AddInvoice />
    </>
  );
}
