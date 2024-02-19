import { PropsWithChildren, useState } from "react";
import { Destination } from "../models/Destination";

export function StoreProvider({children}:PropsWithChildren<any>){
    const[destination,setDestination]=useState<Destination | null>(null);

}