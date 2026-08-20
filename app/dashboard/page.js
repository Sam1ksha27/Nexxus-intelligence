'use client';
import Dashboard from '../Dashboard';
export default function DashboardPage(){
  const go=(next)=>{ if(next==='feedback') window.location.href='/#feedback'; else window.location.href='/dashboard'; };
  return <Dashboard go={go}/>;
}
