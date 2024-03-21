import React, { useRef } from 'react'
import HomeBody from '../Components/HomeBody';
import Landing from '../Components/Landing';

function HomePage() {
    const scrollBodyRef = useRef()
    const executeScroll = () => window.scrollTo({ behavior: 'smooth', top: scrollBodyRef.current.offsetTop })

    return (
        <div>
            <Landing scroll={executeScroll} />
            <HomeBody rf={scrollBodyRef} />
        </div>
    );
}

export default HomePage