import React from 'react';

const Lower = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center pb-1
            bg-gray-100 text-gray-800 
            dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300">
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                        {import.meta.env.VITE_site_name}
                    </span>{" "}
                    org.
                </p>
            </aside>
        </footer>
    );
};

export default Lower;
