import {getCatalog,ROOM_COLORS} from './catalog.js';
export const snap=(n,g=10)=>Math.round(n/g)*g;
export const cost=p=>p.items.filter(i=>i.level===p.level).reduce((s,i)=>s+i.price,0);
export function addItem(p,catalogId,{x=280,y=240,level=p.level,roomId=null,variant=null}={}){
 const c=getCatalog(catalogId);if(!c)return p;const room=p.rooms.find(r=>r.id===roomId)||p.rooms.find(r=>r.level===level);const px=x??(room?room.x+room.w/2-c.w/2:280),py=y??(room?room.y+room.h/2-c.h/2:240);
 const item={id:crypto.randomUUID(),catalogId:c.id,name:c.name,kind:'furniture',x:snap(px),y:snap(py),w:c.w,h:c.h,rotation:0,scale:1,level,variant:variant||c.variants[0],price:c.price,color:c.color,z:20};
 return {...p,items:[...p.items,item],updatedAt:new Date().toISOString()};
}
export function addRoom(p,name,x,y,w,h,style='Modern',level=p.level){return {...p,rooms:[...p.rooms,{id:crypto.randomUUID(),name,x,y,w,h,level,style,color:ROOM_COLORS[p.rooms.length%ROOM_COLORS.length]}]};}
export function concept(p,prompt){const q=prompt.toLowerCase();let style='Modern';if(/japan|zen/.test(q))style='Japanese';else if(/scandi|nordic/.test(q))style='Scandinavian';else if(/industrial|loft/.test(q))style='Industrial';else if(/luxury|premium/.test(q))style='Luxury';
 let n={...p,rooms:p.rooms.map(r=>r.level===p.level?{...r,style}:r),items:p.items.filter(i=>i.level!==p.level)};const room=n.rooms.find(r=>r.level===p.level);
 let ids=['sofa','coffee','tv','rug','plant','lamp'];if(/bedroom|sleep/.test(q))ids=['bed','nightstand','nightstand','wardrobe','lamp'];if(/kitchen/.test(q))ids=['counter','island','sink','plant'];if(/office|work/.test(q))ids=['desk','officechair','bookshelf','lamp'];
 ids.forEach(id=>{n=addItem(n,id,{roomId:room?.id,level:p.level,variant:style})});return n;
}
export function projectTemplate(p,type){let n={...p,rooms:[],items:[]};const layouts={
'City Apartment':[['Living Room',80,80,450,300,'Modern'],['Kitchen',560,80,320,220,'Scandinavian'],['Bedroom',560,330,320,280,'Japanese'],['Office',80,410,320,200,'Industrial']],
'Family House':[['Living Room',70,70,500,340,'Scandinavian'],['Kitchen',600,70,350,240,'Modern'],['Dining Room',70,440,350,220,'Classic'],['Bedroom',450,340,300,260,'Natural']],
'Compact Studio':[['Studio Living',100,100,700,420,'Japanese']],
'Design Office':[['Open Office',70,80,780,300,'Industrial'],['Meeting',70,420,360,210,'Modern'],['Lounge',480,420,360,210,'Luxury']]
};(layouts[type]||layouts['City Apartment']).forEach(r=>{n=addRoom(n,...r,p.level)});return n;
}
