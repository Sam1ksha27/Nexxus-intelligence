'use client';
import { useState } from 'react';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import './partner-how.css';

export default function PartnerHow({ go }) {
  const [bundle,setBundle]=useState('pro');
  const bundles={
    essential:{name:'ESSENTIAL',tag:'Start your personalization journey',desc:'A simple intelligence layer for businesses ready to move beyond one-size-fits-all recommendations.',items:['Customer profiling','Hair assessment','Personalized recommendations','Basic analytics','Nexxus intelligence dashboard'],best:'Emerging businesses'},
    pro:{name:'PRO',tag:'Personalize at scale',desc:'A deeper intelligence layer for established businesses that want personalization, analytics and a continuous learning loop.',items:['Everything in Essential','Advanced personalization','Customer segmentation','Recommendation analytics','Feedback & learning loop','Integration support'],best:'Established businesses'},
    enterprise:{name:'ENTERPRISE',tag:'Embed intelligence into your experience',desc:'A connected Nexxus capability for larger businesses that want the intelligence layer integrated into their own customer journey.',items:['Everything in Pro','API / platform integration','Custom intelligence layer','Advanced analytics','Demand & inventory intelligence','Custom workflows','Dedicated implementation'],best:'Large / multi-location businesses'}
  };
  const b=bundles[bundle];
  return <section className="partner-how">
    <div className="partner-hero">
      <div className="partner-hero-copy">
        <div className="partner-eyebrow">NEXXUS FOR BUSINESS</div>
        <h1>Turn every customer into a <i>personalized experience.</i></h1>
        <p>Nexxus helps businesses understand their customers, deliver personalized haircare recommendations and build a continuous feedback loop — without building the intelligence layer themselves.</p>
        <button className="partner-button" onClick={()=>document.getElementById('partner-solutions')?.scrollIntoView({behavior:'smooth'})}>Explore Partner Solutions <ArrowRight size={15}/></button>
      </div>
      <div className="partner-hero-art"><div className="partner-float pf1">CUSTOMER INTELLIGENCE</div><div className="partner-float pf2">PERSONALIZED COMMERCE</div><div className="partner-float pf3">CONTINUOUS LEARNING</div></div>
    </div>

    <div className="partner-section">
      <div className="partner-center"><span className="partner-eyebrow">01 · THE BUSINESS PROBLEM</span><h2>Your customers are different. <i>Your recommendations should be too.</i></h2><p>Move from generic recommendations and one-off transactions to a system that understands the customer, personalizes the experience and learns from every outcome.</p></div>
      <div className="problem-grid">
        <div className="problem-card"><h3>TRADITIONAL</h3><div className="problem-flow"><strong>Customer</strong><em>→</em><strong>Generic recommendation</strong><em>→</em><strong>Transaction</strong></div></div>
        <div className="problem-card highlight"><h3>NEXXUS</h3><div className="problem-flow"><strong>Customer signals</strong><em>→</em><strong>Hair intelligence</strong><em>→</em><strong>Personalized experience</strong><em>→</em><strong>Feedback</strong></div></div>
      </div>
    </div>

    <div className="partner-section alt">
      <div className="partner-center"><span className="partner-eyebrow">02 · WHAT YOUR BUSINESS GETS</span><h2>One intelligence layer. <i>Three business advantages.</i></h2></div>
      <div className="value-grid">
        <div className="value-card"><span className="value-num">01</span><h3>Consumer Intelligence</h3><p>Understand hair, preferences, behaviours and context instead of relying on generic assumptions.</p></div>
        <div className="value-card"><span className="value-num">02</span><h3>Personalized Commerce</h3><p>Translate consumer signals into more relevant products, routines and recommendations.</p></div>
        <div className="value-card"><span className="value-num">03</span><h3>Continuous Learning</h3><p>Feed outcomes back into the system so future recommendations become more relevant over time.</p></div>
      </div>
    </div>

    <div id="partner-solutions" className="partner-section">
      <div className="partner-center"><span className="partner-eyebrow">03 · NEXXUS PARTNER SOLUTIONS</span><h2>Choose the level of <i>intelligence your business needs.</i></h2><p>Three illustrative solution bundles translate the Nexxus capability into a practical business offering.</p></div>
      <div className="bundle-wrap">
        <div className="bundle-tabs">{Object.entries(bundles).map(([key,v])=><button key={key} className={`bundle-tab ${bundle===key?'active':''}`} onClick={()=>setBundle(key)}>{v.name}</button>)}</div>
        <div className="bundle-card">
          <div className="bundle-left"><div><span className="partner-eyebrow">NEXXUS SOLUTION</span><h3>{b.name}</h3><span className="tag">{b.tag}</span><p>{b.desc}</p></div><span className="bundle-best">BEST FOR · {b.best.toUpperCase()}</span></div>
          <div className="bundle-right"><h4>WHAT'S INCLUDED</h4><div className="bundle-items">{b.items.map(item=><div className="bundle-item" key={item}><Check size={15}/><span>{item}</span></div>)}</div><div className="bundle-note">Pricing and commercial terms are defined by deployment scope, integration needs and partner volume.</div></div>
        </div>
      </div>
    </div>

    <div className="partner-section alt">
      <div className="partner-center"><span className="partner-eyebrow">04 · VALUE UNLOCKED</span><h2>What you invest <i>vs. what Nexxus unlocks.</i></h2></div>
      <div className="partner-outcomes">
        <div className="outcome"><h3>YOUR INVESTMENT</h3><ul><li>Intelligence capability</li><li>Implementation / integration</li><li>Optional hardware / product layer</li><li>Ongoing Nexxus service</li></ul></div>
        <div className="outcome"><h3>WHAT NEXXUS UNLOCKS</h3><ul><li>More relevant recommendations</li><li>Deeper consumer understanding</li><li>More personalized experiences</li><li>Feedback-led improvement</li><li>A continuously learning customer intelligence loop</li></ul></div>
      </div>
    </div>

    <div className="partner-section">
      <div className="partner-center"><span className="partner-eyebrow">05 · THE LEARNING LOOP</span><h2>Every customer makes your business <i>smarter.</i></h2><p>Nexxus turns each interaction into a source of learning — creating a compounding intelligence advantage.</p></div>
      <div className="loop">
        {['Customer|Profile + needs','Nexxus|Personalized recommendation','Experience|Product / service delivery','Feedback|Outcome + preference','Learn|Better next recommendation'].map((x,i)=>{const [a,c]=x.split('|');return <div className="loop-unit" key={a}><div className="loop-box"><strong>{a}</strong><small>{c}</small></div>{i<4&&<div className="loop-arrow"><ChevronRight size={16}/></div>}</div>})}
      </div>
    </div>

    <div className="partner-cta"><h2>Ready to personalize your business?</h2><p>Build the next haircare experience with Nexxus.</p><button className="partner-button" onClick={()=>go?.('home')}>Talk to Nexxus <ArrowRight size={15}/></button></div>
  </section>;
}
