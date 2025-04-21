import {useEffect} from "react";
import {useLocation} from "react-router";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // On attend que le rendu soit complet avant de scroller
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        return () => clearTimeout(timer);
    }, [location]);

    return null;
};

export default ScrollToTop;
