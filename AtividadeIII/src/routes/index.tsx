import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Menu from "../components/Menu";
import { useLoteria } from "../hooks";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import Timemania from "../pages/Timemania";
import "./index.css";

export default function Rotas() {
    const {tema} = useLoteria()

    return (
        <ThemeProvider theme={tema}>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/megasena" element={<Megasena />} />
                <Route path="/timemania" element={<Timemania />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    );
}