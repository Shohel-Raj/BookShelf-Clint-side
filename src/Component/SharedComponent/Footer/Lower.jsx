import React from 'react';

const Lower = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal footer-center p-4 w-11/12 md:w-10/12 mx-auto">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by  "{import.meta.env.VITE_site_name}" org.</p>
                </aside>
            </footer>
        </>
    );
};

export default Lower;