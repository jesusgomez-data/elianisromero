const PHOTO_SRC = './assets/img/photo.png';

window.addEventListener('DOMContentLoaded', () => {
  const heroPhoto = document.getElementById('heroPhoto');
  const aboutPhoto = document.getElementById('aboutPhoto');
  if (heroPhoto) heroPhoto.src = PHOTO_SRC;
  if (aboutPhoto) aboutPhoto.src = PHOTO_SRC;
});

const c=document.getElementById('cur'),cr=document.getElementById('cur-r');
document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';cr.style.left=e.clientX+'px';cr.style.top=e.clientY+'px';});
document.querySelectorAll('a,button,.s-card,.tip-card,.tc,.mod-opt,.fq').forEach(el=>{
  el.addEventListener('mouseenter',()=>{c.style.transform='translate(-50%,-50%) scale(2)';cr.style.transform='translate(-50%,-50%) scale(1.5)';});
  el.addEventListener('mouseleave',()=>{c.style.transform='translate(-50%,-50%) scale(1)';cr.style.transform='translate(-50%,-50%) scale(1)';});
});
const nav=document.getElementById('nav'),pb=document.getElementById('prog'),stt=document.getElementById('stt');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('on',window.scrollY>50);
  pb.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
  stt.classList.toggle('on',window.scrollY>400);
});
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');}),{threshold:.1});
document.querySelectorAll('.rev').forEach(r=>obs.observe(r));
function selMod(el){document.querySelectorAll('.mod-opt').forEach(o=>o.classList.remove('on'));el.classList.add('on');}
function togFaq(el){const a=el.nextElementSibling,i=el.querySelector('.fi-ico');a.classList.toggle('open');i.classList.toggle('open');}
function showToast(m){const t=document.getElementById('toast');document.getElementById('tMsg').textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),3500);}
function doBook(){showToast('✓ ¡Solicitud enviada! Elianis te confirma en breve');}
function doContact(){showToast('✓ Mensaje recibido. Te respondo muy pronto');}
const R={
  'hola':'¡Hola! 😊 ¿En qué te puedo orientar? Puedo ayudarte con servicios, horarios, costos o agendar una cita con Elianis.',
  'precio':'Para conocer los precios escríbele a Elianis: 📱 +34 633 137 364 o ✉️ romeroelianis149@gmail.com. Hay precio especial para primera consulta.',
  'costo':'Para conocer los precios, escribe a Elianis por WhatsApp: +34 633 137 364. Hay un precio especial para la primera consulta.',
  'horario':'Elianis atiende de lunes a sábado. Entre semana de 9h a 20h y sábados de 9h a 13h (hora Madrid). ¿Desde qué país me escribes para calcular tu zona horaria? 🌍',
  'online':'¡Sí! Elianis atiende online para cualquier país del mundo. Solo necesitas internet y un espacio privado. 💻',
  'venezuela':'¡Por supuesto! Elianis es venezolana y atiende a muchos pacientes de Venezuela online. 🇻🇪',
  'españa':'Elianis tiene consultorio presencial en Madrid y también atiende online en toda España. 🇪🇸',
  'cita':'¡Perfecto! Puedes usar el formulario en la web, escribir al WhatsApp +34 633 137 364 o al email romeroelianis149@gmail.com. 📅',
  'ansiedad':'La ansiedad es una de las áreas de especialidad de Elianis. Con el enfoque adecuado se obtienen mejoras muy significativas. ¿Te gustaría agendar? 🌿',
  'whatsapp':'Puedes escribirle directamente a Elianis por WhatsApp al +34 633 137 364. 📱',
};
function getR(m){const l=m.toLowerCase();for(const[k,v]of Object.entries(R))if(l.includes(k))return v;return'Gracias por tu mensaje 😊 Para más información escríbele a Elianis: WhatsApp +34 633 137 364 o romeroelianis149@gmail.com';}
function sendMsg(){
  const inp=document.getElementById('chIn'),m=inp.value.trim();if(!m)return;
  const box=document.getElementById('chMsgs'),t=new Date().toLocaleTimeString('es',{hour:'2-digit',minute:'2-digit'});
  box.innerHTML+=`<div class="msg usr"><div class="mb">${m}</div><div class="mt">${t}</div></div>`;
  box.innerHTML+=`<div class="msg bot"><div class="mb typing"><span></span><span></span><span></span></div></div>`;
  box.scrollTop=box.scrollHeight;inp.value='';
  setTimeout(()=>{box.querySelectorAll('.typing')[box.querySelectorAll('.typing').length-1]?.closest('.msg')?.remove();box.innerHTML+=`<div class="msg bot"><div class="mb">${getR(m)}</div><div class="mt">${t}</div></div>`;box.scrollTop=box.scrollHeight;},1300);
}
function chKey(e){if(e.key==='Enter')sendMsg();}

function toggleVPlay(){const v=document.getElementById('v-player'),b=document.getElementById('v-play-btn');if(v.paused){v.play();b.textContent='⏸';}else{v.pause();b.textContent='▶';}}
function toggleVMute(){const v=document.getElementById('v-player'),b=document.getElementById('v-mute-btn');v.muted=!v.muted;b.textContent=v.muted?'🔇':'🔊';}

// Global assignments for functions used in HTML
window.selMod = selMod;
window.togFaq = togFaq;
window.doBook = doBook;
window.doContact = doContact;
window.sendMsg = sendMsg;
window.chKey = chKey;
window.toggleVPlay = toggleVPlay;
window.toggleVMute = toggleVMute;