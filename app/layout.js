import './globals.css';
import './review-restore.css';
import './logo.css';
import './personalization.css';
import './how.css';
import GlobalActions from './GlobalActions';
import RouteBridge from './RouteBridge';
export const metadata={title:'Nexxus Intelligence',description:'Science that learns your hair.'};
export default function RootLayout({children}){return <html lang="en"><body>{children}<GlobalActions/><RouteBridge/></body></html>}
