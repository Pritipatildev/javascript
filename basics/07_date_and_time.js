//dates

let myDate=new Date()
console.log(myDate.toString());//Sat May 30 2026 12:00:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Sat May 30 2026
console.log(myDate.toTimeString());//12:00:00 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());//30/5/2026, 12:00:00 pm
console.log(myDate.getFullYear());//2026
console.log(myDate.getMonth());//4 (May)
console.log(myDate.getDate());//30



console.log(typeof myDate);
//(yera,month,date,hours,minutes,seconds,milliseconds)

let myCreatedDate=new Date(2026,5,30,4,24,20,30)//months start from 0 to 11
console.log(myCreatedDate.toLocaleString());//30/6/2026, 4:24:20 am

let myCreatedDate2=new Date("01-24-2026")
console.log(myCreatedDate2.toLocaleString());//24/1/2026, 12:00:00 am

let myTimeStamp=Date.now()
console.log(myTimeStamp);//1700000000000 (milliseconds since January 1, 1970)