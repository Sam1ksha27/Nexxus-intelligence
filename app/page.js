'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Check, ChevronLeft, FlaskConical, Menu, Sparkles, Star, X } from 'lucide-react';

const trendData = [
  {
    id: 'glass', title: 'Glass Hair', delta: '+38%', tag: 'High-shine • Trending', match: '94%',
    description: 'The ultra-reflective, smooth finish is having a moment.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'scalp', title: 'Scalp Reset', delta: '+21%', tag: 'Clean • Rising', match: '81%',
    description: 'A calmer, cleaner scalp-first routine is moving mainstream.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'volume', title: 'Soft Volume', delta: '+17%', tag: 'Airy • Rising', match: '76%',
    description: 'Lightweight volume without the dry, overloaded feel.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85'
  }
];

const reviews = [
  { name: 'Aarohi', segment: 'Dry / Damaged', rating: 5, text: 'The recommendation felt surprisingly specific to my hair. I liked seeing why each part of the formula was chosen.' },
  { name: 'Kabir', segment: 'Oily / Fine', rating: 5, text: 'I usually get generic recommendations. This one actually considered how quickly my scalp gets oily.' },
  { name: 'Riya', segment: 'Normal / Balanced', rating: 4, text: 'The weather adjustment made the most sense to me. My routine feels lighter on humid days.' },
  { name: 'Arjun', segment: 'Curly / Dry', rating: 5, text: 'Seeing the reasoning behind the recommendation made the whole experience feel much more transparent.' }
];

const ingredients = [
  ['Panthenol', 'Hydrate', 'Humectant and conditioning support.'],
  ['Argan Oil', 'Condition', 'Emollient support for softness and conditioning.'],
  ['Polyquaternium-10', 'Manageability', 'Conditioning polymer supporting detangling and feel.'],
  ['Cocamidopropyl Betaine', 'Cleanse', 'Milder cleansing support in a formula system.'],
  ['Sodium Lauroyl Sarcosinate', 'Cleanse', 'Gentle surfactant used for cleansing.']
];

const quizSteps = [
  ['age', 'Let’s start with you.', 'A little context helps Nexxus personalize the experience.', ['18–24', '25–34', '35–44', '45–54', '55+']],
  ['gender', 'How do you identify?', 'Context matters. It never decides your formula on its own.', ['Woman', 'Man', 'Non-binary', 'Prefer not to say']],
  ['texture', 'How would you describe your hair?', 'Choose what feels most natural to you.', ['Straight', 'Wavy', 'Curly', 'Coily']],
  ['density', 'What is your hair density?', 'Think about how much hair you have, not strand diameter.', ['Fine', 'Medium', 'Thick']],
  ['scalp', 'How does your scalp usually behave?', 'This helps balance cleansing and conditioning.', ['Oily', 'Balanced', 'Dry', 'Changes often']],
  ['concern', 'What needs the most attention right now?', 'Pick the outcome that matters most today.', ['Frizz', 'Dryness', 'Damage', 'Scalp', 'Dullness', 'Hair fall']],
  ['heat', 'How often do you use heat styling?', 'Your routine changes what your hair may need.', ['Never', 'Sometimes', 'Often']],
  ['goal', 'What does great hair look like to you?', 'Choose the result you care about most.', ['Glass-like shine', 'Deep hydration', 'Repair & strength', 'Frizz control', 'Healthy scalp', 'Volume & movement']],
  ['city', 'Where does your hair live?', 'Environment is one of Nexxus’ formulation signals.', ['Mumbai', 'Delhi', 'Bengaluru', 'Kolkata', 'Chennai', 'Other city']],
  ['context', 'Anything affecting your hair lately?', 'Use context as a signal, never as a diagnosis.', ['Stress', 'Sleep changes', 'Weather change', 'Lifestyle change', 'Nothing noticeable', 'Not sure']],
  ['trend', 'A trend is taking off.', 'Would you try Glass Hair?', ['Absolutely', 'Maybe', 'Not for me']]
];

export default function App() {
  const [page, setPage] = useState('home');
  const [menu, setMenu] = useState(false);
  const [quiz, setQuiz] = useState({ age: '', gender: '', texture: '', density: '', scalp: '', concern: '', heat: '', goal: '', city: 'Mumbai', context: '', trend: '' });
  const [trend, setTrend] = useState(trendData[0]);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const go = (next) => { setPage(next); setMenu(false); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const setQ = (key, value) => setQuiz((q) => ({ ...q, [key]: value }));

  const segment = useMemo(() => {
    if (quiz.scap === 'Oily' || quiz.density === 'Fine') return 'H1 · Oily / Fine';
    if (quiz.concern === 'Damage' || quiz.texture === 'Curly' || quiz.heat === 'Often' || quiz.scalp === 'Dry') return 'H3 · Dry / Damaged';
    return 'H2 · Normal / Balanced';
  }, [quiz]);

  const formula = useMemo(() => {
    const dry = segment.startsWith('H3');
    const oily = segment.startsWith('H1');
    return dry ? { base: 69, hydrate: 15, repair: 10, finish: 6 } : oily ? { base: 72, hydrate: 12, repair: 7, finish: 9 } : { base: 72, hydrate: 12, repair: 9, finish: 7 };
  }, [segment]);

  return (
    <main className="shell">
      <header className="nav">
        <button className="brand" onClick={() => go('home')}><span>NEXXUS</span><small>INTELLIGENCE</small></button>
        <nav className={menu ? 'open' : ''}>
          <button onClick={() => go('home')}>My hair</button>
          <button onClick={() => go('trends')}>Discover</button>
          <button onClick={() => go('how')}>How it works</button>
          <button onClick={() => go('reviews')}>Reviews</button>
        </nav>
        <div className="nav-actions">
          <button className="quiz-mini" onClick={() => go('quiz')}>Take the quiz <ArrowRight size={14} /></button>
          <button className="menu-btn" onClick={() => setMenu((v) => !v)}>{menu ? <X /> : <Menu />}</button>
          <span className="avatar">S</span>
        </div>
      </header>

      {page === 'home' && <Home go={go} setTrend={(t) => { setTrend(t); go('trends'); }} />}
      {page === 'quiz' && <Quiz quiz={quiz} setQ={setQ} go={go} />}
      {page === 'profile' && <Profile quiz={quiz} segment={segment} go={go} />}
      {page === 'recommendation' && <Recommendation quiz={quiz} segment={segment} go={go} />}
      {page === 'formula' && <Formula quiz={quiz} formula={formula} go={go} />}
      {page === 'trends' && <Trends active={trend} setActive={setTrend} go={go} />}
      {page === 'how' && <How go={go} />}
      {page === 'reviews' && <Reviews rating={rating} setRating={setRating} reviewText={reviewText} setReviewText={setReviewText} go={go} />}

      <footer><b>NEXXUS</b><span>Science that learns your hair.</span><span>Prototype experience • Product concepts are illustrative</span></footer>
    </main>
  );
}

function Home({ go, setTrend }) {
  return <section className="home">
    <div className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={14} /> YOUR HAIR, RIGHT NOW</div>
        <h1>Science that<br /><i>learns</i> your hair.</h1>
        <p>Nexxus combines hair science with what we learn from your routine, preferences and environment — so your next recommendation gets better.</p>
        <div className="chips"><span>⌖ Mumbai</span><span>☁ 31°C · 78% humidity</span><span>Dry · Frizz-prone · Shine seeker</span></div>
        <div className="hero-buttons"><button className="primary large" onClick={() => go('quiz')}>Take the 60-sec quiz <ArrowRight size={17} /></button><button className="text-btn" onClick={() => go('how')}>How it works <ArrowRight size={15} /></button></div>
        <div className="micro"><span>01 Discover</span><span>02 Personalize</span><span>03 Analyze</span><span>04 Recommend</span><span>05 Learn</span></div>
      </div>
      <div className="hero-image man"><div className="intelligence-card"><span>✣ Hair intelligence</span><b>94%</b><small>Profile confidence · updated today</small></div></div>
    </div>

    <div className="section-head"><div><div className="eyebrow">DISCOVERED FOR YOU</div><h2>Trending, reinterpreted.</h2><p>Popularity is a signal. Nexxus decides whether it matters for you.</p></div><button className="text-btn" onClick={() => go('trends')}>What we’ve learned <ArrowRight size={16} /></button></div>
    <div className="trend-grid">{trendData.map((t) => <button key={t.id} className="trend-card" onClick={() => setTrend(t)}><div className="trend-photo" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.66), transparent 58%), url(${t.image})` }}><div><b>{t.delta}</b><span>{t.tag}</span><h3>{t.title}</h3><p>{t.description}</p></div><div className="trend-match"><span>Your match</span><strong>{t.match}</strong><ArrowRight size={15} /></div></div></button>)}</div>

    <div className="science-banner"><div><div className="eyebrow">SCIENCE THAT LEARNS YOUR HAIR</div><h2>Personalization without the black box.</h2><p>Every recommendation has a reason — from hair profile and ingredients to weather, trends and feedback.</p></div><button className="primary" onClick={() => go('how')}>See the intelligence loop <ArrowRight size={16} /></button></div>

    <div className="reviews-teaser"><div><div className="eyebrow">TRUST, BUILT IN</div><h2>People like you are part of the loop.</h2><p>See what similar hair profiles are saying, then leave your own signal.</p></div><div className="review-score"><strong>4.8</strong><div>★★★★★</div><small>Prototype review set</small></div><button className="primary" onClick={() => go('reviews')}>Read reviews <ArrowRight size={16} /></button></div>
  </section>;
}

function Quiz({ quiz, setQ, go }) {
  const [step, setStep] = useState(0);
  const current = quizSteps[step];
  const next = () => step < quizSteps.length - 1 ? setStep(step + 1) : go('profile');
  return <section className="quiz-page"><div className="quiz-top"><button className="back" onClick={() => step ? setStep(step - 1) : go('home')}><ChevronLeft size={17} /> {step ? 'Back' : 'Exit'}</button><span>{String(step + 1).padStart(2, '0')} / {quizSteps.length}</span></div><div className="progress"><i style={{ width: `${((step + 1) / quizSteps.length) * 100}%` }} /></div><div className="quiz-card"><div className="eyebrow">NEXXUS CONSULTATION</div><h1>{current[1]}</h1><p>{current[2]}</p><div className="options">{current[3].map((o) => <button key={o} className={quiz[current[0]] === o ? 'selected' : ''} onClick={() => setQ(current[0], o)}>{o}{quiz[current[0]] === o && <Check size={16} />}</button>)}</div><button className="primary" disabled={!quiz[current[0]]} onClick={next}>{step === quizSteps.length - 1 ? 'Build my Hair Intelligence' : 'Continue'} <ArrowRight size={17} /></button></div></section>;
}

function Profile({ quiz, segment, go }) {
  return <section className="page profile-page"><div className="eyebrow"><Sparkles size={14} /> YOUR HAIR INTELLIGENCE</div><h1>We see a starting point.<br /><i>Now let’s make it smarter.</i></h1><div className="profile-grid"><div className="score-card"><span>PROFILE CONFIDENCE</span><strong>94%</strong><div className="ring"><b>94</b></div><p>Your profile evolves as Nexxus learns from your outcomes.</p></div><div className="facts">{[['SEGMENT', segment], ['YOUR GOAL', quiz.goal || 'Your goal'], ['ENVIRONMENT', `${quiz.city || 'Mumbai'} · 31°C · 78% humidity`], ['CONTEXT', quiz.context || 'Not yet added']].map(([a,b]) => <div key={a}><span>{a}</span><b>{b}</b><small>Used as a signal, never as a diagnosis.</small></div>)}</div></div><div className="actions"><button className="text-btn" onClick={() => go('quiz')}>Retake consultation</button><button className="primary" onClick={() => go('recommendation')}>See my recommendation <ArrowRight size={17} /></button></div></section>;
}

function Recommendation({ quiz, segment, go }) {
  return <section className="page"><button className="back" onClick={() => go('profile')}><ChevronLeft size={16} /> Your profile</button><div className="recommend-head"><div><div className="eyebrow">PERSONALIZED RECOMMENDATION</div><h1>Built around<br /><i>your hair.</i></h1><p className="lead">Nexxus combines your profile, goal and environment — then explains why the recommendation makes sense.</p></div><div className="match-card"><span>PROFILE MATCH</span><strong>95%</strong><small>{quiz.goal || 'Personalized goal'}</small></div></div><div className="recommend-grid"><div className="adapt-card"><div className="adapt-label">NEXXUS ADAPT PRO</div><div className="cartridges"><i>BASE</i><i>HYDRATE</i><i>REPAIR</i><i>FINISH</i></div><div className="dispense">FRESHLY MIXED FOR YOU</div><h2>{quiz.goal || 'Your'} formula, today.</h2><p>Base + three adaptive cartridges. The device dispenses the exact proportions recommended for your current profile.</p><button className="primary" onClick={() => go('formula')}>See my formula <ArrowRight size={16} /></button></div><div className="why-card"><div className="eyebrow">WHY THIS FORMULA?</div>{[['01', segment], ['02', 'Environment-aware'], ['03', 'Goal-led']].map(([n,t]) => <div className="why-row" key={n}><b>{n}</b><span><strong>{t}</strong><small>Signals from your consultation are combined with contextual and learned signals.</small></span></div>)}<div className="science-note"><FlaskConical size={17} /><span><b>Science inside</b><small>Panthenol, argan oil and conditioning polymers are shown as ingredient references for the prototype formulation system.</small></span></div></div></div><div className="ingredients"><div className="eyebrow">INGREDIENT REFERENCE</div><h2>Explainable by design.</h2><div className="ingredient-list">{ingredients.map(([n,r,d]) => <div key={n}><span>{r}</span><b>{n}</b><small>{d}</small></div>)}</div></div></section>;
}

function Formula({ quiz, formula, go }) {
  const rows = [['base', 'BASE', formula.base, 'Foundation · nourishment + structure'], ['hydrate', 'HYDRATE', formula.hydrate, 'Moisture · hydration + protection'], ['repair', 'REPAIR', formula.repair, 'Strength · repair support'], ['finish', 'FINISH', formula.finish, 'Finish · shine + smoothness']];
  return <section className="page"><button className="back" onClick={() => go('recommendation')}><ChevronLeft size={16} /> Recommendation</button><div className="formula-head"><div><div className="eyebrow">YOUR FORMULA TODAY</div><h1>Precisely mixed<br /><i>for you.</i></h1><p className="lead">For {quiz.goal || 'your goal'} in {quiz.city || 'your environment'}, the prototype adapts the four-part system.</p></div><div className="machine"><div className="machine-top">NEXXUS ADAPT PRO <small>SMART. PRECISE. PERSONALIZED.</small></div><div className="bottles"><i>BASE</i><i>HYDRATE</i><i>REPAIR</i><i>FINISH</i></div><div className="bowl">●</div><small>DISPENSING YOUR FORMULA</small></div></div><div className="mix-table">{rows.map(([c,n,v,d]) => <div key={n}><i className={`dot ${c}`} /><b>{n}</b><strong>{v}%</strong><span><em style={{ width: `${v}%` }} /></span><small>{d}</small></div>)}</div><div className="formula-note">✦ Exact proportions can change as Nexxus learns from your feedback.</div></section>;
}

function Trends({ active, setActive, go }) {
  return <section className="page trends-page"><div className="eyebrow">WHAT’S HAPPENING IN HAIRCARE</div><h1>Trending,<br /><i>reinterpreted.</i></h1><p className="lead">Nexxus reads social signals and consumer behaviour, then asks a better question: does this trend actually matter for your hair?</p><div className="trend-large">{trendData.map(t => <button className={active.id === t.id ? 'active' : ''} key={t.id} onClick={() => setActive(t)}><img src={t.image} alt="" /><span><b>{t.delta}</b> {t.tag}</span><h2>{t.title}</h2><small>{t.description}</small></button>)}</div><div className="trend-detail"><div><span>YOUR PROTOTYPE MATCH</span><strong>{active.match}</strong></div><div><span>WHAT NEXXUS LEARNED</span><p>{active.title} is treated as a signal, not a prescription. Your profile decides whether it earns a recommendation.</p></div><button className="primary" onClick={() => go('quiz')}>Check if it’s for me <ArrowRight size={16} /></button></div></section>;
}

function How({ go }) {
  const steps = [['01', 'YOU', 'Profile, routine, goals and feedback'], ['02', 'CONDITIONS', 'Weather, season and environment'], ['03', 'TRENDS', 'Social signals and consumer behaviour'], ['04', 'NEXXUS INTELLIGENCE', 'Patterns become recommendation signals'], ['05', 'FORMULA', 'Better proportions and smarter routines'], ['06', 'LEARN', 'Results and reviews improve the next cycle']];
  return <section className="page how-page"><div className="eyebrow">THE NEXXUS INTELLIGENCE LOOP</div><h1>Your hair. Our science.<br /><i>Smarter every day.</i></h1><p className="lead">The prototype connects personalization, trend intelligence, formulation and feedback into one continuous loop.</p><div className="loop-grid">{steps.map(([n,t,d]) => <div key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}</div><div className="loop-callout">✦ A continuous loop of learning — for hair that feels uniquely yours.</div><button className="primary" onClick={() => go('quiz')}>Start my profile <ArrowRight size={16} /></button></section>;
}

function Reviews({ rating, setRating, reviewText, setReviewText, go }) {
  return <section className="page reviews-page"><div className="eyebrow">TRUST, BUILT IN</div><h1>Real signals.<br /><i>Human reviews.</i></h1><div className="review-summary"><div><strong>4.8</strong><span>★★★★★</span><small>Prototype review set</small></div><p>Reviews are organized by hair profile so people can see experiences that feel relevant to them.</p></div><div className="review-grid">{reviews.map(r => <article key={r.name}><div className="review-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div><p>“{r.text}”</p><b>{r.name}</b><small>{r.segment}</small></article>)}</div><div className="write-review"><div><div className="eyebrow">YOUR SIGNAL</div><h2>How was your experience?</h2><div className="rating-buttons">{[1,2,3,4,5].map(n => <button key={n} onClick={() => setRating(n)} className={n <= rating ? 'on' : ''}><Star fill="currentColor" size={20} /></button>)}</div></div><textarea value={reviewText} onChange={e => setReviewText(e.target.value)} placeholder="Tell us what worked, what didn’t, or what surprised you…" /><button className="primary" onClick={() => { setReviewText(''); alert('Thank you — your feedback is now part of the prototype learning loop.'); }}>Submit review <ArrowRight size={16} /></button></div><button className="text-btn" onClick={() => go('home')}>Back to NEXXUS <ArrowRight size={15} /></button></section>;
}
