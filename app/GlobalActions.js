'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Dashboard from './Dashboard';
import './global-actions.css';

export default function GlobalActions(){
  const [dashboardOpen,setDashboardOpen]=useState(false);

  useEffect(()=>{
    const onAccountClick=(e)=>{
      const item=e.target.closest('.nx-account-item');
      if(!item) return;
      const href=item.getAttribute('href')||'';
      if(href.startsWith('/dashboard')){
        e.preventDefault();
        e.stopPropagation();
        setDashboardOpen(true);
        document.querySelector('.nx-account-popover')?.classList.remove('open');
      }
    };
    document.addEventListener('click',onAccountClick,true);
    return()=>document.removeEventListener('click',onAccountClick,true);
  },[]);

  return <>
    <div className="nx-global-actions" aria-label="Nexxus quick actions">
      <a className="nx-buy-button" href="/buy">Buy My Routine <span aria-hidden="true">→</span></a>
    </div>

    {dashboardOpen&&<div className="nx-overlay">
      <div className="nx-overlay-bar">
        <button className="nx-back" onClick={()=>setDashboardOpen(false)}>← Back to Nexxus</button>
        <div className="nx-overlay-brand"><b>NEXXUS</b><span>INTELLIGENCE</span></div>
        <button className="nx-close" onClick={()=>setDashboardOpen(false)} aria-label="Close"><X size={19}/></button>
      </div>
      <div className="nx-overlay-content">
        <Dashboard />
      </div>
    </div>}
  </>;
}
