'use client';

import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, Sparkles, Users, Zap } from 'lucide-react';
import './partner-how.css';

export default function PartnerHow({ go }) {
  const steps = [
    { n:'01', title:'Partner with Nexxus', kicker:'CONNECT', body:'Bring Nexxus intelligence into your customer experience — without replacing the expertise your professionals already provide.', chips:['Salon networks','At-home services','Beauty platforms'], icon:<Users size={22}/> },
    { n:'02', title:'Understand your customers', kicker:'DISCOVER', body:'Turn customer preferences, hair profiles, context and service history into a richer understanding of what each person may need.', chips:['Hair profile','Goals','Context','Service history'], icon:<Sparkles size={22}/> },
    { n:'03', title:'Personalise the experience', kicker:'RECOMMEND', body:'Nexxus translates those signals into product, routine and service recommendations that can be delivered through the partner experience.', chips:['Formula','Routine','Service'], icon:<Zap size={22}/> },
    { n:'04', title:'Deliver better outcomes', kicker:'EXPERIENCE', body:'Professionals use the recommendation to make the experience more relevant — at home, in service, or across a partner touchpoint.', chips:['Professional touchpoint','Application','Feedback'], icon:<CheckCircle2 size={22}/> },
    { n:'05', title:'Learn + grow together', kicker:'LEARN', body:'Outcomes flow back into Nexxus, helping improve recommendations while creating measurable value for the partner ecosystem.', chips:['Outcomes','Insights','Retention','Growth'], icon:<BarChart3 size={22}/> }
  ];

  return <section className="partner-how">
    <div className="partner-hero">
      <div className="partner-hero-copy">
        <div className="partner-eyebrow">THE NEXXUS PARTNER EXPERIENCE</div>
        <h1>Your customers.<br/><i>Understood.</i></h1>
        <p>Nexxus helps beauty and service partners turn customer understanding into a more personalised experience — and a smarter business.</p>
        <div className="partner-hero-actions">
          <button className="partner-primary" onClick={()=>document.getElementById('partner-journey')?.scrollIntoView({behavior:'smooth'})}>Explore the partner journey <ArrowRight size={16}/></button>
          <button className="partner-text" onClick={()=>go('home')}>Back to Nexxus <ArrowRight size={15}/></button>
        </div>
      </div>
      <div className="partner-hero-visual">
        <div className="partner-photo partner-photo-one"/>
        <div className="partner-photo partner-photo-two"/>
        <div className="partner-orbit partner-orbit-one"/>
        <div className="partner-orbit partner-orbit-two"/>
        <div className="partner-signal-card"><span>LIVE CUSTOMER SIGNAL</span><strong>Personalisation</strong><small>Profile × context × service</small></div>
        <div className="partner-stat"><b>+</b><span>Relevant<br/>experiences</span></div>
      </div>
    </div>

    <div className="partner-intro">
      <div className="partner-eyebrow">HOW PARTNERS WORK WITH NEXXUS</div>
      <h2>From customer insight<br/><i>to customer outcome.</i></h2>
      <p>The partner doesn't just distribute a product. It becomes part of the learning loop.</p>
    </div>

    <div id="partner-journey" className="partner-journey">
      {steps.map((s,i)=><div className="partner-step" key={s.n}>
        <div className="partner-step-number">{s.n}</div>
        <div className="partner-step-icon">{s.icon}</div>
        <div className="partner-step-content">
          <div className="partner-eyebrow">{s.kicker}</div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <div className="partner-chips">{s.chips.map(c=><span key={c}>{c}</span>)}</div>
        </div>
        {i<steps.length-1 && <ChevronRight className="partner-step-arrow" size={20}/>} 
      </div>)}
    </div>

    <div className="partner-loop">
      <div className="partner-loop-copy">
        <div className="partner-eyebrow">THE VALUE EXCHANGE</div>
        <h2>Better for the customer.<br/><i>Smarter for the partner.</i></h2>
        <p>Every interaction can create value on both sides — a more relevant customer experience for the consumer and richer intelligence for the partner.</p>
      </div>
      <div className="partner-loop-visual">
        <div className="partner-loop-node customer"><span>CUSTOMER</span><b>Profile + outcome</b></div>
        <div className="partner-loop-node nexxus"><span>NEXXUS</span><b>Intelligence</b></div>
        <div className="partner-loop-node partner"><span>PARTNER</span><b>Experience + service</b></div>
        <div className="partner-loop-line l1"/><div className="partner-loop-line l2"/><div className="partner-loop-line l3"/>
      </div>
    </div>

    <div className="partner-ecosystem">
      <div className="partner-eyebrow">POTENTIAL ECOSYSTEM</div>
      <h2>Meet customers where<br/><i>beauty already happens.</i></h2>
      <div className="partner-ecosystem-grid">
        <div className="partner-ecosystem-card featured"><div className="partner-card-label">AT-HOME SALON & SPA</div><h3>UrbanClap</h3><p>Potential service-network partner for at-home professional touchpoints, application and outcome feedback.</p><span>Potential ecosystem partner</span></div>
        <div className="partner-ecosystem-card"><div className="partner-card-label">AT-HOME SALON & SPA</div><h3>Yes Madam</h3><p>Potential service-network partner for personalised beauty experiences, professional touchpoints and feedback.</p><span>Potential ecosystem partner</span></div>
        <div className="partner-ecosystem-card"><div className="partner-card-label">OTHER NETWORKS</div><h3>Salons + beauty platforms</h3><p>Extend Nexxus into professional and service-led consumer moments across India's beauty ecosystem.</p><span>Expandable ecosystem</span></div>
      </div>
    </div>

    <div className="partner-cta">
      <div><div className="partner-eyebrow">READY TO BUILD THE NEXT EXPERIENCE?</div><h2>Let's understand your customers<br/><i>together.</i></h2></div>
      <button className="partner-primary" onClick={()=>go('home')}>Explore Nexxus <ArrowRight size={16}/></button>
    </div>
  </section>;
}
