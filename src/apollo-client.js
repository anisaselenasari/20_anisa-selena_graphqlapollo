//// importnya juga tinggal copy aja bundah dari web apollo
import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";


// kita dapat apolo ini karna copy di web apolo graph ql
const client = new ApolloClient({
    uri: 'https://alterra.hasura.app/v1/graphql',   ///// ini bisa di copy dari hasura yg kita buat 
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 
        'RMWBDEdr6BXI7FcwMmAdAYwbuZ00Eil02ozubRNEI44NUvlJtSHY4uvFk9WDzdeK',
        // kenapa kita buat header? karna kita harus punya output gaiss.. jadi header itu kek ngebantu buat ngeluarin si outputnya itu
    },
  });
  

  export default client;