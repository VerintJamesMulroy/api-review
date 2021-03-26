import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'tailwindcss/dist/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import DataTable from './table';

const client = new ApolloClient({
  uri: 'http://localhost:3025/api',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App lg:container mx-auto">
    <header>
    <h2>API to GraphQL to React to Table</h2>
    </header>
    <DataTable></DataTable>
    </div>
    </ApolloProvider>

  );
}

export default App;
