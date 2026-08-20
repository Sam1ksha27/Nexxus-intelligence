'use client';
import { useEffect } from 'react';
import Buy from '../buy/page';
export default function CheckoutPage(){
  useEffect(()=>{ window.history.replaceState({},'', '/'); },[]);
  return <Buy />;
}
