'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react';
import './subscription.css';

const plans={
 'Every 4 weeks':{next:'28 Aug 2026',price:3197,saving:256,total:2941,monthly:3197/4*4.345},
 'Every 6 weeks':{next:'4 Sep 2026',price:3197,saving:416,total:2781,monthly:2781/6*4.345},
 'Every 8 weeks':{next:'18 Sep 2026',price:3197,saving:576,total:2621,monthly:2621/8*4.345}
};

export default function SubscriptionPage(){
 const [frequency,setFrequency]=useState('Every 8 weeks');
 const [paused,setPaused]=useState(false);
 const [saved,setSaved]=useState(false);
 const plan=plans[frequency];
 const cycleLabel=frequency.replace('Every ','');
 return <main className="subscription-page">
  <header className="subscription-nav"><Link href="/dashboard"><ArrowLeft size={15}/> Back to My Nexxus</Link><b>NEXXUS <small>SUBSCRIPTION</small></b><span>Personalized routine</span></header>
  <section className="subscription-hero"><div><label>MANAGE YOUR ROUTINE</label><h1>Your subscription.<br/><i>On your terms.</i></h1><p>Keep your personalized Nexxus routine coming, adjust delivery timing, or pause it whenever you need.</p></div><div className={`subscription-status ${paused?'paused':''}`}><span>STATUS</span><strong>{paused?'PAUSED':'ACTIVE'}</strong><small>Personalized routine · 3 products</small></div></section>
  <section className="subscription-grid">
   <div className="subscription-main">
    <div className="sub-card"><div className="sub-card-head"><div><span>01 · YOUR ROUTINE</span><h2>Personalized every cycle.</h2></div><div className="check-badge"><Check size={15}/></div></div>
      {[['Nexxus Adaptive Cleanse','Personalized cleanser','₹899'],['Nexxus Adaptive Condition','Personalized conditioner','₹999'],['Nexxus Adaptive Treatment','Personalized treatment','₹1,299']].map(p=><div className="sub-product" key={p[0]}><div className="sub-product-art"><b>N</b></div><div><small>{p[1]}</small><h3>{p[0]}</h3><span>{p[2]} · personalized formula</span></div></div>)}
    </div>
    <div className="sub-card"><span className="sub-kicker">02 · DELIVERY</span><h2>Choose your rhythm.</h2><div className="frequency-select"><span>Delivery frequency</span><button onClick={()=>setFrequency(frequency==='Every 8 weeks'?'Every 6 weeks':frequency==='Every 6 weeks'?'Every 4 weeks':'Every 8 weeks')}>{frequency}<ChevronDown size={15}/></button></div><div className="next-delivery"><div><small>NEXT DELIVERY</small><strong>{plan.next}</strong></div><span>{paused?'Paused':'Every '+cycleLabel}</span></div></div>
   </div>
   <aside className="subscription-actions"><span>YOUR SUBSCRIPTION</span><h2>{paused?'Subscription paused':'Active subscription'}</h2><p>{paused?'Your routine will not ship until you resume it.':`Your personalized routine renews every ${cycleLabel}, at the selected subscription rate.`}</p><div className="action-row"><span>Routine</span><b>₹{plan.price.toLocaleString('en-IN')}</b></div><div className="action-row"><span>Subscription saving</span><b>−₹{plan.saving.toLocaleString('en-IN')}</b></div><div className="action-total"><span>Per delivery · {cycleLabel}</span><strong>₹{plan.total.toLocaleString('en-IN')}</strong></div><div className="effective-cost">≈ ₹{Math.round(plan.monthly).toLocaleString('en-IN')} / month equivalent</div><button className="sub-primary" onClick={()=>setPaused(v=>!v)}>{paused?'RESUME SUBSCRIPTION':'PAUSE SUBSCRIPTION'} <ArrowRight size={15}/></button><button className="sub-secondary" onClick={()=>setSaved(true)}>{saved?'SAVED':'SAVE CHANGES'}</button>{saved&&<div className="saved-note"><Check size={14}/> Your subscription preferences are saved.</div>}<Link className="back-dashboard" href="/dashboard"><ArrowLeft size={14}/> Back to My Nexxus</Link></aside>
  </section>
 </main>;
}
