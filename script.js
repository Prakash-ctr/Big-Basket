console.log("welcome to big basket");

let customername = "Nolen";
let giftvoucheramt = 1000;

console.log(typeof giftvoucheramt);

function calcgiftvoucherpoints(amount) {
    let voucherpercentage;
    let voucherpoints=0;
    if (amount>=100 && points<=500) {
        voucherpoints=amount+0.05;
    } else if (amount>=501 && points<=1000) {
        voucherpoints=amount+0.1;
    } else if (amount>=1001 && points<=2000) {
        voucherpoints=amount+0.15;
    } else{
        voucherpoints=amount + 0.2;
   }
   return voucherpoints;
}
if (giftvoucheramt >= 100) {
    let Voucher =calcgiftvoucherpoints(giftvoucheramt);
    console.log(`hello ${customername}!you've Earned ${Voucher} Points!`)
} else {
  console.log("Thankyou for visiting us!");
}
