import { createContext, useEffect, useState } from "react";
import loteria from "../services/Loteria";
import { mega } from "../styles/theme";
import { LoteriaProps, Props } from "../types";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [timemania, setTimemania] = useState({} as Props);
    const [quina, setQuina] = useState({} as Props);
    const [ativo, setAtivo] = useState("megasena");
    const [tema, setTema] = useState(mega);

    function testar() {
        loteria.get()
            .then(r => {
                setMegasena(r.megasena);
                setTimemania(r.timemania);
                setQuina(r.quina);
            })
            .catch(e => console.log(e.message));
    }

    useEffect(testar, []);

    return (
        <Contexto.Provider value={{ megasena, timemania, quina, ativo, setAtivo, tema, setTema }}>
            {children}
        </Contexto.Provider>
    );
}
