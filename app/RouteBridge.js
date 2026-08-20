'use client';
import { useEffect } from 'react';

export default function RouteBridge(){
  useEffect(()=>{
    const makeAccountButton=()=>{
      const avatar=document.querySelector('.avatar');
      if(!avatar) return;
      avatar.setAttribute('role','button');
      avatar.setAttribute('tabindex','0');
      avatar.setAttribute('aria-label','Open My Nexxus account menu');
      avatar.setAttribute('aria-expanded',avatar.dataset.accountOpen==='true'?'true':'false');
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

    const toggleAccount=(e)=>{
      const avatar=e.target.closest('.avatar');
      if(!avatar) return;
      e.preventDefault();
      e.stopPropagation();
      const pop=document.querySelector('.nx-account-popover');
      if(!pop) return;
      const open=!pop.classList.contains('open');
      pop.classList.toggle('open',open);
      avatar.dataset.accountOpen=open?'true':'false';
      avatar.setAttribute('aria-expanded',open?'true':'false');
    };

    const closeOnOutside=(e)=>{
      if(e.target.closest('.avatar') || e.target.closest('.nx-account-popover')) return;
      const pop=document.querySelector('.nx-account-popover');
      const avatar=document.querySelector('.avatar');
      if(pop) pop.classList.remove('open');
      if(avatar){avatar.dataset.accountOpen='false';avatar.setAttribute('aria-expanded','false');}
    };

    const onKeyDown=(e)=>{
      if((e.key==='Enter'||e.key===' ') && e.target.closest('.avatar')){
        e.preventDefault();
        const pop=document.querySelector('.nx-account-popover');
        if(pop) pop.classList.toggle('open');
      }
      if(e.key==='Escape'){
        const pop=document.querySelector('.nx-account-popover');
        const avatar=document.querySelector('.avatar');
        if(pop) pop.classList.remove('open');
        if(avatar) avatar.setAttribute('aria-expanded','false');
      }
    };

    const onBuyClick=(e)=>{
      const el=e.target.closest('button,a');
      if(!el || el.classList.contains('avatar')) return;
      const text=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();
      if(text.includes('buy my routine') || text.includes('get my routine') || text.includes('start my routine')){
        e.preventDefault();
        e.stopPropagation();
        window.location.href='/checkout';
      }
    };

    makeAccountButton();
    const observer=new MutationObserver(makeAccountButton);
    observer.observe(document.body,{childList:true,subtree:true});
    document.addEventListener('click',toggleAccount,true);
    document.addEventListener('click',closeOnOutside,true);
    document.addEventListener('keydown',onKeyDown,true);
    document.addEventListener('click',onBuyClick,true);
    return()=>{
      observer.disconnect();
      document.removeEventListener('click',toggleAccount,true);
      document.removeEventListener('click',closeOnOutside,true);
      document.removeEventListener('keydown',onKeyDown,true);
      document.removeEventListener('click',onBuyClick,true);
    };
  },[]);
  return null;
}
