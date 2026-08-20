'use client';
import { useEffect } from 'react';

export default function RouteBridge(){
  useEffect(()=>{
    const makeAccountButton=()=>{
      const avatar=document.querySelector('.avatar');
      if(!avatar) return;
      avatar.setAttribute('role','button');
      avatar.setAttribute('tabindex','0');
      avatar.setAttribute('aria-label','Open My Nexxus dashboard');
      avatar.style.cursor='pointer';
    };
    const openDashboard=(e)=>{
      const el=e.target.closest('.avatar');
      if(!el) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.href='/dashboard';
    };
    const onKeyDown=(e)=>{
      if((e.key==='Enter'||e.key===' ') && e.target.closest('.avatar')){
        e.preventDefault();
        window.location.href='/dashboard';
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
    document.addEventListener('click',openDashboard,true);
    document.addEventListener('keydown',onKeyDown,true);
    document.addEventListener('click',onBuyClick,true);
    return()=>{
      observer.disconnect();
      document.removeEventListener('click',openDashboard,true);
      document.removeEventListener('keydown',onKeyDown,true);
      document.removeEventListener('click',onBuyClick,true);
    };
  },[]);
  return null;
}
