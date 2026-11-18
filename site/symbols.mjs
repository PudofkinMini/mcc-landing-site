import {curve, strands} from '../public/ribbon-shape.mjs';

// Original marks use a common 24-unit grid. Visible text accompanies each mark.
const strokes={
  accounts:'<path d="M3 7h6l2 2h10v11H3z"/><path d="M6 5h13v4m-12 4h5m-5 3h9"/>',
  'standing-orders':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v5m10-5v5M3 10h18m-14 4h4m3 0h3m-10 3h4"/>',
  pricing:'<path d="m3 12 9-9h7l2 2v7l-9 9z"/><circle cx="16.5" cy="7.5" r="1.2"/><path d="m7.5 13.5 3 3"/>',
  payments:'<path d="M5 3h14v18l-3-1.5-4 1.5-4-1.5L5 21zM8 7h8m-8 4h8m-8 5h4"/>',
  ai:'<path d="M3 7h5l4 5H7m5 0 4-5h5M3 17h5l4-5 4 5h5"/><circle cx="12" cy="12" r="2.2"/>',
  reporting:'<path d="M3 3v17h18M7 16v-4m5 4V7m5 9v-6"/>',
  finance:'<path d="M3 8h12m-3-3 3 3-3 3m9 5H9m3-3-3 3 3 3"/><path d="M3 13v7h3m15-9V4h-3"/>',
  soil:'<path d="m7 4 3 4h4l3-4zm3 4c-2 3-6 6-6 10 0 2 3 3 8 3s8-1 8-3c0-4-4-7-6-10"/><path d="M9 15h6"/>',
  rfid:'<rect x="2.5" y="8" width="8" height="10" rx="2"/><path d="M13 7a8 8 0 0 1 0 12m3-15a12 12 0 0 1 0 18m-9-10v3"/>',
  garments:'<path d="M9 6a3 3 0 1 1 4 3c-1 .4-1 1-1 2l8.5 5.3c1 .6.7 2.7-.8 2.7H4.3c-1.5 0-1.8-2.1-.8-2.7L12 11"/>',
  loading:'<path d="m3 8 9-5 9 5-9 5zM3 8v8l9 5 9-5V8m-9 5v8m-4-15 9 5"/>',
  shortages:'<path d="m12 3 9.5 17h-19zM12 9v5m0 3v.5"/>',
  equipment:'<path d="M2 5h20M5 5v5m14-5v5M3 10h18M6 10v6l3 3h6l3-3v-6"/><path d="M9 14h6"/>',
  forms:'<path d="M7 8V3h10v5M7 17H3V8h18v9h-4M7 14h10v7H7zM17 11h1"/>',
  routes:'<circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/><path d="M5 17v-3a3 3 0 0 1 3-3h8a3 3 0 0 0 3-3V7"/>',
  dispatch:'<path d="m3 15 17-11-7 17-2.5-8z"/><path d="m10.5 13 6-6"/>',
  mobile:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 5h6m-5 14h4m-6-7 3 3 5-6"/>',
  proof:'<path d="M3 18c4-8 5-14 7-13 2 1-3 9-1 11 1 1 3-3 4-3s0 4 4 1l3-2M3 21h18"/>',
  custody:'<path d="m9 15-2 2a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2 8a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-2 2M8 16l8-8"/>',
  settlement:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  'customer-ordering':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 6.5h.5m2 0H9m3 7h5m-2-2 2 2-2 2"/>',
  laundry:'<path d="m2 9 13-6 7 4-13 6zM2 13l7 4 13-6M2 17l7 4 13-6"/>',
  records:'<path d="M3 5h18v5H3zM5 10h14v10H5zM10 13h4"/>'
};
export function symbol(id){return '<svg class="symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+strokes[id]+'</svg>';}

function artwork(view,body,cls){return '<svg aria-hidden="true" focusable="false" class="art '+cls+'" viewBox="'+view+'" fill="none" xmlns="http://www.w3.org/2000/svg">'+body+'</svg>';}

export function ribbon(){
  const threads = strands.map(({points}, index) => {
    const stringNumber = index + 1;
    const brass = stringNumber >= 6 && stringNumber <= 9;
    const metal = brass ? 'optic-brass' : 'optic-steel';
    const opacity = brass ? 1 : .67 + .27 * Math.cos(index * 2.4);
    return `<path pathLength="1" stroke="url(#${metal})" stroke-width="${brass ? 1.85 : 1.35}" opacity="${opacity.toFixed(2)}" d="${curve(points)}"/>`;
  }).join('');
  return `<svg class="art ribbon" aria-hidden="true" focusable="false" viewBox="-540 0 1160 395" preserveAspectRatio="none" fill="none">
    <defs>
      <linearGradient id="optic-steel" gradientUnits="userSpaceOnUse" x1="-250" y1="370" x2="570" y2="70">
        <stop stop-color="#747d77"/><stop offset=".58" stop-color="#a7aea9"/><stop offset=".78" stop-color="#eef0dc"/><stop offset="1" stop-color="#9aa298"/>
      </linearGradient>
      <linearGradient id="optic-brass" gradientUnits="userSpaceOnUse" x1="-250" y1="370" x2="570" y2="70">
        <stop stop-color="#997b3f"/><stop offset=".54" stop-color="#efb830"/><stop offset=".76" stop-color="#ffdc61"/><stop offset="1" stop-color="#e1aa27"/>
      </linearGradient>
    </defs>${threads}
  </svg>`;
}

// Four channels meet on a single plane, echoing the lines in the Optic cover.
export function systemArt(){
  const tracks=Array.from({length:9},(_,i)=>{
    const y=19+i*4;
    return '<path d="M-12 '+y+' H72 Q90 '+y+' 107 '+(y+9)+' L208 '+(y+57)+'" />';
  }).join('');
  const plates=[60,40,20,0].map((offset,i)=>{
    const top=i===3;
    return `<g transform="translate(0 ${offset})"><path d="M118 106 232 51 348 106 232 163Z" fill="${top?'#ffcc00':'#292d28'}" stroke="${top?'#d5aa00':'#92978a'}"/><path d="M118 106v7l114 56 116-56v-7l-116 57z" fill="${top?'#cc9d00':'#10130f'}" stroke="${top?'#d5aa00':'#697061'}"/></g>`;
  }).join('');
  return artwork('0 0 460 270',`<g stroke="#7b8174" stroke-width="1.2">${tracks}<g transform="rotate(180 234 142)">${tracks}</g></g>${plates}<g transform="matrix(1 .48 -1 .48 232 68)" fill="none" stroke="#252921" stroke-width="4"><path d="M5 14h28v15h32v17h21M5 29h17v13h31v17h33M5 44h7v13h29v16h45"/></g>`,'system-art');
}
