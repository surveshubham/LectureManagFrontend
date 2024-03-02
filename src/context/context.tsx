import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";


const context = createContext<any>([]);

export function useContex() {
    return useContext(context);
}

//children type declarations
type Props = {
    children: ReactNode;
};

export function Provider({ children }: any) {
    const [token, settoken] = useState("");
    const [instructor , setInstructor] = useState([])
    // useEffect(() => {
    //     let usertoken = localStorage.getItem("token");

    //     if (!usertoken) {
    //         console.log("loggin again");
    //     } else {
    //         settoken(usertoken);
    //     }
    // }, []);

    //addhouse to addhouse in the database
    const getAllInstructor = async () => {
        const response = await fetch(`http://localhost:8080/api/getAllInstructor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });

        const instr = await response.json();
        setInstructor(instr);
        
    };

    const value = { getAllInstructor, token , instructor};

    return (
        <>
            <context.Provider value={value}>{children}</context.Provider>
        </>
    );
}
