const KEY='buildspace_german_housing_v2';
export function fresh(){return {version:2,name:'Neues Wohnprojekt',client:'Privat',address:'',budget:150000,notes:'',level:0,rooms:[],items:[],updatedAt:new Date().toISOString()}}
export function load(){try{return JSON.parse(localStorage.getItem(KEY))||fresh()}catch{return fresh()}}
export function save(p){try{localStorage.setItem(KEY,JSON.stringify(p));return true}catch{return false}}
export function exportFile(p){const blob=new Blob([JSON.stringify(p,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(p.name||'buildspace-project').replace(/[^a-z0-9äöüß_-]+/gi,'-')+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
