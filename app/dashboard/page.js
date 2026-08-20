'use client';
import { useEffect } from 'react';
import Dashboard from '../Dashboard';
export default function DashboardPage(){
  useEffect(()=>{ window.history.replaceState({},'', '/'); },[]);
  const go=(next)=>{ if(next==='feedback') window.location.href='/#feedback'; else window.location.href='/'; };
  return <Dashboard go={go}/>;
}
