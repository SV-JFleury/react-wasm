import { startTransition, useEffect, useState, useTransition } from "react";
import init, { fibonacci_rust } from "wasm-lib";
import { fibonacciJavascript } from "./services/fibonacci";

export default function App() {
    const [value, setValue] = useState<string>();
    const [result, setResult] = useState<number>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        init().then(() => {
            console.log("Wasm loaded");
            setIsLoading(false);
        });
    }, []);

    const handleRustButton = () => {
        if (value) {
            const result = fibonacci_rust(parseInt(value));
            setResult(result);
        }
    };

    const handleJavascriptButton = () => {
        if (value) {
            const result = fibonacciJavascript(parseInt(value));
            setResult(result);
        }
    };

    const handleResetButton = () => {
        setValue(undefined);
        setResult(undefined);
    };

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <div
            className="App"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: 150,
            }}
        >
            <input
                type="number"
                value={value === undefined ? "" : value}
                onChange={(event) => setValue(event.target.value)}
            />
            <div style={{ marginTop: 20 }}>
                <button onClick={handleRustButton}>Rust</button>
                <button onClick={handleJavascriptButton}>Javascript</button>
                <button onClick={handleResetButton}>Reset</button>
            </div>
            <h1>{result}</h1>
        </div>
    );
}
