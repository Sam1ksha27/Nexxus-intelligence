'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Dashboard from './Dashboard';
import Buy from './buy/page';
import './global-actions.css';

export default function GlobalActions(){
  const [view,setView]=useState(null);

  const open=(next)=>{
    setView(next);
    if(typeof window!=='undefined'){
      window.history.replaceState(null,'',window.location.pathname);
      window.scrollTo({top:0,behavior:'smooth'});
    }
  };

  const close=()=>{
    setView(null);
    if(typeof window!=='undefined') window.scrollTo({top:0,behavior:'smooth'});
  };

  useEffect(()=>{
    const onKey=(e)=>{if(e.key==='Escape') close();};
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[]);

  return <>
    {!view&&<div className="nx-global-actions" aria-label="Nexxus quick actions">
      <button className="nx-buy-button" onClick={()=>open('buy')}>Buy My Routine <ArrowRight size={15}/></button>
    </div>}

    {view&&<div className="nx-overlay">
      <div className="nx-overlay-bar">
        <button className="nx-back" onClick={close}>← Back to Nexxus</button>
        <div className="nx-overlay-brand"><b>NEXXUS</b><span>INTELLIGENCE</span></div>
        <button className="nx-close" onClick={close} aria-label="Close"><X size={19}/></button>
      </div>
      <div className="nx-overlay-content">
        {view==='dashboard'&&<Dashboard go={(next)=>next==='feedback'?close():setView(next==='dashboard'?'dashboard':next)}/>} 
        {view==='buy'&&<Buy go={(next)=>next==='dashboard'?setView('dashboard'):close()}/>} 
      </div>
    </div>}
  </>;
}
