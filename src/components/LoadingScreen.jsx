import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("");
    const fullText = "<Hola, soy Valentin/>";

    //efecto para que el texto se escriba letra por letra
    useEffect(() => {
        let index = 0;
        //intervalo para que se escriba letra por letra
        const interval = setInterval(() => {
            //se escribe letra por letra
            setText(fullText.substring(0, index));
            index++;
            //si el indice es mayor que la longitud de la cadena, se limpia el intervalo
            if(index > fullText.length){
                clearInterval(interval);

                //se espera 1 segundo y se llama a la funcion onComplete
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }

        }, 100);
        //se limpia el intervalo por si ocurre un error
        return () => clearInterval(interval);
    }, [onComplete])

    return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
                <div className="mb-4 text-4xl font-mono font-bold">
                    {text} <span className="animate-blink ml-1"> | </span>
                </div>

                <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
                </div>

            </div>
}

