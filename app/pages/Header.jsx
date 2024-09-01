import { FloatingNav } from "../components/ui/floating-navbar";

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Resumen', link: '/summary' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
    { name: 'Acerca', link: '/about' },
];

export const Header = () => {
    return (
        <header>
            <FloatingNav navItems={navItems} />
        </header>
    );
}