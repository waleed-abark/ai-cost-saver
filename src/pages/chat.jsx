import { Helmet } from 'react-helmet-async';

import { ChatView } from 'src/sections/chat/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Chat | AI COST SAVER </title>
      </Helmet>

      <ChatView />
    </>
  );
}
