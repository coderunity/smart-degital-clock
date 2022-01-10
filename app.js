
const degital_clock = document.querySelector('.degital_clock');
const date_item = document.querySelector('.date_item');
const day_item = document.querySelector('.day_item');
const hours = document.querySelector('#h');
const munite = document.querySelector('#m');
const scound = document.querySelector('#s');
const ampms = document.querySelector('#ampm');
const days = document.querySelector('#day');
const dd = document.querySelector('#date');
const mm = document.querySelector('#month');
const yy = document.querySelector('#year');


setInterval(function(){

let date = new Date();

let h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
let hh = h == 0 ? 12 : h;
let m = date.getMinutes();
let s = date.getSeconds();
let d = date.getDay();
let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();

let ampm = h >= 12 ? 'PM' : 'AM';

hours.innerHTML = minutes(hh);
munite.innerHTML = minutes(m);
scound.innerHTML = minutes(s);
ampms.innerHTML = ampm ;


dd.innerHTML = `${minutes(day)} / `
mm.innerHTML = `${minutes(month)} / `
yy.innerHTML = `${minutes(year)}`

days.innerHTML = dayfunsion(d)




},1000);