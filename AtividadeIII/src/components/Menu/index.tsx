import { Link } from "react-router-dom";
import "./index.css";
import { useLoteria } from "../../hooks";
import { mega, quina, timemania } from "../../styles/theme";

export default function Menu() {
    const { ativo, setAtivo, setTema } = useLoteria();
    return (
        <>

            {ativo !== "timemania" ? (
                <Link
                    to="/timemania"
                    className="timemania"
                    onClick={() => {
                        setAtivo("timemania");
                        setTema(timemania);
                    }}
                >
                    Timemania
                </Link>
            ) : (
                <Link to="/timemania" className="ativo">
                    Timemania
                </Link>
            )}


            {ativo !== "megasena" ? (
                <Link
                    to="/megasena"
                    className="megasena"
                    onClick={() => {
                        setAtivo("megasena");
                        setTema(mega);
                    }}
                >
                    Mega-sena
                </Link>
            ) : (
                <Link to="/megasena" className="ativo">
                    Mega-sena
                </Link>
            )}


            {ativo !== "quina" ? (
                <Link
                    to="/quina"
                    className="quina"
                    onClick={() => {
                        setAtivo("quina");
                        setTema(quina);
                    }}
                >
                    Quina
                </Link>
            ) : (
                <Link to="/quina" className="quina">
                    Quina
                </Link>
            )}

        </>
    );
}