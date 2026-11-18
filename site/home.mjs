import {ribbon, symbol} from './symbols.mjs';
import {groups, industries, services} from './content.mjs';

export const path = key => key ? `/${key}/` : '/';
export const arrow='<span class="arrow" aria-hidden="true">↗</span>';
export function action(href,label,kind='button'){
  return '<a class="'+kind+'" href="'+href+'">'+label+arrow+'</a>';
}
function hero(){
  const product=action(path('products'),'Explore MLINX');
  return `<section class="hero optic-hero"><div class="optic-art">${ribbon()}</div><script type="module" src="/ribbon-motion.mjs"></script><div class="optic-text"><h1>Route accounting <br>for commercial <br><em>laundries.</em></h1><p>MLINX brings the modern laundry together in one system, connecting customer accounts, plant production, route delivery and billing.</p>${product}</div></section>`;
}

function featureList(){
  return `<section class="feature-section" id="features"><div class="section-heading"><h2>MLINX features</h2>${action(path('products'),'Product details','text-link')}</div><div class="feature-list">${groups.map(g=>`<div class="feature-group"><h3>${g.title}</h3><ul>${g.items.map(([key,name])=>'<li><a href="'+path('products')+'#'+key+'">'+symbol(key)+'<span>'+name+'</span></a></li>').join('')}</ul></div>`).join('')}</div></section>`;
}

export function home(){
  const sectors=industries.map(i=>`<a class="industry-card" href="${path(i.key)}">${symbol(i.key==='laundry'?'laundry':'records')}<h3>${i.title} ${arrow}</h3><p>${i.intro}</p></a>`).join('');
  const support=services.map(([key,title])=>action(path('services')+'#'+key,title,'service-link')).join('');
  return hero()+featureList()+`<section class="home-industries"><div class="section-heading"><h2>Industries</h2>${action(path('industries'),'Industry solutions','text-link')}</div><div class="industry-grid">${sectors}</div></section><section class="home-services"><div class="service-intro"><h2>Services</h2><p>Work directly with MCC to configure MLINX, connect your equipment and support the people using it.</p></div><div class="service-list">${support}</div></section>`;
}
