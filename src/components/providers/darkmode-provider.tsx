'use client'
import React from 'react'
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

function DarkmodeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
        >
            {children}
        </ThemeProvider>
    )
}

export default DarkmodeProvider