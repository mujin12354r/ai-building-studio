export const STYLES=['Modern','Japanese','Scandinavian','Industrial','Luxury','Classic','Natural','Cyberpunk'];
export const CATEGORIES=['Living','Bedroom','Dining','Kitchen','Office','Storage','Bathroom','Decor','Lighting','Feature'];
export const CATALOG=[
['sofa','3-Seat Sofa','Living','▰',180,80,1290,['Modern','Japanese','Scandinavian','Luxury'],'#d7c9b8'],
['sectional','L-Sectional','Living','▰',220,150,2490,['Modern','Scandinavian','Luxury'],'#c9c0b5'],
['coffee','Coffee Table','Living','◯',110,70,490,['Modern','Japanese','Classic'],'#a97952'],
['tv','Media Console','Living','▭',150,38,890,['Modern','Industrial','Classic'],'#2d3033'],
['bed','Double Bed','Bedroom','▱',170,215,1890,['Modern','Japanese','Scandinavian','Luxury'],'#ddd3c8'],
['singlebed','Single Bed','Bedroom','▱',110,205,990,['Modern','Japanese','Natural'],'#ddd3c8'],
['wardrobe','Wardrobe','Bedroom','▤',120,60,1390,['Modern','Classic','Luxury'],'#8d725d'],
['nightstand','Nightstand','Bedroom','▥',45,45,290,['Modern','Japanese','Classic'],'#a88667'],
['dining','Dining Table','Dining','○',150,90,1190,['Modern','Japanese','Scandinavian'],'#a97e5d'],
['chair','Dining Chair','Dining','◇',45,45,220,['Modern','Scandinavian','Classic'],'#b8aa98'],
['desk','Work Desk','Office','▬',140,65,790,['Modern','Industrial','Natural'],'#9f8060'],
['officechair','Office Chair','Office','◉',55,55,420,['Modern','Industrial'],'#313538'],
['bookshelf','Bookshelf','Storage','▥',100,35,690,['Modern','Industrial','Natural'],'#9a765b'],
['plant','Indoor Plant','Decor','✿',45,45,95,['Natural','Modern','Japanese'],'#61745a'],
['lamp','Floor Lamp','Lighting','♢',40,40,180,['Modern','Luxury','Classic'],'#c2a264'],
['rug','Area Rug','Decor','▧',190,130,450,['Modern','Japanese','Scandinavian','Natural'],'#b7aa98'],
['island','Kitchen Island','Kitchen','▰',180,75,2190,['Modern','Industrial','Natural'],'#b0a18f'],
['counter','Kitchen Counter','Kitchen','▬',220,55,2490,['Modern','Industrial','Classic'],'#b9b0a1'],
['sink','Vanity Sink','Bathroom','◒',90,50,790,['Modern','Luxury','Classic'],'#e3dfd6'],
['bathtub','Freestanding Bath','Bathroom','◡',150,75,2290,['Modern','Luxury','Japanese'],'#e7e2d9'],
['toilet','Toilet','Bathroom','◉',55,70,550,['Modern','Classic'],'#eeeae2'],
['fireplace','Fireplace','Feature','▤',100,30,3100,['Classic','Luxury','Modern'],'#56514b']
].map(([id,name,category,icon,w,h,price,variants,color])=>({id,name,category,icon,w,h,price,variants,color}));
export const ROOM_COLORS=['#e9dfd0','#dfe6da','#e1e7ed','#e9e3ef','#e6ded1','#dfe5df'];
export const ROOM_PRESETS=[
['Living Room',390,240,'Modern'],['Bedroom',340,300,'Japanese'],['Kitchen',330,220,'Scandinavian'],['Bathroom',260,200,'Modern'],['Office',300,230,'Industrial'],['Dining Room',350,230,'Classic']
];
export const BUILDINGS=[
['City Apartment','3 levels · 98 m²','Modern'],['Family House','2 levels · 168 m²','Scandinavian'],['Compact Studio','1 level · 42 m²','Japanese'],['Design Office','2 levels · 130 m²','Industrial']
];
export function getCatalog(id){return CATALOG.find(x=>x.id===id)}
