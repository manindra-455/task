 


import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebaar';
import Navbar from './Navbar';

const RootLayout = () => {
    return (
        <div className='w-full max-w-full overflow-hidden'>
            <div className="flex h-screen min-h-0 w-full gap-2 ">
                <Sidebar />
                <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <Navbar />
<<<<<<< HEAD
                    <main className="flex-1 overflow-y-auto py-2 sm:py-4 hideScrollBar ">
=======
                    <main className="flex-1 overflow-y-auto py-2 sm:py-4 hideScrollBar">
>>>>>>> 24f4459 (fixing padding in task less padding kari ha)
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default RootLayout;