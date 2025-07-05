import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebaar';
import Navbar from './Navbar';

const RootLayout = () => {
    return (
        <>
            <div className='p-2 '>
                <div className="flex h-screen w-full min-w-0 gap-2">
                    <Sidebar />
                    <div className="w-full flex flex-col">
                        <Navbar />
                        <main className="flex-1 overflow-y-auto min-w-0 p-4 hideScrollBar">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RootLayout;
