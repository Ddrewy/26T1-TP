'use client'
import React from 'react'
import { useState, useEffect } from 'react';

function Button() {
    // isDark tracks whether dark mode is currently ON
    const [isDark, setIsDark] = useState(false);
    // mounted prevents showing button before page fully loads (prevents hydration mismatch error)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // On page load, check if the HTML element already has the "dark" class
        const darkMode = document.documentElement.classList.contains('dark');
        setIsDark(darkMode);
        // Set mounted to true so the button appears on the page
        setMounted(true);
    }, []);

    function toggleTheme() {
        // Get the main HTML element
        const html = document.documentElement;
        // Flip the dark mode on/off
        const newIsDark = !isDark;
        
        // Add "dark" class to HTML element to trigger dark mode styles throughout the page
        if (newIsDark) {
            html.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            // Remove "dark" class from HTML element to show light mode styles
            html.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
        // Update the state so button text changes
        setIsDark(newIsDark);
    }

    // Don't show button until page is fully loaded (prevents flashing issues)
    if (!mounted) return null;

    return (
        <div>
            {/* 
              Button that toggles dark mode on/off
              Using inline styles to bypass Tailwind issues
              - Light mode: white background, dark text
              - Dark mode: dark gray background, white text
            */}
            <button 
                style={{
                    backgroundColor: isDark ? '#FFFFFF':'#1F2937' ,
                    color: isDark ? '#000000': '#FFFFFF',
                    border: '1px solid transparent',
                    borderRadius: '3rem',
                    padding: '0.5rem',
                    margin: '3px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onClick={toggleTheme}
            >
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    )
}

export default Button