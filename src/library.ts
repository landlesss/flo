export type Category = 'All'|'Symptoms'|'Pain & care'|'Diagnosis'|'Cycle';
export type Article = {id:string;title:string;description:string;category:Category;url:string;keywords:string[];color:string};
export const articles:Article[]=[
{id:'endo',title:'Understanding endometriosis',description:'An overview of the condition, symptoms, diagnosis and treatment',category:'Symptoms',url:'https://flo.health/menstrual-cycle/health/symptoms-and-diseases/what-endometriosis-is',keywords:['endometriosis','эндо','эндометриоз','symptoms','симптом','diagnosis','диагноз'],color:'rose'},
{id:'pain',title:'Endometriosis pain management',description:'Explore Flo’s article about pain management and conversations with your health care provider',category:'Pain & care',url:'https://flo.health/menstrual-cycle/health/symptoms-and-diseases/endometriosis-pain-management',keywords:['endometriosis','эндометриоз','эндо','pain','боль','болит','care','помощь'],color:'lilac'},
{id:'treatment',title:'Endometriosis treatment options',description:'Read about the treatment options discussed in Flo’s guide',category:'Pain & care',url:'https://flo.health/menstrual-cycle/health/symptoms-and-diseases/endometriosis-treatment',keywords:['endometriosis','эндометриоз','эндо','treatment','лечение','pain','боль'],color:'peach'},
{id:'diagnosis',title:'Endometriosis: diagnosis and treatment challenges',description:'A closer look at why diagnosis and treatment can be complex',category:'Diagnosis',url:'https://flo.health/menstrual-cycle/health/symptoms-and-diseases/challenges-in-treating-and-diagnosing-endometriosis',keywords:['endometriosis','эндометриоз','эндо','diagnosis','диагностика','диагноз'],color:'mint'},
{id:'late',title:'Why is my period late?',description:'Flo’s guide to possible reasons for a delayed period',category:'Cycle',url:'https://flo.health/menstrual-cycle/health/period/reasons-for-a-delayed-period',keywords:['period','late','delayed','cycle','задержка','цикл','месячные'],color:'peach'},
{id:'ovulation',title:'Endometriosis and ovulation pain',description:'Read Flo’s article on the connection between endometriosis and ovulation pain',category:'Symptoms',url:'https://flo.health/menstrual-cycle/health/symptoms-and-diseases/endometriosis-ovulation-pain',keywords:['endometriosis','эндометриоз','эндо','ovulation','овуляция','pain','боль'],color:'lilac'}
];
export const categories:Category[]=['All','Symptoms','Pain & care','Diagnosis','Cycle'];
export function searchArticles(query:string,category:Category='All'){
 const tokens=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
 return articles.filter(a=>(category==='All'||category===a.category)&&tokens.every(t=>[a.title,a.description,...a.keywords].join(' ').toLocaleLowerCase().includes(t)));
}
