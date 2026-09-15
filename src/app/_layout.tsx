import { useEffect } from "react";
import HomeScreen from ".";
import "../global.css"
import { initializeDatabase } from "@/db/database";
import { Stack } from "expo-router";
export default function RootLayout() {

  useEffect(()=>{
    initializeDatabase();
  })
  
  return (
  <Stack/>
  );
}
