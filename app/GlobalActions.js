'use client';

import { useEffect } from 'react';
import './global-actions.css';

export default function GlobalActions(){
  useEffect(()=>{
    const ensure=()=>{
      const avatar=document.querySelector('.avatar');
      if(!avatar) return;
      avatar.setAttribute('role','button');
      avatar.setAttribute('tabindex','0');
      avatar.setAttribute('aria-label','Open My Nexxus account menu');
      avatar.style.cursor='pointer';
      if(document.querySelector('.nx-account-popover')) return;
      const pop=document.createElement('div');
      pop.className='nx-account-popover';
      pop.innerHTML=`
        <div class="nx-account-name">SAM</div>
        <div class="nx-account-rule"></div>
        <a href="/dashboard" class="nx-account-item nx-account-primary">My Nexxus</a>
        <a href="/dashboard#routine" class="nx-account-item">My Routine</a>
        <a href="/dashboard#orders" class="nx-account-item">Orders &amp; Subscription</a>
        <div class="nx-account-rule"></div>
        <button type="button" class="nx-account-item nx-account-signout">Sign out</button>
      `;
      document.body.appendChild(pop);
      if(!document.querySelector('#nx-account-style')){
        const style=document.createElement('style');
        style.id='nx-account-style';
        style.textContent=`
          .nx-account-popover{position:fixed;top:76px;right:24px;width:238px;background:#fbf9f5;color:#171615;border:1px solid #ded5c8;border-radius:16px;box-shadow:0 18px 50px rgba(30,25,20,.16);padding:12px;z-index:99999;opacity:0;transform:translateY(-6px) scale(.98);pointer-events:none;transition:opacity .16s ease,transform .16s ease;font-family:inherit}
          .nx-account-popover.open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
          .nx-account-name{padding:8px 11px 10px;font-size:10px;letter-spacing:.2em;font-weight:700;color:#b88d4f}
          .nx-account-rule{height:1px;background:#e5ddd2;margin:4px 0}
          .nx-account-item{display:block;width:100%;padding:12px 11px;border:0;background:transparent;text-align:left;text-decoration:none;color:#2b2926;font-size:12px;line-height:1.2;border-radius:9px;cursor:pointer;font-family:inherit}
          .nx-account-item:hover{background:#f0e9df}
          .nx-account-primary{font-weight:600}
          .nx-account-signout{color:#777066}
          @media(max-width:600px){.nx-account-popover{top:68px;right:16px;width:220px}}
        `;
        document.head.appendChild(style);
      }
    };
    const toggle=(e)=>{
      const avatar=e.target.closest('.avatar');
      if(!avatar) return;
      e.preventDefault();
      e.stopPropagation();
      const pop=document.querySelector('.nx-account-popover');
      if(pop) pop.classList.toggle('open');
    };
    const close=(e)=>{
      if(e.target.closest('.avatar')||e.target.closest('.nx-account-popover')) return;
      document.querySelector('.nx-account-popover')?.classList.remove('open');
    };
    const key=(e)=>{if(e.key==='Escape')document.querySelector('.nx-account-popover')?.classList.remove('open');};
    ensure();
    const observer=new MutationObserver(ensure);
    observer.observe(document.body,{childList:true,subtree:true});
    document.addEventListener('click',toggle,true);
    document.addEventListener('click',close,true);
    document.addEventListener('keydown',key,true);
    return()=>{
      observer.disconnect();
      document.removeEventListener('click',toggle,true);
      document.removeEventListener('click',close,true);
      document.removeEventListener('keydown',key,true);
      document.querySelector('.nx-account-popover')?.remove();
    };
  },[]);

  return <div className="nx-global-actions" aria-label="Nexxus quick actions"><a className="nx-buy-button" href="/buy">Buy My Routine <span aria-hidden="true">→</span></a></div>;
}
