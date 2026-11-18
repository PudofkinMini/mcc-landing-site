import {articles, connected, operations, groups, industries, nav, services, titles} from './content.mjs';
import {home, path, action, arrow} from './home.mjs';
import {symbol, systemArt} from './symbols.mjs';

const logo='<img class="logo" width="90" height="23" src="/assets/mcc.svg" alt="MCC">';
function doc(title,body){
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | MCC</title><link rel="icon" href="/assets/mcc.svg"><link rel="stylesheet" href="/site.css"></head><body class="optic">${body}</body></html>`;
}
function header(key){
  const links=nav.map(([slug,label])=>`<a ${key===slug?'aria-current="page"':''} href="${path(slug)}">${label}</a>`).join('');
  return `<header class="main-header"><a class="brand" href="${path()}" aria-label="MCC home">${logo}</a><nav class="desktop-nav" aria-label="Main">${links}</nav><div class="header-actions">${action(path('contact'),'Contact MCC','contact-link')}<details class="mobile-nav"><summary aria-label="Navigation menu"><span aria-hidden="true">☰</span></summary><nav aria-label="Mobile">${links}</nav></details></div></header>`;
}
function footer(){
  return `<footer class="footer"><div class="foot-id">${logo}<p>Mobile Computing Corp.<br>Mississauga, Ontario</p></div><nav aria-label="Footer">${[...nav,['contact','Contact']].map(([k,t])=>'<a href="'+path(k)+'">'+t+'</a>').join('')}</nav></footer>`;
}
function detailHead(title,copy){
  return `<a class="back" href="${path()}">← Home</a><div class="detail-head"><h1>${title}</h1><p>${copy}</p></div>`;
}
function systemCover(){
  const entryPoints=[operations,...connected];
  const icons=['dispatch','customer-ordering','mobile','finance'];
  const cards=entryPoints.map(([key,title,copy],index)=>`
    <a class="system-card" href="${path(key)}">
      <span class="card-symbol">${symbol(icons[index])}</span>
      <h3>${title} ${arrow}</h3><p>${copy}</p>
    </a>`).join('');
  return `<header class="system-cover">
    <div class="system-copy"><h1>MLINX</h1>
      <h2>The route accounting system for commercial laundries.</h2>
      <p>Manage the accounts, production loads and delivery routes behind every invoice. MCC configures the system around your contracts, equipment and teams.</p>
      ${action('#system-apps','Explore the system','text-link')}
    </div><div class="system-visual">${systemArt()}</div>
  </header><section id="system-apps" class="system-apps"><h2>Inside MLINX</h2><div>${cards}</div></section>`;
}
function product(){
  return systemCover()+groups.map(g=>`<section class="product-group"><h2>${g.title}</h2><dl>${g.items.map(([key,title,copy])=>`<div id="${key}"><dt>${symbol(key)}${title}</dt><dd>${copy}</dd></div>`).join('')}</dl></section>`).join('');
}
function detail(key){
  if(key==='products')return product();
  if(key==='industries')return detailHead('Industries','MCC develops MLINX around the service, equipment and customer records each industry requires.')+
    '<div class="sector-list">'+industries.map(i=>`<a href="${path(i.key)}">${symbol(i.key==='laundry'?'laundry':'records')}<div><h2>${i.title}</h2><p>${i.intro}</p></div>${arrow}</a>`).join('')+'</div>';
  if(key==='services')return detailHead('Services','MCC works with your team from the initial workflow review through deployment, training and ongoing support.')+
    '<dl class="list-detail">'+services.map(([anchor,title,copy])=>'<div id="'+anchor+'"><dt>'+title+'</dt><dd>'+copy+'</dd></div>').join('')+'</dl>'+action(path('contact'),'Talk to MCC');
  if(key==='contact')return detailHead('Contact MCC','Discuss MLINX, an existing installation or an integration with your team’s software and equipment.')+
    '<address class="contacts"><div><h2>Email</h2><!--email_off--><a href="mailto:MCCMarketing@mobilecom.com">MCCMarketing@mobilecom.com</a><!--/email_off--></div><div><h2>Phone</h2><a href="tel:+18003928651">1 800 392 8651</a></div><div><h2>Office</h2><p>Mississauga, Ontario, Canada</p></div></address>';
  const item=articles[key];
  return detailHead(item.title,item.intro)+'<dl class="list-detail">'+item.sections.map(([t,p],i)=>'<div id="section-'+(i+1)+'"><dt>'+t+'</dt><dd>'+p+'</dd></div>').join('')+'</dl>'+
    action(path(key==='about'||key==='integrations'?'contact':'services'),key==='about'||key==='integrations'?'Talk to MCC':'Implementation & support');
}
export function page(key){
  const inner=key?'<article class="detail">'+detail(key)+'</article>':home();
  return doc(key?titles[key]:'MLINX route accounting for commercial laundries',`<a class="skip" href="#main">Skip to content</a>${header(key)}<main id="main">${inner}</main>${footer()}`);
}
