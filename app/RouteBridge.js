'use client';
import { useEffect } from 'react';

export default function RouteBridge(){
  useEffect(()=>{
    const onClick=(e)=>{
      const el=e.target.closest('button,a');
      if(!el) return;
      const text=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();
      if(el.classList.contains('avatar')){
        e.preventDefault();
        window.location.href='/dashboard';
        return;
      }
      if(text.includes('buy my routine') || text.includes('get my routine') || text.includes('start my routine')){
        e.preventDefault();
        window.location.href='/checkout';
      }
    };
    document.addEventListener('click',onClick,true);
    return()=>document.removeEventListener('click',onClick,true);
  },[]);
  return null;
}
