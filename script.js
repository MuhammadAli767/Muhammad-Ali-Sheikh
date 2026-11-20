const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  const glow=document.querySelector('.cursor-glow');
  window.addEventListener('pointermove',e=>{
    if(glow){
      glow.style.transform='translate3d('+(e.clientX-160)+'px,'+(e.clientY-160)+'px,0)';
    }
  });

  document.querySelectorAll('.project,.skill').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform='perspective(1100px) rotateX('+(-y*4)+'deg) rotateY('+(x*4)+'deg) translateY(-5px)';
    });
    card.addEventListener('pointerleave',()=>{
      card.style.transform='';
    });
  });

  const portrait=document.querySelector('.portrait');
  document.querySelector('.visual')?.addEventListener('pointermove',e=>{
    if(!portrait)return;
    const r=e.currentTarget.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    portrait.style.transform='rotateY('+(-x*13)+'deg) rotateX('+(y*7)+'deg) translateZ(12px)';
  });
  document.querySelector('.visual')?.addEventListener('pointerleave',()=>{
    if(portrait)portrait.style.transform='';
  });
}
