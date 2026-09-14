import { useEffect } from "react";
import HomeScreen from ".";
import "../global.css"
import { initDatabase } from "@/db/database";
export default function RootLayout() {

  useEffect(()=>{
    initDatabase();
  })
  
  return (
    <>
    <HomeScreen/>
    </>
  );
}
