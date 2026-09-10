const DB='buildspace-real-assets-v1';
const STORE='assets';
let urls=new Map();
function openDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE,{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function listAssets(){try{const db=await openDB();return await new Promise((resolve,reject)=>{const q=db.transaction(STORE,'readonly').objectStore(STORE).getAll();q.onsuccess=()=>resolve(q.result||[]);q.onerror=()=>reject(q.error)})}catch{return[]}}
export async function putAssets(files){const db=await openDB();const out=[];for(const file of files){const id='real-'+crypto.randomUUID();const type=file.type||guess(file.name);const rec={id,name:file.name.replace(/\.[^.]+$/,''),fileName:file.name,type,size:file.size,kind:type.includes('model')||/\.(glb|gltf)$/i.test(file.name)?'model':'image',blob:file,createdAt:Date.now()};await new Promise((resolve,reject)=>{const q=db.transaction(STORE,'readwrite').objectStore(STORE).put(rec);q.onsuccess=resolve;q.onerror=()=>reject(q.error)});out.push(rec)}await refreshUrls();return out}
function guess(n){if(/\.glb$/i.test(n))return'model/gltf-binary';if(/\.gltf$/i.test(n))return'model/gltf+json';if(/\.png$/i.test(n))return'image/png';if(/\.webp$/i.test(n))return'image/webp';return'image/jpeg'}
export async function removeAsset(id){const db=await openDB();await new Promise((resolve,reject)=>{const q=db.transaction(STORE,'readwrite').objectStore(STORE).delete(id);q.onsuccess=resolve;q.onerror=()=>reject(q.error)});if(urls.has(id))URL.revokeObjectURL(urls.get(id));urls.delete(id)}
export async function refreshUrls(){const all=await listAssets();for(const [id,url] of urls)URL.revokeObjectURL(url);urls=new Map();for(const a of all)urls.set(a.id,URL.createObjectURL(a.blob));return all}
export function assetUrl(id){return urls.get(id)||''}
export function assetCount(){return urls.size}
