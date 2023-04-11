import HeadProvider from "./HeadProvider/HeadProvider";
import { Provider } from "react-redux";
import { FC } from "react";
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/components/layout/Layout";
import ReduxToastrLib  from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import store from "./store";
const MainProvider: FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <HeadProvider>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReduxToastrLib />
        <Layout>{children}</Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </Provider>
    
    </HeadProvider>
  );
};

export default MainProvider;
