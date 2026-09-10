const KEY='buildspace-studio-project-v2';
const uid=()=>crypto.randomUUID();
export function seed(){return {id:uid(),name:'Berlin Family Apartment',client:'Demo Client',address:'Sample Property · Berlin',level:0,budget:25000,notes:'Residential concept project. Explore furniture, room layouts, circulation and budget.',units:'cm',rooms:[
 {id:uid(),name:'Living & Dining',x:85,y:80,w:520,h:350,level:0,style:'Modern',color:'#e9dfd0'},
 {id:uid(),name:'Kitchen',x:640,y:80,w:315,h:215,level:0,style:'Scandinavian',color:'#dfe6da'},
 {id:uid(),name:'Bedroom',x:640,y:325,w:315,h:300,level:0,style:'Japanese',color:'#e1e7ed'}
],items:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}};
export function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'null');return x&&x.rooms?x:seed()}catch{return seed()}}
export function save(p){localStorage.setItem(KEY,JSON.stringify({...p,updatedAt:new Date().toISOString()}))}
export function clone(p){return JSON.parse(JSON.stringify(p))}
export function exportFile(p){const blob=new Blob([JSON.stringify(p,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${p.name.replace(/[^a-z0-9]+/gi,'-').toLowerCase()}.buildspace.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
