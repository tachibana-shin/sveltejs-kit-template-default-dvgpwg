const o=!1;async function s(){const e=await fetch("https://api.github.com/repos/Anime-Vsub/animevsub-app/releases").then(t=>t.json());return{head:{title:"Nh\u1EADt k\xFD thay \u0111\u1ED5i - AnimeVsub",description:"Nh\u1EADt k\xFD thay \u0111\u1ED5i"},name:"AnimeVsub",changelogs:e}}const u=Object.freeze(Object.defineProperty({__proto__:null,ssr:!1,load:s},Symbol.toStringTag,{value:"Module"}));export{u as _,s as l,o as s};