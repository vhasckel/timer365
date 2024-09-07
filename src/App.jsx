import HistoryPage from "./pages/history";
// import HomePage from "./pages/home";
import Layout from "./template";

function App() {
  return (
    <Layout title={"Home"}>
      {/* <HomePage /> */}
      <HistoryPage />
    </Layout>
  );
}

export default App;
