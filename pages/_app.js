import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "../components/Layout/Layout";
import SiderBarApp from "../components/Layout/SiderBarApp";
import SeoHead from "../components/SeoHead";
import "../styles/slick.css";
import "../styles/tailwind.css";
const theme = createTheme({
  palette: {
    primary: { 
      main: '#FFD700',
      
    },
     
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
        <ThemeProvider  theme={theme}>
        <SeoHead title="Vệ Sinh Trường Vũ" /> 
      <Layout>
        <Component {...pageProps} />
      </Layout>{" "}
    </ThemeProvider>
     
    </>
  );
}

export default MyApp;
