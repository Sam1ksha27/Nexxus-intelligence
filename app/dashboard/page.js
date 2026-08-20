'use client';
import { useEffect } from 'react';
import Dashboard from '../Dashboard';

export default function DashboardPage(){
  useEffect(()=>{
    const tab=window.location.hash.replace('#','');
    if(!tab) return;
    const target=tab==='orders'?'Orders':tab==='routine'?'My Routine':null;
    if(!target) return;
    const timer=setTimeout(()=>{
      [...document.querySelectorAll('button')].find(b=>b.textContent.trim()===target)?.click();
    },50);
    return()=>clearTimeout(timer);
  },[]);
  return <Dashboard />;
}
